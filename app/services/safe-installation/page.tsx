import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/site-data";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

// Dedicated landing page for safes (Google Ads "Safes" campaign lands here).
// It replaces the generic /services/[slug] template for this one slug.

const SLUG = "safe-installation";
const TITLE = "Safes: Sales, Delivery, Installation and Service";
const DESCRIPTION =
  "Commercial, drop and gun safes sold, delivered and bolted down in Walnut Creek, Concord and Contra Costa. Safe opening and combination changes. Free quote.";

export const metadata: Metadata = {
  title: "Safe Installation & Service Contra Costa | B&B Locksmith",
  description: DESCRIPTION,
  alternates: { canonical: `/services/${SLUG}` },
  openGraph: {
    title: "Safe Installation & Service Contra Costa | B&B Locksmith",
    description: DESCRIPTION,
    url: `https://blocksmithpro.com/services/${SLUG}`,
    images: [
      {
        url: "/images/services/safes/safe-delivery-walnut-creek.jpg",
        width: 1600,
        height: 1183,
      },
    ],
  },
};

const tel = (n: string) => `tel:+1${n.replace(/\D/g, "")}`;
const sms = (n: string) => `sms:+1${n.replace(/\D/g, "")}`;
const fmt = (n: string) => {
  const d = n.replace(/\D/g, "");
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
};
const CALL = fmt(CONTACT.phone1);
const TEXT = fmt(CONTACT.phone2);

const TRUST = [
  "Licensed C-28 contractor",
  "Tidel certified",
  "Bonded and insured",
  "Own safe-moving equipment",
];

const SERVICES = [
  {
    title: "Delivery and bolt-down",
    body: "We carry it in, up stairs and through tight doorways, set it in place and anchor it to concrete or wood floors.",
    icon: "truck",
  },
  {
    title: "Drop and depository safes",
    body: "For retail, restaurants and gas stations. Staff deposit without opening the safe. Tidel smart safes installed and serviced.",
    icon: "drop",
  },
  {
    title: "Gun and home safes",
    body: "Hollon, AMSEC and Gardall gun and fire-rated safes, sized to what you store and installed level and secure.",
    icon: "gun",
  },
  {
    title: "Opening and combination changes",
    body: "Lost combination or failed lock? We open it with the least damage, then reset it. Proof of ownership required.",
    icon: "lock",
  },
] as const;

const STEPS = [
  {
    title: "Free on-site look",
    body: "We check what you need to protect, where the safe will sit, the floor under it and the path in from the truck.",
  },
  {
    title: "The right safe, quoted in writing",
    body: "We recommend a size and fire and burglary rating that fits, from Hollon, AMSEC, Gardall or another major brand.",
  },
  {
    title: "Delivered and bolted down",
    body: "Our crew brings it in with our own equipment, anchors it and hands you the combination. Clean site when we leave.",
  },
];

const FAQS = [
  {
    question: "Do you deliver and install safes, or just sell them?",
    answer:
      "Both. We deliver, carry it in, set it in place and bolt it to the floor. We handle stairs and tight doorways and bring the equipment for heavy safes.",
  },
  {
    question: "What kind of safe does my business need?",
    answer:
      "It depends on what you store and how much cash moves through each day. Retail and restaurants usually need a drop or depository safe so staff can deposit without opening it. Offices storing records need a fire-rated safe. We recommend one after a free on-site look.",
  },
  {
    question: "Can you bolt a safe to a concrete or wood floor?",
    answer:
      "Yes. We anchor safes to concrete slabs and to wood subfloors using hardware rated for each. An anchored safe is much harder to carry off.",
  },
  {
    question: "Can you open a safe if we lost the combination?",
    answer:
      "Yes. We open safes with the least damage possible so the safe can go back into service, then reset the combination or code. We ask for proof of ownership before opening any safe.",
  },
  {
    question: "Can you change the combination after an employee leaves?",
    answer:
      "Yes. Changing the combination or code is a quick service call, and it is the first thing to do when someone with access leaves.",
  },
  {
    question: "Do you move safes between offices or buildings?",
    answer:
      "Yes. We relocate safes within a building or across town, including disconnecting and re-anchoring them.",
  },
];

