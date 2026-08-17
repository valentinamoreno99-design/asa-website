import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/asa/Eyebrow";
import mcc from "@/assets/mcc.jpg";
import engineDetail from "@/assets/engine-detail.jpg";
import planningOffice from "@/assets/planning-office.jpg";
import auditRecords from "@/assets/audit-records.jpg";
import transitionApron from "@/assets/transition-apron.jpg";

const CHALLENGES = [
  {
    num: "01",
    title: "Airworthiness capacity",
    body: "Additional technical support when internal resources are stretched.",
    image: planningOffice,
  },
  {
    num: "02",
    title: "Technical decision-making",
    body: "Stronger analysis and faster decisions around aircraft availability.",
    image: mcc,
  },
  {
    num: "03",
    title: "Compliance & audits",
    body: "Better preparation, evidence and closure of technical findings.",
    image: auditRecords,
  },
  {
    num: "04",
    title: "MRO / delivery / transitions",
    body: "Technical oversight when asset condition and contractual risk matter.",
    image: transitionApron,
  },
  {
    num: "05",
    title: "Team capability",
    body: "Developing people, judgement and supervision inside the organization.",
    image: engineDetail,
  },
];

export function Challenges() {
  const [active, setActive] = useState(0);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset["index"]);
            if (!Number.isNaN(index)) setActive(index);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
          {/* Sticky index — desktop */}
          <div className="hidden lg:block">
            <ol className="sticky top-28 border-t border-rule">
              {CHALLENGES.map((item, i) => (
                <li key={item.num} className="border-b border-rule">
                  <div
                    className={`grid grid-cols-[3rem_minmax(0,1fr)] items-baseline gap-x-4 py-5 transition-opacity duration-500 ${
                      i === active ? "opacity-100" : "opacity-35"
                    }`}
                  >
                    <span className="type-label text-asa-blue">{item.num}</span>
                    <span className="font-display text-[1.15rem] leading-tight tracking-[-0.02em]">{item.title}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Detail blocks */}
          <div className="min-w-0">
            {CHALLENGES.map((item, i) => (
              <div
                key={item.num}
                data-index={i}
                ref={(el) => {
                  itemsRef.current[i] = el;
                }}
                className="border-t border-rule py-10 first:border-t-0 first:pt-0 md:py-14"
              >
                <Reveal>
                  <div className="overflow-hidden rounded-[10px]">
                    <img
                      src={item.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover grayscale-[35%] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-7 grid grid-cols-[3rem_minmax(0,1fr)] gap-x-4 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-x-8">
                    <span className="type-label pt-2 text-asa-blue">{item.num}</span>
                    <div className="min-w-0">
                      <h3 className="font-display text-[clamp(1.35rem,2.1vw,1.9rem)] leading-[1.1] tracking-[-0.025em]">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-[52ch] text-[0.95rem] leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
