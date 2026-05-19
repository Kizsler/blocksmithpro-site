import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "DoorBird IP Video Door Station | B&B Locksmith",
  description:
    "Meet the DoorBird IP Video Door Station — professional-grade intercom installed by B&B Locksmith across the Bay Area.",
  robots: { index: false, follow: false },
};

const FEATURES = [
  {
    label: "01",
    title: "1080p HD Camera",
    description:
      "180° hemispheric wide-eye lens covers the full doorstep with zero blind spots. Sony STARVIS sensor on flagship models. Automatic infrared night vision.",
  },
  {
    label: "02",
    title: "See, Speak & Unlock",
    description:
      "Full HD live video, two-way audio with echo cancellation, and one-tap remote door/gate release — all from your phone, anywhere in the world.",
  },
  {
    label: "03",
    title: "No Subscription Required",
    description:
      "Live video, push alerts, visitor history, and app access for up to 8 devices are included with the hardware. No monthly fee. Guaranteed forever.",
  },
  {
    label: "04",
    title: "IP65 + IK08 Rated",
    description:
      "Dust-tight, jet-water resistant, and impact-proof. Operates from -25°C to +55°C. Stainless steel V2A or marine-grade V4A housing. Built to outlast.",
  },
  {
    label: "05",
    title: "Works With Everything",
    description:
      "Open API Alliance member. Native integration with Control4, Crestron, KNX, Loxone, Home Assistant, Synology NAS, and 50+ platforms. No lock-in.",
  },
  {
    label: "06",
    title: "Enterprise Security",
    description:
      "Bank-level TLS encryption. ISO/IEC 27001:2024 certified. UL listed. Part of ASSA ABLOY — the world's largest access security group.",
  },
] as const;

const WHY_WE_CHOOSE = [
  {
    title: "It's not a consumer gadget.",
    description:
      "Ring and Nest are designed for renters. DoorBird is engineered for permanent installation — stainless steel housing, PoE wiring, hardware relay outputs, and a full commercial API. It belongs in the same conversation as Aiphone and 2N, but it wins on openness.",
  },
  {
    title: "No cloud dependency. Ever.",
    description:
      "The DoorBird LAN API runs 100% on your local network. Triggers, events, and relay control work without routing through any cloud service. When the internet goes down, your door still works.",
  },
  {
    title: "It integrates with what you already have.",
    description:
      "SIP module built-in — it rings desk phones directly via Asterisk or 3CX. Connects to ASSA ABLOY Accentra, Kisi, and every major smart lock brand. It fits into your existing infrastructure instead of replacing it.",
  },
  {
    title: "Made in Germany. Backed by ASSA ABLOY.",
    description:
      "DoorBird is manufactured in Berlin by Bird Home Automation — a company now owned by ASSA ABLOY, the global leader in commercial access security. Red Dot Award 2026. iF Design Award 2026. This is not a startup product.",
  },
] as const;

const GALLERY = [
  {
    src: "/images/doorbird/d1101v-hero.jpg",
    alt: "DoorBird D1101V surface-mount IP video door station",
    label: "D1101V · Single Button",
  },
  {
    src: "/images/doorbird/d2101v-flush.jpg",
    alt: "DoorBird D2101V flush-mount at gate",
    label: "D2101V · Flush Mount",
  },
  {
    src: "/images/doorbird/d1102-keypad.jpg",
    alt: "DoorBird with integrated keypad",
    label: "D1102KV · With Keypad",
  },
  {
    src: "/images/doorbird/installation.jpg",
    alt: "DoorBird installed at a property entrance",
    label: "Installed at a Gate",
  },
] as const;

