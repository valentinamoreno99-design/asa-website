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
  capabilities: string[];
  image: string;
};

const SERVICES: Service[] = [
  {
    num: "01",
    statement: "Strengthen airworthiness capacity when internal teams are stretched.",
    name: "Airworthiness & CAMO Management",
    capabilities: [
      "Maintenance planning and work packages",
      "Engineering and maintenance-program support",
      "Reliability",
      "Technical records",
      "Embedded team capacity",
    ],
    image: planningOffice,
  },
  {
    num: "02",
    statement: "Make faster, better-supported technical decisions on the line.",
    name: "Technical Control & Line Efficiency",
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
    statement: "Protect compliance and asset value through audits, MRO events and transitions.",
    name: "Audit, Compliance & Asset Protection",
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
    statement: "Build stronger technical judgement inside your own teams.",
    name: "Technical Development & Leadership",
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
    statement: "Reshape how the operation performs, without stopping it.",
    name: "Operational Strategy & Transformation",
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
    <li className="group border-t border-rule" onMouseEnter={onActive} onFocus={onActive}>
      <Reveal>
        <div className="grid gap-6 py-9 md:py-11 lg:grid-cols-[3rem_minmax(0,6fr)_minmax(0,5fr)] lg:gap-10">
          <span className="type-label pt-2 text-asa-blue">{service.num}</span>

          <div className="min-w-0">
            <p className="type-label mb-4 text-muted-foreground">What we solve</p>
            <p className="max-w-[24ch] font-display text-[clamp(1.3rem,1.9vw,1.75rem)] leading-[1.18] tracking-[-0.02em] text-asa-blue">
              {service.statement}
            </p>
            <h3 className="mt-6 max-w-[26ch] text-[1.05rem] leading-snug font-medium">{service.name}</h3>
          </div>

          <div className="min-w-0 lg:pt-9">
            <p className="type-label mb-4 text-muted-foreground">What we do</p>
            <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {service.capabilities.map((c) => (
                <li
                  key={c}
                  className="relative pl-4 text-[0.9rem] leading-relaxed text-muted-foreground before:absolute before:top-[0.7em] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-asa-blue"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </li>
  );
}

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="grid gap-8 border-t border-rule pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <Eyebrow num="01">Services</Eyebrow>
            <h2 className="type-h2 max-w-[16ch]">How can we support you?</h2>
          </div>
          <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
            From additional technical capacity to hands-on execution, we work on the areas that keep your operation
            moving.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,8fr)_minmax(0,3fr)] lg:gap-14">
          <ul className="min-w-0 border-b border-rule">
            {SERVICES.map((service, i) => (
              <ServiceRow key={service.num} service={service} onActive={() => setActive(i)} />
            ))}
          </ul>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[10px] bg-muted">
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
              <p className="type-meta mt-4 text-muted-foreground">{SERVICES[active]?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
