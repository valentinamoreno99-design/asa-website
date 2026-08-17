import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/asa/Eyebrow";
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

function ServiceBlock({ service, flip }: { service: Service; flip: boolean }) {
  return (
    <Reveal
      as="article"
      className="grid gap-8 border-t border-rule py-14 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16"
    >
      <div className={`min-w-0 ${flip ? "lg:order-2" : ""}`}>
        <div className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-5 md:grid-cols-[5rem_minmax(0,1fr)] md:gap-x-8">
          <span className="font-display text-[clamp(2rem,3.4vw,3.25rem)] leading-none tracking-[-0.04em] text-asa-blue/30">
            {service.num}
          </span>
          <div className="min-w-0">
            <h3 className="max-w-[22ch] font-display text-[clamp(1.5rem,2.4vw,2.2rem)] leading-[1.08] tracking-[-0.03em]">
              {service.statement}
            </h3>
            <p className="type-label mt-6 text-asa-blue">{service.name}</p>
            <ul className="mt-8 grid gap-x-10 gap-y-2.5 border-t border-rule pt-6 sm:grid-cols-2">
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
      </div>

      <div className={`min-w-0 ${flip ? "lg:order-1" : ""}`}>
        <div className="overflow-hidden rounded-[10px]">
          <img
            src={service.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="aspect-[16/10] w-full object-cover grayscale-[30%] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] lg:aspect-[5/4]"
          />
        </div>
      </div>
    </Reveal>
  );
}

export function Services() {
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

        <div className="mt-10 border-b border-rule">
          {SERVICES.map((service, i) => (
            <ServiceBlock key={service.num} service={service} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