export default function WCBFMPage() {
  return (
    <main style={{ backgroundColor: "#FFFFFF", color: "#1A1A1A" }}>

      {/* ===== HERO ===== */}
      <section
        className="relative border-b overflow-hidden"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          {/* Event badge */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span
              className="inline-block border px-3 py-1 text-[10px] uppercase tracking-[0.3em]"
              style={{
                borderColor: "#E63946",
                color: "#E63946",
                fontFamily: "var(--f-mono)",
              }}
            >
              WCBFM 2026 · May 20
            </span>
            <span
              className="inline-block border px-3 py-1 text-[10px] uppercase tracking-[0.3em]"
              style={{
                borderColor: "#1A1A1A22",
                color: "#1A1A1A66",
                fontFamily: "var(--f-mono)",
              }}
            >
              B&amp;B Locksmith · Certified Installer
            </span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Text */}
            <div className="flex flex-col gap-6">
              <h1
                className="uppercase leading-[0.85] tracking-[-0.02em] text-[clamp(3rem,9vw,7rem)]"
                style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
              >
                DoorBird
                <br />
                <span style={{ color: "#E63946" }}>IP Video</span>
                <br />
                Door Station.
              </h1>
              <p
                className="max-w-lg text-base leading-relaxed sm:text-lg"
                style={{ fontFamily: "var(--f-body)", color: "#1A1A1ACC" }}
              >
                See who&apos;s at the door. Speak to them. Unlock it. From
                anywhere in the world — no subscription, no cloud dependency,
                no compromise.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href={`tel:${CONTACT.phone2.replace(/\D/g, "")}`}
                  className="group inline-flex items-center gap-3 border px-7 py-4 text-[11px] uppercase tracking-[0.3em] transition-colors"
                  style={{
                    borderColor: "#E63946",
                    backgroundColor: "#E63946",
                    color: "#FFFFFF",
                    fontFamily: "var(--f-mono)",
                  }}
                >
                  Call Us Now
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 border px-7 py-4 text-[11px] uppercase tracking-[0.3em] transition-colors"
                  style={{
                    borderColor: "#1A1A1A22",
                    color: "#1A1A1A",
                    fontFamily: "var(--f-mono)",
                  }}
                >
                  Get a Quote
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/doorbird/d1101v-hero.jpg"
                  alt="DoorBird D1101V IP Video Door Station"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div
                className="absolute bottom-0 left-0 px-4 py-2 text-[10px] uppercase tracking-[0.2em]"
                style={{
                  backgroundColor: "#1A1A1ACC",
                  fontFamily: "var(--f-mono)",
                  color: "#FFFFFF99",
                  backdropFilter: "blur(4px)",
                }}
              >
                D1101V · 1080p · IP65 · Made in Germany
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section
        className="border-b"
        style={{ backgroundColor: "#1A1A1A", borderColor: "#FFFFFF11" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-px sm:grid-cols-4" style={{ backgroundColor: "#FFFFFF11" }}>
            {[
              { value: "1080p", label: "HD Camera" },
              { value: "180°", label: "Wide-Eye Lens" },
              { value: "IP65", label: "Weatherproof" },
              { value: "$0/mo", label: "Subscription Cost" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 px-8 py-7"
                style={{ backgroundColor: "#1A1A1A" }}
              >
                <p
                  className="uppercase leading-none text-[clamp(2rem,4vw,3rem)]"
                  style={{ fontFamily: "var(--f-display)", color: "#E63946" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[11px] uppercase tracking-[0.15em]"
                  style={{ fontFamily: "var(--f-mono)", color: "#FFFFFF66" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section
        className="border-b"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <div className="mb-12">
            <span
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
            >
              What you get
            </span>
            <h2
              className="mt-4 uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.5rem)]"
              style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
            >
              Everything.
              <br />
              Out of the box.
            </h2>
          </div>

          <div
            className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"
            style={{ backgroundColor: "#1A1A1A11" }}
          >
            {FEATURES.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-4 p-8"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <span
                  className="text-[10px] uppercase tracking-[0.35em]"
                  style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
                >
                  {item.label}
                </span>
                <h3
                  className="uppercase leading-[0.92] text-2xl sm:text-3xl"
                  style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--f-body)", color: "#1A1A1ACC" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section
        className="border-b"
        style={{ backgroundColor: "#F4F0E6", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <span
                className="text-[10px] uppercase tracking-[0.35em]"
                style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
              >
                The Hardware
              </span>
              <h2
                className="mt-4 uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.5rem)]"
                style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
              >
                Built to last.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {GALLERY.map((img) => (
              <div key={img.src} className="flex flex-col gap-2">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <span
                  className="text-[10px] uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
                >
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY WE CHOOSE DOORBIRD ===== */}
      <section
        className="border-b"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <div className="mb-12">
            <span
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
            >
              Why B&amp;B chooses DoorBird
            </span>
            <h2
              className="mt-4 uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.5rem)]"
              style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
            >
              Why we install
              <br />
              this over anything.
            </h2>
            <p
              className="mt-6 max-w-2xl text-base leading-relaxed"
              style={{ fontFamily: "var(--f-body)", color: "#1A1A1ACC" }}
            >
              We&apos;ve installed Ring, Nest, Aiphone, and 2N. When a client
              asks what we recommend — we say DoorBird. Here&apos;s why.
            </p>
          </div>

          <div className="flex flex-col gap-px" style={{ backgroundColor: "#1A1A1A11" }}>
            {WHY_WE_CHOOSE.map((item, i) => (
              <div
                key={item.title}
                className="grid grid-cols-1 gap-4 p-8 sm:grid-cols-[auto_1fr] sm:gap-10"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <span
                  className="text-[10px] uppercase tracking-[0.35em] sm:pt-1"
                  style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-3">
                  <h3
                    className="uppercase leading-[0.92] text-2xl sm:text-3xl"
                    style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed max-w-2xl"
                    style={{ fontFamily: "var(--f-body)", color: "#1A1A1ACC" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ backgroundColor: "#1A1A1A" }}>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-6">
              <h2
                className="uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2.5rem,6vw,5rem)]"
                style={{ fontFamily: "var(--f-display)", color: "#FFFFFF" }}
              >
                Ready to put
                <br />
                DoorBird at
                <br />
                <span style={{ color: "#E63946" }}>your door?</span>
              </h2>
              <p
                className="max-w-lg text-base leading-relaxed"
                style={{ fontFamily: "var(--f-body)", color: "#FFFFFF99" }}
              >
                We&apos;re certified DoorBird installers and we&apos;re here at
                the show today. Come find us, or reach out directly. Free
                consultation — we&apos;ll assess your property and recommend
                the right model.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href={`tel:${CONTACT.phone2.replace(/\D/g, "")}`}
                className="group inline-flex items-center gap-3 border px-7 py-4 text-[11px] uppercase tracking-[0.3em] transition-colors"
                style={{
                  borderColor: "#E63946",
                  backgroundColor: "#E63946",
                  color: "#FFFFFF",
                  fontFamily: "var(--f-mono)",
                }}
              >
                {CONTACT.phone2}
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
              <a
                href={`tel:${CONTACT.phone1.replace(/\D/g, "")}`}
                className="group inline-flex items-center gap-3 border px-7 py-4 text-[11px] uppercase tracking-[0.3em] transition-colors"
                style={{
                  borderColor: "#FFFFFF22",
                  color: "#FFFFFF99",
                  fontFamily: "var(--f-mono)",
                }}
              >
                {CONTACT.phone1}
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border px-7 py-4 text-[11px] uppercase tracking-[0.3em] transition-colors"
                style={{
                  borderColor: "#FFFFFF22",
                  color: "#FFFFFF99",
                  fontFamily: "var(--f-mono)",
                }}
              >
                Request a free assessment
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
