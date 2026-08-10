import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

function safeNext(value: unknown): string {
  if (typeof value !== "string") return "/";
  if (!value.startsWith("/") || value.startsWith("//")) return "/";
  return value;
}

export const Route = createFileRoute("/auth")({
  ssr: false,
  validateSearch: (search: Record<string, unknown>) => ({ next: safeNext(search["next"]) }),
  head: () => ({
    meta: [
      { title: "Sign in | ASA Advanced Solutions Aviation" },
      {
        name: "description",
        content: "Team sign-in for ASA Advanced Solutions Aviation. Access enquiries and connected assistant tools.",
      },
      { property: "og:title", content: "Sign in | ASA Advanced Solutions Aviation" },
      { property: "og:description", content: "Team sign-in for ASA Advanced Solutions Aviation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { next } = Route.useSearch();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);

    if (mode === "signup") {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}${next}` },
      });
      setBusy(false);
      if (signUpError) {
        setError(signUpError.message);
        return;
      }
      setNotice("Check your inbox to confirm the address, then sign in.");
      setMode("signin");
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (signInError) {
      setError(signInError.message);
      return;
    }
    window.location.href = next;
  }

  async function onGoogle() {
    setError(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: `${window.location.origin}${next}`,
    });
    if (result.error) {
      setError("Google sign-in failed. Try again.");
      return;
    }
    if (result.redirected) return;
    void navigate({ to: next });
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 py-24">
      <p className="type-label text-asa-blue">Team access</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">
        {mode === "signin" ? "Sign in" : "Create your account"}
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Access ASA enquiries and authorize connected assistants.
      </p>

      <form onSubmit={onSubmit} className="mt-10 space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="type-label block">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-rule bg-transparent py-2 text-base outline-none focus:border-asa-blue"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="type-label block">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-b border-rule bg-transparent py-2 text-base outline-none focus:border-asa-blue"
          />
        </div>

        {error ? (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        ) : null}
        {notice ? <p className="text-sm text-asa-blue">{notice}</p> : null}

        <button
          type="submit"
          disabled={busy}
          className="w-full bg-foreground px-6 py-3 text-sm font-medium text-background disabled:opacity-50"
        >
          {busy ? "Working…" : mode === "signin" ? "Sign in" : "Create account"}
        </button>
      </form>

      <button
        type="button"
        onClick={onGoogle}
        className="mt-4 w-full border border-rule px-6 py-3 text-sm font-medium"
      >
        Continue with Google
      </button>

      <button
        type="button"
        onClick={() => {
          setMode(mode === "signin" ? "signup" : "signin");
          setError(null);
        }}
        className="mt-8 type-label text-left text-muted-foreground underline underline-offset-4"
      >
        {mode === "signin" ? "Need an account? Sign up" : "Already have an account? Sign in"}
      </button>
    </main>
  );
}
