import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import StatsBar from "@/components/StatsBar";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import {
  SERVICES,
  TESTIMONIALS,
  CLIENT_LOGOS,
} from "@/lib/site-data";

const WHY_CHOOSE_US = [
  "Licensed C-28 Contractor",
  "Over 15 Years Experience",
  "24/7 Emergency Service",
  "Free Security Assessments",
  "Bonded & Insured",
  "Locally Owned & Operated",
  "Top-Rated on Yelp",
  "Commercial & Residential",
];

export default function Home() {
  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="bg-brand-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
          {/* Left content */}
          <div className="flex-1">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
              Bay Area&apos;s #1 Security Partner
            </p>
            <h1 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your{" "}
              <span className="text-brand-red">Security</span> Is Our
              Priority.
            </h1>
            <div className="mb-6 h-1 w-14 bg-brand-red" />
            <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-400">
              Professional locksmith and security solutions for commercial,
              residential, and automotive clients across the Bay Area. Licensed,
              bonded, and insured with over 15 years of trusted service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-brand-red px-8 py-3 text-sm font-extrabold uppercase tracking-[0.15em] text-white hover:bg-red-700 transition-colors"
              >
                Schedule a Visit
              </Link>
              <Link
                href="/services"
                className="border-2 border-white px-8 py-3 text-sm font-extrabold uppercase tracking-[0.15em] text-white hover:bg-white hover:text-brand-dark transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1">
            <div className="border-[3px] border-brand-red">
              <Image
                src="/images/hero-van.png"
                alt="B&B Locksmith van fleet"
                width={640}
                height={420}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <StatsBar />

      {/* ===== SERVICES GRID ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-12">
            <SectionHeading
              label="What We Do"
              heading="Our Services"
              center
            />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-brand-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
          {/* Left image */}
          <div className="flex-1">
            <div className="border-[3px] border-brand-red">
              <Image
                src="/images/why-choose-van.png"
                alt="B&B Locksmith service van"
                width={640}
                height={420}
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1">
            <SectionHeading
              label="Why Us"
              heading="Why Choose Us"
              light
            />
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {WHY_CHOOSE_US.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 block h-[6px] w-[6px] shrink-0 bg-brand-red" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-8 inline-block bg-brand-red px-8 py-3 text-sm font-extrabold uppercase tracking-[0.15em] text-white hover:bg-red-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-12">
            <SectionHeading
              label="Reviews"
              heading="What Our Clients Say"
              center
            />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENT LOGOS ===== */}
      <section className="border-t-[3px] border-brand-red bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
            Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {CLIENT_LOGOS.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={120}
                height={48}
                className="h-10 w-auto grayscale transition-all hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <h2 className="mb-8 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            Bay Area&apos;s #1 Locksmith for Over 15 Years!
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-brand-red px-10 py-4 text-sm font-extrabold uppercase tracking-[0.15em] text-white hover:bg-red-700 transition-colors"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>
    </main>
  );
}
