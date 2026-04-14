import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Services | B&B Locksmith",
  description:
    "Professional locksmith and security services for commercial, residential, and automotive clients across the Bay Area.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            label="What We Do"
            heading="Our Services"
            light
            center
          />
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-400">
            From commercial security systems to residential lock changes and
            automotive key services, B&amp;B Locksmith delivers trusted solutions
            across the Bay Area.
          </p>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
