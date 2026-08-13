import { motion, useReducedMotion } from "framer-motion";
import heroAsa from "@/assets/hero-asa.jpg.asset.json";

export function Hero() {
  const reduced = !!useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const rise = (delay: number) =>
    reduced
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section className="relative isolate flex min-h-[min(100svh,52rem)] flex-col overflow-hidden bg-navy-deep text-primary-foreground">
      <motion.img
        src={heroAsa.url}
        alt="Two ASA aviation engineers reviewing technical data on a tablet beside an aircraft engine in a hangar"
        width={1920}
        height={1080}
        initial={reduced ? { scale: 1 } : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease }}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[65%_center]"
      />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--navy-deep)_18%,transparent_92%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,var(--navy-deep)_2%,transparent_38%)] lg:hidden" />

      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-6 pt-[clamp(7rem,16vh,11rem)] pb-[clamp(3rem,8vh,6rem)] md:px-10">
        <motion.p {...rise(0.05)} className="type-label mb-[clamp(2rem,5vh,3.5rem)] text-light-blue">
          Aviation technical &amp; operational partner
        </motion.p>

        <motion.h1 {...rise(0.14)} className="type-display max-w-[17ch]">
          Technical expertise for the challenges that keep your operation moving.
        </motion.h1>

        <motion.div
          {...rise(0.26)}
          className="mt-[clamp(2.25rem,5vh,3.5rem)] grid gap-8 border-t border-rule-invert pt-[clamp(1.75rem,3.5vh,2.5rem)] lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-10"
        >
          <p className="type-lead max-w-[52ch] text-light-blue">
            ASA supports airlines, MROs and lessors in strengthening technical capability, solving operational problems
            and executing the work that keeps aircraft available and compliant.
          </p>
          <div className="flex flex-wrap items-start gap-3 sm:gap-4 lg:justify-end">
            <a
              href="#contact"
              className="type-label bg-asa-blue px-7 py-4 transition-colors hover:bg-background hover:text-navy md:px-8 md:py-5"
            >
              Start a conversation
            </a>
            <a
              href="#services"
              className="type-label border border-rule-invert px-7 py-4 transition-colors hover:border-light-blue md:px-8 md:py-5"
            >
              Explore our services
            </a>
          </div>
        </motion.div>

        <motion.p {...rise(0.36)} className="type-meta mt-[clamp(2rem,4vh,3rem)] text-light-blue/70">
          Strengthen · Solve · Execute
        </motion.p>
      </div>
    </section>
  );
}
