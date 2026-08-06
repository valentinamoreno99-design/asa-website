import { Reveal } from "@/components/Reveal";
import { FeatureSteps, type Feature } from "@/components/ui/feature-section";
import mcc from "@/assets/mcc.jpg";
import engineDetail from "@/assets/engine-detail.jpg";
import planningOffice from "@/assets/planning-office.jpg";
import auditRecords from "@/assets/audit-records.jpg";
import transitionApron from "@/assets/transition-apron.jpg";

const CAPABILITIES: Feature[] = [
  {
    step: "01",
    title: "Technical Training & Leadership Development",
    content:
      "We develop technical and leadership capability through specialized courses, mentoring, shadowing and applied practice designed around the realities of the client's operation.",
    image: engineDetail,
    items: [
      "Specialized and ATA-focused courses",
      "Advanced troubleshooting",
      "Mentoring, coaching and shadowing",
      "Supervisor and leadership development",
      "Competency assessment",
      "Post-training follow-up",
    ],
  },
  {
    step: "02",
    title: "MCC, MOC & Line Technical Operations",
    content:
      "We reinforce technical control and line decision-making to improve troubleshooting, deferred-defect management, recovery coordination and the traceability of operational decisions.",
    image: mcc,
    items: [
      "MCC / MOC support",
      "Defect and recurrent-defect analysis",
      "Deferred-defect and HIL follow-up",
      "MIS traceability",
      "Recovery coordination",
      "Technical-control mentoring",
    ],
  },
  {
    step: "03",
    title: "Planning, Engineering & CAMO Support",
    content:
      "We reinforce planning, engineering and continuing-airworthiness activities with senior expertise that operates inside the client's processes, approvals and regulatory responsibilities.",
    image: planningOffice,
    items: [
      "Maintenance planning and work packages",
      "Engineering and maintenance-program support",
      "AD / SB control",
      "Reliability",
      "Technical records",
      "Embedded team capacity",
    ],
  },
  {
    step: "04",
    title: "Compliance, Audits & Asset Protection",
    content:
      "We provide the technical control, evidence management and senior oversight required for audits, records, MRO events, aircraft transitions and asset-protection projects.",
    image: auditRecords,
    items: [
      "Audit preparation and finding closure",
      "Corrective actions",
      "Compliance and records reviews",
      "Aircraft inspections",
      "MRO supervision",
      "Delivery, redelivery and transitions",
    ],
  },
  {
    step: "05",
    title: "Operational Strategy & Transformation",
    content:
      "We assess the current operation, define practical strategies and support implementation to improve performance, reduce risk and strengthen the technical organization while it continues operating.",
    image: transitionApron,
    items: [
      "Operational and organization assessment",
      "Operating-model analysis",
      "Governance",
      "Maintenance and engineering strategy",
      "Cost and contract analysis",
      "Improvement roadmaps",
    ],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-background py-28 md:py-44">
      <div className="mx-auto max-w-[1560px] px-6 md:px-12">
        <Reveal className="grid gap-10 border-t border-rule pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <p className="type-label mb-10 text-muted-foreground">
              <span className="mr-4 text-asa-blue">04</span>Capabilities
            </p>
            <h2 className="type-h2 max-w-[16ch]">Integrated expertise across the technical operation.</h2>
          </div>
          <p className="type-lead max-w-[46ch] self-end text-muted-foreground">
            ASA combines technical development, specialized execution and operational strategy according to each
            organization's priorities, structure and regulatory context.
          </p>
        </Reveal>

        <Reveal className="mt-20">
          <FeatureSteps features={CAPABILITIES} title="" autoPlayInterval={7000} imageHeight="h-[420px] lg:h-[620px]" />
        </Reveal>
      </div>
    </section>
  );
}
