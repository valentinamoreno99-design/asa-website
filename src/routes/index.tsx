import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap,
  PlaneTakeoff,
  ClipboardList,
  Workflow,
  ShieldCheck,
  PlaneLanding,
  Wrench,
  Layers,
  SlidersHorizontal,
  Handshake,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/asa/SiteHeader";
import { Capabilities } from "@/components/asa/Capabilities";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { ClientLogos } from "@/components/asa/ClientLogos";
import logoLight from "@/assets/asa-logo-light.png.asset.json";
import heroAsa from "@/assets/hero-asa.jpg.asset.json";
import jhonPhoto from "@/assets/jhon-luna.png.asset.json";
import nicolasPhoto from "@/assets/nicolas-takahashi.png.asset.json";
import mcc from "@/assets/mcc.jpg";
import engineDetail from "@/assets/engine-detail.jpg";
import planningOffice from "@/assets/planning-office.jpg";
import auditRecords from "@/assets/audit-records.jpg";
import transitionApron from "@/assets/transition-apron.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ASA — Aviation Technical & Operational Partner" },
      {
        name: "description",
        content:
          "ASA strengthens technical operations, protects aircraft value and builds internal capability for airlines, MROs and lessors through senior operator experience.",
      },
      { property: "og:title", content: "ASA — Aviation Technical & Operational Partner" },
      {
        property: "og:description",
        content:
          "Senior operator experience, embedded execution and capability transfer for airlines, MROs, lessors and aviation organizations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PROOF = [
  { value: "15+ years", label: "Operator experience per consultant" },
  { value: "Operator-led", label: "Engineering, maintenance, planning and technical control" },
  { value: "20+ courses", label: "Specialized technical and leadership programs" },
  { value: "Three continents", label: "Europe, Africa and the Americas" },
];

const CHALLENGES = [
  {
    num: "01",
    title: "Technical capability gaps",
    body: "Critical knowledge is concentrated in too few people, supervisors are promoted without sufficient preparation or teams depend excessively on external escalation.",
    risk: "Decision quality, troubleshooting effectiveness, team autonomy and operational continuity.",
    response: "Specialized courses, mentoring, shadowing, guided practice and technical leadership development.",
    image: engineDetail,
  },
  {
    num: "02",
    title: "Fleet availability under pressure",
    body: "Aircraft remain on ground longer than necessary because of fragmented troubleshooting, slow decisions, recurring defects or unclear coordination.",
    risk: "Dispatch reliability, recovery time, operational continuity and cost.",
    response: "MCC/MOC support, recurrent-defect analysis, troubleshooting and recovery coordination.",
    image: mcc,
  },
  {
    num: "03",
    title: "Planning and engineering capacity constraints",
    body: "Planning, engineering, reliability and records teams are overloaded or lack specialized capacity for a critical period or project.",
    risk: "Maintenance execution, anticipation of technical risk, compliance and aircraft availability.",
    response: "Senior reinforcement for planning, engineering, reliability, records and continuing-airworthiness activities.",
    image: planningOffice,
  },
  {
    num: "04",
    title: "Processes working in isolation",
    body: "Engineering, planning, MCC/MOC, maintenance, supply and operations do not share the same criteria, priorities or traceability.",
    risk: "Speed, first-time-right performance, accountability and decision quality.",
    response: "Process review, interface clarification, decision criteria, governance support and embedded mentoring.",
    image: engineDetail,
  },
  {
    num: "05",
    title: "Compliance and audit exposure",
    body: "Findings, incomplete evidence, records gaps or unclear action ownership increase regulatory and contractual exposure.",
    risk: "Compliance, reputation, schedule and technical asset value.",
    response: "Audit readiness, corrective-action support, record reviews, evidence management and closure follow-up.",
    image: auditRecords,
  },
  {
    num: "06",
    title: "Aircraft transitions and asset protection",
    body: "Delivery, redelivery, inspections and MRO events require tighter technical control and evidence management.",
    risk: "Contractual position, transition schedule, cost and aircraft value.",
    response: "Inspection support, records review, MRO supervision, transition control and technical evidence management.",
    image: transitionApron,
  },
];

const WHY = [
  {
    title: "Operator experience",
    body: "ASA's authority comes from real responsibilities in engineering, maintenance, planning, technical control and leadership.",
  },
  {
    title: "Integrated view",
    body: "ASA connects aircraft, process, compliance, technical capability and leadership within the same scope.",
  },
  {
    title: "Adaptable execution",
    body: "ASA can reinforce a team, assume a defined work package or structure an integrated project.",
  },
  {
    title: "Capability that remains",
    body: "ASA seeks to leave clearer processes, stronger criteria and teams capable of sustaining the result.",
  },
  {
    title: "Senior proximity",
    body: "Clients work directly with experienced specialists who understand the consequence of each technical and operational decision.",
  },
];

