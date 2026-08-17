import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/asa/Eyebrow";

/* Custom technical marks — drawn for each value proposition, not icon-library glyphs. */

function MarkOperator() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <path d="M4 46h56" />
      <path d="M10 46V34l14-6 16 6v12" />
      <path d="M24 28V16l14 6" />
      <circle cx="24" cy="40" r="2.5" />
      <path d="M44 46V22l14 8v16" />
    </svg>
  );
}

function MarkHandsOn() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <circle cx="32" cy="32" r="9" />
      <path d="M32 8v9M32 47v9M8 32h9M47 32h9" />
      <path d="M15 15l7 7M49 15l-7 7M15 49l7-7M49 49l-7-7" />
      <circle cx="32" cy="32" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MarkDepth() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <path d="M32 6l24 12-24 12L8 18 32 6z" />
      <path d="M8 30l24 12 24-12" />
      <path d="M8 42l24 12 24-12" />
    </svg>
  );
}

function MarkCapability() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <path d="M8 52V34M22 52V24M36 52V30M50 52V14" />
      <path d="M6 52h52" />
      <path d="M44 8h10v10" />
      <path d="M54 8L36 26" />
    </svg>
  );
}

const POINTS = [
  {
    num: "01",
    title: "Operator-led",
    body: "Built from real airline and aviation operating environments.",
    Mark: MarkOperator,
  },
  {
    num: "02",
    title: "Hands-on",
    body: "We support decisions and execution, not just recommendations.",
    Mark: MarkHandsOn,
  },
  {
    num: "03",
    title: "Technical depth",
    body: "Senior expertise across airworthiness, maintenance and technical control.",
    Mark: MarkDepth,
  },
  {
    num: "04",
    title: "Capability that stays",
    body: "We strengthen your team instead of creating dependency.",
    Mark: MarkCapability,
  },
];

export function WhyAsa() {
  return (
    <section id="why-asa" className="bg-warm-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="grid gap-8 border-t border-rule pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <Eyebrow num="03">Why ASA</Eyebrow>
            <h2 className="type-h2 max-w-[17ch]">Senior expertise grounded in real operations.</h2>
          </div>
          <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
            Practical experience from the operator environment, applied to the technical decisions that affect
            day-to-day performance.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-[8px] border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((point, i) => (
            <Reveal
              as="li"
              key={point.num}
              delay={i * 70}
              className="group relative flex min-w-0 flex-col justify-between gap-10 bg-background p-7 transition-colors duration-500 hover:bg-warm-white md:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="text-asa-blue transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                  <point.Mark />
                </span>
                <span className="type-label text-muted-foreground">{point.num}</span>
              </div>
              <div>
                <h3 className="font-display text-[clamp(1.15rem,1.5vw,1.4rem)] leading-[1.1] tracking-[-0.025em] uppercase">
                  {point.title}
                </h3>
                <p className="mt-3 max-w-[34ch] text-[0.9rem] leading-relaxed text-muted-foreground">{point.body}</p>
              </div>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-0 bg-asa-blue transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
