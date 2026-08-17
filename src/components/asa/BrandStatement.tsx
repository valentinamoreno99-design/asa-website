import { ScrollDimList } from "@/components/ui/scroll-dim-list";

const LINES = ["Advise", "Train", "Execute", "Move your metrics", "Care for operational excellence"];

export function BrandStatement() {
  return (
    <section className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <div className="pt-20 md:pt-28 lg:pt-0">
            <div className="lg:sticky lg:top-[38vh]">
              <p className="type-label text-light-blue/70">Our commitment</p>
              <p className="mt-6 font-display text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.05] tracking-[-0.03em] text-light-blue">
                At ASA, we
              </p>
            </div>
          </div>
          <ScrollDimList items={LINES} />
        </div>
      </div>
    </section>
  );
}
