import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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

function ServiceRow({
  service,
  isActive,
  onActivate,
  reduced,
}: {
  service: Service;
  isActive: boolean;
  onActivate: () => void;
  reduced: boolean;
}) {
  const ref = useRef<HTMLLIElement>(null);

  // Touch / no-hover fallback: activate the row closest to the reading line.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: hover)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && onActivate());
      },
      { rootMargin: "-42% 0px -42% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [onActivate]);

  return (
    <li
      ref={ref}
      data-active={isActive}
      className="border-t border-rule"
      onMouseEnter={onActivate}
      onFocus={onActivate}
    >
      <div
        tabIndex={0}
        role="button"
        aria-expanded={isActive}
        onClick={onActivate}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onActivate();
          }
        }}
        className="block w-full cursor-default outline-none focus-visible:ring-2 focus-visible:ring-asa-blue/60"
      >
        <motion.div
          animate={{ opacity: reduced ? 1 : isActive ? 1 : 0.62 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={`grid gap-5 transition-[padding] duration-500 lg:grid-cols-[3.5rem_minmax(0,6fr)_minmax(0,6fr)] lg:gap-10 ${
            isActive ? "py-9 md:py-12" : "py-7 md:py-8"
          }`}
        >
          <span className="type-label pt-2 text-asa-blue">{service.num}</span>

          <div className="min-w-0">
            <motion.p
              animate={{ x: reduced ? 0 : isActive ? 0 : -2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`max-w-[26ch] font-display leading-[1.14] tracking-[-0.025em] transition-colors duration-500 ${
                isActive ? "text-asa-blue" : "text-foreground"
              } text-[clamp(1.35rem,2.2vw,2rem)]`}
            >
              {service.statement}
            </motion.p>
            <h3 className="type-label mt-5 text-muted-foreground">{service.name}</h3>
          </div>

          <div className="min-w-0 lg:pt-1">
            <AnimatePresence initial={false} mode="wait">
              {isActive ? (
                <motion.div
                  key="open"
                  initial={reduced ? false : { opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="type-label mb-4 text-muted-foreground">What we do</p>
                  <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                    {service.capabilities.map((c, i) => (
                      <motion.li
                        key={c}
                        initial={reduced ? false : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: reduced ? 0 : 0.06 + i * 0.04 }}
                        className="relative pl-4 text-[0.95rem] leading-relaxed text-muted-foreground before:absolute before:top-[0.7em] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-asa-blue"
                      >
                        {c}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.p
                  key="closed"
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="type-meta text-muted-foreground"
                >
                  {service.capabilities.length} capabilities
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </li>
  );
}

export function Services() {
  const [active, setActive] = useState(0);
  const reduced = !!useReducedMotion();

  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="grid gap-8 border-t border-rule pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <p className="type-label mb-8 text-muted-foreground">
              <span className="mr-4 text-asa-blue">01</span>Services
            </p>
            <h2 className="type-h2 max-w-[16ch]">How can we support you?</h2>
          </div>
          <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
            From additional technical capacity to hands-on execution, we work on the areas that keep your operation
            moving.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,8fr)_minmax(0,3fr)] lg:gap-14">
          <ul className="min-w-0 border-b border-rule" onMouseLeave={() => undefined}>
            {SERVICES.map((service, i) => (
              <ServiceRow
                key={service.num}
                service={service}
                isActive={i === active}
                reduced={reduced}
                onActivate={() => setActive(i)}
              />
            ))}
          </ul>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[10px] bg-muted">
                {SERVICES.map((service, i) => (
                  <motion.img
                    key={service.num}
                    src={service.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.04 }}
                    transition={{ duration: reduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 h-full w-full object-cover grayscale-[30%]"
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
