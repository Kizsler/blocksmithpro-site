import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us | B&B Locksmith",
  description:
    "Get in touch with B&B Locksmith for a free security assessment or to schedule service across the Bay Area.",
};

export default function ContactPage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            label="Get In Touch"
            heading="Contact Us"
            light
            center
          />
        </div>
      </section>

      {/* ===== CONTACT CONTENT ===== */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
          {/* Left — Form */}
          <div className="flex-1">
            <h2 className="mb-8 text-2xl font-black uppercase tracking-tight text-gray-900">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Right — Sidebar */}
          <div className="lg:w-80">
            {/* Phone */}
            <div className="mb-8">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-red">
                Phone
              </p>
              <a
                href={`tel:${CONTACT.phone1}`}
                className="block text-sm text-gray-700 hover:text-brand-red transition-colors"
              >
                {CONTACT.phone1}
              </a>
              <a
                href={`tel:${CONTACT.phone2}`}
                className="block text-sm text-gray-700 hover:text-brand-red transition-colors"
              >
                {CONTACT.phone2}
              </a>
            </div>

            {/* Email */}
            <div className="mb-8">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-red">
                Email
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm text-gray-700 hover:text-brand-red transition-colors"
              >
                {CONTACT.email}
              </a>
            </div>

            {/* Address */}
            <div className="mb-8">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-red">
                Address
              </p>
              <p className="text-sm text-gray-700">{CONTACT.address}</p>
            </div>

            {/* Hours */}
            <div className="mb-8">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-red">
                Hours
              </p>
              <p className="text-sm text-gray-700">Mon — Fri: 8:00 AM — 6:00 PM</p>
              <p className="text-sm text-gray-700">Sat: 9:00 AM — 3:00 PM</p>
              <p className="text-sm text-gray-700">Sun: Closed</p>
              <p className="mt-1 text-sm text-gray-500">
                24/7 Emergency Service Available
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="flex h-48 items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                Map — Phase 2
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
