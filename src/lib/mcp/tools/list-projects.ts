import { defineTool } from "@lovable.dev/mcp-js";
import { ASA_PROJECTS, ASA_LEADERSHIP } from "@/lib/asa-content";

export default defineTool({
  name: "list_projects",
  title: "List ASA projects and leadership",
  description:
    "List ASA's confidentiality-safe reference projects (sector, scope, outcome) together with the partner profiles behind them.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { projects: ASA_PROJECTS, leadership: ASA_LEADERSHIP };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
