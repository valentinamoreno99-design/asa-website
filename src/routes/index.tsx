import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/asa/SiteHeader";
import { Services } from "@/components/asa/Services";
import { WhyAsa } from "@/components/asa/WhyAsa";
import { Experience } from "@/components/asa/Experience";
import { Challenges } from "@/components/asa/Challenges";
import { ContactForm } from "@/components/asa/ContactForm";
import { Eyebrow } from "@/components/asa/Eyebrow";
import logoLight from "@/assets/asa-logo-light.png.asset.json";
import heroAsa from "@/assets/hero-asa.jpg.asset.json";
import jhonPhoto from "@/assets/jhon-luna.png.asset.json";
import nicolasPhoto from "@/assets/nicolas-takahashi.png.asset.json";
import mcc from "@/assets/mcc.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ASA — Aviation Technical & Operational Partner" },
      {
        name: "description",
        content:
          "ASA helps airlines, MROs and lessors strengthen, solve and execute: airworthiness capacity, technical control, compliance and capability development led by senior operators.",
      },
      { property: "og:title", content: "ASA — Aviation Technical & Operational Partner" },
      {
        property: "og:description",
        content:
          "Technical expertise for the challenges that keep your operation moving. Operator-led support across airworthiness, technical control, compliance and capability.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FEATURED_PROJECT = {
  num: "01",
  sector: "Regional A320 operator · Americas",
  title: "Operational Transformation & Technical Upskilling — Regional A320 Operator",
  description:
    "On-site shadowing, AOG support and structural troubleshooting criteria implemented directly in line and base maintenance to reduce hangar downtime and eliminate unnecessary OEM escalations.",
  results: [
    { value: "+38%", label: "Structural diagnostics" },
    { value: "+29%", label: "Troubleshooting competency" },
    { value: "+54%", label: "Supervision quality standard" },
  ],
  image: mcc,
  w: 1600,
  h: 1104,
};


const LEADERS = [
  {
    name: "Nicolás Takahashi",
    role: "Partner — Technical Operations",
    photo: nicolasPhoto.url,
    statement:
      "Responsibility for engineering, maintenance planning and technical control inside operating environments where availability and compliance are measured daily.",
    expertise: ["Continuing airworthiness", "Maintenance planning", "Technical control", "Operational governance"],
  },
  {
    name: "Jhon Luna",
    role: "Partner — Capability & Execution",
    photo: jhonPhoto.url,
    statement:
      "Leadership across line and base maintenance, troubleshooting and technical capability development within airline and MRO organizations.",
    expertise: ["Line and base maintenance", "Advanced troubleshooting", "Training and mentoring", "MCC / MOC"],
  },
];

