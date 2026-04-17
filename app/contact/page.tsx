import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";
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
      <section className="bg-brand-dark hero-gradient">
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
          <AnimateOnScroll className="flex-1">
            <h2 className="mb-8 text-2xl font-black uppercase tracking-tight text-gray-900">
              Send Us a Message
            </h2>
            <ContactForm />
          </AnimateOnScroll>

          {/* Right — Sidebar */}
          <AnimateOnScroll className="lg:w-80" delay={200}>
            {/* Phone */}
            <div className="mb-8">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-red">
                Call
              </p>
              <a
                href={`tel:${CONTACT.phoneCall}`}
                className="block text-sm text-gray-700 hover:text-brand-red transition-colors"
              >
                {CONTACT.phoneCall}
              </a>
              <p className="mt-4 mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-red">
                Text
              </p>
              <a
                href={`sms:${CONTACT.phoneText}`}
                className="block text-sm text-gray-700 hover:text-brand-red transition-colors"
              >
                {CONTACT.phoneText}
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

            {/* Map */}
            <div className="h-48 w-full overflow-hidden">
              <iframe
                title="B&B Locksmith location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100631.70633896498!2d-122.11042028547088!3d37.90009028498399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808561d2d7e10f8d%3A0x8ce0f85892d68bb2!2sWalnut%20Creek%2C%20CA!5e0!3m2!1sen!2sus!4v1713100000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
