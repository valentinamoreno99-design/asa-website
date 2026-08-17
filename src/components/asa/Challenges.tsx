import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/asa/Eyebrow";
import camo from "@/assets/airthworthiness-camo.png.asset.json";
import lineOps from "@/assets/maintenace-line.png.asset.json";
import transfers from "@/assets/transfers.jpeg.asset.json";
import planning from "@/assets/planning.png.asset.json";
import courses from "@/assets/especialized-courses.jpeg.asset.json";

const CHALLENGES = [
  {
    num: "01",
    title: "Airworthiness capacity",
    body: "Additional technical support when internal resources are stretched.",
    image: camo.url,
    alt: "Aircraft in a hangar at sunset during scheduled maintenance",
  },
  {
    num: "02",
    title: "Technical decision-making",
    body: "Stronger analysis and faster decisions around aircraft availability.",
    image: lineOps.url,
    alt: "Technicians troubleshooting inside an aircraft engine cowling",
  },
  {
    num: "03",
    title: "Compliance & audits",
    body: "Better preparation, evidence and closure of technical findings.",
    image: planning.url,
    alt: "Planner reviewing maintenance records and schedules on screen",
  },
  {
    num: "04",
    title: "MRO / delivery / transitions",
    body: "Technical oversight when asset condition and contractual risk matter.",
    image: transfers.url,
    alt: "Technical team inspecting an aircraft on the apron",
  },
  {
    num: "05",
    title: "Team capability",
    body: "Developing people, judgement and supervision inside the organization.",
    image: courses.url,
    alt: "Aviation professionals in a specialized technical course",
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
            <Eyebrow num="01">Why clients call ASA</Eyebrow>
            <h2 className="type-h2 max-w-[18ch]">When technical challenges start affecting the operation.</h2>
          </div>
          <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
            The technical issues behind delays, recurring findings, inefficient processes and capability gaps rarely
            exist in isolation. ASA helps identify the technical problem, define the right response and work on it where
            it matters.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-14">
          {/* Sticky index — desktop */}
          <div className="hidden lg:block">
            <ol className="sticky top-28 border-t border-rule">
              {CHALLENGES.map((item, i) => (
                <li key={item.num} className="border-b border-rule">
                  <div
                    className={`grid grid-cols-[3rem_minmax(0,1fr)] items-baseline gap-x-4 py-4 transition-opacity duration-500 ${
                      i === active ? "opacity-100" : "opacity-35"
                    }`}
                  >
                    <span className="type-label text-asa-blue">{item.num}</span>
                    <span className="font-display text-[1.05rem] leading-tight tracking-[-0.02em]">{item.title}</span>
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
                className="border-t border-rule py-9 first:border-t-0 first:pt-0 md:py-12"
              >
                <Reveal>
                  <div className="overflow-hidden rounded-[10px]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-6 grid grid-cols-[3rem_minmax(0,1fr)] gap-x-4 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-x-8">
                    <span className="type-label pt-2 text-asa-blue">{item.num}</span>
                    <div className="min-w-0">
                      <h3 className="font-display text-[clamp(1.25rem,1.9vw,1.7rem)] leading-[1.1] tracking-[-0.025em]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-[52ch] text-[0.925rem] leading-relaxed text-muted-foreground">
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
