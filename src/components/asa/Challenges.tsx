import { Reveal } from "@/components/Reveal";

const CHALLENGES = [
  {
    title: "Airworthiness capacity",
    body: "Additional technical support when internal resources are stretched.",
  },
  {
    title: "Technical decision-making",
    body: "Stronger analysis and faster decisions around aircraft availability.",
  },
  {
    title: "Compliance & audits",
    body: "Better preparation, evidence and closure of technical findings.",
  },
  {
    title: "MRO / delivery / transitions",
    body: "Technical oversight when asset condition and contractual risk matter.",
  },
  {
    title: "Team capability",
    body: "Developing people, judgement and supervision inside the organization.",
  },
];

export function Challenges() {
  return (
    <section id="challenges" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1560px] px-6 md:px-12">
        <Reveal className="grid gap-10 border-t border-rule pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <p className="type-label mb-10 text-muted-foreground">
              <span className="mr-4 text-asa-blue">05</span>Why clients call ASA
            </p>
            <h2 className="type-h2 max-w-[18ch]">When technical challenges start affecting the operation.</h2>
          </div>
          <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
            The technical issues behind delays, recurring findings, inefficient processes and capability gaps rarely
            exist in isolation. ASA helps identify the technical problem, define the right response and work on it where
            it matters.
          </p>
        </Reveal>

        <dl className="mt-16 border-t border-rule">
          {CHALLENGES.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 60}
              className="grid gap-2 border-b border-rule py-7 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12"
            >
              <dt className="type-label pt-1 text-foreground">{item.title}</dt>
              <dd className="max-w-[60ch] text-[0.95rem] leading-relaxed text-muted-foreground">{item.body}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
