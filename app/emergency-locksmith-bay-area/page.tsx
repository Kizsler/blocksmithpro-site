import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site-data";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, BUSINESS_ID, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Emergency Locksmith Bay Area | 24/7 Dispatch | B&B Locksmith",
  description:
    "Locked out? B&B Locksmith dispatches 24/7 across the Bay Area with a under-30-minute average ETA. Home, business, and car lockouts. Licensed C-28, bonded & insured. Call now.",
  alternates: { canonical: "/emergency-locksmith-bay-area" },
};

const EMERGENCIES = [
  {
    title: "Home Lockouts",
    desc: "Locked out of your house or apartment. Non-destructive entry first — we open the door without wrecking the lock whenever the hardware allows it.",
  },
  {
    title: "Business Lockouts",
    desc: "Storefronts, offices, and back-of-house doors. We get your team in and your doors secured so the day keeps moving.",
  },
  {
    title: "Car Lockouts",
    desc: "Keys locked in the car, lost keys, dead fobs. Non-destructive vehicle entry plus transponder and fob programming on the truck.",
  },
  {
    title: "Broken Key Extraction",
    desc: "Key snapped off in the cylinder. We extract the fragment and cut a fresh key on-site — rekeying the lock if the break damaged it.",
  },
  {
    title: "Post-Break-In Rekeying",
    desc: "After a burglary or attempted entry, we rekey or replace compromised locks and secure damaged doors and frames the same visit.",
  },
  {
    title: "Safe Lockouts",
    desc: "Locked-out safes and vaults opened by a licensed technician — and put back into service, not left as scrap.",
  },
] as const;

const STEPS = [
  {
    title: "Call or text",
    desc: `Reach us any hour at ${CONTACT.phone1} or text ${CONTACT.phone2}. A person answers — no phone tree.`,
  },
  {
    title: "We dispatch",
    desc: "The nearest truck rolls from our Walnut Creek hub. Average ETA across our service area is under 30 minutes.",
  },
  {
    title: "On-site work",
    desc: "Your technician confirms the scope and the price with you before any work begins. Non-destructive methods come first.",
  },
  {
    title: "Secured & verified",
    desc: "You're back in, the hardware works, and you get straight answers on anything worth upgrading — no pressure.",
  },
] as const;

const FAQS = [
  {
    question: "How fast can an emergency locksmith reach me in the Bay Area?",
    answer:
      "B&B Locksmith dispatches from Walnut Creek 24 hours a day, 7 days a week, with an average ETA under 30 minutes across our Bay Area service area. We serve San Francisco, Oakland, San Jose, Fremont, Walnut Creek, Berkeley, Concord, San Ramon, Dublin, Pleasanton, Livermore, and Richmond. Exact timing depends on where you are and traffic, so call 415-423-0182 and dispatch will give you a real ETA for your location before the truck rolls.",
  },
  {
    question: "How much does an emergency locksmith cost?",
    answer:
      "It depends on the lock type, the time of day, and whether hardware needs to be replaced — which is why B&B Locksmith quotes the price with you on-site before any work begins. You approve the number first; the work starts second. Be wary of any locksmith advertising a too-good-to-be-true flat rate over the phone — bait-and-switch pricing is the most common complaint in this industry.",
  },
  {
    question: "Can you open my car without damaging it?",
    answer:
      "Yes. B&B Locksmith uses non-destructive entry tools for vehicle lockouts, so your door, window, and weather stripping stay intact. If your keys are lost rather than locked inside, we cut and program replacement keys and fobs on the truck, including transponder keys for most makes and models — no tow to the dealership required.",
  },
  {
    question: "Should I rekey or replace my locks after a break-in?",
    answer:
      "In most cases rekeying is enough: the lock body stays, the pins change, and every old key stops working. B&B Locksmith replaces hardware only when the break-in physically damaged the lock, the door, or the strike — or when an upgrade to higher-security hardware makes sense for how the property is used. Your technician will show you the damage and walk you through both options on-site.",
  },
  {
    question: "Are your emergency technicians licensed?",
    answer:
      "Yes. B&B Locksmith & Security Inc. is a licensed C-28 contractor, bonded and insured, serving the Bay Area since 2009. Our technicians verify ownership before opening any home, business, or vehicle — bring photo ID or proof of residence. That protects you: a locksmith who will open any door for anyone is a locksmith you don't want to hire.",
  },
] as const;

const emergencyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/emergency-locksmith-bay-area#service`,
  name: "Emergency Locksmith",
  serviceType: "24/7 Emergency Locksmith",
  description:
    "24/7 emergency lockout service for homes, businesses, and vehicles across the San Francisco Bay Area.",
  url: `${SITE_URL}/emergency-locksmith-bay-area`,
  provider: { "@id": BUSINESS_ID },
  areaServed: { "@type": "Place", name: "San Francisco Bay Area" },
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

export default function EmergencyLocksmithPage() {
  return (
    <main style={{ backgroundColor: "#F4F0E6", color: "#1A1A1A" }}>
      <JsonLd
        data={[
          emergencyServiceSchema,
          faqSchema([...FAQS]),
          breadcrumbSchema([
            {
              name: "Emergency Locksmith Bay Area",
              path: "/emergency-locksmith-bay-area",
            },
          ]),
        ]}
      />

      {/* ===== HERO — call-first ===== */}
      <section
        className="relative overflow-hidden border-b"
        style={{ backgroundColor: "#1A1A1A", borderColor: "#F4F0E61A" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-center gap-6 px-6 py-20 sm:px-10 lg:py-28">
          <span
            className="text-[10px] uppercase tracking-[0.4em]"
            style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
          >
            24/7 · Bay Area dispatch · &lt; 30 min average ETA
          </span>
          <h1
            className="mt-2 uppercase leading-[0.85] tracking-[-0.01em] text-[clamp(2.75rem,7vw,6rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
          >
            Emergency locksmith,
            <br />
            Bay Area.
          </h1>
          <p
            className="max-w-2xl text-base sm:text-lg"
            style={{ fontFamily: "var(--f-body)", color: "#F4F0E6CC" }}
          >
            Locked out of your home, business, or car? B&B Locksmith dispatches
            from Walnut Creek around the clock. A licensed technician confirms
            the price with you on-site before any work begins.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${CONTACT.phone1}`}
              className="group inline-flex items-center gap-3 border px-7 py-4 text-[12px] uppercase tracking-[0.3em] transition-colors"
              style={{
                borderColor: "#E63946",
                backgroundColor: "#E63946",
                color: "#F4F0E6",
                fontFamily: "var(--f-mono)",
              }}
            >
              ☎ Call {CONTACT.phone1} now
            </a>
            <a
              href={`sms:${CONTACT.phone2}`}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--f-mono)", color: "#F4F0E6CC" }}
            >
              or text {CONTACT.phone2} →
            </a>
          </div>
          <p
            className="text-[10px] uppercase tracking-[0.25em]"
            style={{ fontFamily: "var(--f-mono)", color: "#F4F0E699" }}
          >
            Licensed C-28 contractor · Bonded &amp; insured · Since 2009
          </p>
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
            Emergencies we roll for
          </h2>
          <div
            className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"
            style={{ backgroundColor: "#1A1A1A1A" }}
          >
            {EMERGENCIES.map((item) => (
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

      {/* ===== HOW IT WORKS ===== */}
      <section
        className="relative border-b"
        style={{ backgroundColor: "#1A1A1A", borderColor: "#F4F0E61A" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <h2
            className="mb-12 uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.25rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
          >
            From your call to your door
          </h2>
          <div
            className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4"
            style={{ backgroundColor: "#F4F0E61A" }}
          >
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="flex flex-col gap-4 p-6 sm:p-8"
                style={{ backgroundColor: "#1A1A1A" }}
              >
                <span
                  className="text-[10px] uppercase tracking-[0.35em]"
                  style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
                >
                  Step 0{i + 1}
                </span>
                <h3
                  className="uppercase leading-[0.95] text-xl"
                  style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--f-body)", color: "#F4F0E6CC" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
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
            Emergency questions, straight answers
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
            Still locked out?
            <br />
            We&apos;re already awake.
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${CONTACT.phone1}`}
              className="group inline-flex items-center gap-3 border px-7 py-4 text-[11px] uppercase tracking-[0.3em] transition-colors"
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
              href="/services"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--f-mono)", color: "#F4F0E6CC" }}
            >
              Not urgent? See all services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
