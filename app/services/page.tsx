import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Capabilities | B&B Locksmith",
  description:
    "Thirteen disciplines under one roof — commercial, residential, automotive, access control, and the security infrastructure behind them.",
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function ServicesPage() {
  return (
    <main style={{ backgroundColor: "#F4F0E6", color: "#1A1A1A" }}>
      {/* ===== HERO — Act II ===== */}
      <section
        className="relative overflow-hidden border-b"
        style={{ backgroundColor: "#1A1A1A", borderColor: "#F4F0E61A" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-center gap-6 px-6 py-20 sm:px-10 lg:py-28">
          <span
            className="text-[10px] uppercase tracking-[0.35em]"
            style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
          >
            Act II — Capabilities
          </span>
          <h1
            className="mt-6 uppercase leading-[0.85] tracking-[-0.01em] text-[clamp(3rem,8vw,7rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
          >
            Thirteen disciplines.
            <br />
            One crew.
          </h1>
          <p
            className="max-w-2xl text-base sm:text-lg"
            style={{ fontFamily: "var(--f-body)", color: "#F4F0E6CC" }}
          >
            Commercial, residential, automotive — plus the access control,
            intercom, and hardware work that holds the Bay Area shut after
            dark. Pick a discipline.
          </p>
        </div>
      </section>

      {/* ===== SCENE GRID ===== */}
      <section
        className="relative border-b"
        style={{ backgroundColor: "#F4F0E6", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <span
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
            >
              {SERVICES.length} disciplines
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
            >
              Bay Area · 24/7
            </span>
          </div>

          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"
               style={{ backgroundColor: "#1A1A1A1A" }}>
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex h-80 flex-col justify-end overflow-hidden p-6"
                style={{ backgroundColor: "#F4F0E6" }}
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.75) 100%)",
                  }}
                />
                <div className="relative flex items-start justify-between">
                  <span
                    className="text-[10px] uppercase tracking-[0.35em]"
                    style={{ fontFamily: "var(--f-mono)", color: "#F4F0E6CC" }}
                  >
                    Scene {pad(i + 1)}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px w-8 transition-all duration-300 group-hover:w-14"
                    style={{ backgroundColor: "#E63946" }}
                  />
                </div>
                <div
                  className="relative mt-auto"
                  style={{
                    color: "#F4F0E6",
                    textShadow: "0 2px 12px rgba(0,0,0,0.55)",
                  }}
                >
                  <h2
                    className="text-3xl uppercase leading-[0.95] sm:text-4xl"
                    style={{ fontFamily: "var(--f-display)" }}
                  >
                    {service.title}
                  </h2>
                  <p
                    className="mt-2 line-clamp-2 text-sm"
                    style={{
                      color: "#F4F0E6CC",
                      fontFamily: "var(--f-body)",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA — Act III ===== */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#08080A" }}
      >
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
            One call. Any hour.
            <br />
            We&apos;re on the way.
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
