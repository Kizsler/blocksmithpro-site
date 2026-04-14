import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import StatsBar from "@/components/StatsBar";
import { SERVICES, LOCATIONS } from "@/lib/site-data";

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
    return { title: "Location Not Found | B&B Locksmith" };
  }
  return {
    title: `Locksmith in ${location.name} | B&B Locksmith`,
    description: `Professional locksmith and security services in ${location.name}. Licensed C-28 contractor with over 15 years of trusted service. Call today for a free assessment.`,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = LOCATIONS.find((l) => l.slug === city);

  if (!location) {
    notFound();
  }

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="bg-brand-dark hero-gradient">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            label={`Serving ${location.name}`}
            heading={`Locksmith in ${location.name}`}
            light
            center
          />
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-400">
            {location.description}
          </p>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <AnimateOnScroll>
        <StatsBar />
      </AnimateOnScroll>

      {/* ===== SERVICES IN THIS AREA ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-12">
            <SectionHeading
              label={`${location.name} Services`}
              heading="What We Offer"
              center
            />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <AnimateOnScroll key={service.slug} delay={i * 75}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  slug={service.slug}
                />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-brand-dark hero-gradient">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <AnimateOnScroll>
            <h2 className="mb-8 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              Need a Locksmith in {location.name}?
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-brand-red px-10 py-4 text-sm font-extrabold uppercase tracking-[0.15em] text-white hover:bg-red-700 transition-colors"
            >
              Get Your Free Assessment
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
