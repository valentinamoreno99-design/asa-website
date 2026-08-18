import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useServerFn } from "@tanstack/react-start";
import { Reveal } from "@/components/Reveal";
import { submitLead } from "@/lib/leads.functions";

const CALENDLY = "https://calendly.com/valentina-asaviationgroup/30min";

const ROTATING = ["challenge", "downtime", "audit finding", "fleet transition", "capability gap"];

const fieldClass =
  "w-full border-b border-rule-invert bg-transparent py-4 text-[0.95rem] text-primary-foreground placeholder:text-light-blue/40 focus:border-light-blue focus:outline-none";

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % ROTATING.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={ROTATING[index]}
          initial={{ y: "0.75em", opacity: 0, filter: "blur(5px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-0.75em", opacity: 0, filter: "blur(5px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="col-start-1 row-start-1 text-light-blue"
        >
          {ROTATING[index]}.
        </motion.span>
      </AnimatePresence>
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        fleet transition.
      </span>
    </span>
  );
}

export function FinalCTA() {
  const send = useServerFn(submitLead);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    setState("sending");
    setError("");
    try {
      await send({
        data: {
          name: String(fd.get("name") ?? ""),
          company: String(fd.get("company") ?? ""),
          role: String(fd.get("role") ?? ""),
        },
      });
      setState("done");
      window.open(CALENDLY, "_blank", "noopener,noreferrer");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="bg-navy-deep py-16 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="border-t border-rule-invert pt-10">
          <p className="type-label text-light-blue/70">Advise · Train · Execute</p>
          <h2 className="type-h2 mt-6 max-w-[20ch]">
            Let&apos;s talk about your <RotatingWord />
          </h2>
          <p className="type-lead mt-6 max-w-[52ch] text-light-blue/80">
            A 30-minute conversation with an ASA specialist — not an account manager. Tell us who you are and book
            directly.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-12 grid gap-10 border-t border-rule-invert pt-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          {state === "done" ? (
            <div className="min-w-0">
              <p className="type-h3 max-w-[26ch]">Thank you — pick a time that works for you.</p>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="type-label mt-8 inline-block bg-asa-blue px-8 py-5 transition-colors hover:bg-background hover:text-navy"
              >
                Open the booking page
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="min-w-0">
              <div className="grid gap-x-10 sm:grid-cols-3">
                <label className="block">
                  <span className="type-label text-light-blue/70">Name</span>
                  <input name="name" required maxLength={120} className={fieldClass} placeholder="Full name" />
                </label>
                <label className="block">
                  <span className="type-label text-light-blue/70">Company</span>
                  <input name="company" required maxLength={160} className={fieldClass} placeholder="Organization" />
                </label>
                <label className="block">
                  <span className="type-label text-light-blue/70">Role</span>
                  <input name="role" maxLength={160} className={fieldClass} placeholder="Position" />
                </label>
              </div>

              {state === "error" ? <p className="type-meta mt-6 text-light-blue">{error}</p> : null}

              <button
                type="submit"
                disabled={state === "sending"}
                className="type-label mt-10 inline-block bg-asa-blue px-8 py-5 transition-colors hover:bg-background hover:text-navy disabled:opacity-60"
              >
                {state === "sending" ? "One moment…" : "Book 30 minutes with a specialist"}
              </button>
            </form>
          )}

          <div className="min-w-0 self-end">
            <p className="type-meta max-w-[36ch] text-light-blue/70">
              Prefer email? Write to{" "}
              <a href="mailto:contact@asaviationgroup.com" className="link-underline text-primary-foreground">
                contact@asaviationgroup.com
              </a>{" "}
              and we will come back with a clear view of scope and the right technical profile.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
