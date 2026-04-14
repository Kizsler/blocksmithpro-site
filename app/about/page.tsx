import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About Us | B&B Locksmith",
  description:
    "Learn about B&B Locksmith — over 15 years serving the Bay Area with licensed, professional locksmith and security services.",
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
];

export default function AboutPage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="bg-brand-dark hero-gradient">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            label="Who We Are"
            heading="About Us"
            light
            center
          />
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
          {/* Left text */}
          <AnimateOnScroll className="flex-1">
            <SectionHeading label="Our Story" heading="Family Owned, Bay Area Trusted" />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-500">
              <p>
                Founded by Alex Berger over 15 years ago, B&amp;B Locksmith &amp;
                Security Inc. has grown from a small locksmith operation into the
                Bay Area&apos;s most trusted full-service security company. As a
                family-owned business, we take pride in treating every customer like
                a neighbor.
              </p>
              <p className="border-l-[3px] border-brand-red pl-4 italic text-gray-600">
                &ldquo;Happy customers are valuable customers!&rdquo;
                <span className="mt-1 block text-xs font-bold not-italic uppercase tracking-[0.15em] text-gray-900">
                  — Alex Berger, Founder &amp; CEO
                </span>
              </p>
              <p>
                With over 1,000 five-star reviews across Yelp and Google, our
                reputation speaks for itself. We offer a comprehensive range of
                services including master key systems, access control, smart locks,
                commercial door hardware, intercom and buzzer systems, safe
                installation, and emergency lockout assistance. As a licensed C-28
                contractor, every job meets the highest standards.
              </p>
              <p>
                Our mobile van fleet proudly serves communities across the Bay Area
                including San Francisco, San Jose, Fremont, Walnut Creek, Oakland,
                Berkeley, Concord, Pleasant Hill, San Ramon, Dublin, and surrounding
                cities. Wherever you are in the Bay, B&amp;B Locksmith is ready to
                help secure your property.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right image — Founder */}
          <AnimateOnScroll className="flex-1" delay={200}>
            <div className="border-[3px] border-brand-red">
              <Image
                src="/images/about/alex-bb-1.png"
                alt="Alex Berger — Founder & CEO of B&B Locksmith"
                width={800}
                height={1000}
                className="h-auto w-full"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-12">
            <SectionHeading
              label="Our Values"
              heading="What Drives Us"
              center
            />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 100}>
                <div className="border-t-4 border-brand-red bg-white p-6">
                  <h3 className="mb-2 text-sm font-black uppercase tracking-[0.1em] text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {value.description}
                  </p>
                </div>
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
              Ready to Secure Your Property?
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-brand-red px-10 py-4 text-sm font-extrabold uppercase tracking-[0.15em] text-white hover:bg-red-700 transition-colors"
            >
              Get a Free Assessment
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
