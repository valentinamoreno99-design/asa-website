import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/asa/Eyebrow";

const CHALLENGES = [
  {
    num: "01",
    title: "Airworthiness capacity",
    body: "Additional technical support when internal resources are stretched.",
    signal: "“We don't have enough technical hands this quarter.”",
    span: "lg:col-span-3",
  },
  {
    num: "02",
    title: "Technical decision-making",
    body: "Stronger analysis and faster decisions around aircraft availability.",
    signal: "“The aircraft is down and the call isn't clear.”",
    span: "lg:col-span-3",
  },
  {
    num: "03",
    title: "Compliance & audits",
    body: "Better preparation, evidence and closure of technical findings.",
    signal: "“The same findings keep coming back.”",
    span: "lg:col-span-2",
  },
  {
    num: "04",
    title: "MRO / delivery / transitions",
    body: "Technical oversight when asset condition and contractual risk matter.",
    signal: "“Nobody is watching the asset on our behalf.”",
    span: "lg:col-span-2",
  },
  {
    num: "05",
    title: "Team capability",
    body: "Developing people, judgement and supervision inside the organization.",
    signal: "“Experience is leaving faster than we build it.”",
    span: "lg:col-span-2",
  },
];

export function Challenges() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="challenges" className="bg-navy-deep py-16 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="grid gap-8 border-t border-rule-invert pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <Eyebrow num="02" invert>
              Where ASA gets involved
            </Eyebrow>
            <h2 className="type-h2 max-w-[18ch]">When technical challenges start affecting the operation.</h2>
          </div>
          <p className="type-lead max-w-[46ch] self-end text-light-blue/80">
            The technical issues behind delays, recurring findings, inefficient processes and capability gaps rarely
            exist in isolation. ASA helps identify the technical problem, define the right response and work on it where
            it matters.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[8px] bg-white/12 sm:grid-cols-2 lg:grid-cols-6">
          {CHALLENGES.map((item) => {
            const isActive = active === item.num;
            return (
              <Reveal key={item.num} className={`${item.span} h-full`}>
                <div
                  onMouseEnter={() => setActive(item.num)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(item.num)}
                  onBlur={() => setActive(null)}
                  tabIndex={0}
                  className={`group relative flex h-full min-h-[15rem] flex-col justify-between p-6 outline-none transition-colors duration-500 sm:p-8 lg:min-h-[17rem] ${
                    isActive ? "bg-asa-blue" : "bg-navy-deep"
                  }`}
                >
                  <Plus
                    className={`absolute top-4 right-4 h-4 w-4 transition-all duration-500 ${
                      isActive ? "rotate-90 text-primary-foreground" : "text-light-blue/40"
                    }`}
                    aria-hidden="true"
                  />

                  <div className="mt-10 min-w-0">
                    <h3 className="font-display text-[clamp(1.3rem,2.1vw,1.9rem)] leading-[1.05] tracking-[-0.03em]">
                      {item.title}
                    </h3>
                    <p
                      className={`mt-3 max-w-[36ch] text-[0.925rem] leading-relaxed transition-colors duration-500 ${
                        isActive ? "text-primary-foreground/85" : "text-light-blue/70"
                      }`}
                    >
                      {item.body}
                    </p>

                    <div
                      className={`grid transition-all duration-500 ${
                        isActive ? "mt-5 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="overflow-hidden type-meta max-w-[34ch] text-primary-foreground">{item.signal}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
