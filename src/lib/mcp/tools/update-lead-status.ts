import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "update_lead_status",
  title: "Update lead status",
  description: "Set the follow-up status of a contact lead to new, contacted or archived.",
  inputSchema: {
    id: z.string().uuid().describe("The lead id returned by list_leads."),
    status: z.enum(["new", "contacted", "archived"]).describe("The new follow-up status."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: true, openWorldHint: false },
  handler: async ({ id, status }, ctx) => {
    if (!ctx.isAuthenticated()) throw new ToolError("Not authenticated");
    const supabase = supabaseForUser(ctx);

    const { data, error } = await supabase
      .from("leads")
      .update({ status })
      .eq("id", id)
      .select("id, name, company, status")
      .maybeSingle();
    if (error) throw new ToolError(error.message);
    if (!data) throw new ToolError(`No lead found with id ${id}`);

    return {
      content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }],
      structuredContent: { lead: data },
    };
  },
});
