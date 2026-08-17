import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/asa/SiteHeader";
import { Services } from "@/components/asa/Services";
import { WhyAsa } from "@/components/asa/WhyAsa";
import { Experience } from "@/components/asa/Experience";
import { Challenges } from "@/components/asa/Challenges";
import { BrandStatement } from "@/components/asa/BrandStatement";
import { WhisperHeadline } from "@/components/asa/WhisperHeadline";
import { ContactForm } from "@/components/asa/ContactForm";
import { Eyebrow } from "@/components/asa/Eyebrow";
import logoLight from "@/assets/primary-logo-light-2.png.asset.json";
import heroAsa from "@/assets/hero-section-3.png.asset.json";
import jhonPhoto from "@/assets/jhon-luna.png.asset.json";
import nicolasPhoto from "@/assets/nicolas-takahashi.png.asset.json";

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

const LEADERS = [
  {
    name: "Jhon Luna",
    role: "Co-Founder & Technical Director",
    years: "20+ years",
    photo: jhonPhoto.url,
    statement:
      "Airline engineering, maintenance and technical leadership across AviancaTACA, Viva Air and Alma Air.",
    linkedin: "https://www.linkedin.com/in/jhon-luna-a0968060/",
  },
  {
    name: "Nicolás Takahashi",
    role: "Co-Founder & Managing Director",
    years: "28+ years",
    photo: nicolasPhoto.url,
    statement:
      "Airline engineering, maintenance, contracts and strategic projects across Avianca, Viva Air and Dutch Antilles Express.",
    linkedin: "https://www.linkedin.com/in/nicolas-takahashi-asa/",
  },
];


const FOOTER_NAV = [
  { label: "Challenges", href: "#challenges" },
  { label: "Services", href: "#services" },
  { label: "Why ASA", href: "#why-asa" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  return (
    <div id="top" className="bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative min-h-[92svh] overflow-hidden bg-navy-deep text-primary-foreground">
          <img
            src={heroAsa.url}
            alt="Two ASA aviation specialists reviewing technical data on a tablet beside an aircraft engine in a hangar"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(100deg,var(--navy-deep)_18%,transparent_92%)]" />
          <div className="relative mx-auto flex min-h-[92svh] max-w-[1440px] flex-col justify-end px-6 pt-36 pb-14 md:px-10 md:pb-20">
            <p className="type-label mb-10 text-light-blue">Aviation technical & operational partner</p>
            <WhisperHeadline
              text="Technical expertise for the challenges that keep your operation moving."
              className="type-display max-w-[17ch]"
            />
            <div className="mt-12 grid gap-8 border-t border-rule-invert pt-8 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
              <p className="type-lead max-w-[52ch] text-light-blue">
                ASA supports airlines, MROs and lessors in strengthening technical capability, solving operational
                problems and executing the work that keeps aircraft available and compliant.
              </p>
              <div className="flex flex-wrap items-start gap-3 lg:justify-end">
                <a
                  href="#contact"
                  className="type-label bg-asa-blue px-7 py-4 transition-colors hover:bg-background hover:text-navy"
                >
                  Start a conversation
                </a>
                <a
                  href="#services"
                  className="type-label border border-rule-invert px-7 py-4 transition-colors hover:border-light-blue"
                >
                  Explore our services
                </a>
              </div>
            </div>
            <p className="type-meta mt-10 text-light-blue/70">Strengthen · Solve · Execute</p>
          </div>
        </section>

        <Challenges />
        <Services />
        <WhyAsa />
        <BrandStatement />
        <Experience />

        {/* Leadership */}
        <section id="leadership" className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10">
            <Reveal className="grid gap-10 border-t border-rule pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
              <div>
                <Eyebrow num="05" className="mb-8">
                  The leaders
                </Eyebrow>
                <h2 className="type-h2 max-w-[16ch]">Senior experience behind every decision.</h2>
              </div>
              <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
                Clients work directly with the specialists responsible for the scope — not through layers of account
                management.
              </p>
            </Reveal>

            <div className="mt-12">
              {LEADERS.map((leader, i) => (
                <Reveal
                  key={leader.name}
                  className="grid gap-8 border-t border-rule py-12 md:py-16 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-14"
                >
                  <div className={`min-w-0 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img
                      src={leader.photo}
                      alt={`Portrait of ${leader.name}`}
                      loading="lazy"
                      className="aspect-[4/5] w-full max-w-[19rem] rounded-[10px] object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
                    />
                  </div>
                  <div className={`min-w-0 self-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="type-label text-asa-blue">{leader.role}</p>
                    <h3 className="mt-4 font-display text-[clamp(1.6rem,2.6vw,2.25rem)] leading-[1.05] tracking-[-0.03em]">
                      {leader.name}
                    </h3>
                    <p className="mt-6 max-w-[56ch] text-[1rem] leading-relaxed text-foreground/80">
                      {leader.statement}
                    </p>
                    <ol className="mt-8 grid gap-x-10 gap-y-3 border-t border-rule pt-6 sm:grid-cols-2">
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
        <section id="contact" className="bg-navy py-20 text-primary-foreground md:py-28">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10">
            <Reveal className="border-t border-rule-invert pt-8">
              <Eyebrow num="06" invert className="mb-8">
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

            <Reveal delay={80} className="mt-12">
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-navy-deep pt-16 pb-10 text-primary-foreground">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-10 border-t border-rule-invert pt-10 md:grid-cols-3">
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

            <nav className="flex flex-col gap-3.5">
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

          <div className="mt-14 flex flex-wrap justify-between gap-6 border-t border-rule-invert pt-8">
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