const RED = "#E63946";
const DARK = "#1A1A1A";
const CREAM = "#F4F0E6";
const PINK = "#FF8A93";
const MUTED = "#4A473F";

function Icon({ name }: { name: string }) {
  const common = {
    width: 34,
    height: 34,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: DARK,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "truck":
      return (
        <svg {...common}>
          <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );
    case "drop":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 7h10M9 12h6" />
          <circle cx="12" cy="16" r="1.5" />
        </svg>
      );
    case "gun":
      return (
        <svg {...common}>
          <rect x="5" y="2" width="14" height="20" rx="1.5" />
          <circle cx="12" cy="11" r="3" />
          <path d="M12 8V7M12 15v-1M9 11H8M16 11h-1" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="4" y="10" width="16" height="11" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0" />
          <circle cx="12" cy="15.5" r="1.5" />
        </svg>
      );
  }
}

function Eyebrow({ children, color = "#B8212E" }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="text-[13px] uppercase tracking-[0.18em]"
      style={{ fontFamily: "var(--f-mono)", color }}
    >
      {children}
    </span>
  );
}

function CallButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={tel(CONTACT.phone1)}
        className="inline-flex min-h-[52px] items-center rounded-md px-6 text-[17px] font-bold"
        style={{ backgroundColor: dark ? DARK : RED, color: "#FFFFFF" }}
      >
        Call {CALL}
      </a>
      <a
        href={sms(CONTACT.phone2)}
        className="inline-flex min-h-[52px] items-center rounded-md border-2 px-6 text-[17px] font-bold"
        style={
          dark
            ? { backgroundColor: "#FFFFFF", borderColor: "#FFFFFF", color: DARK }
            : { backgroundColor: "transparent", borderColor: "#FFFFFF", color: "#FFFFFF" }
        }
      >
        Text {TEXT}
      </a>
    </div>
  );
}

