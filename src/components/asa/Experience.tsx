import { Reveal } from "@/components/Reveal";
import camo from "@/assets/airthworthiness-camo.png.asset.json";

const CASE_RESULTS = [
  { value: "+38%", label: "Structural diagnostics" },
  { value: "+29%", label: "Troubleshooting competency" },
  { value: "+54%", label: "Supervision quality standard" },
];

export function Experience() {
  return (
    <section id="experience">
      {/* Dark band — anonymous case study, presented as a distinct card */}
      <div className="bg-navy py-14 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal className="overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.04] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-[2px]">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
              <div className="relative min-w-0">
                <img
                  src={camo.url}
                  alt="Aircraft in a hangar at sunset during scheduled maintenance"
                  loading="lazy"
                  className="h-56 w-full object-cover sm:h-72 lg:h-full lg:min-h-[420px]"
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
