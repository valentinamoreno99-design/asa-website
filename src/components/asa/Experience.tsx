import { Reveal } from "@/components/Reveal";
import { ClientLogos } from "@/components/asa/ClientLogos";
import { Eyebrow } from "@/components/asa/Eyebrow";

const METRICS = [
  { value: "15+", label: "Years of aviation experience per specialist" },
  { value: "20+", label: "Technical and leadership development programs" },
  { value: "3", label: "Continents of operational experience" },
];

export function Experience() {
  return (
    <section id="experience" className="bg-navy py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Band 1 — editorial headline */}
        <Reveal className="border-t border-rule-invert pt-8">
          <Eyebrow num="03" invert>
            Experience
          </Eyebrow>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
            <h2 className="type-h2 max-w-[18ch]">Experience built in real aviation operations.</h2>
            <p className="type-lead max-w-[48ch] self-end text-light-blue/80">
              Engineering, maintenance, planning, technical control and leadership responsibilities carried inside
              airlines, MROs and aviation organizations — where availability, compliance and cost were measured daily.
            </p>
          </div>
        </Reveal>

        {/* Band 2 — metrics row */}
        <Reveal delay={80} className="mt-16 grid border-y border-rule-invert md:grid-cols-3">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="group min-w-0 border-b border-rule-invert py-10 transition-colors duration-500 last:border-b-0 hover:bg-white/[0.03] md:border-b-0 md:border-r md:px-10 md:py-14 md:first:pl-0 md:last:border-r-0"
            >
              <p className="font-display text-[clamp(3rem,6vw,5rem)] leading-[0.85] tracking-[-0.045em] text-light-blue">
                {metric.value}
              </p>
              <p className="type-meta mt-6 max-w-[26ch] text-primary-foreground/70">{metric.label}</p>
            </div>
          ))}
        </Reveal>

        {/* Band 3 — client logos */}
        <Reveal delay={140} className="mt-16">
          <p className="type-label mb-8 text-light-blue/70">Selected client experience</p>
          <ClientLogos />
        </Reveal>
      </div>
    </section>
  );
}
