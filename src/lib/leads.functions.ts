import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  company: z.string().trim().min(1, "Company is required").max(160),
  email: z.string().trim().max(255).optional().default(""),
  role: z.string().trim().max(160).optional().default(""),
  focus: z.string().trim().max(160).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { deliverLead } = await import("./leads.server");
    return deliverLead(data);
  });