const FOOTER_NAV = [
  { label: "Services", href: "#services" },
  { label: "Why ASA", href: "#why-asa" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  return (
    <div id="top" className="bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative min-h-[88svh] overflow-hidden bg-navy-deep text-primary-foreground">
          <img
            src={heroAsa.url}
            alt="Two ASA aviation engineers reviewing technical data on a tablet beside an aircraft engine in a hangar"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(100deg,var(--navy-deep)_18%,transparent_92%)]" />
          <div className="relative mx-auto flex min-h-[88svh] max-w-[1440px] flex-col justify-end px-6 pt-40 pb-16 md:px-10 md:pb-24">
            <p className="type-label mb-12 text-light-blue">Aviation technical & operational partner</p>
            <h1 className="type-display max-w-[17ch]">
              Technical expertise for the challenges that keep your operation moving.
            </h1>
            <div className="mt-14 grid gap-10 border-t border-rule-invert pt-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
              <p className="type-lead max-w-[52ch] text-light-blue">
                ASA supports airlines, MROs and lessors in strengthening technical capability, solving operational
                problems and executing the work that keeps aircraft available and compliant.
              </p>
              <div className="flex flex-wrap items-start gap-4 lg:justify-end">
                <a
                  href="#contact"
                  className="type-label bg-asa-blue px-8 py-5 transition-colors hover:bg-background hover:text-navy"
                >
                  Start a conversation
                </a>
                <a
                  href="#services"
                  className="type-label border border-rule-invert px-8 py-5 transition-colors hover:border-light-blue"
                >
                  Explore our services
                </a>
              </div>
            </div>
            <p className="type-meta mt-12 text-light-blue/70">Strengthen · Solve · Execute</p>
          </div>
        </section>

        <Services />
        <WhyAsa />
        <Experience />
        <Challenges />

        {/* Projects */}
        <section id="projects" className="bg-warm-white py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10">
            <Reveal className="border-t border-rule pt-8">
              <Eyebrow num="05">Selected project</Eyebrow>
              <h2 className="type-h2 max-w-[18ch]">Experience applied where operational performance is at stake.</h2>
            </Reveal>

            {/* Full-width cover with overlaid title */}
            <Reveal className="relative mt-12 overflow-hidden rounded-[10px]">
              <img
                src={FEATURED_PROJECT.image}
                alt="Line maintenance technicians performing structural troubleshooting on an aircraft"
                width={FEATURED_PROJECT.w}
                height={FEATURED_PROJECT.h}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover grayscale-[35%] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] md:aspect-[21/9]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,var(--navy-deep)_8%,transparent_75%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground md:p-12">
                <p className="type-label text-light-blue">
                  <span className="mr-4">{FEATURED_PROJECT.num}</span>
                  {FEATURED_PROJECT.sector}
                </p>
                <h3 className="type-h3 mt-5 max-w-[30ch]">{FEATURED_PROJECT.title}</h3>
              </div>
            </Reveal>

            {/* Metrics band */}
            <Reveal delay={80} className="mt-12 grid border-y border-rule md:grid-cols-3">
              {FEATURED_PROJECT.results.map((r) => (
                <div
                  key={r.label}
                  className="min-w-0 border-b border-rule py-8 transition-colors duration-500 last:border-b-0 hover:bg-background md:border-b-0 md:border-r md:px-10 md:py-12 md:first:pl-0 md:last:border-r-0"
                >
                  <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.04em] text-asa-blue">
                    {r.value}
                  </p>
                  <p className="type-meta mt-5 text-muted-foreground">{r.label}</p>
                </div>
              ))}
            </Reveal>

            {/* Narrow detail column */}
            <Reveal delay={120} className="mx-auto mt-14 max-w-[62ch]">
              <p className="type-label mb-5 text-muted-foreground">ASA scope</p>
              <p className="text-[1.05rem] leading-relaxed text-foreground/80">{FEATURED_PROJECT.description}</p>
              <p className="type-meta mt-10 border-t border-rule pt-6 text-muted-foreground">
                Project descriptions are confidentiality-safe. Client names, evidence and measured results are shared
                under agreement.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10">
            <Reveal className="grid gap-10 border-t border-rule pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
              <div>
                <Eyebrow num="06" className="mb-10">
                  Leadership
                </Eyebrow>
                <h2 className="type-h2 max-w-[16ch]">Senior experience behind every decision.</h2>
              </div>
              <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
                Clients work directly with the specialists responsible for the scope — not through layers of account
                management.
              </p>
            </Reveal>

            <div className="mt-16">
              {LEADERS.map((leader, i) => (
                <Reveal
                  key={leader.name}
                  className="grid gap-8 border-t border-rule py-14 md:py-20 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16"
                >
                  <div className={`min-w-0 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img
                      src={leader.photo}
                      alt={`Portrait of ${leader.name}`}
                      loading="lazy"
                      className="aspect-[4/5] w-full max-w-[22rem] rounded-[10px] object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
                    />
                  </div>
                  <div className={`min-w-0 self-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="type-label text-asa-blue">{leader.role}</p>
                    <h3 className="mt-5 font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05] tracking-[-0.03em]">
                      {leader.name}
                    </h3>
                    <p className="mt-8 max-w-[56ch] text-[1.05rem] leading-relaxed text-foreground/80">
                      {leader.statement}
                    </p>
                    <ol className="mt-10 grid gap-x-10 gap-y-3 border-t border-rule pt-6 sm:grid-cols-2">
                      {leader.expertise.map((item, j) => (
                        <li key={item} className="type-meta flex gap-4 text-muted-foreground">
                          <span className="text-asa-blue">{String(j + 1).padStart(2, "0")}</span>
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-navy py-24 text-primary-foreground md:py-36">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10">
            <Reveal className="border-t border-rule-invert pt-8">
              <Eyebrow num="07" invert className="mb-10">
                Contact
              </Eyebrow>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
                <h2 className="type-h2 max-w-[16ch]">Let's discuss your operational challenge.</h2>
                <p className="type-lead max-w-[44ch] self-end text-light-blue/80">
                  Tell us what you need to strengthen, solve or execute. We will come back with a clear view of scope
                  and the right technical profile.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80} className="mt-14">
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-navy-deep pt-20 pb-12 text-primary-foreground">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-12 border-t border-rule-invert pt-12 md:grid-cols-3">
            <div>
              <img
                src={logoLight.url}
                alt="ASA — Advanced Solutions Aviation"
                width={1920}
                height={430}
                loading="lazy"
                className="h-8 w-auto"
              />
              <p className="type-meta mt-6 max-w-[30ch] text-primary-foreground/60">
                Aviation technical & operational partner.
              </p>
            </div>

            <nav className="flex flex-col gap-4">
              <p className="type-label mb-2 text-light-blue/70">Navigation</p>
              {FOOTER_NAV.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="type-label flex gap-4 text-primary-foreground/70 transition-colors hover:text-light-blue"
                >
                  <span className="text-asa-blue">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              ))}
            </nav>

            <div>
              <p className="type-label mb-6 text-light-blue/70">Contact</p>
              <a
                href="mailto:valentina@asaviationgroup.com"
                className="link-underline type-meta text-primary-foreground/80"
              >
                valentina@asaviationgroup.com
              </a>
              <p className="type-meta mt-6 text-primary-foreground/60">Strengthen. Solve. Execute.</p>
            </div>
          </div>

          <div className="mt-20 flex flex-wrap justify-between gap-6 border-t border-rule-invert pt-8">
            <p className="type-meta text-primary-foreground/50">
              © {new Date().getFullYear()} ASA — Advanced Solutions Aviation
            </p>
            <a href="#top" className="type-meta text-primary-foreground/50 transition-colors hover:text-light-blue">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

