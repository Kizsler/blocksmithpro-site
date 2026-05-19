import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET() {
  const { data: leads, error } = await supabase
    .from("wcbfm_leads")
    .select("first_name, company, email, phone, created_at")
    .order("created_at", { ascending: true });

  if (error) {
    return new Response("Error fetching leads", { status: 500 });
  }

  const header = "First Name,Company,Email,Phone,Date\n";
  const rows = (leads ?? [])
    .map((l) =>
      [
        `"${l.first_name}"`,
        `"${l.company}"`,
        `"${l.email}"`,
        `"${l.phone}"`,
        `"${new Date(l.created_at).toLocaleString()}"`,
      ].join(",")
    )
    .join("\n");

  return new Response(header + rows, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": 'attachment; filename="wcbfm-leads.csv"',
    },
  });
}
