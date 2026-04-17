import Link from "next/link";
import Image from "next/image";
import { Antonio, Playfair_Display, Barlow, JetBrains_Mono } from "next/font/google";
import {
  SERVICES,
  TESTIMONIALS,
  CONTACT,
  STATS,
  CLIENT_LOGOS,
  LOCATIONS,
  SOCIAL,
} from "@/lib/site-data";
import Header from "@/components/Header";
import CinematicStatsBand from "@/components/CinematicStatsBand";

const EXTENDED_STATS = [
  { value: "15+", label: "Years serving the Bay", tag: "Since 2009" },
  { value: "1,000+", label: "Five-star reviews", tag: "Yelp · Google" },
  { value: "4.9★", label: "Average Yelp rating", tag: "200+ Google reviews" },
  { value: "< 30", label: "Min average ETA", tag: "Bay Area dispatch" },
  { value: "12", label: "Service disciplines", tag: "One team" },
  { value: "24/7", label: "Emergency response", tag: "We pick up" },
  { value: "C-28", label: "Licensed contractor", tag: "Bonded · Insured" },
  { value: "8+", label: "Enterprise partners", tag: "Compass · Dior · more" },
];

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    handle: "@bblocksmith",
    href: SOCIAL.instagram,
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    name: "Facebook",
    handle: "/bblocksmith",
    href: SOCIAL.facebook,
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "YouTube",
    handle: "@bblocksmith",
    href: SOCIAL.youtube,
    path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "LinkedIn",
    handle: "/company/bb-locksmith",
    href: SOCIAL.linkedin,
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];
const display = Antonio({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--f-display",
});
const italic = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--f-italic",
});
const body = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--f-body",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--f-mono",
});

const INK = "#08080A";
const CHALK = "#F4F0E6";
const STEEL = "#1C1C20";
const RED = "#E63946";
const AMBER = "#F2B441";

const HERO_SERVICES = SERVICES.slice(0, 8);

