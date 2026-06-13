import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site-data";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Locksmith for Property Managers & HOAs | B&B Locksmith Bay Area",
  description:
    "B&B Locksmith is an approved vendor for Bay Area property managers and HOAs — tenant-turnover rekeying, master key systems, gate and access control repair, and work-order service. Licensed C-28, bonded, insured, COI on request.",
  alternates: { canonical: "/property-management" },
};

const SERVICES = [
  {
    title: "Tenant Turnover Rekeying",
    desc: "Rekey units between tenants so old keys stop working — one unit or a whole building, billed cleanly off your work order.",
  },
  {
    title: "Master Key Systems",
    desc: "Design and maintain keying hierarchies so staff open only their doors and management holds the master. Restricted keyways available for key control.",
  },
  {
    title: "Gate & Access Control Repair",
    desc: "Repair automatic and manual gate mechanisms, fob readers, intercoms, and access control for multi-unit and HOA common areas.",
  },
  {
    title: "Door Hardware Repair",
    desc: "Closers, hinges, latches, panic bars, and storefront hardware repaired and kept code-compliant across your portfolio.",
  },
  {
    title: "Emergency Lockouts",
    desc: "Commercial and unit lockouts handled fast, with ownership verified before any door is opened.",
  },
  {
    title: "Lock & Hardware Upgrades",
    desc: "Standardize hardware across units, upgrade to smart locks or keypad entry, and bring common areas up to spec.",
  },
] as const;

const FAQS = [
  {
    question: "Are you an approved locksmith vendor for property management companies?",
    answer:
      "Yes. B&B Locksmith works as an approved vendor for property management companies and HOAs across the Bay Area. We're a licensed C-28 contractor, bonded and insured, and we provide a certificate of insurance (COI) and any vendor-onboarding documentation your company or insurer requires. Send us your vendor packet and we'll complete it.",
  },
  {
    question: "Can you provide a certificate of insurance (COI)?",
    answer:
      "Yes — just tell us who to name as additional insured and where to send it. B&B Locksmith carries liability insurance and a contractor's bond, and we provide COIs as part of standard vendor onboarding for property managers and HOA boards.",
  },
  {
    question: "Do you work from work orders for multiple properties?",
    answer:
      "That's how most of our property-management work runs. Send a work order, we schedule the visit, complete the repair or rekey, and return clean documentation for your records. We handle recurring tickets across portfolios — tenant turnovers, gate repairs, hardware fixes — under one vendor relationship.",
  },
  {
    question: "Can you rekey a whole building or apartment complex?",
    answer:
      "Yes. We rekey single units at turnover or entire buildings, and we can design a master key system so management holds a master while each unit keeps its own key. For larger properties we quote the full scope up front and schedule around tenant access.",
  },
  {
    question: "Do you repair HOA gates and common-area access systems?",
    answer:
      "Yes. B&B Locksmith repairs HOA gate locking mechanisms, fob and keypad entry systems, intercoms, and common-area access control. We can also handle gate hardware compliance inspections and provide written quotes your board can approve before work begins.",
  },
] as const;

const pmServiceSchema = serviceSchema({
  slug: "../property-management",
  title: "Locksmith for Property Managers & HOAs",
  description:
    "Approved-vendor locksmith services for Bay Area property managers and HOAs: tenant-turnover rekeying, master key systems, gate and access control repair, and work-order service.",
});

