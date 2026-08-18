import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/asa/Eyebrow";
import trainings from "@/assets/technical-trainings.png.asset.json";
import camo from "@/assets/ops-8.jpeg.asset.json";
import lineOps from "@/assets/ops-7.jpeg.asset.json";
import transfers from "@/assets/ops-2.jpeg.asset.json";
import planning from "@/assets/planning.png.asset.json";

type Service = {
  num: string;
  mode: "Strengthen" | "Solve" | "Execute";
  statement: string;
  name: string;
  capabilities: string[];
  image: string;
  alt: string;
};

const SERVICES: Service[] = [
  {
    num: "01",
    mode: "Strengthen",
    statement: "Build stronger technical judgement inside your own teams.",
    name: "Technical Development & Leadership Mentoring",
    capabilities: [
      "Specialized and ATA-focused courses",
      "Advanced troubleshooting",
      "Mentoring, coaching and shadowing",
      "Supervisor and leadership development",
      "Competency assessment",
      "Post-training follow-up",
    ],
    image: trainings.url,
    alt: "ASA instructor leading a technical training session on engine systems",
  },
  {
    num: "02",
    mode: "Strengthen",
    statement: "Strengthen airworthiness capacity when internal teams are stretched.",
    name: "Airworthiness & CAMO Management",
    capabilities: [
      "Maintenance planning and work packages",
      "Engineering and maintenance-program support",
      "Reliability",
      "Technical records",
      "Embedded team capacity",
    ],
    image: camo.url,
    alt: "Cockpit maintenance data page showing airframe and APU hours and cycles",
  },
  {
    num: "03",
    mode: "Solve",
    statement: "Make faster, better-supported technical decisions on the line.",
    name: "Technical Control & Line Operations",
    capabilities: [
      "MCC / MOC support",
      "Defect and recurrent-defect analysis",
      "Deferred-defect and HIL follow-up",
      "MIS traceability",
      "Recovery coordination",
      "Technical-control mentoring",
    ],
    image: lineOps.url,
    alt: "Nose landing gear maintenance in the hangar with access platform",
  },
  {
    num: "04",
    mode: "Execute",
    statement: "Protect compliance and asset value through audits, MRO events and transitions.",
    name: "Compliance, Audits & Asset Protection",
    capabilities: [
      "Audit preparation and finding closure",
      "Corrective actions",
      "Compliance and records reviews",
      "Aircraft inspections",
      "MRO supervision",
      "Delivery, redelivery and transitions",
    ],
    image: transfers.url,
    alt: "White-tail widebody aircraft on the apron during a delivery transition",
  },
  {
    num: "05",
    mode: "Solve",
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
    image: planning.url,
    alt: "Maintenance planner reviewing an aircraft planning schedule on screen",
  },
];

function ServiceBlock({ service, flip }: { service: Service; flip: boolean }) {
  return (
    <Reveal
      as="article"
      className="scroll-mt-28 grid gap-7 border-t border-rule py-8 md:py-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-12"
    >
      <div className={`min-w-0 ${flip ? "lg:order-2" : ""}`}>
        <div className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-4 md:grid-cols-[4.5rem_minmax(0,1fr)] md:gap-x-8">
          <span className="font-display text-[clamp(1.75rem,2.8vw,2.75rem)] leading-none tracking-[-0.04em] text-asa-blue/30">
            {service.num}
          </span>
          <div className="min-w-0">
            <h3 className="max-w-[24ch] font-display text-[clamp(1.35rem,2.1vw,1.95rem)] leading-[1.1] tracking-[-0.03em]">
              {service.statement}
            </h3>
            <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <span className="type-label border border-asa-blue/40 px-2.5 py-1 text-asa-blue">{service.mode}</span>
              <p className="type-label text-muted-foreground">{service.name}</p>
            </div>
            <ul className="mt-7 grid gap-x-8 gap-y-2.5 border-t border-rule pt-5 sm:grid-cols-2">
              {service.capabilities.map((c) => (
                <li
                  key={c}
                  className="relative pl-4 text-[0.875rem] leading-relaxed text-muted-foreground before:absolute before:top-[0.7em] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-asa-blue"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={`min-w-0 ${flip ? "lg:order-1" : ""}`}>
      <div className="overflow-hidden rounded-[8px]">
          <img
            src={service.image}
            alt={service.alt}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] lg:aspect-[5/4] lg:max-h-[340px]"
          />
        </div>
      </div>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="grid gap-8 border-t border-rule pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <Eyebrow num="03">Services — where we help</Eyebrow>
            <h2 className="type-h2 max-w-[16ch]">How can we support you?</h2>
          </div>
          <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
Every engagement fits one of three modes — <span className="text-foreground">Strengthen</span> capability,{" "}
            <span className="text-foreground">Solve</span> a technical problem, or{" "}
            <span className="text-foreground">Execute</span> the work alongside your team.
          </p>
        </Reveal>

        <div className="mt-4 border-b border-rule">
          {SERVICES.map((service, i) => (
            <div key={service.num} id={`service-${service.num}`}>
              <ServiceBlock service={service} flip={i % 2 === 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
