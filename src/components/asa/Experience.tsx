import { Reveal } from "@/components/Reveal";
import { ClientLogos } from "@/components/asa/ClientLogos";
import { Eyebrow } from "@/components/asa/Eyebrow";
import { ZoomParallax } from "@/components/asa/ZoomParallax";
import trainings from "@/assets/technical-trainings.png.asset.json";
import courses from "@/assets/especialized-courses.jpeg.asset.json";
import camo from "@/assets/airthworthiness-camo.png.asset.json";
import lineOps from "@/assets/maintenace-line.png.asset.json";
import transfers from "@/assets/transfers.jpeg.asset.json";
import planning from "@/assets/planning.png.asset.json";
import hero from "@/assets/hero-section-3.png.asset.json";

const METRICS = [
  { value: "15+", label: "Years of aviation experience per specialist" },
  { value: "20+", label: "Technical and leadership development programs" },
  { value: "350+", label: "Aviation professionals trained" },
  { value: "3", label: "Continents of operational experience" },
];

const CASE_RESULTS = [
  { value: "+38%", label: "Structural diagnostics" },
  { value: "+29%", label: "Troubleshooting competency" },
  { value: "+54%", label: "Supervision quality standard" },
];

const PARALLAX_IMAGES = [
  { src: lineOps.url, alt: "Technicians working inside an aircraft engine cowling" },
  { src: trainings.url, alt: "Instructor leading a technical training session" },
  { src: camo.url, alt: "Aircraft in a hangar at sunset during maintenance" },
  { src: planning.url, alt: "Maintenance planner reviewing an aircraft schedule" },
  { src: transfers.url, alt: "Technical team on the apron beside an aircraft" },
  { src: courses.url, alt: "Specialized aviation course in session" },
  { src: hero.url, alt: "ASA specialists reviewing technical data in a hangar" },
];

export function Experience() {
  return (
    <section id="experience" className="bg-navy text-primary-foreground">
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        {/* Proof */}
        <Reveal className="border-t border-rule-invert pt-8">
          <Eyebrow num="04" invert>
            Proof & selected experience
          </Eyebrow>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
            <h2 className="type-h2 max-w-[18ch]">Experience built in real aviation operations.</h2>
            <p className="type-lead max-w-[48ch] self-end text-light-blue/80">
              Engineering, maintenance, planning, technical control and leadership responsibilities carried inside
              airlines, MROs and aviation organizations — where availability, compliance and cost were measured daily.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-14 grid border-y border-rule-invert sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="min-w-0 border-b border-rule-invert py-8 transition-colors duration-500 last:border-b-0 hover:bg-white/[0.03] sm:border-b sm:px-0 lg:border-b-0 lg:border-r lg:px-8 lg:py-12 lg:first:pl-0 lg:last:border-r-0"
            >
              <p className="font-display text-[clamp(2.5rem,4.4vw,3.75rem)] leading-[0.9] tracking-[-0.045em] text-light-blue">
                {metric.value}
              </p>
              <p className="type-meta mt-5 max-w-[26ch] text-primary-foreground/70">{metric.label}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <p className="type-label mb-8 text-light-blue/70">Selected client experience</p>
          <ClientLogos />
        </Reveal>
      </div>

      {/* Zoom parallax storytelling moment */}
      <div className="hidden md:block">
        <ZoomParallax images={PARALLAX_IMAGES} />
      </div>
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-3 px-6 md:hidden">
        {PARALLAX_IMAGES.slice(0, 4).map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[10px] object-cover"
          />
        ))}
      </div>

      {/* Anonymous success story */}
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        <Reveal className="border-t border-rule-invert pt-8">
          <p className="type-label text-light-blue/70">
            <span className="mr-4 text-light-blue">Case</span>
            Regional A320 operator · Americas
          </p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-16">
            <div className="min-w-0">
              <h3 className="type-h2 max-w-[20ch]">Operational transformation & technical upskilling.</h3>
              <p className="mt-8 max-w-[54ch] text-[1rem] leading-relaxed text-light-blue/80">
                On-site shadowing, AOG support and structural troubleshooting criteria implemented directly in line and
                base maintenance — reducing hangar downtime and removing unnecessary OEM escalations.
              </p>
              <p className="type-meta mt-10 border-t border-rule-invert pt-6 text-primary-foreground/55">
                Presented anonymously. Client identity, evidence and detailed results are shared under agreement.
              </p>
            </div>

            <ul className="grid min-w-0 gap-px overflow-hidden rounded-[10px] bg-white/10">
              {CASE_RESULTS.map((r) => (
                <li
                  key={r.label}
                  className="flex min-w-0 items-baseline justify-between gap-6 bg-navy px-6 py-7 transition-colors duration-500 hover:bg-white/[0.04] md:px-8"
                >
                  <span className="font-display text-[clamp(2.25rem,4vw,3.25rem)] leading-none tracking-[-0.045em] text-light-blue">
                    {r.value}
                  </span>
                  <span className="type-meta max-w-[18ch] text-right text-primary-foreground/70">{r.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
