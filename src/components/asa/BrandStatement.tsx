import { ScrollDimList } from "@/components/ui/scroll-dim-list";

const LINES = ["Advise", "Train", "Execute", "Move your metrics", "Care for operational excellence"];

export function BrandStatement() {
  return (
    <section
      className="relative h-[280vh] bg-navy-deep text-primary-foreground md:h-[320vh]"
      aria-label="Our commitment"
    >
      <div className="sticky top-0 flex h-[100svh] items-center">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1 md:gap-x-3">
            <span className="type-label text-light-blue/70">Our commitment</span>
            <span className="font-display text-[clamp(1.05rem,2.2vw,1.75rem)] md:text-[clamp(1.25rem,2.8vw,2.25rem)] leading-[1.2] tracking-[-0.03em] text-light-blue/90">
              At ASA, we
            </span>
            <ScrollDimList items={LINES} />
          </div>
        </div>
      </div>
    </section>
  );
}
