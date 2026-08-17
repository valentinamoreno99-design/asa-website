import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type ScrollDimListProps = {
  items: string[];
  lead?: string;
  className?: string;
};

/**
 * Single-line scroll-driven phrase switcher. The active phrase lights up in
 * electric blue while the others collapse to zero width and fade out. The
 * container width follows the active phrase without ghosting from hidden items.
 */
export function ScrollDimList({ items, lead, className = "" }: ScrollDimListProps) {
  const root = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el.closest("[aria-label='Our commitment']") || el,
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
        onUpdate: (self) => {
          const idx = Math.min(Math.floor(self.progress * items.length), items.length - 1);
          setActiveIndex(idx);
        },
      });
    }, el);

    return () => ctx.revert();
  }, [items]);

  return (
    <span ref={root} className={`relative inline-block align-baseline ${className}`}>
      {lead ? <p className="type-label mb-10 text-light-blue/70">{lead}</p> : null}

      {items.map((text, i) => (
        <span
          key={text}
          data-dim-phrase
          className="inline-block overflow-hidden whitespace-nowrap font-display text-[clamp(1.05rem,2.2vw,1.75rem)] leading-[1.2] tracking-[-0.03em] transition-[max-width,opacity] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{
            maxWidth: i === activeIndex ? "1000px" : "0px",
            opacity: i === activeIndex ? 1 : 0,
            color: i === activeIndex ? "var(--electric-blue)" : "inherit",
          }}
        >
          {text}
        </span>
      ))}
    </span>
  );
}
