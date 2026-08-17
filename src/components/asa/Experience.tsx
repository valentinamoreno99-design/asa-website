import { Reveal } from "@/components/Reveal";
import { ClientLogos } from "@/components/asa/ClientLogos";
import { Eyebrow } from "@/components/asa/Eyebrow";
import camo from "@/assets/airthworthiness-camo.png.asset.json";

const METRICS = [
  { value: "48+", label: "Combined years of airline engineering leadership" },
  { value: "350+", label: "Aviation professionals trained" },
  { value: "20+", label: "Technical and leadership programs delivered" },
  { value: "3", label: "Continents of operational experience" },
];

const CASE_RESULTS = [
  { value: "+38%", label: "Structural diagnostics" },
  { value: "+29%", label: "Troubleshooting competency" },
  { value: "+54%", label: "Supervision quality standard" },
];

export function Experience() {
  return (
    <section id="experience">
      {/* Light band — what we have achieved */}
      <div className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal className="border-t border-rule pt-8">
            <Eyebrow num="04">What we have achieved</Eyebrow>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
              <h2 className="type-h2 max-w-[18ch]">Results built in real aviation operations.</h2>
              <p className="type-lead max-w-[48ch] self-end text-muted-foreground">
                Engineering, maintenance, planning and technical control responsibilities carried inside airlines and
                MROs — where availability, compliance and cost were measured daily.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="mt-14 grid border-y border-rule sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="min-w-0 border-b border-rule py-8 transition-colors duration-500 last:border-b-0 hover:bg-foreground/[0.02] lg:border-b-0 lg:border-r lg:px-8 lg:py-12 lg:first:pl-0 lg:last:border-r-0"
              >
                <p className="font-display text-[clamp(2.5rem,4.4vw,3.75rem)] leading-[0.9] tracking-[-0.045em] text-asa-blue">
                  {metric.value}
                </p>
                <p className="type-meta mt-5 max-w-[26ch] text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={120} className="mt-14">
            <p className="type-label mb-8 text-muted-foreground">Selected client experience</p>
            <ClientLogos />
          </Reveal>
        </div>
      </div>

      {/* Dark band — anonymous case study */}
      <div className="bg-navy py-20 text-primary-foreground md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal className="border-t border-rule-invert pt-8">
            <p className="type-label text-light-blue/70">
              <span className="mr-4 text-light-blue">Case</span>
              Regional A320 operator · Americas
            </p>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
              <div className="min-w-0">
                <img
                  src={camo.url}
                  alt="Aircraft in a hangar at sunset during scheduled maintenance"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-[10px] object-cover"
                />
              </div>

              <div className="min-w-0 self-center">
                <h3 className="type-h2 max-w-[20ch]">Operational transformation & technical upskilling.</h3>
                <p className="mt-6 max-w-[54ch] text-[1rem] leading-relaxed text-light-blue/80">
                  On-site shadowing, AOG support and structural troubleshooting criteria implemented directly in line
                  and base maintenance — reducing hangar downtime and removing unnecessary OEM escalations.
                </p>

                <ul className="mt-10 grid gap-px overflow-hidden rounded-[10px] bg-white/10">
                  {CASE_RESULTS.map((r) => (
                    <li
                      key={r.label}
                      className="flex min-w-0 items-baseline justify-between gap-6 bg-navy px-6 py-6 transition-colors duration-500 hover:bg-white/[0.04] md:px-8"
                    >
                      <span className="font-display text-[clamp(1.9rem,3.2vw,2.75rem)] leading-none tracking-[-0.045em] text-light-blue">
                        {r.value}
                      </span>
                      <span className="type-meta max-w-[18ch] text-right text-primary-foreground/70">{r.label}</span>
                    </li>
                  ))}
                </ul>

                <p className="type-meta mt-8 border-t border-rule-invert pt-6 text-primary-foreground/55">
                  Presented anonymously. Client identity and detailed evidence are shared under agreement.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