export default function Cinematic() {
  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-y-auto ${display.variable} ${italic.variable} ${body.variable} ${mono.variable}`}
      style={{ backgroundColor: INK, color: CHALK, fontFamily: "var(--f-body)" }}
    >
      {/* Live site header — red top bar + nav */}
      <Header />

      {/* HERO — Opening shot, letterboxed */}
      <section className="relative isolate">
        <div className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
          {/* Background: video + fallback image */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/why-us-sparks.jpg"
            aria-hidden
          >
            <source src="/images/hero-video.webm" type="video/webm" />
          </video>

          {/* Color grade — cinematic teal shadow + warm highlight */}
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              background: `
                radial-gradient(ellipse at 70% 30%, rgba(242,180,65,0.12) 0%, transparent 55%),
                radial-gradient(ellipse at 15% 85%, rgba(14,34,50,0.55) 0%, transparent 60%),
                linear-gradient(180deg, ${INK}AA 0%, ${INK}66 35%, ${INK}99 85%, ${INK} 100%)
              `,
            }}
          />

          {/* Film grain */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.85'/></svg>\")",
            }}
          />

          {/* Letterbox bars */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[6vh] min-h-[36px]"
            style={{ backgroundColor: INK }}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-[6vh] min-h-[36px]"
            style={{ backgroundColor: INK }}
          />

          {/* Top slate row */}
          <div
            className="absolute inset-x-0 top-[6vh] z-10 flex items-center justify-between px-4 py-3 text-[10px] uppercase tracking-[0.35em] sm:px-10"
            style={{ fontFamily: "var(--f-mono)", color: `${CHALK}BB` }}
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="flex h-5 w-5 items-center justify-center border"
                style={{ borderColor: CHALK }}
              >
                <span className="h-1.5 w-1.5" style={{ backgroundColor: RED }} />
              </span>
              <span>B&amp;B · Bay Area · Est. 2009</span>
            </div>
            <span className="hidden sm:inline">Scene I · Overture</span>
            <span>24.7 ° Emergency</span>
          </div>

          {/* Bottom caption row */}
          <div
            className="absolute inset-x-0 bottom-[6vh] z-10 flex items-center justify-between px-4 py-3 text-[10px] uppercase tracking-[0.35em] sm:px-10"
            style={{ fontFamily: "var(--f-mono)", color: `${CHALK}88` }}
          >
            <span>PROJECT NO. 0042</span>
            <span className="hidden sm:inline">★ 4.9 · 1,000+ reviews · Licensed C-28</span>
            <span>↓ Scroll</span>
          </div>

          {/* Title card */}
          <div className="relative z-20 flex h-full flex-col justify-center px-4 sm:px-10">
            <div className="mx-auto w-full max-w-6xl">
              <p
                className="text-[11px] uppercase tracking-[0.4em]"
                style={{ fontFamily: "var(--f-mono)", color: RED }}
              >
                A Bay Area locksmith, fifteen years in
              </p>
              <h1
                className="mt-6 uppercase leading-[0.85] tracking-[-0.01em]"
                style={{ fontFamily: "var(--f-display)", fontSize: "clamp(3.25rem, 12vw, 11rem)" }}
              >
                When security
                <br />
                <span style={{ color: RED }}>matters.</span>
              </h1>
              <p
                className="mt-6 max-w-2xl text-xl leading-tight sm:text-2xl"
                style={{ fontFamily: "var(--f-italic)", fontStyle: "italic", color: `${CHALK}DD` }}
              >
                We&rsquo;re already on the way.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02] sm:text-base"
                  style={{ backgroundColor: CHALK, fontFamily: "var(--f-body)" }}
                >
                  Free Assessment
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href={`tel:${CONTACT.phoneCall}`}
                  className="inline-flex items-center gap-3 border px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-colors hover:bg-white/10 sm:text-base"
                  style={{ borderColor: `${CHALK}66`, fontFamily: "var(--f-body)" }}
                >
                  <span>☎</span>
                  <span>Call {CONTACT.phoneCall}</span>
                </Link>
                <Link
                  href={`sms:${CONTACT.phoneText}`}
                  className="inline-flex items-center gap-2 px-2 text-sm uppercase tracking-[0.2em] opacity-75 hover:opacity-100"
                  style={{ fontFamily: "var(--f-mono)" }}
                >
                  or text {CONTACT.phoneText}
                </Link>
              </div>

              {/* Trust row */}
              <div
                className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.25em]"
                style={{ fontFamily: "var(--f-mono)", color: `${CHALK}AA` }}
              >
                <span className="flex items-center gap-2">
                  <span style={{ color: AMBER }}>★★★★★</span> 4.9 on Yelp
                </span>
                <span className="hidden opacity-30 sm:inline">·</span>
                <span>1,000+ five-star reviews</span>
                <span className="hidden opacity-30 sm:inline">·</span>
                <span>Licensed C-28 contractor</span>
                <span className="hidden opacity-30 sm:inline">·</span>
                <span>Bonded &amp; insured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats band under hero — centered + animated count-up */}
        <CinematicStatsBand />
      </section>

      {/* ACT I — Stakes */}
      <section className="relative overflow-hidden border-b" style={{ borderColor: `${CHALK}14` }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 lg:grid-cols-[5fr_7fr]">
          <div className="relative h-[60vh] min-h-[420px] overflow-hidden lg:h-auto">
            <Image
              src="/images/why-us-sparks.jpg"
              alt="Locksmith technician at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${INK}44 75%, ${INK} 100%)`,
              }}
            />
            <div
              className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.3em]"
              style={{ fontFamily: "var(--f-mono)", color: `${CHALK}AA` }}
            >
              Plate 02 · Field, Oakland
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 px-6 py-20 sm:px-10 lg:py-28">
            <p
              className="text-[11px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--f-mono)", color: RED }}
            >
              Act I — The stakes
            </p>
            <h2
              className="uppercase leading-[0.88] tracking-[-0.01em]"
              style={{ fontFamily: "var(--f-display)", fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              Locks fail.
              <br />
              Keys vanish.
              <br />
              <span style={{ color: RED }}>Doors jam</span> at 2<span style={{ color: RED }}>:</span>00<span className="text-3xl align-super"> AM</span>.
            </h2>
            <p className="max-w-xl text-lg leading-snug sm:text-xl" style={{ color: `${CHALK}CC` }}>
              For fifteen years we&rsquo;ve been the first call Bay Area property managers,
              homeowners, and fleets make when the worst happens — and the call you make
              before it does.
            </p>
            <p
              className="mt-2 max-w-xl text-base italic leading-snug sm:text-lg"
              style={{ fontFamily: "var(--f-italic)", color: `${CHALK}99` }}
            >
              Fast, licensed, and still answering the phone ourselves.
            </p>
          </div>
        </div>
      </section>

      {/* ACT II — Capabilities */}
      <section className="border-b" style={{ borderColor: `${CHALK}14` }}>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.35em]"
                style={{ fontFamily: "var(--f-mono)", color: RED }}
              >
                Act II — Capabilities
              </p>
              <h2
                className="mt-4 uppercase leading-[0.88] tracking-[-0.01em]"
                style={{ fontFamily: "var(--f-display)", fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
              >
                Everything we
                <br />
                <span style={{ color: RED }}>open, close,</span> and secure.
              </h2>
            </div>
            <p
              className="max-w-sm text-sm leading-snug sm:text-base"
              style={{ color: `${CHALK}AA` }}
            >
              Twelve disciplines under one roof — commercial, residential, automotive —
              handled by the same team that picks up when you call.
            </p>
          </div>
          <div
            className="mt-14 grid gap-px"
            style={{ backgroundColor: `${CHALK}14`, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
          >
            {HERO_SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative flex h-80 flex-col justify-end overflow-hidden p-6"
                style={{ backgroundColor: INK }}
              >
                <Image
                  src={s.image}
                  alt=""
                  fill
                  className="object-cover opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-70"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 transition-opacity"
                  style={{
                    background: `linear-gradient(180deg, ${INK}00 0%, ${INK}88 55%, ${INK} 100%)`,
                  }}
                />
                <div className="relative flex items-start justify-between">
                  <span
                    className="text-[10px] uppercase tracking-[0.35em]"
                    style={{ fontFamily: "var(--f-mono)", color: `${CHALK}AA` }}
                  >
                    Scene {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden
                    className="h-px w-8 transition-all group-hover:w-14"
                    style={{ backgroundColor: RED }}
                  />
                </div>
                <div className="relative mt-auto">
                  <h3
                    className="text-3xl uppercase leading-[0.95] sm:text-4xl"
                    style={{ fontFamily: "var(--f-display)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-2 line-clamp-2 text-sm"
                    style={{ color: `${CHALK}BB`, fontFamily: "var(--f-body)" }}
                  >
                    {s.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between">
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{ fontFamily: "var(--f-mono)", color: `${CHALK}66` }}
            >
              {HERO_SERVICES.length} of {SERVICES.length} disciplines
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] hover:text-white"
              style={{ fontFamily: "var(--f-body)", color: `${CHALK}CC` }}
            >
              The full reel <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* INTERLUDE — Service area */}
      <section className="border-b" style={{ borderColor: `${CHALK}14` }}>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.35em]"
                style={{ fontFamily: "var(--f-mono)", color: RED }}
              >
                Interlude — The field
              </p>
              <h2
                className="mt-4 uppercase leading-[0.88] tracking-[-0.01em]"
                style={{ fontFamily: "var(--f-display)", fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
              >
                The whole <span style={{ color: RED }}>Bay.</span>
                <br />
                Every day.
              </h2>
            </div>
            <p
              className="max-w-sm text-sm leading-snug sm:text-base"
              style={{ color: `${CHALK}AA` }}
            >
              Mobile fleet dispatched from Walnut Creek. On-site across San Francisco,
              Oakland, San Jose, Fremont, and every corner in between.
            </p>
          </div>

          <div className="mt-14 grid gap-px" style={{ backgroundColor: `${CHALK}14`, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {LOCATIONS.map((loc, i) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group relative flex flex-col justify-between overflow-hidden p-8 transition-all hover:bg-[color:var(--steel)]"
                style={{ backgroundColor: INK, ["--steel" as string]: STEEL }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-[10px] uppercase tracking-[0.35em]"
                    style={{ fontFamily: "var(--f-mono)", color: `${CHALK}66` }}
                  >
                    Zone {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: RED }}
                  />
                </div>
                <div className="mt-16">
                  <h3
                    className="uppercase leading-[0.92]"
                    style={{ fontFamily: "var(--f-display)", fontSize: "clamp(2.25rem, 3.5vw, 3.25rem)" }}
                  >
                    {loc.name}
                  </h3>
                  <p
                    className="mt-4 line-clamp-3 text-sm"
                    style={{ color: `${CHALK}AA`, fontFamily: "var(--f-body)" }}
                  >
                    {loc.description}
                  </p>
                  <p
                    className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] transition-colors group-hover:text-white"
                    style={{ fontFamily: "var(--f-mono)", color: `${CHALK}88` }}
                  >
                    Coverage details <span className="transition-transform group-hover:translate-x-1">→</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ACT III — Proof */}
      <section
        className="relative border-b"
        style={{ borderColor: `${CHALK}14`, backgroundColor: CHALK, color: INK }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.35em]"
                style={{ fontFamily: "var(--f-mono)", color: RED }}
              >
                Act III — Proof
              </p>
              <h2
                className="mt-4 uppercase leading-[0.88] tracking-[-0.01em]"
                style={{ fontFamily: "var(--f-display)", fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
              >
                The Bay runs on
                <br />
                <span style={{ color: RED }}>quiet recommendations.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-snug sm:text-base" style={{ color: `${INK}AA` }}>
              Hundreds of property managers, fleet operators, and homeowners — and the
              brands they work for.
            </p>
          </div>

          {/* By the numbers */}
          <div className="mt-14">
            <p
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--f-mono)", color: `${INK}66` }}
            >
              By the numbers
            </p>
            <div
              className="mt-6 grid gap-px border"
              style={{
                borderColor: `${INK}18`,
                backgroundColor: `${INK}18`,
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              }}
            >
              {EXTENDED_STATS.map((s, i) => (
                <div
                  key={s.label}
                  className="flex flex-col justify-between p-6 sm:p-7"
                  style={{ backgroundColor: CHALK }}
                >
                  <p
                    className="text-[9px] uppercase tracking-[0.4em]"
                    style={{ fontFamily: "var(--f-mono)", color: `${INK}66` }}
                  >
                    No. {String(i + 1).padStart(2, "0")}
                  </p>
                  <p
                    className="mt-6 text-5xl leading-none sm:text-6xl"
                    style={{
                      fontFamily: "var(--f-display)",
                      color: i % 3 === 0 ? RED : INK,
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="mt-3 text-sm font-semibold uppercase tracking-[0.12em]"
                    style={{ fontFamily: "var(--f-body)" }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="mt-1 text-xs"
                    style={{ fontFamily: "var(--f-mono)", color: `${INK}88` }}
                  >
                    {s.tag}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Client logo strip */}
          <div
            className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-6 border-y py-8"
            style={{ borderColor: `${INK}18` }}
          >
            {CLIENT_LOGOS.map((logo) => (
              <div key={logo.name} className="flex h-10 w-28 items-center justify-center sm:w-32">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={48}
                  className="max-h-8 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>

          {/* Testimonials as film cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.slice(0, 4).map((t, i) => (
              <figure
                key={i}
                className="relative flex flex-col justify-between border p-8 sm:p-10"
                style={{ borderColor: `${INK}20`, backgroundColor: "white" }}
              >
                <div className="flex items-center justify-between">
                  <div style={{ color: RED, fontFamily: "var(--f-mono)" }}>★★★★★</div>
                  <p
                    className="text-[10px] uppercase tracking-[0.3em]"
                    style={{ fontFamily: "var(--f-mono)", color: `${INK}66` }}
                  >
                    Review · {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <blockquote
                  className="mt-6 text-xl leading-snug sm:text-2xl"
                  style={{ fontFamily: "var(--f-body)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption
                  className="mt-8 text-[11px] uppercase tracking-[0.3em]"
                  style={{ fontFamily: "var(--f-mono)", color: `${INK}88` }}
                >
                  — {t.author}, Bay Area
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — two paths */}
      <section
        className="relative overflow-hidden border-b"
        style={{ borderColor: `${CHALK}14` }}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 40%, ${RED}22 0%, transparent 55%),
              radial-gradient(ellipse at 80% 60%, ${AMBER}16 0%, transparent 50%)
            `,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <p
            className="text-[11px] uppercase tracking-[0.35em]"
            style={{ fontFamily: "var(--f-mono)", color: RED }}
          >
            The Ask
          </p>
          <h2
            className="mt-4 uppercase leading-[0.85] tracking-[-0.01em]"
            style={{ fontFamily: "var(--f-display)", fontSize: "clamp(3rem, 11vw, 10rem)" }}
          >
            Don&rsquo;t wait
            <br />
            for the <span style={{ color: RED }}>worst day.</span>
          </h2>
          <p
            className="mt-6 max-w-xl text-lg italic sm:text-xl"
            style={{ fontFamily: "var(--f-italic)", color: `${CHALK}CC` }}
          >
            Two paths. Both answered by a real person.
          </p>

          <div className="mt-14 grid gap-px" style={{ backgroundColor: `${CHALK}14`, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {/* Path A — assessment */}
            <div className="relative flex flex-col justify-between p-8 sm:p-12" style={{ backgroundColor: STEEL }}>
              <div>
                <p
                  className="text-[10px] uppercase tracking-[0.35em]"
                  style={{ fontFamily: "var(--f-mono)", color: `${CHALK}88` }}
                >
                  Path A · Plan it
                </p>
                <h3
                  className="mt-4 uppercase leading-[0.9]"
                  style={{ fontFamily: "var(--f-display)", fontSize: "clamp(2.25rem, 4vw, 3.75rem)" }}
                >
                  Walk the property with us.
                </h3>
                <p className="mt-4 max-w-sm text-base" style={{ color: `${CHALK}BB` }}>
                  Free on-site assessment. A real technician reviews your setup and sends a
                  written quote. No pressure.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center justify-between gap-4 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: CHALK, fontFamily: "var(--f-body)" }}
              >
                Book a free assessment <span>→</span>
              </Link>
            </div>

            {/* Path B — emergency */}
            <div
              className="relative flex flex-col justify-between p-8 sm:p-12"
              style={{ backgroundColor: RED, color: INK }}
            >
              <div>
                <p
                  className="text-[10px] uppercase tracking-[0.35em]"
                  style={{ fontFamily: "var(--f-mono)" }}
                >
                  Path B · Right now
                </p>
                <h3
                  className="mt-4 uppercase leading-[0.9]"
                  style={{ fontFamily: "var(--f-display)", fontSize: "clamp(2.25rem, 4vw, 3.75rem)" }}
                >
                  We&rsquo;re already on the way.
                </h3>
                <p className="mt-4 max-w-sm text-base font-medium">
                  Locked out, broken key, emergency rekey — call now, we dispatch the nearest
                  Bay Area van.
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-3">
                <Link
                  href={`tel:${CONTACT.phoneCall}`}
                  className="inline-flex items-center justify-between gap-4 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: INK, fontFamily: "var(--f-body)" }}
                >
                  ☎ Call {CONTACT.phoneCall}
                </Link>
                <Link
                  href={`sms:${CONTACT.phoneText}`}
                  className="text-sm font-semibold uppercase tracking-[0.2em] hover:underline"
                  style={{ fontFamily: "var(--f-body)" }}
                >
                  or text {CONTACT.phoneText} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL DISPATCH */}
      <section
        className="relative overflow-hidden border-b"
        style={{ borderColor: `${CHALK}14`, backgroundColor: STEEL }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(ellipse at 85% 30%, ${RED}33 0%, transparent 55%),
              radial-gradient(ellipse at 10% 80%, ${AMBER}22 0%, transparent 55%)
            `,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.35em]"
                style={{ fontFamily: "var(--f-mono)", color: RED }}
              >
                Dispatches · Daily
              </p>
              <h2
                className="mt-4 uppercase leading-[0.88] tracking-[-0.01em]"
                style={{ fontFamily: "var(--f-display)", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
              >
                Follow the field.
              </h2>
            </div>
            <p
              className="max-w-sm text-sm leading-snug sm:text-base"
              style={{ color: `${CHALK}AA` }}
            >
              Daily posts from real jobs — installs, rekeys, emergency calls, the hardware
              we love. No filler.
            </p>
          </div>

          <div className="mt-10 grid gap-px" style={{ backgroundColor: `${CHALK}14`, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-6 transition-all hover:bg-[color:var(--hover)] sm:p-7"
                style={{ backgroundColor: INK, ["--hover" as string]: `${INK}` }}
              >
                <span
                  aria-hidden
                  className="flex h-14 w-14 shrink-0 items-center justify-center border transition-all group-hover:border-[color:var(--red)] group-hover:bg-[color:var(--red)]"
                  style={{ borderColor: `${CHALK}33`, ["--red" as string]: RED }}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill={CHALK}>
                    <path d={s.path} />
                  </svg>
                </span>
                <span className="min-w-0 flex-1">
                  <p
                    className="text-xs uppercase tracking-[0.3em]"
                    style={{ fontFamily: "var(--f-mono)", color: `${CHALK}88` }}
                  >
                    {s.name}
                  </p>
                  <p
                    className="mt-1 truncate text-xl"
                    style={{ fontFamily: "var(--f-display)" }}
                  >
                    {s.handle}
                  </p>
                </span>
                <span
                  aria-hidden
                  className="text-sm transition-transform group-hover:translate-x-1"
                  style={{ color: `${CHALK}66` }}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CREDITS */}
      <footer style={{ backgroundColor: INK }}>
        <div
          className="mx-auto max-w-7xl border-b px-4 py-16 sm:px-6 sm:py-20"
          style={{ borderColor: `${CHALK}14` }}
        >
          <p
            className="text-[10px] uppercase tracking-[0.4em]"
            style={{ fontFamily: "var(--f-mono)", color: RED }}
          >
            End credits
          </p>
          <h2
            className="mt-4 uppercase leading-[0.88]"
            style={{ fontFamily: "var(--f-display)", fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            B&amp;B Locksmith
            <br />
            <span style={{ color: `${CHALK}55` }}>&amp; Security Inc.</span>
          </h2>

          <div
            className="mt-12 grid gap-10 text-sm sm:grid-cols-2 lg:grid-cols-4"
            style={{ color: `${CHALK}BB` }}
          >
            <div>
              <p
                className="mb-3 text-[10px] uppercase tracking-[0.3em]"
                style={{ fontFamily: "var(--f-mono)", color: `${CHALK}66` }}
              >
                Dispatch
              </p>
              <p>
                <Link href={`tel:${CONTACT.phoneCall}`} className="block hover:text-white">
                  Call {CONTACT.phoneCall}
                </Link>
                <Link href={`sms:${CONTACT.phoneText}`} className="mt-1 block hover:text-white">
                  Text {CONTACT.phoneText}
                </Link>
                <Link href={`mailto:${CONTACT.email}`} className="mt-1 block hover:text-white">
                  {CONTACT.email}
                </Link>
              </p>
            </div>
            <div>
              <p
                className="mb-3 text-[10px] uppercase tracking-[0.3em]"
                style={{ fontFamily: "var(--f-mono)", color: `${CHALK}66` }}
              >
                Hours
              </p>
              <p>
                Monday–Friday · 8:00–17:00 PT
                <br />
                Saturday · Emergency only
                <br />
                Sunday · Closed
              </p>
            </div>
            <div>
              <p
                className="mb-3 text-[10px] uppercase tracking-[0.3em]"
                style={{ fontFamily: "var(--f-mono)", color: `${CHALK}66` }}
              >
                Service area
              </p>
              <p>
                San Francisco · Oakland · San Jose · Fremont · Walnut Creek · Greater Bay Area
              </p>
            </div>
            <div>
              <p
                className="mb-3 text-[10px] uppercase tracking-[0.3em]"
                style={{ fontFamily: "var(--f-mono)", color: `${CHALK}66` }}
              >
                Credentials
              </p>
              <p>
                Licensed C-28 contractor · Bonded &amp; insured · Est. 2009 · 4.9 ★ on Yelp ·
                200+ Google reviews · 1,000+ five-stars total
              </p>
            </div>
          </div>

          {/* Follow row */}
          <div
            className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t pt-8"
            style={{ borderColor: `${CHALK}14` }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--f-mono)", color: `${CHALK}66` }}
            >
              Follow on
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-11 w-11 items-center justify-center border transition-all hover:border-[color:var(--red)] hover:bg-[color:var(--red)]"
                  style={{ borderColor: `${CHALK}33`, ["--red" as string]: RED }}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill={CHALK}>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-[10px] uppercase tracking-[0.35em] sm:px-6"
          style={{ fontFamily: "var(--f-mono)", color: `${CHALK}55` }}
        >
          <span>© 2026 B&amp;B Locksmith &amp; Security Inc.</span>
          <span>Fin · Roll credits</span>
          <Link href="/" className="hover:text-white">← Back to live site</Link>
        </div>
      </footer>
    </div>
  );
}
