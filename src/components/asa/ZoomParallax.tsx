import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import camo from "@/assets/ops-1.jpeg.asset.json";
import maintenance from "@/assets/ops-5.jpeg.asset.json";
import planning from "@/assets/ops-3.jpeg.asset.json";
import trainings from "@/assets/ops-4.jpeg.asset.json";
import courses from "@/assets/ops-6.jpeg.asset.json";
import transfers from "@/assets/ops-2.jpeg.asset.json";
import hero from "@/assets/hero-asa.jpg.asset.json";

type Item = {
  src: string;
  alt: string;
  /** Positioning + sizing classes per breakpoint. Literals keep Tailwind extraction working. */
  className: string;
  mobileClassName: string;
  scaleFactor: number;
  mobileScaleFactor: number;
};

const ITEMS: Item[] = [
  {
    src: hero.url,
    alt: "ASA specialists reviewing technical data beside an aircraft",
    className: "h-[26vh] w-[26vw] min-w-[240px]",
    mobileClassName: "h-[22vh] w-[62vw]",
    scaleFactor: 4.6,
    mobileScaleFactor: 3.4,
  },
  {
    src: camo.url,
    alt: "Close-up of an engine nacelle and fan on the apron",
    className: "-top-[28vh] left-[6vw] h-[26vh] w-[32vw] min-w-[220px]",
    mobileClassName: "-top-[27vh] left-[8vw] h-[18vh] w-[46vw]",
    scaleFactor: 5,
    mobileScaleFactor: 3.9,
  },
  {
    src: maintenance.url,
    alt: "Aircraft on jacks during landing-gear maintenance in the hangar",
    className: "-top-[10vh] -left-[30vw] h-[24vh] w-[26vw] min-w-[200px]",
    mobileClassName: "-top-[6vh] -left-[36vw] h-[17vh] w-[40vw]",
    scaleFactor: 6,
    mobileScaleFactor: 4.6,
  },
  {
    src: planning.url,
    alt: "Engine fan blades inspected up close",
    className: "top-[28vh] left-[2vw] h-[22vh] w-[24vw] min-w-[200px]",
    mobileClassName: "top-[26vh] left-[4vw] h-[16vh] w-[42vw]",
    scaleFactor: 5,
    mobileScaleFactor: 4.1,
  },
  {
    src: trainings.url,
    alt: "Fluorescent penetrant inspection of an aircraft structure",
    className: "top-[26vh] -left-[26vw] h-[20vh] w-[22vw] min-w-[180px]",
    mobileClassName: "top-[24vh] -left-[32vw] h-[15vh] w-[38vw]",
    scaleFactor: 6,
    mobileScaleFactor: 4.8,
  },
  {
    src: courses.url,
    alt: "Widebody aircraft nose view on the apron during ground checks",
    className: "top-[4vh] left-[30vw] h-[22vh] w-[24vw] min-w-[200px]",
    mobileClassName: "top-[2vh] left-[38vw] h-[16vh] w-[40vw]",
    scaleFactor: 8,
    mobileScaleFactor: 5.6,
  },
  {
    src: transfers.url,
    alt: "White-tail widebody aircraft ready for delivery",
    className: "-top-[26vh] -left-[16vw] h-[22vh] w-[22vw] min-w-[180px]",
    mobileClassName: "-top-[24vh] -left-[20vw] h-[15vh] w-[38vw]",
    scaleFactor: 9,
    mobileScaleFactor: 6.2,
  },
];

function useIsMobileViewport() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export function ZoomParallax() {
  const container = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobileViewport();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative h-[200vh] bg-navy-deep md:h-[300vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {ITEMS.map((item, i) => (
          <Picture key={item.src + i} item={item} progress={scrollYProgress} isMobile={isMobile} />
        ))}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-[linear-gradient(to_top,var(--navy-deep)_2%,transparent_35%)] pb-10">
          <p className="type-meta text-center text-light-blue/70">Real operations · Real aircraft · Real teams</p>
        </div>
      </div>
    </div>
  );
}

function Picture({
  item,
  progress,
  isMobile,
}: {
  item: Item;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  isMobile: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const target = isMobile ? item.mobileScaleFactor : item.scaleFactor;
  const scale = useTransform(progress, [0, 1], [1, reduceMotion ? 1 : target]);

  return (
    <motion.div
      style={{ scale }}
      className="absolute top-0 left-0 flex h-full w-full items-center justify-center will-change-transform"
    >
      <div className={`relative overflow-hidden rounded-[8px] ${isMobile ? item.mobileClassName : item.className}`}>
        <img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
    </motion.div>
  );
}
