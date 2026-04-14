import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { SERVICES } from "@/lib/site-data";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) {
    return { title: "Service Not Found | B&B Locksmith" };
  }
  return {
    title: `${service.title} | B&B Locksmith`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="bg-brand-dark hero-gradient">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            label="Our Services"
            heading={service.title}
            light
            center
          />
        </div>
      </section>

      {/* ===== DETAIL ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <AnimateOnScroll>
            <div className="mb-10 overflow-hidden border-[3px] border-brand-red">
              <Image
                src={service.image}
                alt={service.title}
                width={540}
                height={380}
                className="h-auto w-full"
              />
            </div>
            <p className="text-base leading-relaxed text-gray-600">
              {service.detail}
            </p>

            {service.features.length > 0 && (
              <div className="mt-10">
                <h2 className="mb-6 text-lg font-black uppercase tracking-[0.1em] text-gray-900">
                  What&apos;s Included
                </h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="mt-1.5 block h-[6px] w-[6px] shrink-0 bg-brand-red" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-brand-red px-8 py-3 text-sm font-extrabold uppercase tracking-[0.15em] text-white hover:bg-red-700 transition-colors"
              >
                Get a Free Assessment
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 border-t-2 border-gray-200 pt-8">
            <Link
              href="/services"
              className="text-sm font-bold text-brand-red hover:text-red-700 transition-colors"
            >
              &larr; All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===== RELATED SERVICES ===== */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-12">
            <SectionHeading
              label="Explore"
              heading="Related Services"
              center
            />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s, i) => (
              <AnimateOnScroll key={s.slug} delay={i * 100}>
                <ServiceCard
                  title={s.title}
                  description={s.description}
                  icon={s.icon}
                  slug={s.slug}
                  image={s.image}
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
              Need {service.title}?
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
