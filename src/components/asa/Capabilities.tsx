import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const CAPABILITIES = [
  {
    num: "01",
    title: "Technical Training & Leadership Development",
    outcome: "Build stronger technical teams and more capable operational leaders.",
    body: "We develop technical and leadership capability through specialized courses, mentoring, shadowing and applied practice designed around the realities of the client's operation.",
    includes: [
      "Specialized and ATA-focused courses",
      "Advanced troubleshooting",
      "Mentoring, coaching and shadowing",
      "Supervisor and leadership development",
      "Competency assessment",
      "Post-training follow-up",
    ],
  },
  {
    num: "02",
    title: "MCC, MOC & Line Technical Operations",
    outcome: "Protect fleet availability through faster, better-controlled technical decisions.",
    body: "We reinforce technical control and line decision-making to improve troubleshooting, deferred-defect management, recovery coordination and the traceability of operational decisions.",
    includes: [
      "MCC / MOC support",
      "Defect and recurrent-defect analysis",
      "Deferred-defect and HIL follow-up",
      "MIS traceability",
      "Recovery coordination",
      "Technical-control mentoring",
    ],
  },
  {
    num: "03",
    title: "Planning, Engineering & CAMO Support",
    outcome: "Strengthen continuing airworthiness and execution capacity without losing regulatory control.",
    body: "We reinforce planning, engineering and continuing-airworthiness activities with senior expertise that operates inside the client's processes, approvals and regulatory responsibilities.",
    includes: [
      "Maintenance planning and work packages",
      "Engineering and maintenance-program support",
      "AD / SB control",
      "Reliability",
      "Technical records",
      "Embedded team capacity",
    ],
  },
  {
    num: "04",
    title: "Compliance, Audits & Asset Protection",
    outcome: "Reduce exposure and protect the technical and contractual value of the aircraft.",
    body: "We provide the technical control, evidence management and senior oversight required for audits, records, MRO events, aircraft transitions and asset-protection projects.",
    includes: [
      "Audit preparation and finding closure",
      "Corrective actions",
      "Compliance and records reviews",
      "Aircraft inspections",
      "MRO supervision",
      "Delivery, redelivery and transitions",
    ],
  },
  {
    num: "05",
    title: "Operational Strategy & Transformation",
    outcome: "Improve technical performance while the operation continues to run.",
    body: "We assess the current operation, define practical strategies and support implementation to improve performance, reduce risk and strengthen the technical organization while it continues operating.",
    includes: [
      "Operational and organization assessment",
      "Operating-model analysis",
      "Governance",
      "Maintenance and engineering strategy",
      "Cost and contract analysis",
      "Improvement roadmaps",
    ],
  },
];

export function Capabilities() {
  const [active, setActive] = useState(0);

  return (
    <section id="capabilities" className="bg-background py-28 md:py-44">
      <div className="mx-auto max-w-[1560px] px-6 md:px-12">
        <Reveal className="grid gap-10 border-t border-rule pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <p className="type-label mb-10 text-muted-foreground">
              <span className="mr-4 text-asa-blue">04</span>Capabilities
            </p>
            <h2 className="type-h2 max-w-[16ch]">Integrated expertise across the technical operation.</h2>
          </div>
          <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
            ASA combines technical development, specialized execution and operational strategy according to each
            organization's priorities, structure and regulatory context.
          </p>
        </Reveal>

        <div className="mt-20 border-t border-rule">
          {CAPABILITIES.map((item, index) => {
            const isOpen = active === index;
            return (
              <div key={item.num} className="border-b border-rule">
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="group grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-6 py-8 text-left md:gap-10 md:py-10"
                >
                  <span
                    className={`type-meta pt-2 transition-colors ${isOpen ? "text-asa-blue" : "text-muted-foreground"}`}
                  >
                    {item.num}
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`type-h3 block transition-colors ${isOpen ? "text-asa-blue" : "group-hover:text-asa-blue"}`}
                    >
                      {item.title}
                    </span>
                    <span className="type-meta mt-3 block max-w-[60ch] text-muted-foreground">{item.outcome}</span>
                  </span>
                  <span
                    className={`mt-2 h-px w-7 shrink-0 self-start bg-current transition-transform duration-500 md:w-10 ${
                      isOpen ? "rotate-0 text-asa-blue" : "rotate-90 text-muted-foreground"
                    }`}
                  />
                </button>

                <div
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="grid gap-10 pb-12 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] md:pl-[calc(2rem+2.5rem)]">
                      <p className="type-lead max-w-[48ch]">{item.body}</p>
                      <ul className="grid gap-0 self-start border-t border-rule">
                        {item.includes.map((inc) => (
                          <li key={inc} className="type-meta border-b border-rule py-3 text-muted-foreground">
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
