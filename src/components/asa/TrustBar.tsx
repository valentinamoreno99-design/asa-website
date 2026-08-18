import { Reveal } from "@/components/Reveal";
import { ClientLogos } from "@/components/asa/ClientLogos";

const FACTS = [
  { value: "15+", label: "Years of senior operational experience" },
  { value: "350+", label: "Aviation professionals trained" },
  { value: "3", label: "Continents of hands-on delivery" },
];

/** Compact credibility band directly under the hero. */
export function TrustBar() {
  return (
    <section aria-label="Client trust and proof" className="bg-navy py-10 text-primary-foreground md:py-12">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-14">
          <dl className="grid grid-cols-3 gap-6">
            {FACTS.map((fact) => (
              <div key={fact.label} className="min-w-0">
                <dt className="sr-only">{fact.label}</dt>
                <dd>
                  <span className="block font-display text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[0.9] tracking-[-0.045em] text-light-blue">
                    {fact.value}
                  </span>
                  <span className="type-meta mt-3 block max-w-[18ch] text-primary-foreground/65">{fact.label}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="min-w-0">
            <p className="type-label mb-4 text-light-blue/70">Trusted by operators such as</p>
            <ClientLogos invert />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
