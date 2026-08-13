import { defineTool } from "@lovable.dev/mcp-js";
import { ASA_SERVICES, ASA_DIFFERENTIATORS } from "@/lib/asa-content";

export default defineTool({
  name: "list_services",
  title: "List ASA services",
  description:
    "List ASA's five service lines with their statements, descriptions and key capabilities, plus the differentiators shown on the site.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      services: ASA_SERVICES,
      differentiators: ASA_DIFFERENTIATORS,
    };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
