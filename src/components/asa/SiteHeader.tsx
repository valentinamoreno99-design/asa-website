import { useEffect, useState } from "react";
import logoDark from "@/assets/asa-logo-dark.png.asset.json";
import logoLight from "@/assets/asa-logo-light.png.asset.json";

const NAV = [
  { num: "01", label: "Services", href: "#services" },
  { num: "02", label: "Why ASA", href: "#why-asa" },
  { num: "03", label: "Projects", href: "#projects" },
  { num: "04", label: "Leadership", href: "#leadership" },
  { num: "05", label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);

      let current: string | null = null;
      for (const item of NAV) {
        const el = document.querySelector(item.href);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = item.href;
      }
      setActiveHref(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = scrolled || open;
  const activeItem = NAV.find((item) => item.href === activeHref);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        dark ? "border-b border-rule bg-background text-foreground" : "bg-transparent text-primary-foreground"
      }`}
    >
      <div className="mx-auto grid max-w-[1560px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 py-5 md:px-12 lg:grid-cols-[auto_1fr_auto]">
        <a href="#top" className="flex min-w-0 items-center" aria-label="ASA — Advanced Solutions Aviation">
          <img
            src={dark ? logoDark.url : logoLight.url}
            alt="ASA — Advanced Solutions Aviation"
            width={1920}
            height={430}
            className="h-7 w-auto md:h-8"
          />
        </a>

        <nav className="hidden justify-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`link-underline type-label pb-1 transition-opacity ${
                activeHref === item.href ? "opacity-100" : "opacity-55 hover:opacity-100"
              }`}
            >
              <span className="mr-2 text-asa-blue">{item.num}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <span className="type-label hidden opacity-55 lg:inline">
            {activeItem ? `${activeItem.num} / 05` : "00 / 05"}
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="type-label border border-current px-4 py-3 lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Scroll progress */}
      <div className="relative h-px w-full bg-current/10">
        <span
          className="absolute inset-y-0 left-0 bg-asa-blue transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {open ? (
        <div className="fixed inset-0 top-[calc(4.75rem+1px)] z-40 bg-background lg:hidden">
          <nav className="mx-auto flex h-full max-w-[1560px] flex-col px-6 pt-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="grid grid-cols-[3rem_minmax(0,1fr)] items-baseline border-b border-rule py-6"
              >
                <span className="type-label text-asa-blue">{item.num}</span>
                <span className="font-display text-[1.75rem] leading-none tracking-[-0.03em]">{item.label}</span>
              </a>
            ))}
            <p className="type-meta mt-auto pb-10 text-muted-foreground">Strengthen · Solve · Execute</p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
