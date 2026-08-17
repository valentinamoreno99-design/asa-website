import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export type ZoomImage = { src: string; alt: string };

const POSITIONS = [
  "", // center, largest
  "top-[-30vh] left-[5vw] h-[30vh] w-[35vw]",
  "top-[-10vh] left-[-25vw] h-[45vh] w-[20vw]",
  "left-[27.5vw] h-[25vh] w-[25vw]",
  "top-[27.5vh] left-[5vw] h-[25vh] w-[20vw]",
  "top-[27.5vh] left-[-22.5vw] h-[25vh] w-[30vw]",
  "top-[22.5vh] left-[25vw] h-[15vh] w-[15vw]",
];

const SCALES = [4, 5, 6, 5, 6, 8, 9];

export function ZoomParallax({ images }: { images: ZoomImage[] }) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });

  const s0 = useTransform(scrollYProgress, [0, 1], [1, SCALES[0]!]);
  const s1 = useTransform(scrollYProgress, [0, 1], [1, SCALES[1]!]);
  const s2 = useTransform(scrollYProgress, [0, 1], [1, SCALES[2]!]);
  const s3 = useTransform(scrollYProgress, [0, 1], [1, SCALES[3]!]);
  const s4 = useTransform(scrollYProgress, [0, 1], [1, SCALES[4]!]);
  const s5 = useTransform(scrollYProgress, [0, 1], [1, SCALES[5]!]);
  const s6 = useTransform(scrollYProgress, [0, 1], [1, SCALES[6]!]);
  const scales = [s0, s1, s2, s3, s4, s5, s6];

  return (
    <div ref={container} className="relative h-[280vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.slice(0, 7).map((image, i) => (
          <motion.div
            key={image.src + i}
            style={{ scale: scales[i] ?? s0 }}
            className="absolute top-0 flex h-full w-full items-center justify-center"
          >
            <div
              className={`overflow-hidden rounded-[10px] ${
                POSITIONS[i] ? `relative ${POSITIONS[i]}` : "relative h-[26vh] w-[26vw]"
              }`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
