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
  /** tailwind classes controlling size + position inside the viewport */
  className: string;
  scaleFactor: number;
};

const ITEMS: Item[] = [
  {
    src: camo.url,
    alt: "Aircraft on the apron during scheduled maintenance",
    className: "h-[26vh] w-[62vw] md:h-[25vh] md:w-[25vw]",
    scaleFactor: 4,
  },
  {
    src: maintenance.url,
    alt: "Line maintenance technicians working on an aircraft",
    className: "-top-[28vh] h-[24vh] w-[46vw] md:-top-[30vh] md:h-[28vh] md:w-[35vw]",
    scaleFactor: 5,
  },
  {
    src: planning.url,
    alt: "Maintenance planning and technical records review",
    className: "-left-[30vw] h-[18vh] w-[42vw] md:-left-[27vw] md:h-[45vh] md:w-[20vw]",
    scaleFactor: 6,
  },
  {
    src: trainings.url,
    alt: "Technical training session for aviation professionals",
    className: "left-[30vw] h-[18vh] w-[42vw] md:left-[27.5vw] md:h-[25vh] md:w-[25vw]",
    scaleFactor: 8,
  },
  {
    src: courses.url,
    alt: "Specialized aviation course in a classroom",
    className: "top-[28vh] left-[8vw] h-[20vh] w-[44vw] md:top-[27.5vh] md:left-[5vw] md:h-[25vh] md:w-[20vw]",
    scaleFactor: 9,
  },
  {
    src: transfers.url,
    alt: "Aircraft transition and delivery process",
    className: "top-[28vh] -left-[26vw] h-[20vh] w-[42vw] md:top-[27.5vh] md:-left-[22.5vw] md:h-[25vh] md:w-[30vw]",
    scaleFactor: 6,
  },
  {
    src: hero.url,
    alt: "ASA specialists reviewing technical data beside an aircraft",
    className: "-top-[30vh] -left-[28vw] h-[22vh] w-[42vw] md:-top-[32.5vh] md:-left-[25vw] md:h-[25vh] md:w-[15vw]",
    scaleFactor: 7,
  },
];

export function ZoomParallax() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative h-[280vh] bg-navy-deep md:h-[300vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {ITEMS.map((item, i) => (
          <Picture key={item.src + i} item={item} progress={scrollYProgress} />
        ))}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-[linear-gradient(to_top,var(--navy-deep)_2%,transparent_35%)] pb-10">
          <p className="type-meta text-light-blue/70">Real operations · Real aircraft · Real teams</p>
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
      className="absolute top-0 flex h-full w-full items-center justify-center"
    >
      <div className={`relative overflow-hidden rounded-[10px] ${item.className}`}>
        <img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
    </motion.div>
  );
}
