import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/site-data";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

// "safe-installation" → "Safe Installation" — searcher vocabulary for titles,
// while service.title keeps the on-page brand voice.
const keywordTitle = (slug: string) =>
  slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) {
    return { title: "Discipline not found | B&B Locksmith" };
  }
  return {
    title: `${keywordTitle(service.slug)} Bay Area | B&B Locksmith`,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = SERVICES.findIndex((s) => s.slug === slug);
  const service = SERVICES[index];

  if (!service) {
    notFound();
  }

  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main style={{ backgroundColor: "#F4F0E6", color: "#1A1A1A" }}>
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden border-b"
        style={{ backgroundColor: "#1A1A1A", borderColor: "#F4F0E61A" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-center gap-6 px-6 py-20 sm:px-10 lg:py-28">
          <h1
            className="mt-2 uppercase leading-[0.85] tracking-[-0.01em] text-[clamp(2.75rem,7vw,6rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
          >
            {service.title}
          </h1>
          <p
            className="max-w-2xl text-base sm:text-lg"
            style={{ fontFamily: "var(--f-body)", color: "#F4F0E6CC" }}
          >
            {service.description}
          </p>
        </div>
      </section>

      {/* ===== PLATE — image ===== */}
      <section
        className="relative border-b"
        style={{ backgroundColor: "#F4F0E6", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
          <div className="mb-4 flex items-center justify-between">
            <span
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
            >
              Plate 01 · {service.title}
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
            >
              In the field
            </span>
          </div>
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== ACT I — The work ===== */}
      <section
        className="relative border-b"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:py-24">
          <div>
            <h2
              className="uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.25rem)]"
              style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
            >
              How we do it
            </h2>
          </div>
          <div>
            <p
              className="text-base leading-relaxed sm:text-lg"
              style={{ fontFamily: "var(--f-body)", color: "#1A1A1ACC" }}
            >
              {service.detail}
            </p>
          </div>
        </div>
      </section>

      {/* ===== ACT II — What's included ===== */}
      {service.features.length > 0 && (
        <section
          className="relative border-b"
          style={{ backgroundColor: "#1A1A1A", borderColor: "#F4F0E61A" }}
        >
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2
                  className="uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.25rem)]"
                  style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
                >
                  What&apos;s on the truck
                </h2>
              </div>
              <span
                className="text-[10px] uppercase tracking-[0.35em]"
                style={{ fontFamily: "var(--f-mono)", color: "#F4F0E6CC" }}
              >
                {service.features.length} items
              </span>
            </div>
            <div
              className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"
              style={{ backgroundColor: "#F4F0E61A" }}
            >
              {service.features.map((feature, i) => (
                <div
                  key={feature}
                  className="flex items-start gap-4 p-6"
                  style={{ backgroundColor: "#1A1A1A" }}
                >
                  <span
                    className="shrink-0 text-sm"
                    style={{ color: "#E63946" }}
                  >
                    —
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--f-body)", color: "#F4F0E6" }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== ADJACENT DISCIPLINES ===== */}
      <section
        className="relative border-b"
        style={{ backgroundColor: "#F4F0E6", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span
                className="text-[10px] uppercase tracking-[0.35em]"
                style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
              >
                Adjacent disciplines
              </span>
              <h2
                className="mt-4 uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.25rem)]"
                style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
              >
                Often paired with this
              </h2>
            </div>
            <Link
              href="/services"
              className="text-[10px] uppercase tracking-[0.35em] hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
            >
              ← All disciplines
            </Link>
          </div>
          <div
            className="grid grid-cols-1 gap-px sm:grid-cols-3"
            style={{ backgroundColor: "#1A1A1A1A" }}
          >
            {related.map((s) => {
              const rIndex = SERVICES.findIndex((x) => x.slug === s.slug);
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group relative flex h-80 flex-col justify-end overflow-hidden p-6"
                  style={{ backgroundColor: "#F4F0E6" }}
                >
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
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
                  <div className="relative flex items-start justify-end">
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
                      className="text-3xl uppercase leading-[0.95] sm:text-4xl"
                      style={{ fontFamily: "var(--f-display)" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="mt-2 line-clamp-2 text-sm"
                      style={{
                        color: "#F4F0E6CC",
                        fontFamily: "var(--f-body)",
                      }}
                    >
                      {s.description}
                    </p>
                  </div>
                </Link>
              );
            })}
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
            Need {service.title.toLowerCase()}?
            <br />
            One call away.
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
