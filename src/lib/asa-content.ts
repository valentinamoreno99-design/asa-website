/**
 * Structured summary of the ASA site content, exposed through the MCP server.
 * Mirrors the copy rendered on the homepage.
 */

export type AsaService = {
  number: string;
  name: string;
  statement: string;
  description: string;
  capabilities: string[];
};

export const ASA_SERVICES: AsaService[] = [
  {
    number: "01",
    name: "Airworthiness & CAMO Management",
    statement: "Supporting your airworthiness capability",
    description:
      "Senior reinforcement for planning, engineering and continuing-airworthiness activities, working inside the client's processes, approvals and regulatory responsibilities.",
    capabilities: [
      "Maintenance planning and work packages",
      "Engineering and maintenance-program support",
      "AD / SB control",
      "Reliability",
      "Technical records",
      "Embedded team capacity",
    ],
  },
  {
    number: "02",
    name: "Technical Control & Line Efficiency",
    statement: "Supporting faster decisions on the line",
    description:
      "Stronger technical control and line decision-making across troubleshooting, deferred defects, recovery coordination and the traceability of technical decisions.",
    capabilities: [
      "MCC / MOC support",
      "Defect and recurrent-defect analysis",
      "Deferred-defect and HIL follow-up",
      "MIS traceability",
      "Recovery coordination",
      "Technical-control mentoring",
    ],
  },
  {
    number: "03",
    name: "Audit, Compliance & Asset Protection",
    statement: "Protecting compliance and asset value",
    description:
      "Technical control, evidence management and senior oversight for audits, records, MRO events, aircraft transitions and asset-protection projects.",
    capabilities: [
      "Audit preparation and finding closure",
      "Corrective actions",
      "Compliance and records reviews",
      "Aircraft inspections",
      "MRO supervision",
      "Delivery, redelivery and transitions",
    ],
  },
  {
    number: "04",
    name: "Technical Development & Leadership",
    statement: "Building stronger technical judgement",
    description:
      "Technical and leadership capability built through specialized courses, mentoring, shadowing and applied practice designed around the client's operation.",
    capabilities: [
      "Specialized and ATA-focused courses",
      "Advanced troubleshooting",
      "Mentoring, coaching and shadowing",
      "Supervisor and leadership development",
      "Competency assessment",
      "Post-training follow-up",
    ],
  },
  {
    number: "05",
    name: "Operational Strategy & Transformation",
    statement: "Shaping how the operation performs",
    description:
      "Assessment of the current operation, practical strategy definition and implementation support while the organization continues operating.",
    capabilities: [
      "Operational and organization assessment",
      "Operating-model analysis",
      "Governance",
      "Maintenance and engineering strategy",
      "Cost and contract analysis",
      "Improvement roadmaps",
    ],
  },
];

export const ASA_DIFFERENTIATORS = [
  {
    title: "Operator-led",
    description: "Experience shaped by real operational environments, not only advisory frameworks.",
  },
  {
    title: "Hands-on",
    description:
      "ASA can advise, support execution or take defined technical scopes from planning through delivery.",
  },
  {
    title: "Technical depth",
    description:
      "Experience across airworthiness, maintenance planning, technical control, compliance and capability development.",
  },
  {
    title: "Capability that stays",
    description:
      "ASA strengthens internal teams and decision-making rather than creating permanent dependency.",
  },
];

export const ASA_CHALLENGES = [
  { title: "Airworthiness capacity", description: "Additional technical support when internal resources are stretched." },
  { title: "Technical decision-making", description: "Stronger analysis and faster decisions around aircraft availability." },
  { title: "Compliance & audits", description: "Better preparation, evidence and closure of technical findings." },
  {
    title: "MRO / delivery / transitions",
    description: "Technical oversight when asset condition and contractual risk matter.",
  },
  { title: "Team capability", description: "Developing people, judgement and supervision inside the organization." },
];

export const ASA_PROJECTS = [
  {
    number: "01",
    sector: "Regional A320 operator · Americas",
    title: "Operational Transformation & Technical Upskilling — Regional A320 Operator",
    scope:
      "On-site shadowing, AOG support and structural troubleshooting criteria implemented directly in line and base maintenance.",
    outcome:
      "+38% structural diagnostics, +29% troubleshooting competency, +54% supervision quality standard; reduced hangar downtime and fewer unnecessary OEM escalations.",
  },
];


export const ASA_LEADERSHIP = [
  {
    name: "Nicolás Takahashi",
    role: "Partner — Technical Operations",
    statement:
      "Responsibility for engineering, maintenance planning and technical control inside operating environments where availability and compliance are measured daily.",
    expertise: ["Continuing airworthiness", "Maintenance planning", "Technical control", "Operational governance"],
  },
  {
    name: "Jhon Luna",
    role: "Partner — Capability & Execution",
    statement:
      "Leadership across line and base maintenance, troubleshooting and technical capability development within airline and MRO organizations.",
    expertise: ["Line and base maintenance", "Advanced troubleshooting", "Training and mentoring", "MCC / MOC"],
  },
];
