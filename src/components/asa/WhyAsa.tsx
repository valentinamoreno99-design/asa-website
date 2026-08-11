import { Reveal } from "@/components/Reveal";

const POINTS = [
  {
    num: "01",
    title: "Operator-led",
    body: "Built from real airline and aviation operating environments.",
  },
  {
    num: "02",
    title: "Hands-on",
    body: "We support decisions and execution, not just recommendations.",
  },
  {
    num: "03",
    title: "Technical depth",
    body: "Senior expertise across airworthiness, maintenance and technical control.",
  },
  {
    num: "04",
    title: "Capability that stays",
    body: "We strengthen your team instead of creating dependency.",
  },
];

export function WhyAsa() {
  return (
    <section id="why-asa" className="bg-warm-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="grid gap-8 border-t border-rule pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <p className="type-label mb-8 text-muted-foreground">
              <span className="mr-4 text-asa-blue">02</span>Why ASA
            </p>
            <h2 className="type-h2 max-w-[17ch]">Senior expertise grounded in real operations.</h2>
          </div>
          <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
            Practical experience from the operator environment, applied to the technical decisions that affect
            day-to-day performance.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-[10px] border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((point, i) => (
            <Reveal
              as="li"
              key={point.num}
              delay={i * 70}
              className="flex min-w-0 flex-col bg-background p-7 md:p-8"
            >
              <span className="type-label text-asa-blue">{point.num}</span>
              <h3 className="mt-8 font-display text-[1.35rem] leading-[1.15] tracking-[-0.02em] uppercase">
                {point.title}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">{point.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
