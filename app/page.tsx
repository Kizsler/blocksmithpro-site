import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import StatsBar from "@/components/StatsBar";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
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
];

export default function Home() {
  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[600px] overflow-hidden bg-brand-dark lg:min-h-[700px]">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-van.png"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/images/hero-video.webm" type="video/webm" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-brand-dark/75" />

        {/* Gradient accent */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <p className="hero-stagger-1 mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
            Bay Area&apos;s #1 Security Partner
          </p>
          <h1 className="hero-stagger-2 mb-6 max-w-3xl text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your{" "}
            <span className="text-brand-red">Security</span> Is Our
            Priority.
          </h1>
          <div className="hero-stagger-3 mb-6 h-1 w-14 bg-brand-red" />
          <p className="hero-stagger-4 mb-8 max-w-lg text-base leading-relaxed text-gray-300">
            Professional locksmith and security solutions for commercial,
            residential, and automotive clients across the Bay Area. Licensed,
            bonded, and insured with over 15 years of trusted service.
          </p>
          <div className="hero-stagger-5 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-brand-red px-8 py-3 text-sm font-extrabold uppercase tracking-[0.15em] text-white hover:bg-red-700 transition-colors"
            >
              Get a Free Assessment
            </Link>
            <Link
              href="/services"
              className="border-2 border-white/80 px-8 py-3 text-sm font-extrabold uppercase tracking-[0.15em] text-white hover:bg-white hover:text-brand-dark transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <AnimateOnScroll>
        <StatsBar />
      </AnimateOnScroll>

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
            {SERVICES.map((service, i) => (
              <AnimateOnScroll key={service.title} delay={i * 100}>
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

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-brand-dark hero-gradient">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
          {/* Left image */}
          <AnimateOnScroll className="flex-1">
            <div className="border-[3px] border-brand-red">
              <Image
                src="/images/why-us-sparks.jpg"
                alt="B&B Locksmith technician at work"
                width={640}
                height={420}
                className="h-auto w-full"
              />
            </div>
          </AnimateOnScroll>

          {/* Right content */}
          <AnimateOnScroll className="flex-1" delay={200}>
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
              href="/contact"
              className="mt-8 inline-block bg-brand-red px-8 py-3 text-sm font-extrabold uppercase tracking-[0.15em] text-white hover:bg-red-700 transition-colors"
            >
              Get a Free Assessment
            </Link>
          </AnimateOnScroll>
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

          {/* Review platform badges */}
          <AnimateOnScroll animation="fade-in">
            <div className="mb-12 flex flex-wrap items-center justify-center gap-8">
              <Image
                src="/images/reviews/yelp.png"
                alt="Yelp Reviews"
                width={588}
                height={274}
                className="h-auto w-48 sm:w-56"
              />
              <Image
                src="/images/reviews/google.png"
                alt="Google Reviews"
                width={588}
                height={274}
                className="h-auto w-48 sm:w-56"
              />
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((testimonial, i) => (
              <AnimateOnScroll key={testimonial.author} delay={i * 100}>
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  rating={testimonial.rating}
                />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENT LOGOS ===== */}
      <section className="bg-white">
        <div className="py-12">
          <p className="mb-8 text-center text-sm font-black uppercase tracking-[0.2em] text-brand-red">
            Trusted By
          </p>
          <div className="mx-auto max-w-6xl overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-20">
              {/* Repeat logos 4x for seamless infinite loop */}
              {Array.from({ length: 4 }, (_, set) =>
                CLIENT_LOGOS.map((logo) => (
                  <Image
                    key={`${logo.name}-${set}`}
                    src={logo.src}
                    alt={logo.name}
                    width={140}
                    height={56}
                    className="h-10 w-auto shrink-0 grayscale transition-all hover:grayscale-0"
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-brand-dark hero-gradient">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <AnimateOnScroll>
            <h2 className="mb-8 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
              Bay Area&apos;s #1 Locksmith for Over 15 Years!
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
