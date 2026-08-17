import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type ScrollDimListProps = {
  items: string[];
  lead?: string;
  className?: string;
};

/**
 * Single-line scroll-driven phrase switcher: the active phrase lights up in
 * electric blue while the others fade out. The container width animates to fit
 * the active phrase so no ghost text from longer phrases appears.
 */
export function ScrollDimList({ items, lead, className = "" }: ScrollDimListProps) {
  const root = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const measure = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [widths, setWidths] = useState<number[]>([]);

  useEffect(() => {
    if (!measure.current) return;
    const measured = Array.from(measure.current.children).map(
      (child) => (child as HTMLElement).getBoundingClientRect().width
    );
    setWidths(measured);
  }, [items]);

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

  const activeWidth = widths[activeIndex];

  return (
    <div ref={root} className={`relative inline-block align-baseline ${className}`}>
      {lead ? <p className="type-label mb-10 text-light-blue/70">{lead}</p> : null}

      {/* Off-screen measurement container so widths are captured exactly once. */}
      <ul
        ref={measure}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-0 overflow-hidden opacity-0"
      >
        {items.map((text) => (
          <li key={`m-${text}`} className="whitespace-nowrap font-display text-[clamp(1.25rem,2.4vw,2rem)] leading-[1.2] tracking-[-0.03em]">
            {text}
          </li>
        ))}
      </ul>

      <ul
        ref={list}
        className="relative inline-block h-[1.2em] overflow-hidden transition-[width] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        style={{ width: activeWidth ? `${activeWidth}px` : "auto" }}
      >
        {items.map((text, i) => (
          <li
            key={text}
            data-dim-phrase
            className="absolute left-0 top-0 inline-flex h-full items-center whitespace-nowrap"
            style={{
              opacity: i === activeIndex ? 1 : 0,
              transition: "opacity 0.45s ease",
            }}
          >
            <span
              data-dim-text
              className="font-display text-[clamp(1.25rem,2.4vw,2rem)] leading-[1.2] tracking-[-0.03em]"
              style={{ color: i === activeIndex ? "var(--electric-blue)" : "inherit" }}
            >
              {text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
