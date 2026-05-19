import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SERVICES,
  TESTIMONIALS,
  CLIENT_LOGOS,
  CONTACT,
  SOCIAL,
  SERVICE_CITIES,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "B&B Locksmith & Security | Bay Area Locksmith Since 2009",
  description:
    "Professional locksmith and security services across the Bay Area. Licensed C-28 contractor with 20+ years of experience, over 1,000 five-star reviews, and 24/7 emergency response.",
};

const pad = (n: number) => String(n).padStart(2, "0");

const STATS_BAR = [
  { num: "15+", sub: "Years Experience", red: true },
  { num: "1,000+", sub: "5-Star Reviews", red: false },
  { num: "5.0★", sub: "Star Rating", red: false },
  { num: "C-28", sub: "Licensed", red: false },
] as const;

const PROOF_STATS = [
  { num: "15+", label: "Years serving the Bay", sub: "Since 2009", red: true },
  { num: "1,000+", label: "Five-star reviews", sub: "Yelp · Google", red: false },
  { num: "5.0★", label: "Average Yelp rating", sub: "200+ Google reviews", red: false },
  { num: "< 30", label: "Min average ETA", sub: "Bay Area dispatch", red: true },
  { num: "12", label: "Service disciplines", sub: "One team", red: false },
  { num: "24/7", label: "Emergency response", sub: "We pick up", red: false },
  { num: "C-28", label: "Licensed contractor", sub: "Bonded · Insured", red: true },
  { num: "50+", label: "Technology partners", sub: "50+ national brands", red: false },
  { num: "12", label: "Cities served", sub: "Bay Area coverage", red: false },
  { num: "Master", label: "Level technicians", sub: "Licensed & certified", red: true },
] as const;

const PROTECT_CATEGORIES = [
  {
    title: "Residential",
    desc: "Smart locks, rekeying, deadbolts, and emergency lockouts for your home.",
    items: [
      "Smart Lock Installation",
      "Rekeying & Repin",
      "Deadbolt Upgrades",
      "Emergency Lockouts",
    ],
    href: "/services/residential-locksmith",
  },
  {
    title: "Commercial",
    desc: "Access control, master key systems, and commercial doors for your business.",
    items: [
      "Access Control Systems",
      "Master Key Systems",
      "Commercial Doors",
      "Panic Bar & Exit Devices",
    ],
    href: "/services/commercial-locksmith",
  },
  {
    title: "Automotive",
    desc: "Car key cutting, transponder programming, and vehicle lockouts.",
    items: [
      "Transponder Key Programming",
      "Key Fob Replacement",
      "Car Lockouts",
      "Ignition Repair",
    ],
    href: "/services/automotive-locksmith",
  },
] as const;

