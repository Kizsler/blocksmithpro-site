import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us | B&B Locksmith",
  description:
    "Learn about B&B Locksmith — over 15 years serving the Bay Area with licensed, professional locksmith and security services.",
};

const VALUES = [
  {
    title: "Experience",
    description:
      "Over 15 years of hands-on locksmith and security experience across the Bay Area. We have seen it all and solved it all.",
  },
  {
    title: "Licensed",
    description:
      "Fully licensed C-28 contractor, bonded, and insured. You can trust that every job meets the highest industry standards.",
  },
  {
    title: "Technology",
    description:
      "We stay ahead of the curve with the latest smart locks, access control systems, and commercial security technology.",
  },
  {
    title: "Customer First",
    description:
      "Your security is our priority. We build lasting relationships through transparent pricing, reliable service, and honest advice.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="bg-brand-dark">
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
          <div className="flex-1">
            <SectionHeading label="Our Story" heading="Bay Area Trusted" />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-500">
              <p>
                For over 15 years, B&amp;B Locksmith &amp; Security Inc. has been
                the Bay Area&apos;s go-to partner for commercial and residential
                security solutions. What started as a small locksmith operation has
                grown into a full-service security company trusted by property
                managers, businesses, and homeowners alike.
              </p>
              <p>
                We offer a comprehensive range of services including master key
                systems, access control installation, smart lock setup, commercial
                door hardware, intercom and buzzer systems, safe installation, and
                emergency lockout assistance. As a licensed C-28 contractor, every
                job we take on meets the highest standards of quality and
                compliance.
              </p>
              <p>
                Our team proudly serves communities across the Bay Area including
                Walnut Creek, Oakland, San Francisco, Berkeley, Concord, Pleasant
                Hill, San Ramon, Dublin, and surrounding cities. Wherever you are
                in the Bay, B&amp;B Locksmith is ready to help secure your
                property.
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1">
            <div className="border-[3px] border-brand-red">
              <Image
                src="/images/van-fleet.jpg"
                alt="B&B Locksmith van fleet"
                width={640}
                height={420}
                className="h-auto w-full"
              />
            </div>
          </div>
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="border-t-4 border-brand-red bg-white p-6"
              >
                <h3 className="mb-2 text-sm font-black uppercase tracking-[0.1em] text-gray-900">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <h2 className="mb-8 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            Ready to Secure Your Property?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-brand-red px-10 py-4 text-sm font-extrabold uppercase tracking-[0.15em] text-white hover:bg-red-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
