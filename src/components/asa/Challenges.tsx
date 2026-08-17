import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/asa/Eyebrow";

const CHALLENGES = [
  {
    num: "01",
    title: "Airworthiness capacity",
    body: "Additional technical support when internal resources are stretched.",
  },
  {
    num: "02",
    title: "Technical decision-making",
    body: "Stronger analysis and faster decisions around aircraft availability.",
  },
  {
    num: "03",
    title: "Compliance & audits",
    body: "Better preparation, evidence and closure of technical findings.",
  },
  {
    num: "04",
    title: "MRO / delivery / transitions",
    body: "Technical oversight when asset condition and contractual risk matter.",
  },
  {
    num: "05",
    title: "Team capability",
    body: "Developing people, judgement and supervision inside the organization.",
  },
];

export function Challenges() {
  return (
    <section id="challenges" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="grid gap-8 border-t border-rule pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <Eyebrow num="04">Why clients call ASA</Eyebrow>
            <h2 className="type-h2 max-w-[18ch]">When technical challenges start affecting the operation.</h2>
          </div>
          <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
            The technical issues behind delays, recurring findings, inefficient processes and capability gaps rarely
            exist in isolation. ASA helps identify the technical problem, define the right response and work on it where
            it matters.
          </p>
        </Reveal>

        <dl className="mt-14 border-t border-rule">
          {CHALLENGES.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 60}
              className="group relative grid grid-cols-[2.5rem_minmax(0,1fr)] items-baseline gap-x-5 gap-y-3 border-b border-rule py-8 transition-colors duration-500 hover:bg-warm-white md:grid-cols-[3.5rem_minmax(0,5fr)_minmax(0,6fr)] md:gap-x-10 md:py-10"
            >
              <span className="type-label text-asa-blue">{item.num}</span>
              <dt className="min-w-0 font-display text-[clamp(1.25rem,2.1vw,1.75rem)] leading-[1.12] tracking-[-0.025em]">
                {item.title}
              </dt>
              <dd className="col-start-2 max-w-[52ch] text-[0.95rem] leading-relaxed text-muted-foreground md:col-start-3">
                {item.body}
              </dd>
              <span className="pointer-events-none absolute bottom-[-1px] left-0 h-px w-0 bg-asa-blue transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
