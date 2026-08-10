import { createClient } from "@supabase/supabase-js";
import type { LeadInput } from "./leads.functions";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";
const NOTIFY_EMAIL = "valentina@asaviationgroup.com";

type DeliveryResult = { ok: boolean; stored: boolean; notified: boolean };

async function saveToDatabase(lead: LeadInput): Promise<boolean> {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
  if (!url || !key) return false;

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { error } = await supabase.from("leads").insert({
    name: lead.name,
    company: lead.company,
    role: lead.role,
    email: lead.email,
    focus: lead.focus,
    message: lead.message,
  });
  if (error) {
    console.error(`Lead insert failed: ${error.message}`);
    return false;
  }
  return true;
}


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
  // Email notifications to NOTIFY_EMAIL are wired once the ASA sender domain is verified.
  void lead;
  void NOTIFY_EMAIL;
  return false;
}



export async function deliverLead(lead: LeadInput): Promise<DeliveryResult> {
  const [stored, notified] = await Promise.all([appendToSheet(lead), notifyByEmail(lead)]);
  if (!stored && !notified) {
    console.error("Lead received but no delivery channel is configured:", lead.email);
  }
  return { ok: true, stored, notified };
}
