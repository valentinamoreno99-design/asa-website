import { useEffect, useState } from "react";
import logoDark from "@/assets/asa-logo-dark.png.asset.json";
import logoLight from "@/assets/asa-logo-light.png.asset.json";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Why ASA", href: "#why-asa" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];


export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-background text-foreground border-b border-rule"
          : "bg-transparent text-primary-foreground"
      }`}
    >
      <div className="mx-auto grid max-w-[1560px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 py-5 md:px-12 lg:grid-cols-[auto_1fr_auto]">
        <a href="#top" className="flex min-w-0 items-center" aria-label="ASA — Advanced Solutions Aviation">
          <img
            src={scrolled || open ? logoDark.url : logoLight.url}
            alt="ASA — Advanced Solutions Aviation"
            width={1920}
            height={430}
            className="h-7 w-auto md:h-8"
          />
        </a>

        <nav className="hidden justify-center gap-9 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline type-label pb-1 opacity-80 transition-opacity hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
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

      {open ? (
        <div className="border-t border-rule bg-background lg:hidden">
          <nav className="mx-auto flex max-w-[1560px] flex-col px-6 py-2 md:px-12">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="type-h3 border-b border-rule py-4 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="type-label mt-4 mb-6 bg-navy px-6 py-4 text-center text-primary-foreground"
            >
              Discuss an operational challenge
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
