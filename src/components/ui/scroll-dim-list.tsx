import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type ScrollDimListProps = {
  items: string[];
  lead?: string;
  className?: string;
};

/**
 * Sticky, scroll-driven list where each line brightens as it reaches the
 * centre of the viewport and dims again as it leaves.
 */
export function ScrollDimList({ items, lead, className = "" }: ScrollDimListProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>("[data-dim-line]");
      if (lines.length < 2) return;

      gsap.set(lines, { opacity: (i: number) => (i === 0 ? 1 : 0.18) });

      const dimmer = gsap
        .timeline()
        .to(lines.slice(1), { opacity: 1, stagger: 0.5 })
        .to(lines.slice(0, lines.length - 1), { opacity: 0.18, stagger: 0.5 }, 0);

      ScrollTrigger.create({
        trigger: lines[0]!,
        endTrigger: lines[lines.length - 1]!,
        start: "center center",
        end: "center center",
        animation: dimmer,
        scrub: 0.2,
      });
    }, el);

    return () => ctx.revert();
  }, [items]);

  return (
    <div ref={root} className={className}>
      {lead ? <p className="type-label mb-10 text-light-blue/70">{lead}</p> : null}
      <ul className="py-[35vh]">
        {items.map((text, i) => (
          <li
            key={text}
            data-dim-line
            className="flex min-w-0 items-baseline gap-5 py-[3vh] md:gap-10"
            style={{ opacity: i === 0 ? 1 : 0.18 }}
          >
            <span className="type-label shrink-0 text-light-blue/60">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-display text-[clamp(2rem,6vw,5rem)] leading-[1] tracking-[-0.04em]">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
