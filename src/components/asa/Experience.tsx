import { Reveal } from "@/components/Reveal";
import { ClientLogos } from "@/components/asa/ClientLogos";
import planningOffice from "@/assets/planning-office.jpg";

const METRICS = [
  { value: "Operator-led", label: "Practical experience from inside the operation" },
  { value: "20+ courses", label: "Technical and leadership development programs" },
  { value: "3 continents", label: "International operational experience" },
];

export function Experience() {
  return (
    <section id="experience" className="bg-navy py-24 text-primary-foreground md:py-36">
      <div className="mx-auto max-w-[1560px] px-6 md:px-12">
        <Reveal className="grid gap-10 border-t border-rule-invert pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <p className="type-label mb-10 text-light-blue/70">
              <span className="mr-4 text-light-blue">04</span>Experience
            </p>
            <h2 className="type-h2 max-w-[16ch]">Experience built in real aviation operations.</h2>
          </div>
          <p className="type-lead max-w-[46ch] self-end text-light-blue/80">
            Our experience comes from working close to the aircraft, the people and the decisions that keep operations
            moving.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
          <Reveal>
            <p className="font-display text-[clamp(4.5rem,11vw,10rem)] leading-[0.86] tracking-[-0.04em] text-light-blue">
              15+
            </p>
            <p className="type-h3 mt-6 max-w-[20ch]">years of aviation experience per specialist</p>
            <p className="mt-8 max-w-[52ch] text-[0.95rem] leading-relaxed text-primary-foreground/70">
              Engineering, maintenance, planning, technical control and leadership responsibilities carried inside
              airlines, MROs and aviation organizations — where availability, compliance and cost were measured daily.
            </p>

            <dl className="mt-14 border-t border-rule-invert">
              {METRICS.map((metric) => (
                <div
                  key={metric.value}
                  className="grid gap-2 border-b border-rule-invert py-6 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] sm:gap-8"
                >
                  <dt className="font-display text-xl tracking-tight text-light-blue">{metric.value}</dt>
                  <dd className="type-meta self-center text-primary-foreground/70">{metric.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={90} className="lg:pt-6">
            <img
              src={planningOffice}
              alt="ASA specialists reviewing maintenance planning documentation"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover grayscale-[45%]"
            />
            <p className="type-meta mt-5 text-primary-foreground/60">
              Working inside client processes, approvals and regulatory responsibilities.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-24 border-t border-rule-invert pt-10">
          <p className="type-label mb-8 text-light-blue/70">Selected client experience</p>
          <ClientLogos />
        </Reveal>
      </div>
    </section>
  );
}
