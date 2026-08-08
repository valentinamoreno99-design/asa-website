import { Reveal } from "@/components/Reveal";

const POINTS = [
  {
    num: "01",
    title: "Operator-led",
    body: "Experience shaped by real operational environments, not only advisory frameworks.",
  },
  {
    num: "02",
    title: "Hands-on",
    body: "We can advise, support execution or take defined technical scopes from planning through delivery.",
  },
  {
    num: "03",
    title: "Technical depth",
    body: "Experience across airworthiness, maintenance planning, technical control, compliance and capability development.",
  },
  {
    num: "04",
    title: "Capability that stays",
    body: "We strengthen internal teams and decision-making rather than creating permanent dependency.",
  },
];

export function WhyAsa() {
  return (
    <section id="why-asa" className="bg-warm-white py-24 md:py-36">
      <div className="mx-auto max-w-[1560px] px-6 md:px-12">
        <Reveal className="grid gap-10 border-t border-rule pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <p className="type-label mb-10 text-muted-foreground">
              <span className="mr-4 text-asa-blue">03</span>Why ASA
            </p>
            <h2 className="type-h2 max-w-[17ch]">Senior expertise grounded in real operations.</h2>
          </div>
          <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
            ASA brings practical experience from the operator environment into the technical decisions, projects and
            capability gaps that affect day-to-day performance.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-x-16 sm:grid-cols-2">
          {POINTS.map((point, i) => (
            <Reveal
              as="li"
              key={point.num}
              delay={i * 70}
              className="border-t border-rule py-10 md:py-12"
            >
              <div className="flex items-baseline gap-6">
                <span className="type-label text-asa-blue">{point.num}</span>
                <h3 className="type-h3 uppercase tracking-[0.02em]">{point.title}</h3>
              </div>
              <p className="mt-6 max-w-[46ch] pl-0 text-[0.95rem] leading-relaxed text-muted-foreground sm:pl-[3.75rem]">
                {point.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
