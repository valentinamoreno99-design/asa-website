import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/asa/SiteHeader";
import { Services } from "@/components/asa/Services";
import { WhyAsa } from "@/components/asa/WhyAsa";
import { Experience } from "@/components/asa/Experience";
import { Challenges } from "@/components/asa/Challenges";
import { ContactForm } from "@/components/asa/ContactForm";
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
              <p className="type-label mb-8 text-muted-foreground">
                <span className="mr-4 text-asa-blue">05</span>Selected project
              </p>
              <h2 className="type-h2 max-w-[18ch]">Experience applied where operational performance is at stake.</h2>
            </Reveal>

            <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
              <Reveal className="min-w-0">
                <p className="type-label text-muted-foreground">
                  <span className="mr-4 text-asa-blue">{FEATURED_PROJECT.num}</span>
                  {FEATURED_PROJECT.sector}
                </p>
                <h3 className="type-h3 mt-6 max-w-[26ch]">{FEATURED_PROJECT.title}</h3>

                <dl className="mt-10 grid gap-px overflow-hidden rounded-[10px] border border-rule bg-rule sm:grid-cols-3">
                  {FEATURED_PROJECT.results.map((r) => (
                    <div key={r.label} className="min-w-0 bg-background px-5 py-6">
                      <dt className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-none tracking-[-0.03em] text-asa-blue">
                        {r.value}
                      </dt>
                      <dd className="type-meta mt-3 text-muted-foreground">{r.label}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-8 max-w-[56ch] text-[0.95rem] leading-relaxed text-muted-foreground">
                  {FEATURED_PROJECT.description}
                </p>
              </Reveal>

              <Reveal delay={90} className="min-w-0 lg:pt-2">
                <div className="overflow-hidden rounded-[10px]">
                  <img
                    src={FEATURED_PROJECT.image}
                    alt="Line maintenance technicians performing structural troubleshooting on an aircraft"
                    width={FEATURED_PROJECT.w}
                    height={FEATURED_PROJECT.h}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover grayscale-[35%] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] lg:aspect-[4/5]"
                  />
                </div>
              </Reveal>
            </div>
            <p className="type-meta mt-14 max-w-[60ch] text-muted-foreground">
              Project descriptions are confidentiality-safe. Client names, evidence and measured results are shared
              under agreement.
            </p>
          </div>
        </section>


        {/* Leadership */}
        <section id="leadership" className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10">
            <Reveal className="grid gap-10 border-t border-rule pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
              <div>
                <p className="type-label mb-10 text-muted-foreground">
                  <span className="mr-4 text-asa-blue">06</span>Leadership
                </p>
                <h2 className="type-h2 max-w-[16ch]">Senior experience behind every decision.</h2>
              </div>
              <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
                Clients work directly with the specialists responsible for the scope — not through layers of account
                management.
              </p>
            </Reveal>

            <div className="mt-20 grid gap-x-16 gap-y-16 lg:grid-cols-2">
              {LEADERS.map((leader, i) => (
                <Reveal key={leader.name} delay={i * 80} className="border-t border-rule pt-10">
                  <div className="flex items-start gap-8">
                    <img
                      src={leader.photo}
                      alt={`Portrait of ${leader.name}`}
                      loading="lazy"
                      className="size-28 shrink-0 rounded-[10px] object-cover object-top grayscale transition-all duration-700 hover:grayscale-0 md:size-36"
                    />
                    <div>
                      <h3 className="type-h3">{leader.name}</h3>
                      <p className="type-label mt-4 text-asa-blue">{leader.role}</p>
                    </div>
                  </div>
                  <p className="mt-8 max-w-[50ch] text-[0.95rem] leading-relaxed text-muted-foreground">
                    {leader.statement}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-rule pt-6">
                    {leader.expertise.map((item) => (
                      <li key={item} className="type-meta text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-navy py-24 text-primary-foreground md:py-36">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10">
            <Reveal className="grid gap-16 border-t border-rule-invert pt-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24">
              <div>
                <p className="type-label mb-10 text-light-blue/70">
                  <span className="mr-4 text-light-blue">07</span>Contact
                </p>
                <h2 className="type-h2 max-w-[14ch]">Let's discuss your operational challenge.</h2>
                <p className="type-lead mt-10 max-w-[42ch] text-light-blue/80">
                  Tell us what you need to strengthen, solve or execute. We will come back with a clear view of scope
                  and the right technical profile.
                </p>
              </div>

              <div className="lg:pt-4">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-navy-deep pt-20 pb-12 text-primary-foreground">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-12 border-t border-rule-invert pt-12 md:grid-cols-[minmax(0,1fr)_auto]">
            <img
              src={logoLight.url}
              alt="ASA — Advanced Solutions Aviation"
              width={1920}
              height={430}
              loading="lazy"
              className="h-8 w-auto"
            />
            <nav className="flex flex-wrap gap-x-10 gap-y-4">
              {FOOTER_NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="type-label text-primary-foreground/70 transition-colors hover:text-light-blue"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-20 flex flex-wrap justify-between gap-6 border-t border-rule-invert pt-8">
            <p className="type-meta text-primary-foreground/50">
              © {new Date().getFullYear()} ASA — Advanced Solutions Aviation
            </p>
            <p className="type-meta text-primary-foreground/50">Strengthen. Solve. Execute.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
