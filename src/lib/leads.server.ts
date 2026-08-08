import type { LeadInput } from "./leads.functions";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";
const NOTIFY_EMAIL = "valentina@asaviationgroup.com";

type DeliveryResult = { ok: boolean; stored: boolean; notified: boolean };

async function appendToSheet(lead: LeadInput): Promise<boolean> {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const sheetsKey = process.env["GOOGLE_SHEETS_API_KEY"];
  const spreadsheetId = process.env["ASA_LEADS_SPREADSHEET_ID"];
  if (!lovableKey || !sheetsKey || !spreadsheetId) return false;

  const row = [
    new Date().toISOString(),
    lead.name,
    lead.company,
    lead.role,
    lead.email,
    lead.focus,
    lead.message,
  ];

  const res = await fetch(
    `${GATEWAY_URL}/spreadsheets/${spreadsheetId}/values/Leads!A:G:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": sheetsKey,
      },
      body: JSON.stringify({ values: [row] }),
    },
  );

  if (!res.ok) {
    const body = await res.text();
    console.error(`Google Sheets append failed [${res.status}]: ${body}`);
    return false;
  }
  return true;
}

async function notifyByEmail(lead: LeadInput): Promise<boolean> {
  try {
    // Wired once the ASA email domain is verified; template: "new-lead-notification".
    const mod: Record<string, unknown> | null = await import(
      /* @vite-ignore */ "@/lib/email-templates/send-email"
    ).catch(() => null);
    const send = mod?.["sendTemplateEmail"];
    if (typeof send !== "function") return false;
    const result = (await (
      send as (t: string, to: string, o: { templateData: Record<string, string> }) => Promise<{ sent: boolean }>
    )("new-lead-notification", NOTIFY_EMAIL, { templateData: { ...lead } })) as { sent: boolean };
    return result.sent;
  } catch (error) {
    console.error("Lead notification email failed:", error);
    return false;
  }
}


export async function deliverLead(lead: LeadInput): Promise<DeliveryResult> {
  const [stored, notified] = await Promise.all([appendToSheet(lead), notifyByEmail(lead)]);
  if (!stored && !notified) {
    console.error("Lead received but no delivery channel is configured:", lead.email);
  }
  return { ok: true, stored, notified };
}
