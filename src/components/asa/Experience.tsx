import { Reveal } from "@/components/Reveal";
import { ClientLogos } from "@/components/asa/ClientLogos";
import { Eyebrow } from "@/components/asa/Eyebrow";
import camo from "@/assets/airthworthiness-camo.png.asset.json";

const METRICS = [
  { value: "10+", label: "Years of prior operational experience", meta: "Average, per ASA consultant, before joining" },
  { value: "20+", label: "Technical courses available" },
  { value: "350+", label: "Professionals trained" },
];

const REGIONS = ["Europe", "Africa", "Americas"];

const ENVIRONMENTS = [
  "Airlines",
  "MROs",
  "Lessors and asset owners",
  "Engineering and technical organisations",
];

const CASE_RESULTS = [
  { value: "+38%", label: "Structural diagnostics" },
  { value: "+29%", label: "Troubleshooting competency" },
  { value: "+54%", label: "Supervision quality standard" },
];

export function Experience() {
  return (
    <section id="experience">
      {/* Dark band — what we have achieved */}
      <div className="bg-navy-deep py-16 text-primary-foreground md:py-22">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal className="border-t border-rule-invert pt-8">
            <Eyebrow num="04" invert>
              What we have achieved
            </Eyebrow>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
              <h2 className="type-h2 max-w-[18ch]">Results built in real aviation operations.</h2>
              <p className="type-lead max-w-[48ch] self-end text-light-blue/80">
                Engineering, maintenance, planning and technical control responsibilities carried inside airlines and
                MROs — where availability, compliance and cost were measured daily.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="mt-14 grid border-y border-rule-invert sm:grid-cols-2 lg:grid-cols-3">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="border-b border-rule-invert py-8 transition-colors duration-500 hover:bg-white/[0.02] last:border-b-0 lg:border-b-0 lg:border-r lg:px-10 lg:py-12 lg:first:pl-0 lg:last:border-r-0"
              >
                <p className="font-display text-[clamp(2.5rem,4.4vw,3.75rem)] leading-[0.9] tracking-[-0.045em] text-asa-blue">
                  {metric.value}
                </p>
                <p className="type-label mt-5 max-w-[24ch] text-primary-foreground">{metric.label}</p>
                {metric.meta ? <p className="type-meta mt-2 max-w-[26ch] text-primary-foreground/55">{metric.meta}</p> : null}
              </div>
            ))}
          </Reveal>

          <Reveal delay={120} className="mt-12 grid gap-12 border-b border-rule-invert pb-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="type-label text-light-blue/90">Experience built across</p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {REGIONS.map((region) => (
                  <span
                    key={region}
                    className="font-display text-[clamp(1.6rem,2.8vw,2.5rem)] leading-[1.05] tracking-[-0.03em]"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="type-label text-light-blue/90">The environments our people have worked inside</p>
              <ul className="mt-5 divide-y divide-rule-invert">
                {ENVIRONMENTS.map((env) => (
                  <li key={env} className="type-label py-3.5 text-primary-foreground/80 first:pt-0 last:pb-0">
                    {env}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160} className="mt-14">
            <p className="type-label mb-8 text-primary-foreground/70">Selected client experience</p>
            <ClientLogos invert={true} />
          </Reveal>
        </div>
      </div>

      {/* Dark band — anonymous case study, presented as a distinct card */}
      <div className="bg-navy py-16 text-primary-foreground md:py-22">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal className="overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.04] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-[2px]">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
              <div className="relative min-w-0">
                <img
                  src={camo.url}
                  alt="Aircraft in a hangar at sunset during scheduled maintenance"
                  loading="lazy"
                  className="h-56 w-full object-cover sm:h-72 lg:h-full lg:min-h-[520px]"
                />
                <span className="type-label absolute top-5 left-5 rounded-lg bg-asa-blue px-4 py-2 text-primary-foreground">
                  Case study
                </span>
              </div>

              <div className="min-w-0 self-center p-6 sm:p-10 lg:p-14">
                <p className="type-label text-light-blue/70">Regional A320 operator · Americas</p>
                <h3 className="type-h2 mt-5 max-w-[20ch]">Operational transformation &amp; technical upskilling.</h3>
                <p className="mt-6 max-w-[54ch] text-[1rem] leading-relaxed text-light-blue/80">
                  On-site shadowing, AOG support and structural troubleshooting criteria implemented directly in line
                  and base maintenance — reducing hangar downtime and removing unnecessary OEM escalations.
                </p>

                <ul className="mt-10 grid gap-px overflow-hidden rounded-[10px] bg-white/10">
                  {CASE_RESULTS.map((r) => (
                    <li
                      key={r.label}
                      className="flex min-w-0 items-baseline justify-between gap-4 bg-navy px-5 py-5 transition-colors duration-500 hover:bg-white/[0.05] sm:px-8 sm:py-6"
                    >
                      <span className="font-display text-[clamp(1.6rem,5vw,2.5rem)] leading-none tracking-[-0.045em] text-light-blue">
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
