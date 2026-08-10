import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "list_leads",
  title: "List contact leads",
  description:
    "List enquiries submitted through the ASA website contact form, newest first. Optionally filter by status (new, contacted, archived).",
  inputSchema: {
    status: z
      .enum(["new", "contacted", "archived"])
      .nullable()
      .describe("Only return leads with this status. Null returns every status."),
    limit: z.number().int().min(1).max(100).nullable().describe("Maximum number of leads to return. Defaults to 20."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ status, limit }, ctx) => {
    if (!ctx.isAuthenticated()) throw new ToolError("Not authenticated");
    const supabase = supabaseForUser(ctx);

    let query = supabase
      .from("leads")
      .select("id, created_at, name, company, role, email, focus, message, status")
      .order("created_at", { ascending: false })
      .limit(limit ?? 20);
    if (status) query = query.eq("status", status);

    const { data, error } = await query;
    if (error) throw new ToolError(error.message);

    const payload = { count: data?.length ?? 0, leads: data ?? [] };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
