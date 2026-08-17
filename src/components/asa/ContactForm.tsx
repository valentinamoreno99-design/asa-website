import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Reveal } from "@/components/Reveal";
import { submitLead } from "@/lib/leads.functions";

const FOCUS_OPTIONS = [
  "Airworthiness & CAMO",
  "Technical control & line",
  "Audit, compliance & assets",
  "Technical development",
  "Operational strategy",
  "Not sure yet",
];

const fieldClass =
  "w-full border-b border-rule-invert bg-transparent py-4 text-[0.95rem] text-primary-foreground placeholder:text-light-blue/40 focus:border-light-blue focus:outline-none";

export function ContactForm() {
  const send = useServerFn(submitLead);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    setState("sending");
    setError("");
    try {
      await send({
        data: {
          name: String(fd.get("name") ?? ""),
          company: String(fd.get("company") ?? ""),
          email: String(fd.get("email") ?? ""),
          role: String(fd.get("role") ?? ""),
          focus: String(fd.get("focus") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      form.reset();
      setState("done");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (state === "done") {
    return (
      <div className="border-t border-rule-invert pt-10">
        <p className="type-h3 max-w-[24ch]">Thank you — your message has been received.</p>
        <p className="type-meta mt-5 max-w-[46ch] text-light-blue/70">
          We will come back to you shortly to understand the scope in more detail.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-10 border-t border-rule-invert pt-10 lg:grid-cols-2 lg:gap-16">
      {/* Column 1 — details */}
      <div className="min-w-0">
        <p className="type-label mb-6 text-light-blue/70">
          <span className="mr-4 text-light-blue">01</span>Your details
        </p>
        <div className="grid gap-x-10 sm:grid-cols-2">
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
          <label className="block">
            <span className="type-label text-light-blue/70">Email</span>
            <input
              name="email"
              type="email"
              required
              maxLength={255}
              className={fieldClass}
              placeholder="name@company.com"
            />
          </label>
        </div>
        <label className="mt-2 block">
          <span className="type-label text-light-blue/70">Area of interest</span>
          <select name="focus" defaultValue="" className={`${fieldClass} appearance-none`}>
            <option value="" className="text-navy">
              Select an area
            </option>
            {FOCUS_OPTIONS.map((option) => (
              <option key={option} value={option} className="text-navy">
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Column 2 — message */}
      <div className="flex min-w-0 flex-col">
        <p className="type-label mb-6 text-light-blue/70">
          <span className="mr-4 text-light-blue">02</span>Your challenge
        </p>
        <label className="block">
          <span className="type-label text-light-blue/70">What do you need to strengthen, solve or execute?</span>
          <textarea
            name="message"
            required
            rows={7}
            maxLength={2000}
            className={`${fieldClass} resize-none`}
            placeholder="Briefly describe the technical or operational context."
          />
        </label>

        {state === "error" ? <p className="type-meta mt-6 text-light-blue">{error}</p> : null}

        <button
          type="submit"
          disabled={state === "sending"}
          className="type-label mt-10 self-start bg-asa-blue px-8 py-5 transition-colors hover:bg-background hover:text-navy disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Start a conversation"}
        </button>
      </div>
    </form>
  );
}