const METHOD = [
  { step: "01", title: "Understand the operational reality", body: "Interviews, data and direct observation inside the operation." },
  { step: "02", title: "Define the scope", body: "Boundaries, responsibilities, deliverables and success criteria in writing." },
  { step: "03", title: "Integrate with the operation", body: "Work inside client processes, approvals and regulatory responsibilities." },
  { step: "04", title: "Execute and follow through", body: "Delivery, traceability and closure of the agreed technical scope." },
  { step: "05", title: "Transfer capability", body: "Criteria, documentation and mentoring that remain with the client team." },
];

const PROJECTS = [
  {
    num: "01",
    sector: "Narrow-body operator · Europe",
    title: "Recurrent-defect control in line maintenance",
    scope: "MCC support, recurrent-defect analysis, troubleshooting criteria, technical-control mentoring.",
    outcome: "Clearer escalation criteria and traceable technical decisions across line stations.",
    image: mcc,
    w: 1600,
    h: 1104,
  },
  {
    num: "02",
    sector: "Lessor-supported transition · Americas",
    title: "Redelivery technical control and evidence management",
    scope: "Records review, inspection support, MRO supervision, transition control.",
    outcome: "A controlled transition schedule with consolidated technical evidence at handover.",
    image: engineDetail,
    w: 1200,
    h: 1504,
  },
];

const LEADERS = [
  {
    name: "Nicolás Takahashi",
    role: "Partner — Technical Operations",
    statement:
      "Responsibility for engineering, maintenance planning and technical control inside operating environments where availability and compliance are measured daily.",
    expertise: ["Continuing airworthiness", "Maintenance planning", "Technical control", "Operational governance"],
  },
  {
    name: "Jhon Luna",
    role: "Partner — Capability & Execution",
    statement:
      "Leadership across line and base maintenance, troubleshooting and technical capability development within airline and MRO organizations.",
    expertise: ["Line and base maintenance", "Advanced troubleshooting", "Training and mentoring", "MCC / MOC"],
  },
];

const INQUIRIES = [
  "Technical training",
  "MCC/MOC and line operations",
  "Planning, engineering and CAMO support",
  "Compliance and asset protection",
  "Operational assessment",
  "Partnership",
];

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <p className="type-label text-muted-foreground">
      <span className="mr-4 text-asa-blue">{index}</span>
      {children}
    </p>
  );
}

