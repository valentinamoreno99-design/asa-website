import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const LINES = ["Advise", "Train", "Execute", "Move your metrics", "Care for your operational excellence"];

function Line({ text, index, total, progress }: { text: string; index: number; total: number; progress: MotionValue<number> }) {
  const start = index / (total + 1);
  const end = (index + 1.4) / (total + 1);
  const opacity = useTransform(progress, [start, end], [0.14, 1]);
  const x = useTransform(progress, [start, end], [-18, 0]);

  return (
    <motion.li style={{ opacity, x }} className="flex min-w-0 items-baseline gap-5 border-t border-rule-invert py-5 md:gap-10 md:py-7">
      <span className="type-label shrink-0 text-light-blue/60">{String(index + 1).padStart(2, "0")}</span>
      <span className="font-display text-[clamp(1.75rem,4.6vw,4rem)] leading-[1] tracking-[-0.035em]">{text}</span>
    </motion.li>
  );
}

export function BrandStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });

  return (
    <section className="bg-navy-deep py-20 text-primary-foreground md:py-28">
      <div ref={ref} className="mx-auto max-w-[1440px] px-6 md:px-10">
        <p className="type-label mb-10 text-light-blue/70">Our commitment</p>
        <p className="font-display text-[clamp(1.5rem,3vw,2.6rem)] leading-[1.05] tracking-[-0.03em] text-light-blue">
          At ASA, we
        </p>
        <ol className="mt-8">
          {LINES.map((line, i) => (
            <Line key={line} text={line} index={i} total={LINES.length} progress={scrollYProgress} />
          ))}
        </ol>
      </div>
    </section>
  );
}
