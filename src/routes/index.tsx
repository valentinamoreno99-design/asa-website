import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/asa/SiteHeader";
import { Services } from "@/components/asa/Services";
import { WhyAsa } from "@/components/asa/WhyAsa";
import { Experience } from "@/components/asa/Experience";
import { Challenges } from "@/components/asa/Challenges";
import { BrandStatement } from "@/components/asa/BrandStatement";
import { ZoomParallax } from "@/components/asa/ZoomParallax";
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
        <ZoomParallax />
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
                You work with people who have held responsibility inside airline engineering and maintenance
                organizations — not through layers of account management.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-10 border-t border-rule pt-12 md:grid-cols-2 md:gap-12">
              {LEADERS.map((leader) => (
                <Reveal key={leader.name} className="min-w-0">
                  <img
                    src={leader.photo}
                    alt={`Portrait of ${leader.name}`}
                    loading="lazy"
                    className="aspect-[4/5] w-full rounded-[8px] object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
                  />
                  <div className="mt-7 flex items-baseline justify-between gap-6 border-t border-rule pt-6">
                    <p className="type-label text-asa-blue">{leader.role}</p>
                    <p className="type-meta text-muted-foreground">{leader.years}</p>
                  </div>
                  <h3 className="mt-4 flex items-center gap-3 font-display text-[clamp(1.6rem,2.6vw,2.25rem)] leading-[1.05] tracking-[-0.03em]">
                    {leader.name}
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${leader.name} on LinkedIn`}
                      className="text-muted-foreground/50 transition-colors hover:text-asa-blue"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[1rem] w-[1rem]" aria-hidden="true">
                        <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.24 8.25h4.5V24H.24V8.25ZM8.34 8.25h4.31v2.15h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-7.95c0-1.9-.03-4.35-2.65-4.35-2.65 0-3.06 2.07-3.06 4.21V24h-4.5V8.25Z" />
                      </svg>
                    </a>
                  </h3>
                  <p className="mt-5 max-w-[46ch] text-[1rem] leading-relaxed text-foreground/80">
                    {leader.statement}
                  </p>
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
                Expertise that drives operational excellence.
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
                href="mailto:contact@asaviationgroup.com"
                className="type-meta flex items-center gap-3 text-primary-foreground/80 transition-colors hover:text-light-blue"
              >
                <Mail className="h-4 w-4 shrink-0 text-light-blue/70" aria-hidden="true" />
                <span className="link-underline min-w-0 break-all">contact@asaviationgroup.com</span>
              </a>
              <address className="type-meta mt-4 flex gap-3 not-italic text-primary-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-light-blue/70" aria-hidden="true" />
                <span className="min-w-0 leading-[1.35] whitespace-pre-line">
                  {"Advanced Solutions Aviation LLC\n1401 Brickell Avenue Ste 330\nMiami, Florida 33131"}
                </span>
              </address>
              <p className="type-meta mt-6 text-primary-foreground/60">Advise. Train. Execute.</p>
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