export default function PropertyManagementPage() {
  return (
    <main style={{ backgroundColor: "#F4F0E6", color: "#1A1A1A" }}>
      <JsonLd
        data={[
          {
            ...pmServiceSchema,
            "@id": "https://blocksmithpro.com/property-management#service",
            url: "https://blocksmithpro.com/property-management",
          },
          faqSchema([...FAQS]),
          breadcrumbSchema([
            { name: "Property Management", path: "/property-management" },
          ]),
        ]}
      />

      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden border-b"
        style={{ backgroundColor: "#1A1A1A", borderColor: "#F4F0E61A" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-center gap-6 px-6 py-20 sm:px-10 lg:py-28">
          <span
            className="text-[10px] uppercase tracking-[0.4em]"
            style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
          >
            For property managers &amp; HOAs
          </span>
          <h1
            className="mt-2 uppercase leading-[0.85] tracking-[-0.01em] text-[clamp(2.5rem,6.5vw,5.5rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
          >
            One locksmith
            <br />
            for your whole portfolio.
          </h1>
          <p
            className="max-w-2xl text-base sm:text-lg"
            style={{ fontFamily: "var(--f-body)", color: "#F4F0E6CC" }}
          >
            B&B Locksmith is an approved vendor for Bay Area property managers and
            HOAs — tenant-turnover rekeying, master key systems, gate and access
            control repair, and door hardware fixes, all run off your work orders.
            Licensed C-28, bonded and insured, with a certificate of insurance on
            request.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${CONTACT.phone1}`}
              className="inline-flex items-center gap-3 border px-7 py-4 text-[12px] uppercase tracking-[0.3em] transition-colors"
              style={{
                borderColor: "#E63946",
                backgroundColor: "#E63946",
                color: "#F4F0E6",
                fontFamily: "var(--f-mono)",
              }}
            >
              ☎ Call {CONTACT.phone1}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--f-mono)", color: "#F4F0E6CC" }}
            >
              Set up a vendor account →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE HANDLE ===== */}
      <section
        className="relative border-b"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <h2
            className="mb-12 uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.25rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
          >
            What we handle for you
          </h2>
          <div
            className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"
            style={{ backgroundColor: "#1A1A1A1A" }}
          >
            {SERVICES.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 p-6 sm:p-8"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <h3
                  className="uppercase leading-[0.95] text-xl sm:text-2xl"
                  style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--f-body)", color: "#1A1A1ACC" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VENDOR TRUST ===== */}
      <section
        className="relative border-b"
        style={{ backgroundColor: "#1A1A1A", borderColor: "#F4F0E61A" }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:py-24">
          <div>
            <h2
              className="uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.25rem)]"
              style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
            >
              Easy to onboard
            </h2>
          </div>
          <div className="space-y-4">
            <p
              className="text-base leading-relaxed sm:text-lg"
              style={{ fontFamily: "var(--f-body)", color: "#F4F0E6CC" }}
            >
              We make vendor setup painless. B&B Locksmith & Security Inc. is a
              licensed C-28 contractor, bonded and insured, serving Bay Area
              commercial clients since 2009. Send us your vendor packet and we'll
              return a certificate of insurance naming your company as additional
              insured, our license and bond details, and W-9 — whatever your
              onboarding requires.
            </p>
            <p
              className="text-base leading-relaxed sm:text-lg"
              style={{ fontFamily: "var(--f-body)", color: "#F4F0E6CC" }}
            >
              From there it's simple: send a work order, we schedule and complete
              the job, and you get clean documentation for your records. One vendor
              for rekeys, gate repairs, hardware fixes, and access control across
              every property you manage.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section
        className="relative border-b"
        style={{ backgroundColor: "#F4F0E6", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 lg:py-24">
          <h2
            className="mb-12 uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.25rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
          >
            Vendor questions
          </h2>
          <div className="space-y-10">
            {FAQS.map((faq) => (
              <div key={faq.question}>
                <h3
                  className="mb-3 text-lg font-semibold sm:text-xl"
                  style={{ fontFamily: "var(--f-body)", color: "#1A1A1A" }}
                >
                  {faq.question}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "var(--f-body)", color: "#1A1A1ACC" }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ backgroundColor: "#08080A" }}>
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 py-20 sm:px-10 lg:py-28">
          <h2
            className="uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2.5rem,6vw,5rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
          >
            Add us as a vendor.
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${CONTACT.phone1}`}
              className="inline-flex items-center gap-3 border px-7 py-4 text-[11px] uppercase tracking-[0.3em] transition-colors"
              style={{
                borderColor: "#E63946",
                backgroundColor: "#E63946",
                color: "#F4F0E6",
                fontFamily: "var(--f-mono)",
              }}
            >
              ☎ Call {CONTACT.phone1}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--f-mono)", color: "#F4F0E6CC" }}
            >
              Email {CONTACT.email} →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
