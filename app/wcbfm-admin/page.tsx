import type { Metadata } from "next";
import { getSupabase } from "@/lib/supabase";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WCBFM Leads | B&B Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function WCBFMAdminPage() {
  const { data: leads, error } = await getSupabase()
    .from("wcbfm_leads")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main style={{ backgroundColor: "#FFFFFF", color: "#1A1A1A" }}>
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10">

        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
            >
              WCBFM 2026 · Lead Capture
            </span>
            <h1
              className="mt-2 uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3rem)]"
              style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
            >
              {leads?.length ?? 0} Lead{leads?.length !== 1 ? "s" : ""}
            </h1>
          </div>
          <Link
            href="/api/wcbfm-export"
            className="inline-flex items-center gap-2 border px-6 py-3 text-[11px] uppercase tracking-[0.3em] transition-colors"
            style={{
              borderColor: "#E63946",
              backgroundColor: "#E63946",
              color: "#FFFFFF",
              fontFamily: "var(--f-mono)",
            }}
          >
            Download CSV →
          </Link>
        </div>

        {error && (
          <p className="text-sm text-red-600">Error loading leads: {error.message}</p>
        )}

        {!error && leads && leads.length === 0 && (
          <p style={{ fontFamily: "var(--f-body)", color: "#1A1A1A66" }}>
            No leads yet. Share the form link at the show.
          </p>
        )}

        {leads && leads.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" style={{ fontFamily: "var(--f-body)" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #1A1A1A" }}>
                  {["First Name", "Company", "Email", "Phone", "Date"].map((h) => (
                    <th
                      key={h}
                      className="py-3 pr-6 text-left text-[10px] uppercase tracking-[0.2em]"
                      style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr
                    key={lead.id}
                    style={{ borderBottom: "1px solid #1A1A1A11" }}
                  >
                    <td className="py-3 pr-6 font-medium">{lead.first_name}</td>
                    <td className="py-3 pr-6">{lead.company}</td>
                    <td className="py-3 pr-6">
                      <a href={`mailto:${lead.email}`} style={{ color: "#E63946" }}>
                        {lead.email}
                      </a>
                    </td>
                    <td className="py-3 pr-6">
                      <a href={`tel:${lead.phone}`}>{lead.phone}</a>
                    </td>
                    <td className="py-3 pr-6 text-xs" style={{ color: "#1A1A1A66" }}>
                      {new Date(lead.created_at).toLocaleDateString("en-US", {
                        month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </section>
    </main>
  );
}
