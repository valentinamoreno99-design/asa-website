import { createClient } from "@supabase/supabase-js";
import type { LeadInput } from "./leads.functions";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";
const SPREADSHEET_ID = "1gJV-ROKBYbCSSsUKNFUuQ4gGDsdY5GOrwWt49ygt4gQ";
const SHEET_RANGE = "Leads!A:F";

type DeliveryResult = { ok: boolean; userId: string; duplicate: boolean };

function gatewayHeaders() {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const sheetsKey = process.env["GOOGLE_SHEETS_API_KEY"];
  if (!lovableKey || !sheetsKey) {
    throw new Error("Lead storage is not configured. Please try again later.");
  }
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": sheetsKey,
  };
}

/** True when this submission id already has a row — guards against double submits. */
async function alreadyStored(submissionId: string): Promise<boolean> {
  const res = await fetch(`${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/Leads!A2:A`, {
    headers: gatewayHeaders(),
  });
  if (!res.ok) {
    const body = await res.text();
    console.error(`Google Sheets read failed [${res.status}]: ${body}`);
    throw new Error("We couldn't reach the lead sheet. Please try again.");
  }
  const json = (await res.json()) as { values?: string[][] };
  return (json.values ?? []).some((row) => row[0] === submissionId);
}

async function appendToSheet(lead: LeadInput): Promise<void> {
  const row = [
    lead.submissionId,
    new Date().toISOString(),
    lead.name,
    lead.company,
    lead.role,
    lead.source || "Website CTA",
  ];

  const res = await fetch(
    `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_RANGE}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: gatewayHeaders(),
      body: JSON.stringify({ values: [row] }),
    },
  );

  if (!res.ok) {
    const body = await res.text();
    console.error(`Google Sheets append failed [${res.status}]: ${body}`);
    throw new Error("We couldn't save your details. Please try again.");
  }
}

/** Best-effort mirror into the backend so internal tooling keeps working. */
async function mirrorToDatabase(lead: LeadInput): Promise<void> {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
  if (!url || !key) return;

  try {
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { error } = await supabase.from("leads").insert({
      name: lead.name,
      company: lead.company,
      role: lead.role,
    });
    if (error) console.error(`Lead mirror failed: ${error.message}`);
  } catch (err) {
    console.error("Lead mirror threw:", err instanceof Error ? err.message : err);
  }
}

export async function deliverLead(lead: LeadInput): Promise<DeliveryResult> {
  if (await alreadyStored(lead.submissionId)) {
    return { ok: true, userId: lead.submissionId, duplicate: true };
  }

  await appendToSheet(lead);
  await mirrorToDatabase(lead);

  return { ok: true, userId: lead.submissionId, duplicate: false };
}