export default function SafesPage() {
  const service = { slug: SLUG, title: TITLE, description: DESCRIPTION };

  return (
    <main style={{ backgroundColor: CREAM, color: DARK, fontFamily: "var(--f-body)" }}>
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: "Safes", path: `/services/${SLUG}` },
          ]),
          faqSchema(FAQS),
        ]}
      />

      {/* ===== HERO ===== */}
      <section style={{ backgroundColor: DARK, color: "#FFFFFF" }}>
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 px-6 py-14">
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
            <Eyebrow color={PINK}>Safes · Contra Costa County</Eyebrow>
            <h1
              className="m-0 uppercase leading-[1.02] text-[clamp(2.5rem,6vw,4rem)]"
              style={{ fontFamily: "var(--f-display)", fontWeight: 700 }}
            >
              {TITLE}
            </h1>
            <p className="m-0 max-w-[540px] text-[19px] leading-relaxed" style={{ color: "#D9D6CE" }}>
              The right safe, delivered and bolted down by licensed locksmiths. We supply and
              install commercial, drop and gun safes for businesses and homes, and we open and
              service the safes you already have.
            </p>
            <div className="mt-1">
              <CallButtons />
            </div>
            <a href="#quote" className="text-base font-semibold" style={{ color: PINK }}>
              Or get a free safe quote online →
            </a>
          </div>
          <div className="min-w-0 flex-[1_1_480px]">
            <Image
              src="/images/services/safes/safe-delivery-walnut-creek.jpg"
              alt="Two B&B technicians with the company van and an American Security burglary and fire safe on a hand truck, ready for delivery"
              width={1600}
              height={1183}
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="block h-auto w-full rounded-[10px] border-4"
              style={{ borderColor: RED }}
            />
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="border-b" style={{ backgroundColor: "#FFFFFF", borderColor: "#E2DDD0" }}>
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-9 gap-y-3.5 px-6 py-5 text-[15px] font-bold">
          {TRUST.map((t) => (
            <span key={t} className="inline-flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {t}
            </span>
          ))}
          <span className="font-semibold" style={{ color: "#5A574F" }}>
            We sell <span style={{ color: DARK, fontWeight: 700 }}>Hollon · AMSEC · Gardall</span>
          </span>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="mx-auto max-w-[1200px] px-6 pb-6 pt-[72px]">
        <Eyebrow>What we do</Eyebrow>
        <h2
          className="mb-8 mt-2.5 uppercase leading-[1.05] text-[clamp(2rem,4vw,2.75rem)]"
          style={{ fontFamily: "var(--f-display)", fontWeight: 700 }}
        >
          One crew for the whole job
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="flex flex-col gap-2.5 rounded-[10px] border-t-[5px] bg-white p-7"
              style={{ borderTopColor: RED }}
            >
              <Icon name={s.icon} />
              <h3 className="m-0 text-[21px] font-bold">{s.title}</h3>
              <p className="m-0 text-base leading-relaxed" style={{ color: MUTED }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== RECENT JOB ===== */}
      <section className="mx-auto max-w-[1200px] px-6 pb-2 pt-12">
        <div className="flex flex-wrap overflow-hidden rounded-xl" style={{ backgroundColor: DARK, color: "#FFFFFF" }}>
          <div className="relative min-h-[320px] min-w-0 flex-[1_1_420px]">
            <Image
              src="/images/services/safes/hollon-safes-security-room.jpg"
              alt="Two Hollon safes set side by side on a built platform inside a narrow security room in a new construction home"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex min-w-0 flex-[1_1_380px] flex-col justify-center gap-4 p-10">
            <Eyebrow color={PINK}>Recent job · New construction</Eyebrow>
            <h2
              className="m-0 uppercase leading-[1.05] text-[clamp(1.9rem,3.5vw,2.5rem)]"
              style={{ fontFamily: "var(--f-display)", fontWeight: 700 }}
            >
              1,200 lb of safe. A room barely wider than the safes.
            </h2>
            <p className="m-0 text-[17px] leading-relaxed" style={{ color: "#D9D6CE" }}>
              Two 600 lb Hollon safes, brought in and set side by side on a built platform inside
              a tight security room. This is what our safe-moving equipment and crew are for.
            </p>
            <div className="mt-2 flex flex-wrap gap-6">
              <div>
                <div className="text-4xl font-bold" style={{ fontFamily: "var(--f-display)", color: RED }}>2</div>
                <div className="text-sm" style={{ color: "#BDB7A8" }}>Hollon safes</div>
              </div>
              <div>
                <div className="text-4xl font-bold" style={{ fontFamily: "var(--f-display)", color: RED }}>600 lb</div>
                <div className="text-sm" style={{ color: "#BDB7A8" }}>each</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-wrap items-center gap-12">
          <div className="min-w-0 max-w-[460px] flex-[1_1_360px]">
            <Image
              src="/images/services/safes/hollon-gun-safe-install.jpg"
              alt="B&B technician next to a newly installed black Hollon gun safe with a level on top"
              width={900}
              height={1200}
              sizes="(min-width: 1024px) 460px, 100vw"
              className="block h-auto w-full rounded-[10px]"
            />
          </div>
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
            <Eyebrow>How it works</Eyebrow>
            <h2
              className="m-0 uppercase leading-[1.05] text-[clamp(2rem,4vw,2.75rem)]"
              style={{ fontFamily: "var(--f-display)", fontWeight: 700 }}
            >
              Level, anchored, done right
            </h2>
            <ol className="m-0 flex list-none flex-col gap-[18px] p-0">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span
                    className="flex h-10 w-10 flex-none items-center justify-center rounded-full text-xl font-bold text-white"
                    style={{ backgroundColor: DARK, fontFamily: "var(--f-display)" }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="mb-1 mt-0 text-[19px] font-bold">{step.title}</h3>
                    <p className="m-0 text-base leading-relaxed" style={{ color: MUTED }}>
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== WHO / WHERE ===== */}
      <section style={{ backgroundColor: DARK, color: "#FFFFFF" }}>
        <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 px-6 py-16">
          <div className="flex flex-col gap-3.5">
            <h2 className="m-0 text-[34px] uppercase" style={{ fontFamily: "var(--f-display)", fontWeight: 700 }}>
              Who we work with
            </h2>
            <p className="m-0 text-[17px] leading-relaxed" style={{ color: "#D9D6CE" }}>
              Offices, medical and dental practices, retail stores, restaurants, gas stations,
              property managers and homeowners. If you have cash, records, firearms or valuables
              that need to stay put, we can help.
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            <h2 className="m-0 text-[34px] uppercase" style={{ fontFamily: "var(--f-display)", fontWeight: 700 }}>
              Where we work
            </h2>
            <p className="m-0 text-[17px] leading-relaxed" style={{ color: "#D9D6CE" }}>
              Based in <Link href="/locations/walnut-creek" style={{ color: PINK }}>Walnut Creek</Link>{" "}
              and serving <Link href="/locations/concord" style={{ color: PINK }}>Concord</Link>, Pleasant
              Hill, Lafayette, Martinez, Danville,{" "}
              <Link href="/locations/san-ramon" style={{ color: PINK }}>San Ramon</Link>,{" "}
              <Link href="/locations/dublin" style={{ color: PINK }}>Dublin</Link>, Benicia and the rest of
              Contra Costa County.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto max-w-[900px] px-6 py-[72px]">
        <Eyebrow>FAQ</Eyebrow>
        <h2
          className="mb-7 mt-2.5 uppercase leading-[1.05] text-[clamp(2rem,4vw,2.75rem)]"
          style={{ fontFamily: "var(--f-display)", fontWeight: 700 }}
        >
          Safe questions we hear most
        </h2>
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <details key={faq.question} open={i === 0} className="group rounded-lg bg-white px-6 py-5">
              <summary className="flex cursor-pointer list-none justify-between gap-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="text-2xl leading-none transition-transform group-open:rotate-45"
                  style={{ color: RED }}
                >
                  +
                </span>
              </summary>
              <p className="mb-0 mt-3 text-base leading-relaxed" style={{ color: MUTED }}>
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ===== CTA + QUOTE FORM ===== */}
      <section id="quote" style={{ backgroundColor: RED, color: "#FFFFFF" }}>
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-10 px-6 py-16">
          <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-4">
            <h2
              className="m-0 uppercase leading-[1.02] text-[clamp(2.25rem,5vw,3rem)]"
              style={{ fontFamily: "var(--f-display)", fontWeight: 700 }}
            >
              Need a safe moved, installed or opened?
            </h2>
            <p className="m-0 text-[19px] leading-normal">
              One call away. Free on-site assessment and written quote.
            </p>
            <div className="mt-1">
              <CallButtons dark />
            </div>
          </div>
          <div className="min-w-0 flex-[1_1_420px] rounded-[10px] bg-white p-7" style={{ color: DARK }}>
            <h3 className="mb-5 mt-0 text-[22px] font-bold">Get a free safe quote</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ===== RELATED ===== */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 pb-28 text-[15px] sm:pb-10" style={{ color: MUTED }}>
        Also from B&amp;B:{" "}
        <Link href="/services/commercial-locksmith" style={{ color: "#B8212E" }}>Commercial Service</Link> ·{" "}
        <Link href="/services/rekeying" style={{ color: "#B8212E" }}>Rekeying</Link> ·{" "}
        <Link href="/services/access-control" style={{ color: "#B8212E" }}>Access Control</Link>
      </section>

      {/* ===== MOBILE STICKY CALL BAR ===== */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 flex gap-2 px-3 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.25)] sm:hidden"
        style={{ backgroundColor: DARK }}
      >
        <a
          href={tel(CONTACT.phone1)}
          className="flex min-h-12 flex-1 items-center justify-center rounded-md font-bold text-white"
          style={{ backgroundColor: RED }}
        >
          Call now
        </a>
        <a
          href={sms(CONTACT.phone2)}
          className="flex min-h-12 flex-1 items-center justify-center rounded-md bg-white font-bold"
          style={{ color: DARK }}
        >
          Text us
        </a>
      </div>
    </main>
  );
}
