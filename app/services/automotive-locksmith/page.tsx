import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { SERVICES, CONTACT } from "@/lib/site-data";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

// Dedicated Automotive page. Replaces the generic /services/[slug] template
// for this one slug. FAQ comes from lib/site-data.ts so the schema and the
// page stay in sync with the rest of the site.

const SLUG = "automotive-locksmith";
const base = SERVICES.find((s) => s.slug === SLUG)!;

const TITLE = "Car Keys, Key Fobs and Lockouts, Including High-End Vehicles";
const DESCRIPTION =
  "Mobile car key and smart key programming for Porsche, Mercedes-Benz, BMW, Audi, Land Rover and Lexus, plus every everyday make. Lockouts and lost keys, on-site.";

export const metadata: Metadata = {
  title: "Luxury & Everyday Car Keys, Fobs, Lockouts Bay Area | B&B Locksmith",
  description: DESCRIPTION,
  alternates: { canonical: `/services/${SLUG}` },
  openGraph: {
    title: "Luxury & Everyday Car Keys, Fobs, Lockouts | B&B Locksmith",
    description: DESCRIPTION,
    url: `https://blocksmithpro.com/services/${SLUG}`,
    images: [
      {
        url: "/images/services/automotive/jaguar-f-type-key-fobs-fleet.jpg",
        width: 1200,
        height: 1200,
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

const HIGH_END = ["Porsche", "Mercedes-Benz", "BMW", "Audi", "Land Rover / Range Rover", "Lexus"];
const EVERYDAY =
  "Toyota, Honda, Ford, Chevrolet, Nissan, Hyundai, Kia, Subaru, Jeep, Dodge, Volkswagen and the rest, plus fleet vans and work trucks.";

const TRUST = [
  "Licensed C-28 contractor",
  "Bonded and insured",
  "Programmed on-site, no tow",
  "Non-destructive lockout entry",
];

const SERVICES_LIST = [
  {
    title: "Smart keys and key fobs",
    body: "Push-to-start proximity keys and remote fobs cut and programmed at your car, including spares.",
    icon: "fob",
  },
  {
    title: "Lost all keys",
    body: "No original needed. We cut by code and program a new key where the car is parked. ID and registration required.",
    icon: "key",
  },
  {
    title: "Car lockouts",
    body: "Non-destructive entry so your door, window and paint come through untouched. Garages and trailheads included.",
    icon: "lock",
  },
  {
    title: "Ignition and lock repair",
    body: "We diagnose first. Worn keys, sticking ignitions and failed door locks repaired or replaced on-site.",
    icon: "ignition",
  },
] as const;

const GALLERY = [
  {
    src: "/images/services/automotive/ferrari-488-mobile-service.jpg",
    alt: "Ferrari 488 parked in a driveway in front of a B&B Locksmith service van",
    caption: "Ferrari 488, at the client's home",
    w: 1200,
    h: 900,
  },
  {
    src: "/images/services/automotive/range-rover-sport-key-programming.jpg",
    alt: "Two Land Rover smart keys held in front of a Range Rover Sport with a B&B van behind it",
    caption: "Range Rover Sport, smart keys",
    w: 1200,
    h: 900,
  },
  {
    src: "/images/services/automotive/maserati-ghibli-smart-keys.jpg",
    alt: "Two Maserati key fobs held in front of a Maserati Ghibli steering wheel and dashboard",
    caption: "Maserati Ghibli, key fobs",
    w: 1000,
    h: 909,
  },
  {
    src: "/images/services/automotive/porsche-key-fob-card.jpg",
    alt: "Two Porsche key fobs held in front of a Porsche 911 convertible with a B&B van behind it",
    caption: "Porsche 911, key fobs",
    w: 1200,
    h: 960,
  },
];

const LUXURY_FAQ = {
  question: "Do you work on luxury and European cars?",
  answer:
    "Yes. We cut and program keys and smart fobs for Porsche, Mercedes-Benz, BMW, Audi, Land Rover / Range Rover and Lexus, along with every everyday make. The work happens where your car is parked, with no tow and usually no dealer wait.",
};

const FAQS = [LUXURY_FAQ, ...base.faq];

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
    case "fob":
      return (
        <svg {...common}>
          <rect x="7" y="2" width="10" height="16" rx="5" />
          <circle cx="12" cy="7" r="1.5" />
          <path d="M10 11h4M10 14h4M12 18v4" />
        </svg>
      );
    case "key":
      return (
        <svg {...common}>
          <circle cx="7.5" cy="15.5" r="4.5" />
          <path d="M10.7 12.3 21 2M17 6l3 3M14 9l2 2" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <path d="M5 17h14l-1.5-5h-11z" />
          <path d="M7 12l1.5-4h7L17 12" />
          <circle cx="7.5" cy="18.5" r="1.5" />
          <circle cx="16.5" cy="18.5" r="1.5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
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

export default function AutomotivePage() {
  return (
    <main style={{ backgroundColor: CREAM, color: DARK, fontFamily: "var(--f-body)" }}>
      <JsonLd
        data={[
          serviceSchema({ slug: SLUG, title: base.title, description: DESCRIPTION }),
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: base.title, path: `/services/${SLUG}` },
          ]),
          faqSchema(FAQS),
        ]}
      />

      {/* ===== HERO ===== */}
      <section style={{ backgroundColor: DARK, color: "#FFFFFF" }}>
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 px-6 py-14">
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
            <Eyebrow color={PINK}>Automotive · Mobile across the Bay Area</Eyebrow>
            <h1
              className="m-0 uppercase leading-[1.02] text-[clamp(2.4rem,5.5vw,3.75rem)]"
              style={{ fontFamily: "var(--f-display)", fontWeight: 700 }}
            >
              {TITLE}
            </h1>
            <p className="m-0 max-w-[540px] text-[19px] leading-relaxed" style={{ color: "#D9D6CE" }}>
              We specialize in high-end and European vehicles and handle every everyday make too.
              Smart keys, fobs, lost keys and lockouts, done where your car is parked. No tow, no
              dealer wait.
            </p>
            <div className="mt-1">
              <CallButtons />
            </div>
            <p className="m-0 text-sm" style={{ color: "#BDB7A8" }}>
              Monday to Saturday, 7am to 6pm.
            </p>
          </div>
          <div className="min-w-0 flex-[1_1_440px]">
            <Image
              src="/images/services/automotive/jaguar-f-type-key-fobs-fleet.jpg"
              alt="Two new Jaguar smart keys held in front of a black Jaguar F-Type convertible with the B&B Locksmith van fleet behind it"
              width={1200}
              height={1200}
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
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
        </div>
      </section>

      {/* ===== HIGH-END ===== */}
      <section className="mx-auto max-w-[1200px] px-6 pb-6 pt-[72px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[640px]">
            <Eyebrow>High-end and European vehicles</Eyebrow>
            <h2
              className="mb-3 mt-2.5 uppercase leading-[1.05] text-[clamp(2rem,4vw,2.75rem)]"
              style={{ fontFamily: "var(--f-display)", fontWeight: 700 }}
            >
              The cars dealers make you wait for
            </h2>
            <p className="m-0 text-[17px] leading-relaxed" style={{ color: MUTED }}>
              Luxury smart keys are our specialty. We bring the programming equipment to you and
              treat the car the way its owner does.
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3">
          {HIGH_END.map((b) => (
            <div
              key={b}
              className="flex min-h-[72px] items-center justify-center rounded-lg bg-white px-4 text-center text-lg font-bold"
              style={{ borderBottom: `4px solid ${RED}` }}
            >
              {b}
            </div>
          ))}
        </div>
        <p className="mb-0 mt-5 text-base leading-relaxed" style={{ color: MUTED }}>
          <span className="font-bold" style={{ color: DARK }}>Everyday makes too: </span>
          {EVERYDAY}
        </p>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="mx-auto max-w-[1200px] px-6 py-12">
        <Eyebrow>Recent jobs</Eyebrow>
        <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {GALLERY.map((g) => (
            <figure key={g.src} className="m-0 overflow-hidden rounded-[10px] bg-white">
              <div className="relative aspect-[4/3]">
                <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 290px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="px-4 py-3 text-[15px] font-semibold">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="mx-auto max-w-[1200px] px-6 pb-16 pt-6">
        <Eyebrow>What we do</Eyebrow>
        <h2
          className="mb-8 mt-2.5 uppercase leading-[1.05] text-[clamp(2rem,4vw,2.75rem)]"
          style={{ fontFamily: "var(--f-display)", fontWeight: 700 }}
        >
          Keys, fobs and lockouts, on-site
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {SERVICES_LIST.map((s) => (
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
        <ul className="mb-0 mt-8 grid list-none grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-6 gap-y-2 p-0 text-[15px]" style={{ color: MUTED }}>
          {base.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5">
              <span aria-hidden="true" style={{ color: RED }}>—</span>
              {f}
            </li>
          ))}
        </ul>
      </section>

      {/* ===== FAQ ===== */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-[900px] px-6 py-[72px]">
          <Eyebrow>FAQ</Eyebrow>
          <h2
            className="mb-7 mt-2.5 uppercase leading-[1.05] text-[clamp(2rem,4vw,2.75rem)]"
            style={{ fontFamily: "var(--f-display)", fontWeight: 700 }}
          >
            Car key questions we hear most
          </h2>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <details key={faq.question} open={i === 0} className="group rounded-lg px-6 py-5" style={{ backgroundColor: CREAM }}>
                <summary className="flex cursor-pointer list-none justify-between gap-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span aria-hidden="true" className="text-2xl leading-none transition-transform group-open:rotate-45" style={{ color: RED }}>
                    +
                  </span>
                </summary>
                <p className="mb-0 mt-3 text-base leading-relaxed" style={{ color: MUTED }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ backgroundColor: RED, color: "#FFFFFF" }}>
        <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-4 px-6 py-16">
          <h2
            className="m-0 uppercase leading-[1.02] text-[clamp(2.25rem,5vw,3rem)]"
            style={{ fontFamily: "var(--f-display)", fontWeight: 700 }}
          >
            Locked out or lost your keys?
          </h2>
          <p className="m-0 text-[19px] leading-normal">
            Call now and dispatch gives you a real ETA before the truck rolls.
          </p>
          <div className="mt-1">
            <CallButtons dark />
          </div>
          <Link href="/contact" className="mt-1 text-base font-semibold text-white underline">
            Not urgent? Request a quote online
          </Link>
        </div>
      </section>

      {/* ===== RELATED ===== */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 pb-28 text-[15px] sm:pb-10" style={{ color: MUTED }}>
        Also from B&amp;B:{" "}
        <Link href="/services/commercial-locksmith" style={{ color: "#B8212E" }}>Commercial Service</Link> ·{" "}
        <Link href="/services/safe-installation" style={{ color: "#B8212E" }}>Safes</Link> ·{" "}
        <Link href="/services/access-control" style={{ color: "#B8212E" }}>Access Control</Link>
      </section>

      {/* ===== MOBILE STICKY CALL BAR ===== */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 flex gap-2 px-3 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.25)] sm:hidden"
        style={{ backgroundColor: DARK }}
      >
        <a href={tel(CONTACT.phone1)} className="flex min-h-12 flex-1 items-center justify-center rounded-md font-bold text-white" style={{ backgroundColor: RED }}>
          Call now
        </a>
        <a href={sms(CONTACT.phone2)} className="flex min-h-12 flex-1 items-center justify-center rounded-md bg-white font-bold" style={{ color: DARK }}>
          Text us
        </a>
      </div>
    </main>
  );
}
