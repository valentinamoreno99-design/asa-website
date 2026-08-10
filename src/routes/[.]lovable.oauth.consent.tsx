import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type OAuthResult = { redirect_url?: string; redirect_to?: string; client?: { name?: string } | null };

type OAuthApi = {
  getAuthorizationDetails: (id: string) => Promise<{ data: OAuthResult | null; error: { message: string } | null }>;
  approveAuthorization: (id: string) => Promise<{ data: OAuthResult | null; error: { message: string } | null }>;
  denyAuthorization: (id: string) => Promise<{ data: OAuthResult | null; error: { message: string } | null }>;
};

function oauthApi(): OAuthApi {
  return (supabase.auth as unknown as { oauth: OAuthApi }).oauth;
}

export const Route = createFileRoute("/.lovable/oauth/consent")({
  ssr: false,
  validateSearch: (search: Record<string, unknown>) => ({
    authorization_id: typeof search["authorization_id"] === "string" ? search["authorization_id"] : "",
  }),
  beforeLoad: async ({ search, location }) => {
    if (!search.authorization_id) throw new Error("Missing authorization_id");
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      throw redirect({ to: "/auth", search: { next: location.pathname + location.searchStr } });
    }
  },
  loader: async ({ location }) => {
    const authorizationId = new URLSearchParams(location.search).get("authorization_id")!;
    const { data, error } = await oauthApi().getAuthorizationDetails(authorizationId);
    if (error) throw new Error(error.message);
    const immediate = data?.redirect_url ?? data?.redirect_to;
    if (immediate && !data?.client) throw redirect({ href: immediate });
    return data;
  },
  errorComponent: ({ error }) => (
    <main className="mx-auto max-w-md px-6 py-24">
      <h1 className="text-2xl font-semibold tracking-tight">Authorization unavailable</h1>
      <p className="mt-4 text-sm text-muted-foreground">{String((error as Error)?.message ?? error)}</p>
    </main>
  ),
  component: Consent,
});

function Consent() {
  const details = Route.useLoaderData();
  const { authorization_id } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const clientName = details?.client?.name ?? "this application";

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const api = oauthApi();
    const { data, error: decisionError } = approve
      ? await api.approveAuthorization(authorization_id)
      : await api.denyAuthorization(authorization_id);
    if (decisionError) {
      setBusy(false);
      setError(decisionError.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("No redirect returned by the authorization server.");
      return;
    }
    window.location.href = target;
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 py-24">
      <p className="type-label text-asa-blue">Authorization</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">Connect {clientName} to ASA</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        {clientName} will be able to use ASA&apos;s enabled tools as you: reading published service and project content,
        and reviewing or triaging contact enquiries.
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        This does not bypass ASA&apos;s permissions or backend policies.
      </p>

      {error ? (
        <p role="alert" className="mt-6 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <div className="mt-10 flex flex-col gap-3">
        <button
          type="button"
          disabled={busy}
          onClick={() => decide(true)}
          className="w-full bg-foreground px-6 py-3 text-sm font-medium text-background disabled:opacity-50"
        >
          {busy ? "Working…" : "Approve"}
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => decide(false)}
          className="w-full border border-rule px-6 py-3 text-sm font-medium disabled:opacity-50"
        >
          Cancel connection
        </button>
      </div>
    </main>
  );
}
