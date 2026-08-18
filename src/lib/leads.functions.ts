import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  submissionId: z.string().uuid(),
  name: z.string().trim().min(1, "Name is required").max(120),
  company: z.string().trim().min(1, "Company is required").max(160),
  role: z.string().trim().max(160).optional().default(""),
  source: z.string().trim().max(80).optional().default("Website CTA"),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { deliverLead } = await import("./leads.server");
    return deliverLead(data);
  });
