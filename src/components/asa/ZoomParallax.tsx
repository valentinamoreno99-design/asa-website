import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import camo from "@/assets/airthworthiness-camo.png.asset.json";
import maintenance from "@/assets/maintenace-line.png.asset.json";
import planning from "@/assets/planning.png.asset.json";
import trainings from "@/assets/technical-trainings.png.asset.json";
import courses from "@/assets/especialized-courses.jpeg.asset.json";
import transfers from "@/assets/transfers.jpeg.asset.json";
import hero from "@/assets/hero-asa.jpg.asset.json";

type Item = {
  src: string;
  alt: string;
  /** Responsive positioning + sizing classes. Tailwind extracts arbitrary values from these literals. */
  className: string;
  scaleFactor: number;
};

const ITEMS: Item[] = [
  {
    src: camo.url,
    alt: "Aircraft on the apron during scheduled maintenance",
    className:
      "top-[10vh] left-[8vw] h-[24vh] w-[84vw] md:top-[12vh] md:left-[10vw] md:h-[22vh] md:w-[30vw]",
    scaleFactor: 3.5,
  },
  {
    src: maintenance.url,
    alt: "Line maintenance technicians working on an aircraft",
    className:
      "top-[38vh] -left-[6vw] h-[20vh] w-[60vw] md:top-[10vh] md:right-[12vw] md:left-auto md:h-[20vh] md:w-[24vw]",
    scaleFactor: 4,
  },
  {
    src: planning.url,
    alt: "Maintenance planning and technical records review",
    className:
      "top-[68vh] left-[18vw] h-[22vh] w-[72vw] md:top-[42vh] md:left-[6vw] md:h-[16vh] md:w-[20vw]",
    scaleFactor: 4.5,
  },
  {
    src: trainings.url,
    alt: "Technical training session for aviation professionals",
    className:
      "hidden md:block md:top-[40vh] md:left-[38vw] md:h-[18vh] md:w-[24vw]",
    scaleFactor: 5,
  },
  {
    src: courses.url,
    alt: "Specialized aviation course in a classroom",
    className:
      "top-[38vh] -right-[6vw] h-[20vh] w-[60vw] md:top-[42vh] md:right-[6vw] md:left-auto md:h-[16vh] md:w-[20vw]",
    scaleFactor: 4.5,
  },
  {
    src: transfers.url,
    alt: "Aircraft transition and delivery process",
    className:
      "hidden md:block md:bottom-[12vh] md:left-[14vw] md:top-auto md:h-[18vh] md:w-[26vw]",
    scaleFactor: 3.5,
  },
  {
    src: hero.url,
    alt: "ASA specialists reviewing technical data beside an aircraft",
    className:
      "hidden md:block md:bottom-[12vh] md:right-[14vw] md:left-auto md:top-auto md:h-[18vh] md:w-[26vw]",
    scaleFactor: 3.5,
  },
];

export function ZoomParallax() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative h-[180vh] bg-navy-deep md:h-[210vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {ITEMS.map((item, i) => (
          <Picture key={item.src + i} item={item} progress={scrollYProgress} />
        ))}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-[linear-gradient(to_top,var(--navy-deep)_2%,transparent_35%)] pb-10">
          <p className="type-meta text-light-blue/70">
            Real operations · Real aircraft · Real teams
          </p>
        </div>
      </div>
    </div>
  );
}

function Picture({
  item,
  progress,
}: {
  item: Item;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const scale = useTransform(progress, [0, 1], [1, item.scaleFactor]);

  return (
    <motion.div
      style={{ scale }}
      className="absolute top-0 left-0 flex h-full w-full items-center justify-center"
    >
      <div
        className={`relative overflow-hidden rounded-[8px] ${item.className}`}
      >
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
}