export default function Home() {
  const displayedServices = SERVICES.slice(0, 8);

  return (
    <main style={{ backgroundColor: "#FFFFFF", color: "#1A1A1A" }}>
      {/* ===== HERO ===== */}
      <section className="relative isolate">
        <div className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/why-us-sparks.jpg"
            aria-hidden="true"
          >
            <source src="/images/hero-video.mp4" type="video/mp4; codecs=avc1.4d401f" />
            <source src="/images/hero-video.webm" type="video/webm" />
          </video>
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.65) 100%)",
            }}
          />
          <div
            className="relative z-20 flex h-full flex-col justify-center px-4 sm:px-10"
            style={{ color: "#F4F0E6", textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}
          >
            <div className="mx-auto w-full max-w-6xl">
              <p
                className="text-[11px] uppercase tracking-[0.4em]"
                style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
              >
                A Bay Area locksmith, 20+ years in
              </p>
              <h1
                className="mt-6 uppercase leading-[0.85] tracking-[-0.01em]"
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(4rem, 13vw, 12rem)",
                }}
              >
                When security
                <br />
                <span style={{ color: "#E63946" }}>matters.</span>
              </h1>
              <p
                className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
                style={{ fontFamily: "var(--f-body)", color: "#F4F0E6DD" }}
              >
                At B&amp;B Locksmith &amp; Security, our business is securing yours. We blend
                industry-leading technology with hands-on trade mastery to create security
                solutions clients can trust. With over two decades of experience, we&apos;ve built
                our reputation on professionalism, responsiveness, quality workmanship, and lasting
                customer relationships.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02] sm:text-base"
                  style={{ backgroundColor: "#F4F0E6", fontFamily: "var(--f-body)" }}
                >
                  Free Assessment
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <a
                  href={`tel:${CONTACT.phone1}`}
                  className="inline-flex items-center gap-3 border px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-colors hover:bg-white/10 sm:text-base"
                  style={{ borderColor: "#F4F0E666", fontFamily: "var(--f-body)" }}
                >
                  <span>☎</span>
                  <span>Call {CONTACT.phone1}</span>
                </a>
                <a
                  href={`sms:${CONTACT.phone2}`}
                  className="inline-flex items-center gap-2 px-2 text-sm uppercase tracking-[0.2em] opacity-75 hover:opacity-100"
                  style={{ fontFamily: "var(--f-mono)" }}
                >
                  or text {CONTACT.phone2}
                </a>
              </div>
              <div
                className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.25em]"
                style={{ fontFamily: "var(--f-mono)", color: "#F4F0E6AA" }}
              >
                <span className="flex items-center gap-2">
                  <span style={{ color: "#F2B441" }}>★★★★★</span> 5.0 on Yelp
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

        {/* ===== STATS BAR ===== */}
        <div
          className="grid grid-cols-2 divide-x divide-y text-center sm:grid-cols-4 sm:divide-y-0"
          style={{ backgroundColor: "#F4F4F5", borderColor: "#1A1A1A14" }}
        >
          {STATS_BAR.map((stat, i) => (
            <div
              key={stat.sub}
              className="flex flex-col items-center justify-center px-5 py-8 sm:px-8 sm:py-12"
              style={{ borderColor: "#1A1A1A14" }}
            >
              <p
                className="mt-3 text-6xl leading-none sm:text-7xl"
                style={{
                  fontFamily: "var(--f-display)",
                  color: stat.red ? "#E63946" : "#1A1A1A",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {stat.num}
              </p>
              <p
                className="mt-2 text-sm"
                style={{ color: "#1A1A1AAA", fontFamily: "var(--f-body)" }}
              >
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section
        className="relative overflow-hidden border-b"
        style={{ borderColor: "#1A1A1A14" }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 lg:grid-cols-[5fr_7fr]">
          <div className="relative h-[60vh] min-h-[420px] overflow-hidden lg:h-auto">
            <Image
              src="/images/why-us-sparks.jpg"
              alt="Locksmith technician at work"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,0.7) 100%)",
              }}
            />
            <div
              className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.3em]"
              style={{ fontFamily: "var(--f-mono)", color: "#F4F0E6CC" }}
            >
              Plate 02 · Field, Oakland
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 px-6 py-20 sm:px-10 lg:py-28">
            <h2
              className="uppercase leading-[0.88] tracking-[-0.01em]"
              style={{
                fontFamily: "var(--f-display)",
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              }}
            >
              Our business is
              <br />
              <span style={{ color: "#E63946" }}>securing yours.</span>
            </h2>
            <p
              className="max-w-xl text-lg leading-snug sm:text-xl"
              style={{ color: "#1A1A1ACC" }}
            >
              We blend industry-leading technology with hands-on trade mastery to create security
              solutions clients can trust. With over two decades of experience, we&apos;ve built our
              reputation on professionalism, responsiveness, quality workmanship, and lasting
              customer relationships.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="border-b" style={{ borderColor: "#1A1A1A14" }}>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2
                className="uppercase leading-[0.88] tracking-[-0.01em]"
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(3rem, 8vw, 7.5rem)",
                }}
              >
                Security solutions
                <br />
                <span style={{ color: "#E63946" }}>you can trust.</span>
              </h2>
            </div>
            <p
              className="max-w-sm text-sm leading-snug sm:text-base"
              style={{ color: "#1A1A1AAA" }}
            >
              Commercial, residential, and automotive — backed by 20+ years of Bay Area expertise
              and the same team that picks up when you call.
            </p>
          </div>
          <div
            className="mt-14 grid gap-px"
            style={{
              backgroundColor: "#1A1A1A14",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {displayedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex h-80 flex-col justify-end overflow-hidden p-6"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover opacity-100 transition-all duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 0%, transparent 55%, rgba(0,0,0,0.55) 100%)",
                  }}
                />
                <div className="relative flex items-start justify-end">
                  <span
                    aria-hidden="true"
                    className="h-px w-8 transition-all group-hover:w-14"
                    style={{ backgroundColor: "#E63946" }}
                  />
                </div>
                <div
                  className="relative mt-auto"
                  style={{ color: "#F4F0E6", textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
                >
                  <h3
                    className="text-3xl uppercase leading-[0.95] sm:text-4xl"
                    style={{ fontFamily: "var(--f-display)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="mt-2 line-clamp-2 text-sm"
                    style={{ color: "#F4F0E6CC", fontFamily: "var(--f-body)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between">
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
            >
              8 of {SERVICES.length} disciplines
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] hover:text-black"
              style={{ fontFamily: "var(--f-body)", color: "#1A1A1ACC" }}
            >
              All disciplines <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROTECTING YOUR PROPERTY ===== */}
      <section
        className="relative border-b"
        style={{ backgroundColor: "#1A1A1A", borderColor: "#F4F0E61A" }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mb-14">
            <h2
              className="uppercase leading-[0.88] tracking-[-0.01em]"
              style={{
                fontFamily: "var(--f-display)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: "#F4F0E6",
              }}
            >
              Protecting
              <br />
              Your Property
            </h2>
            <p
              className="mt-4 max-w-xl text-base sm:text-lg"
              style={{ fontFamily: "var(--f-body)", color: "#F4F0E6AA" }}
            >
              Residential &amp; commercial — we secure it all
            </p>
          </div>
          <div
            className="grid grid-cols-1 gap-px sm:grid-cols-3"
            style={{ backgroundColor: "#F4F0E61A" }}
          >
            {PROTECT_CATEGORIES.map((cat, i) => (
              <div
                key={cat.title}
                className="flex flex-col gap-6 p-8"
                style={{ backgroundColor: "#1A1A1A" }}
              >
                <h3
                  className="text-3xl uppercase leading-[0.9] sm:text-4xl"
                  style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
                >
                  {cat.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--f-body)", color: "#F4F0E6AA" }}
                >
                  {cat.desc}
                </p>
                <ul className="flex flex-col gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm"
                      style={{ fontFamily: "var(--f-body)", color: "#F4F0E6CC" }}
                    >
                      <span style={{ color: "#E63946" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={cat.href}
                  className="group mt-auto inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] transition-opacity hover:opacity-70"
                  style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
                >
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border px-7 py-4 text-[11px] uppercase tracking-[0.3em] transition-colors"
              style={{
                borderColor: "#E63946",
                backgroundColor: "#E63946",
                color: "#F4F0E6",
                fontFamily: "var(--f-mono)",
              }}
            >
              Get a free security assessment
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== COVERAGE ===== */}
      <section className="border-b" style={{ borderColor: "#1A1A1A14" }}>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2
                className="uppercase leading-[0.88] tracking-[-0.01em]"
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(3rem, 8vw, 7.5rem)",
                }}
              >
                The whole <span style={{ color: "#E63946" }}>Bay.</span>
                <br />
                Every day.
              </h2>
            </div>
            <p
              className="max-w-sm text-sm leading-snug sm:text-base"
              style={{ color: "#1A1A1AAA" }}
            >
              Mobile fleet dispatched from Walnut Creek. On-site across San Francisco, Oakland,
              San Jose, Fremont, and every corner in between.
            </p>
          </div>

          <div className="relative mt-12 aspect-[16/7] w-full overflow-hidden">
            <iframe
              title="B&B Locksmith Bay Area service coverage"
              src="https://maps.google.com/maps?q=Bay+Area+California&ll=37.82,-122.20&z=9&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div
            className="mt-4 grid gap-px"
            style={{
              backgroundColor: "#1A1A1A14",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            {SERVICE_CITIES.map((city, i) => (
              <Link
                key={city.name}
                href={city.href}
                className="group flex items-center justify-between p-6 transition-colors hover:bg-[#F4F4F5]"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <span
                  className="text-xl uppercase leading-[0.92]"
                  style={{ fontFamily: "var(--f-display)" }}
                >
                  {city.name}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px w-6 transition-all group-hover:w-10"
                  style={{ backgroundColor: "#E63946" }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section
        className="relative border-b"
        style={{ borderColor: "#1A1A1A14", backgroundColor: "#F4F0E6", color: "#08080A" }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2
                className="uppercase leading-[0.88] tracking-[-0.01em]"
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(3rem, 8vw, 7.5rem)",
                }}
              >
                Trusted by hundreds
                <br />
                <span style={{ color: "#E63946" }}>across the Bay.</span>
              </h2>
            </div>
            <p
              className="max-w-sm text-sm leading-snug sm:text-base"
              style={{ color: "#08080AAA" }}
            >
              Hundreds of property managers, fleet operators, and homeowners — and the brands they
              work for.
            </p>
          </div>

          <div className="mt-14">
            <p
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--f-mono)", color: "#08080A66" }}
            >
              By the numbers
            </p>
            <div
              className="mt-6 grid gap-px border"
              style={{
                borderColor: "#08080A18",
                backgroundColor: "#08080A18",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              }}
            >
              {PROOF_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-between p-6 sm:p-7"
                  style={{ backgroundColor: "#F4F0E6" }}
                >
                  <p
                    className="mt-6 text-5xl leading-none sm:text-6xl"
                    style={{
                      fontFamily: "var(--f-display)",
                      color: stat.red ? "#E63946" : "#08080A",
                    }}
                  >
                    {stat.num}
                  </p>
                  <p
                    className="mt-3 text-sm font-semibold uppercase tracking-[0.12em]"
                    style={{ fontFamily: "var(--f-body)" }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="mt-1 text-xs"
                    style={{ fontFamily: "var(--f-mono)", color: "#08080A88" }}
                  >
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative mt-12 overflow-hidden border-y py-8"
            style={{ borderColor: "#08080A18" }}
          >
            <style>{`
              @keyframes marquee {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              .logo-marquee { animation: marquee 35s linear infinite; }
              .logo-marquee:hover { animation-play-state: paused; }
            `}</style>
            <div className="logo-marquee flex w-max items-center gap-16">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex h-10 shrink-0 items-center justify-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    className="h-8 w-auto object-contain opacity-70 transition-opacity hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={t.author}
                className="relative flex flex-col justify-between border p-8 sm:p-10"
                style={{ borderColor: "#08080A20", backgroundColor: "white" }}
              >
                <div className="flex items-center justify-between">
                  <div style={{ color: "#E63946", fontFamily: "var(--f-mono)" }}>★★★★★</div>
                  {"source" in t && t.source === "Google" ? (
                    <div className="flex items-center gap-2">
                      <svg
                        aria-label="Google"
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      <p
                        className="text-[10px] uppercase tracking-[0.3em]"
                        style={{ fontFamily: "var(--f-mono)", color: "#08080A66" }}
                      >
                        Google Review
                      </p>
                    </div>
                  ) : (
                    <p
                      className="text-[10px] uppercase tracking-[0.3em]"
                      style={{ fontFamily: "var(--f-mono)", color: "#08080A66" }}
                    >
                      Review · {pad(i + 1)}
                    </p>
                  )}
                </div>
                <blockquote
                  className="mt-6 text-xl leading-snug sm:text-2xl"
                  style={{ fontFamily: "var(--f-body)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption
                  className="mt-8 text-[11px] uppercase tracking-[0.3em]"
                  style={{ fontFamily: "var(--f-mono)", color: "#08080A88" }}
                >
                  — {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden border-b" style={{ borderColor: "#1A1A1A14" }}>
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 40%, #E6394622 0%, transparent 55%), radial-gradient(ellipse at 80% 60%, #F2B44116 0%, transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <h2
            className="uppercase leading-[0.85] tracking-[-0.01em]"
            style={{
              fontFamily: "var(--f-display)",
              fontSize: "clamp(3rem, 11vw, 10rem)",
            }}
          >
            Don&apos;t wait
            <br />
            for the <span style={{ color: "#E63946" }}>worst day.</span>
          </h2>
          <p
            className="mt-6 max-w-xl text-lg italic sm:text-xl"
            style={{
              fontFamily: "var(--f-italic, var(--f-display))",
              color: "#1A1A1ACC",
              fontStyle: "italic",
            }}
          >
            Two paths. Both answered by a real person.
          </p>
          <div
            className="mt-14 grid gap-px"
            style={{
              backgroundColor: "#1A1A1A14",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            <div
              className="relative flex flex-col justify-between p-8 sm:p-12"
              style={{ backgroundColor: "#F4F4F5" }}
            >
              <div>
                <p
                  className="text-[10px] uppercase tracking-[0.35em]"
                  style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A88" }}
                >
                  Path A · Plan it
                </p>
                <h3
                  className="mt-4 uppercase leading-[0.9]"
                  style={{
                    fontFamily: "var(--f-display)",
                    fontSize: "clamp(2.25rem, 4vw, 3.75rem)",
                  }}
                >
                  Walk the property with us.
                </h3>
                <p className="mt-4 max-w-sm text-base" style={{ color: "#1A1A1ABB" }}>
                  Free on-site assessment. A real technician reviews your setup and sends a written
                  quote. No pressure.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center justify-between gap-4 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: "#F4F0E6", fontFamily: "var(--f-body)" }}
              >
                Book a free assessment <span>→</span>
              </Link>
            </div>
            <div
              className="relative flex flex-col justify-between p-8 sm:p-12"
              style={{ backgroundColor: "#E63946", color: "#08080A" }}
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
                  style={{
                    fontFamily: "var(--f-display)",
                    fontSize: "clamp(2.25rem, 4vw, 3.75rem)",
                  }}
                >
                  We&apos;re already on the way.
                </h3>
                <p className="mt-4 max-w-sm text-base font-medium">
                  Locked out, broken key, emergency rekey — call now, we dispatch the nearest Bay
                  Area van.
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-3">
                <a
                  href={`tel:${CONTACT.phone1}`}
                  className="inline-flex items-center justify-between gap-4 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-transform hover:scale-[1.02]"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#1A1A1A",
                    fontFamily: "var(--f-body)",
                  }}
                >
                  ☎ Call {CONTACT.phone1}
                </a>
                <a
                  href={`sms:${CONTACT.phone2}`}
                  className="text-sm font-semibold uppercase tracking-[0.2em] hover:underline"
                  style={{ fontFamily: "var(--f-body)" }}
                >
                  or text {CONTACT.phone2} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL FEED ===== */}
      <section
        className="relative overflow-hidden border-b"
        style={{ borderColor: "#1A1A1A14", backgroundColor: "#F4F4F5" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 85% 30%, #E6394633 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, #F2B44122 0%, transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2
                className="uppercase leading-[0.88] tracking-[-0.01em]"
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                }}
              >
                Follow the field.
              </h2>
            </div>
            <p
              className="max-w-sm text-sm leading-snug sm:text-base"
              style={{ color: "#1A1A1AAA" }}
            >
              Daily posts from real jobs — installs, rekeys, emergency calls, the hardware we love.
              No filler.
            </p>
          </div>
          <div
            className="mt-10 grid gap-px"
            style={{
              backgroundColor: "#1A1A1A14",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            <SocialLink
              href={SOCIAL.instagram}
              platform="Instagram"
              handle="@bblocksmith"
              icon={
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              }
            />
            <SocialLink
              href={SOCIAL.facebook}
              platform="Facebook"
              handle="/bblocksmith"
              icon={
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              }
            />
            <SocialLink
              href={SOCIAL.youtube}
              platform="YouTube"
              handle="@bblocksmith"
              icon={
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              }
            />
            <SocialLink
              href={SOCIAL.linkedin}
              platform="LinkedIn"
              handle="/company/bb-locksmith"
              icon={
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function SocialLink({
  href,
  platform,
  handle,
  icon,
}: {
  href: string;
  platform: string;
  handle: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-5 p-6 transition-all hover:bg-[#08080A] sm:p-7"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <span
        aria-hidden="true"
        className="flex h-14 w-14 shrink-0 items-center justify-center border transition-all group-hover:border-[#E63946] group-hover:bg-[#E63946]"
        style={{ borderColor: "#1A1A1A33" }}
      >
        <svg className="h-5 w-5 group-hover:fill-white" viewBox="0 0 24 24" fill="#1A1A1A">
          {icon}
        </svg>
      </span>
      <span className="min-w-0 flex-1">
        <p
          className="text-xs uppercase tracking-[0.3em]"
          style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A88" }}
        >
          {platform}
        </p>
        <p
          className="mt-1 truncate text-xl group-hover:text-white"
          style={{ fontFamily: "var(--f-display)" }}
        >
          {handle}
        </p>
      </span>
      <span
        aria-hidden="true"
        className="text-sm transition-transform group-hover:translate-x-1 group-hover:text-white"
        style={{ color: "#1A1A1A66" }}
      >
        →
      </span>
    </a>
  );
}
