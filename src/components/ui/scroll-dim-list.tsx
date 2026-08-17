import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type ScrollDimListProps = {
  items: string[];
  lead?: string;
  className?: string;
};

/**
 * Scroll-driven list: the line at the centre of the viewport lights up in
 * electric blue while the others stay dim.
 */
export function ScrollDimList({ items, lead, className = "" }: ScrollDimListProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>("[data-dim-line]");
      if (!lines.length) return;

      if (reduce) {
        gsap.set(lines, { opacity: 1 });
        return;
      }

      const active = getComputedStyle(document.documentElement).getPropertyValue("--electric-blue").trim();

      const setActive = (el: HTMLElement, on: boolean) => {
        gsap.to(el, {
          opacity: on ? 1 : 0.16,
          duration: 0.45,
          ease: "power2.out",
          overwrite: "auto",
        });
        gsap.to(el.querySelector("[data-dim-text]"), {
          color: on ? active : "inherit",
          duration: 0.45,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      gsap.set(lines, { opacity: 0.16 });

      let current = -1;
      const update = () => {
        const centre = window.innerHeight / 2;
        let best = 0;
        let bestDist = Infinity;
        lines.forEach((line, i) => {
          const r = line.getBoundingClientRect();
          const d = Math.abs(r.top + r.height / 2 - centre);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        if (best === current) return;
        if (current >= 0) setActive(lines[current]!, false);
        current = best;
        setActive(lines[best]!, true);
      };

      update();
      ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        onUpdate: update,
        onRefresh: update,
      });
    }, el);

    return () => ctx.revert();
  }, [items]);

  return (
    <div ref={root} className={className}>
      {lead ? <p className="type-label mb-10 text-light-blue/70">{lead}</p> : null}
      <ul className="py-[32vh]">
        {items.map((text, i) => (
          <li
            key={text}
            data-dim-line
            className="flex min-w-0 items-baseline gap-4 py-[5vh] md:gap-10"
            style={{ opacity: i === 0 ? 1 : 0.16 }}
          >
            <span className="type-label shrink-0 text-light-blue/60">{String(i + 1).padStart(2, "0")}</span>
            <span
              data-dim-text
              className="font-display text-[clamp(1.75rem,6vw,5rem)] leading-[1.05] tracking-[-0.04em] break-words"
            >
              {text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
