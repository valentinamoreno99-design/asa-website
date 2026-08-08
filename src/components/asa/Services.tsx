import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import mcc from "@/assets/mcc.jpg";
import engineDetail from "@/assets/engine-detail.jpg";
import planningOffice from "@/assets/planning-office.jpg";
import auditRecords from "@/assets/audit-records.jpg";
import transitionApron from "@/assets/transition-apron.jpg";

type Service = {
  num: string;
  statement: string;
  name: string;
  body: string;
  capabilities: string[];
  image: string;
};

const SERVICES: Service[] = [
  {
    num: "01",
    statement: "Supporting your airworthiness capability",
    name: "Airworthiness & CAMO Management",
    body: "Senior reinforcement for planning, engineering and continuing-airworthiness activities, working inside your processes, approvals and regulatory responsibilities.",
    capabilities: [
      "Maintenance planning and work packages",
      "Engineering and maintenance-program support",
      "AD / SB control",
      "Reliability",
      "Technical records",
      "Embedded team capacity",
    ],
    image: planningOffice,
  },
  {
    num: "02",
    statement: "Supporting faster decisions on the line",
    name: "Technical Control & Line Efficiency",
    body: "Stronger technical control and line decision-making across troubleshooting, deferred defects, recovery coordination and the traceability of technical decisions.",
    capabilities: [
      "MCC / MOC support",
      "Defect and recurrent-defect analysis",
      "Deferred-defect and HIL follow-up",
      "MIS traceability",
      "Recovery coordination",
      "Technical-control mentoring",
    ],
    image: mcc,
  },
  {
    num: "03",
    statement: "Protecting compliance and asset value",
    name: "Audit, Compliance & Asset Protection",
    body: "Technical control, evidence management and senior oversight for audits, records, MRO events, aircraft transitions and asset-protection projects.",
    capabilities: [
      "Audit preparation and finding closure",
      "Corrective actions",
      "Compliance and records reviews",
      "Aircraft inspections",
      "MRO supervision",
      "Delivery, redelivery and transitions",
    ],
    image: auditRecords,
  },
  {
    num: "04",
    statement: "Building stronger technical judgement",
    name: "Technical Development & Leadership",
    body: "Technical and leadership capability built through specialized courses, mentoring, shadowing and applied practice designed around your operation.",
    capabilities: [
      "Specialized and ATA-focused courses",
      "Advanced troubleshooting",
      "Mentoring, coaching and shadowing",
      "Supervisor and leadership development",
      "Competency assessment",
      "Post-training follow-up",
    ],
    image: engineDetail,
  },
  {
    num: "05",
    statement: "Shaping how your operation performs",
    name: "Operational Strategy & Transformation",
    body: "Assessment of the current operation, practical strategy definition and implementation support while the organization continues operating.",
    capabilities: [
      "Operational and organization assessment",
      "Operating-model analysis",
      "Governance",
      "Maintenance and engineering strategy",
      "Cost and contract analysis",
      "Improvement roadmaps",
    ],
    image: transitionApron,
  },
];

function ServiceRow({ service, onActive }: { service: Service; onActive: () => void }) {
  return (
    <Reveal
      as="li"
      className="group border-t border-rule"
      onMouseEnter={onActive}
      onFocus={onActive}
    >
      <div className="grid gap-6 py-10 md:py-14 lg:grid-cols-[6rem_minmax(0,7fr)_minmax(0,6fr)] lg:gap-10">
        <span className="type-label pt-2 text-asa-blue">{service.num}</span>

        <div>
          <p className="type-label mb-5 text-muted-foreground">{service.statement}</p>
          <h3 className="font-display text-[clamp(1.5rem,2.6vw,2.4rem)] leading-[1.08] tracking-[-0.026em] max-w-[20ch]">
            {service.name}
          </h3>
          <p className="mt-6 max-w-[52ch] text-[0.95rem] leading-relaxed text-muted-foreground">{service.body}</p>
        </div>

        <ul className="grid gap-x-8 gap-y-2 self-start sm:grid-cols-2 lg:pt-9">
          {service.capabilities.map((c) => (
            <li key={c} className="type-meta flex gap-3 text-muted-foreground">
              <span className="mt-2 h-px w-3 shrink-0 bg-asa-blue" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1560px] px-6 md:px-12">
        <Reveal className="grid gap-10 border-t border-rule pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <p className="type-label mb-10 text-muted-foreground">
              <span className="mr-4 text-asa-blue">02</span>Services
            </p>
            <h2 className="type-h2 max-w-[16ch]">How can we support you?</h2>
          </div>
          <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
            From additional technical capacity to hands-on execution, we work on the areas that keep your operation
            moving.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,8fr)_minmax(0,3fr)] lg:gap-16">
          <ul className="border-b border-rule">
            {SERVICES.map((service, i) => (
              <ServiceRow key={service.num} service={service} onActive={() => setActive(i)} />
            ))}
          </ul>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                {SERVICES.map((service, i) => (
                  <img
                    key={service.num}
                    src={service.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover grayscale-[30%] transition-opacity duration-700 ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              <p className="type-meta mt-5 text-muted-foreground">{SERVICES[active]?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