function Index() {
  return (
    <div id="top" className="bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative min-h-[92vh] overflow-hidden bg-navy-deep text-primary-foreground">
          <img
            src={heroHangar}
            alt="Engineers reviewing technical data beside a narrow-body aircraft in a maintenance hangar"
            width={1920}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,var(--navy-deep)_18%,transparent_92%)]" />
          <div className="relative mx-auto flex min-h-[92vh] max-w-[1560px] flex-col justify-end px-6 pt-40 pb-16 md:px-12 md:pb-24">
            <p className="type-label mb-12 text-light-blue">Aviation technical & operational partner</p>
            <h1 className="type-display max-w-[15ch]">
              Expertise that drives
              <br />
              operational impact.
            </h1>
            <div className="mt-14 grid gap-10 border-t border-rule-invert pt-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
              <p className="type-lead max-w-[52ch] text-light-blue">
                We help airlines, MROs, lessors and aviation organizations strengthen technical operations, protect
                aircraft value and build lasting internal capability through senior operator experience and specialized
                execution.
              </p>
              <div className="flex flex-wrap items-start gap-4 lg:justify-end">
                <a
                  href="#contact"
                  className="type-label bg-asa-blue px-8 py-5 transition-colors hover:bg-background hover:text-navy"
                >
                  Discuss an operational challenge
                </a>
                <a
                  href="#capabilities"
                  className="type-label border border-rule-invert px-8 py-5 transition-colors hover:border-light-blue"
                >
                  Explore our capabilities
                </a>
              </div>
            </div>
            <p className="type-meta mt-12 text-light-blue/70">
              Senior operator experience · Embedded execution · Capability transfer
            </p>
          </div>
        </section>

        {/* Leadership experience */}
        <section className="bg-warm-white py-28 md:py-44">
          <div className="mx-auto max-w-[1560px] px-6 md:px-12">
            <Reveal className="grid gap-10 border-t border-rule pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
              <div>
                <div className="mb-10">
                  <SectionLabel index="01">Leadership experience</SectionLabel>
                </div>
                <h2 className="type-h2 max-w-[15ch]">Experience built inside aviation operations.</h2>
              </div>
              <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
                ASA's specialists bring leadership experience developed within airlines and aviation organizations,
                where availability, compliance, cost and operational continuity were daily responsibilities.
              </p>
            </Reveal>

            <Reveal delay={80} className="mt-20 grid grid-cols-2 gap-px border border-rule bg-rule md:grid-cols-4">
              {["Airlines", "MRO organizations", "Lessors & asset owners", "OEM & technical services"].map((org) => (
                <div key={org} className="flex min-h-32 items-end bg-warm-white p-6">
                  <span className="type-meta text-muted-foreground">{org}</span>
                </div>
              ))}
            </Reveal>
            <p className="type-meta mt-6 text-muted-foreground">
              Leadership experience gained while serving these organizations.
            </p>

            <Reveal delay={120} className="mt-20">
              <p className="type-label mb-8 text-muted-foreground">Selected client experience</p>
              <ClientLogos />
            </Reveal>
          </div>
        </section>

        {/* Operational credibility */}
        <section className="bg-navy py-28 text-primary-foreground md:py-44">
          <div className="mx-auto max-w-[1560px] px-6 md:px-12">
            <Reveal className="border-t border-rule-invert pt-8">
              <p className="type-label mb-10 text-light-blue/70">
                <span className="mr-4 text-light-blue">02</span>Operational credibility
              </p>
              <h2 className="type-h2 max-w-[18ch]">Senior expertise grounded in real operations.</h2>
            </Reveal>

            <div className="mt-24 grid gap-px bg-rule-invert md:grid-cols-2 xl:grid-cols-4">
              {PROOF.map((item, i) => (
                <Reveal key={item.value} delay={i * 70} className="bg-navy pt-8 md:px-8 md:first:pl-0">
                  <p className="type-h2 text-light-blue">{item.value}</p>
                  <p className="type-meta mt-6 max-w-[26ch] pb-8 text-primary-foreground/70">{item.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Operational challenges */}
        <section className="bg-background py-28 md:py-44">
          <div className="mx-auto max-w-[1560px] px-6 md:px-12">
            <Reveal className="grid gap-10 border-t border-rule pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
              <div>
                <div className="mb-10">
                  <SectionLabel index="03">Operational challenges</SectionLabel>
                </div>
                <h2 className="type-h2 max-w-[16ch]">Complex operations demand more than isolated solutions.</h2>
              </div>
              <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
                Availability, compliance, cost, asset value and team capability are interconnected. ASA helps technical
                leaders address these pressures as one operating system.
              </p>
            </Reveal>

            <ChallengeStack items={CHALLENGES} />
          </div>
        </section>

        <Capabilities />

        {/* Why ASA */}
        <section id="why-asa" className="bg-warm-white py-28 md:py-44">
          <div className="mx-auto max-w-[1560px] px-6 md:px-12">
            <Reveal className="border-t border-rule pt-8">
              <div className="mb-10">
                <SectionLabel index="05">Why ASA</SectionLabel>
              </div>
              <h2 className="type-h2 max-w-[16ch]">Experience that moves beyond recommendations.</h2>
            </Reveal>

            <div className="mt-20">
              {WHY.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 50}
                  className="grid gap-6 border-t border-rule py-10 last:border-b md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] md:gap-16"
                >
                  <h3 className="type-h3">{item.title}</h3>
                  <p className="type-lead max-w-[58ch] text-muted-foreground">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="bg-navy-deep py-28 text-primary-foreground md:py-44">
          <div className="mx-auto max-w-[1560px] px-6 md:px-12">
            <Reveal className="grid gap-10 border-t border-rule-invert pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
              <div>
                <p className="type-label mb-10 text-light-blue/70">
                  <span className="mr-4 text-light-blue">06</span>How we work
                </p>
                <h2 className="type-h2 max-w-[15ch]">From operational reality to lasting capability.</h2>
              </div>
            </Reveal>

            <ol className="mt-24 grid gap-px bg-rule-invert md:grid-cols-2 xl:grid-cols-5">
              {METHOD.map((item, i) => (
                <Reveal as="li" key={item.step} delay={i * 60} className="bg-navy-deep pt-8 xl:px-6 xl:first:pl-0">
                  <span className="type-meta text-light-blue">{item.step}</span>
                  <span className="mt-1 mb-6 block h-px w-full bg-rule-invert" />
                  <h3 className="type-h3 max-w-[16ch]">{item.title}</h3>
                  <p className="type-meta mt-4 max-w-[28ch] pb-8 text-primary-foreground/70">{item.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="bg-background py-28 md:py-44">
          <div className="mx-auto max-w-[1560px] px-6 md:px-12">
            <Reveal className="border-t border-rule pt-8">
              <div className="mb-10">
                <SectionLabel index="07">Selected operational projects</SectionLabel>
              </div>
              <h2 className="type-h2 max-w-[18ch]">Experience applied where operational performance is at stake.</h2>
            </Reveal>

            <div className="mt-20 grid gap-x-16 gap-y-24 lg:grid-cols-2">
              {PROJECTS.map((project, i) => (
                <Reveal
                  key={project.num}
                  delay={i * 90}
                  className={i === 1 ? "lg:mt-32" : ""}
                >
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      width={project.w}
                      height={project.h}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover grayscale-[35%] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                    />
                  </div>
                  <p className="type-label mt-8 text-muted-foreground">
                    <span className="mr-4 text-asa-blue">{project.num}</span>
                    {project.sector}
                  </p>
                  <h3 className="type-h3 mt-6 max-w-[22ch]">{project.title}</h3>
                  <dl className="mt-8">
                    <div className="border-t border-rule py-4">
                      <dt className="type-label text-muted-foreground">ASA scope</dt>
                      <dd className="type-meta mt-2 max-w-[54ch]">{project.scope}</dd>
                    </div>
                    <div className="border-t border-b border-rule py-4">
                      <dt className="type-label text-muted-foreground">Operational outcome</dt>
                      <dd className="type-meta mt-2 max-w-[54ch]">{project.outcome}</dd>
                    </div>
                  </dl>
                </Reveal>
              ))}
            </div>
            <p className="type-meta mt-16 max-w-[60ch] text-muted-foreground">
              Project descriptions are confidentiality-safe. Client names, evidence and measured results are shared
              under agreement.
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="bg-warm-white py-28 md:py-44">
          <div className="mx-auto max-w-[1560px] px-6 md:px-12">
            <Reveal className="border-t border-rule pt-8">
              <div className="mb-10">
                <SectionLabel index="08">Leadership</SectionLabel>
              </div>
              <h2 className="type-h2 max-w-[16ch]">Senior experience behind every decision.</h2>
            </Reveal>

            <div className="mt-20 grid gap-px border border-rule bg-rule lg:grid-cols-2">
              {LEADERS.map((leader, i) => (
                <Reveal key={leader.name} delay={i * 80} className="bg-warm-white p-8 md:p-12">
                  <h3 className="type-h3">{leader.name}</h3>
                  <p className="type-label mt-4 text-asa-blue">{leader.role}</p>
                  <p className="type-lead mt-8 max-w-[46ch] text-muted-foreground">{leader.statement}</p>
                  <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-rule pt-6">
                    {leader.expertise.map((item) => (
                      <li key={item} className="type-meta text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
            <p className="type-meta mt-8 text-muted-foreground">
              Supported by a network of senior aviation specialists.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-navy py-28 text-primary-foreground md:py-44">
          <div className="mx-auto max-w-[1560px] px-6 md:px-12">
            <Reveal className="grid gap-16 border-t border-rule-invert pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
              <div>
                <p className="type-label mb-10 text-light-blue/70">
                  <span className="mr-4 text-light-blue">09</span>Start a conversation
                </p>
                <h2 className="type-h2 max-w-[14ch]">Let's discuss your operational challenge.</h2>
                <p className="type-lead mt-10 max-w-[50ch] text-light-blue/80">
                  Whether the priority is technical capability, fleet availability, continuing airworthiness,
                  compliance, asset protection or operational transformation, the conversation begins with
                  understanding your operation.
                </p>
                <a
                  href="mailto:contact@asa-aviation.com"
                  className="type-label mt-14 inline-block bg-asa-blue px-8 py-5 transition-colors hover:bg-background hover:text-navy"
                >
                  Start a conversation
                </a>
              </div>

              <div className="self-end">
                <p className="type-label mb-6 text-light-blue/70">Inquiry focus</p>
                <ul className="border-t border-rule-invert">
                  {INQUIRIES.map((item) => (
                    <li key={item} className="type-meta border-b border-rule-invert py-4 text-primary-foreground/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-navy-deep pt-20 pb-12 text-primary-foreground">
        <div className="mx-auto max-w-[1560px] px-6 md:px-12">
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
              {["Capabilities", "Why ASA", "Projects", "Leadership", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="type-label text-primary-foreground/70 transition-colors hover:text-light-blue"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-20 flex flex-wrap justify-between gap-6 border-t border-rule-invert pt-8">
            <p className="type-meta text-primary-foreground/50">
              © {new Date().getFullYear()} ASA — Advanced Solutions Aviation
            </p>
            <p className="type-meta text-primary-foreground/50">Expertise that drives operational impact.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
