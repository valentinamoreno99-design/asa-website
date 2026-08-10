import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import listProjectsTool from "./tools/list-projects";
import listLeadsTool from "./tools/list-leads";
import updateLeadStatusTool from "./tools/update-lead-status";

const projectRef = import.meta.env["VITE_SUPABASE_PROJECT_ID"] ?? "project-ref-unset";

export default defineMcp({
  name: "sapient-style-guide",
  title: "Sapient Style Guide",
  version: "0.1.0",
  instructions:
    "Tools for the ASA (Advanced Solutions Aviation) website. Use `list_services` and `list_projects` to read the published service lines, differentiators, reference projects and partner profiles. Use `list_leads` and `update_lead_status` to review and triage enquiries submitted through the contact form.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listServicesTool, listProjectsTool, listLeadsTool, updateLeadStatusTool] as unknown as Parameters<
    typeof defineMcp
  >[0]["tools"],
});
