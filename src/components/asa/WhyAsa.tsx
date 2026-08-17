import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/asa/Eyebrow";

const POINTS = [
  {
    num: "01",
    title: "Operator-led",
    body: "Built from real airline and aviation operating environments.",
    wide: true,
  },
  {
    num: "02",
    title: "Hands-on",
    body: "We support decisions and execution, not just recommendations.",
    wide: false,
  },
  {
    num: "03",
    title: "Technical depth",
    body: "Senior expertise across airworthiness, maintenance and technical control.",
    wide: false,
  },
  {
    num: "04",
    title: "Capability that stays",
    body: "We strengthen your team instead of creating dependency.",
    wide: true,
  },
];

export function WhyAsa() {
  return (
    <section id="why-asa" className="bg-warm-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="grid gap-8 border-t border-rule pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <Eyebrow num="02">Why ASA</Eyebrow>
            <h2 className="type-h2 max-w-[17ch]">Senior expertise grounded in real operations.</h2>
          </div>
          <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
            Practical experience from the operator environment, applied to the technical decisions that affect
            day-to-day performance.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-[10px] border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((point, i) => (
            <Reveal
              as="li"
              key={point.num}
              delay={i * 70}
              className={`group relative flex min-w-0 flex-col justify-between overflow-hidden bg-background p-8 transition-colors duration-500 hover:bg-warm-white md:p-10 ${
                point.wide ? "lg:col-span-2" : ""
              }`}
            >
              <span className="pointer-events-none absolute -top-6 right-2 font-display text-[6rem] leading-none tracking-[-0.05em] text-foreground/[0.04] md:text-[8rem]">
                {point.num}
              </span>
              <span className="type-label relative text-asa-blue">{point.num}</span>
              <div className="relative mt-16 md:mt-24">
                <h3 className="font-display text-[clamp(1.35rem,2vw,1.85rem)] leading-[1.1] tracking-[-0.025em] uppercase">
                  {point.title}
                </h3>
                <p className="mt-4 max-w-[44ch] text-[0.95rem] leading-relaxed text-muted-foreground">{point.body}</p>
              </div>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-0 bg-asa-blue transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
