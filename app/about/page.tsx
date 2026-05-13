import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { STATS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Prologue | B&B Locksmith",
  description:
    "Fifteen years securing the Bay Area. A family-run, C-28-licensed crew with over a thousand five-star reviews.",
};

const VALUES = [
  {
    title: "Experience & Expertise",
    description:
      "Over 15 years of hands-on locksmith and security experience across the Bay Area. We have seen it all and solved it all.",
  },
  {
    title: "Licensed & Insured",
    description:
      "Fully licensed C-28 contractor, bonded, and insured. You can trust that every job meets the highest industry standards.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Upfront, honest pricing with no hidden fees. We provide detailed estimates before starting any work so there are never surprises.",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "We stay ahead of the curve with the latest smart locks, access control systems, and commercial security technology.",
  },
  {
    title: "Comprehensive Coverage",
    description:
      "Our mobile van fleet serves the entire Bay Area. Wherever you are, our team comes to you with fully equipped service vehicles.",
  },
  {
    title: "Customer First",
    description:
      "Your security is our priority. We build lasting relationships through reliable service, honest advice, and over 1,000 five-star reviews.",
  },
] as const;

const pad = (n: number) => String(n).padStart(2, "0");

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "#F4F0E6", color: "#1A1A1A" }}>
      {/* ===== HERO — Prologue ===== */}
      <section
        className="relative overflow-hidden border-b"
        style={{ backgroundColor: "#1A1A1A", borderColor: "#F4F0E61A" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-center gap-6 px-6 py-20 sm:px-10 lg:py-28">
          <span
            className="text-[10px] uppercase tracking-[0.4em]"
            style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
          >
            Prologue
          </span>
          <h1
            className="mt-6 uppercase leading-[0.85] tracking-[-0.01em] text-[clamp(3rem,8vw,7rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
          >
            Fifteen years.
            <br />
            One Bay Area.
          </h1>
          <p
            className="max-w-2xl text-base sm:text-lg"
            style={{ fontFamily: "var(--f-body)", color: "#F4F0E6CC" }}
          >
            A family-run locksmith and security crew. Licensed C-28. Over a
            thousand five-star reviews. We answer the phone, we show up, and
            we leave the door closed behind us.
          </p>
        </div>
      </section>

      {/* ===== ACT I — Origin + Founder plate ===== */}
      <section
        className="relative border-b"
        style={{ backgroundColor: "#F4F0E6", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:py-24">
          <div>
            <span
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
            >
              Act I — The origin
            </span>
            <h2
              className="mt-4 uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.5rem)]"
              style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
            >
              Family owned.
              <br />
              Bay Area trusted.
            </h2>
            <div
              className="mt-8 space-y-5 text-base leading-relaxed"
              style={{ fontFamily: "var(--f-body)", color: "#1A1A1ACC" }}
            >
              <p>
                Founded by Alex Berger over 15 years ago, B&amp;B Locksmith
                &amp; Security Inc. has grown from a small locksmith operation
                into the Bay Area&apos;s most trusted full-service security
                company. As a family-owned business, we treat every customer
                like a neighbor.
              </p>
              <p>
                With over 1,000 five-star reviews across Yelp and Google, our
                reputation speaks for itself. We offer master key systems,
                access control, smart locks, commercial door hardware, intercom
                and buzzer systems, safe installation, and emergency lockout —
                all under one licensed C-28 roof.
              </p>
              <p>
                Our mobile fleet runs San Francisco, San Jose, Fremont, Walnut
                Creek, Oakland, Berkeley, Concord, Pleasant Hill, San Ramon,
                Dublin, and the cities between. Wherever you are in the Bay,
                we&apos;re close.
              </p>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <span
                className="text-[10px] uppercase tracking-[0.35em]"
                style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
              >
                Plate 01 · Alex Berger, founder
              </span>
              <span
                className="text-[10px] uppercase tracking-[0.35em]"
                style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
              >
                Walnut Creek
              </span>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/about/alex-bb-1.png"
                alt="Alex Berger — Founder & CEO of B&B Locksmith"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PULL QUOTE — Founder ===== */}
      <section
        className="relative overflow-hidden border-b"
        style={{ backgroundColor: "#08080A", borderColor: "#F4F0E61A" }}
      >
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:py-28">
          <span
            className="text-[10px] uppercase tracking-[0.4em]"
            style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
          >
            Interlude — The credo
          </span>
          <blockquote
            className="mt-8 uppercase leading-[0.9] tracking-[-0.01em] text-[clamp(2rem,5vw,4.5rem)]"
            style={{
              fontFamily: "var(--f-italic, var(--f-display))",
              color: "#F4F0E6",
              fontStyle: "italic",
            }}
          >
            &ldquo;Happy customers
            <br />
            are valuable customers.&rdquo;
          </blockquote>
          <p
            className="mt-8 text-[11px] uppercase tracking-[0.3em]"
            style={{ fontFamily: "var(--f-mono)", color: "#F4F0E6CC" }}
          >
            — Alex Berger, founder &amp; CEO
          </p>
        </div>
      </section>

      {/* ===== ACT II — Principles ===== */}
      <section
        className="relative border-b"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span
                className="text-[10px] uppercase tracking-[0.35em]"
                style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
              >
                Act II — How we work
              </span>
              <h2
                className="mt-4 uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.5rem)]"
                style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
              >
                Six principles
              </h2>
            </div>
            <span
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
            >
              {VALUES.length} of {VALUES.length}
            </span>
          </div>
          <div
            className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"
            style={{ backgroundColor: "#1A1A1A1A" }}
          >
            {VALUES.map((value, i) => (
              <div
                key={value.title}
                className="flex flex-col gap-4 p-8"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] uppercase tracking-[0.4em]"
                    style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
                  >
                    Principle {pad(i + 1)}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px w-8"
                    style={{ backgroundColor: "#1A1A1A33" }}
                  />
                </div>
                <h3
                  className="uppercase leading-[0.92] text-2xl sm:text-3xl"
                  style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--f-body)", color: "#1A1A1ACC" }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BY THE NUMBERS ===== */}
      <section
        className="relative border-b"
        style={{ backgroundColor: "#F4F0E6", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <span
            className="text-[10px] uppercase tracking-[0.35em]"
            style={{ fontFamily: "var(--f-mono)", color: "#08080A66" }}
          >
            By the numbers
          </span>
          <h2
            className="mt-4 uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.5rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
          >
            The math, since 2009
          </h2>
          <div
            className="mt-12 grid grid-cols-2 gap-px sm:grid-cols-4"
            style={{ backgroundColor: "#1A1A1A1A" }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-start justify-between gap-8 p-6 sm:p-8"
                style={{ backgroundColor: "#F4F0E6" }}
              >
                <span
                  className="text-[10px] uppercase tracking-[0.4em]"
                  style={{ fontFamily: "var(--f-mono)", color: "#08080A66" }}
                >
                  No. {pad(i + 1)}
                </span>
                <div>
                  <p
                    className="uppercase leading-[0.85] tracking-[-0.01em] text-[clamp(3rem,6vw,5rem)]"
                    style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-3 text-[11px] uppercase tracking-[0.12em]"
                    style={{ fontFamily: "var(--f-body)", color: "#1A1A1A99" }}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ backgroundColor: "#08080A" }}>
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 py-20 sm:px-10 lg:py-28">
          <span
            className="text-[10px] uppercase tracking-[0.35em]"
            style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
          >
            Act III — The call
          </span>
          <h2
            className="uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2.5rem,6vw,5rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
          >
            Ready to lock it down?
          </h2>
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
            Request a free assessment
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
