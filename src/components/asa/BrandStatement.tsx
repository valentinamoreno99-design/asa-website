import { ScrollDimList } from "@/components/ui/scroll-dim-list";

const LINES = ["Advise", "Train", "Execute", "Move your metrics", "Care for operational excellence"];

export function BrandStatement() {
  return (
    <section className="bg-navy-deep text-primary-foreground" aria-label="Our commitment">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1 md:gap-x-3">
          <span className="type-label text-light-blue/70">Our commitment</span>
          <span className="font-display text-[clamp(1.1rem,2.4vw,2rem)] leading-[1.2] tracking-[-0.03em] text-light-blue/90">
            At ASA, we
          </span>
          <ScrollDimList items={LINES} />
        </div>
      </div>
    </section>
  );
}
