import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SERVICES, LOCATIONS, STATS } from "@/lib/site-data";

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const location = LOCATIONS.find((l) => l.slug === city);
  if (!location) {
    return { title: "Zone not found | B&B Locksmith" };
  }
  return {
    title: `Locksmith in ${location.name} | B&B Locksmith`,
    description: `Professional locksmith and security services in ${location.name}. Licensed C-28 contractor with over 15 years of trusted service.`,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const zoneIndex = LOCATIONS.findIndex((l) => l.slug === city);
  const location = LOCATIONS[zoneIndex];

  if (!location) {
    notFound();
  }

  return (
    <main style={{ backgroundColor: "#F4F0E6", color: "#1A1A1A" }}>
      {/* ===== HERO — Zone ===== */}
      <section
        className="relative overflow-hidden border-b"
        style={{ backgroundColor: "#1A1A1A", borderColor: "#F4F0E61A" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-center gap-6 px-6 py-20 sm:px-10 lg:py-28">
          <div className="flex items-center gap-3">
            <span
              className="text-[10px] uppercase tracking-[0.4em]"
              style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
            >
              Zone {pad(zoneIndex + 1)}
            </span>
            <span
              aria-hidden="true"
              className="h-px w-8"
              style={{ backgroundColor: "#E63946" }}
            />
            <span
              className="text-[10px] uppercase tracking-[0.4em]"
              style={{ fontFamily: "var(--f-mono)", color: "#F4F0E6CC" }}
            >
              Bay Area · 24/7
            </span>
          </div>
          <h1
            className="mt-4 uppercase leading-[0.85] tracking-[-0.01em] text-[clamp(3rem,8vw,7rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
          >
            Locksmith in
            <br />
            {location.name}.
          </h1>
          <p
            className="max-w-2xl text-base sm:text-lg"
            style={{ fontFamily: "var(--f-body)", color: "#F4F0E6CC" }}
          >
            {location.description}
          </p>
        </div>
      </section>

      {/* ===== BY THE NUMBERS ===== */}
      <section
        className="relative border-b"
        style={{ backgroundColor: "#F4F0E6", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
          <span
            className="text-[10px] uppercase tracking-[0.35em]"
            style={{ fontFamily: "var(--f-mono)", color: "#08080A66" }}
          >
            What we bring to {location.name}
          </span>
          <div
            className="mt-8 grid grid-cols-2 gap-px sm:grid-cols-4"
            style={{ backgroundColor: "#1A1A1A1A" }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-start justify-between gap-6 p-6 sm:p-8"
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
                    className="uppercase leading-[0.85] tracking-[-0.01em] text-[clamp(2.25rem,5vw,4rem)]"
                    style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-2 text-[10px] uppercase tracking-[0.15em]"
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

      {/* ===== SCENE GRID — services in this zone ===== */}
      <section
        className="relative border-b"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span
                className="text-[10px] uppercase tracking-[0.35em]"
                style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
              >
                Disciplines in {location.name}
              </span>
              <h2
                className="mt-4 uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.25rem)]"
                style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
              >
                Everything we do here
              </h2>
            </div>
            <span
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
            >
              {SERVICES.length} disciplines
            </span>
          </div>

          <div
            className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"
            style={{ backgroundColor: "#1A1A1A1A" }}
          >
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex h-72 flex-col justify-end overflow-hidden p-6"
                style={{ backgroundColor: "#FFFFFF" }}
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
                  className="absolute inset-0"
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
                  <h3
                    className="uppercase leading-[0.95] text-2xl sm:text-3xl"
                    style={{ fontFamily: "var(--f-display)" }}
                  >
                    {service.title}
                  </h3>
                </div>
              </Link>
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
            Need a locksmith
            <br />
            in {location.name}?
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
