import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "The Call | B&B Locksmith",
  description:
    "Phone, email, or message us. 24/7 emergency lockout across the Bay Area.",
};

const HOURS = [
  ["Mon — Fri", "8:00 AM — 6:00 PM"],
  ["Saturday", "9:00 AM — 3:00 PM"],
  ["Sunday", "Closed"],
] as const;

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: "#F4F0E6", color: "#1A1A1A" }}>
      {/* ===== HERO — The call ===== */}
      <section
        className="relative overflow-hidden border-b"
        style={{ backgroundColor: "#1A1A1A", borderColor: "#F4F0E61A" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-center gap-6 px-6 py-20 sm:px-10 lg:py-28">
          <h1
            className="uppercase leading-[0.85] tracking-[-0.01em] text-[clamp(3rem,8vw,7rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
          >
            Reach us.
          </h1>
          <p
            className="max-w-2xl text-base sm:text-lg"
            style={{ fontFamily: "var(--f-body)", color: "#F4F0E6CC" }}
          >
            Pick up the phone. Send a message. Drop by Walnut Creek. We
            answer in business hours and roll trucks the rest of the time.
          </p>
        </div>
      </section>

      {/* ===== TWO-UP — Form + Cue card ===== */}
      <section
        className="relative border-b"
        style={{ backgroundColor: "#F4F0E6", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.5fr_1fr] lg:gap-20 lg:py-24">
          {/* Form column */}
          <div>
            <h2
              className="uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.25rem)]"
              style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
            >
              Tell us what you need
            </h2>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          {/* Cue card column */}
          <aside>
            <div
              className="mt-4 flex flex-col gap-px"
              style={{ backgroundColor: "#1A1A1A1A" }}
            >
              {/* Phone */}
              <div
                className="flex flex-col gap-3 p-6"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <span
                  className="text-[10px] uppercase tracking-[0.4em]"
                  style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
                >
                  No. 01 · Phone
                </span>
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${CONTACT.phone1}`}
                    className="uppercase leading-[0.95] text-2xl hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: "var(--f-display)",
                      color: "#1A1A1A",
                    }}
                  >
                    {CONTACT.phone1}
                  </a>
                  <a
                    href={`tel:${CONTACT.phone2}`}
                    className="uppercase leading-[0.95] text-2xl hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: "var(--f-display)",
                      color: "#1A1A1A",
                    }}
                  >
                    {CONTACT.phone2}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div
                className="flex flex-col gap-3 p-6"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <span
                  className="text-[10px] uppercase tracking-[0.4em]"
                  style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
                >
                  No. 02 · Email
                </span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-base hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A" }}
                >
                  {CONTACT.email}
                </a>
              </div>

              {/* Address */}
              <div
                className="flex flex-col gap-3 p-6"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <span
                  className="text-[10px] uppercase tracking-[0.4em]"
                  style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
                >
                  No. 03 · Address
                </span>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--f-body)", color: "#1A1A1A" }}
                >
                  {CONTACT.address}
                </p>
              </div>

              {/* Hours */}
              <div
                className="flex flex-col gap-3 p-6"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <span
                  className="text-[10px] uppercase tracking-[0.4em]"
                  style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
                >
                  No. 04 · Hours
                </span>
                <dl className="flex flex-col gap-1.5">
                  {HOURS.map(([day, time]) => (
                    <div
                      key={day}
                      className="flex items-center justify-between gap-4"
                    >
                      <dt
                        className="text-[11px] uppercase tracking-[0.2em]"
                        style={{
                          fontFamily: "var(--f-mono)",
                          color: "#1A1A1A99",
                        }}
                      >
                        {day}
                      </dt>
                      <dd
                        className="text-sm"
                        style={{
                          fontFamily: "var(--f-body)",
                          color: "#1A1A1A",
                        }}
                      >
                        {time}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p
                  className="mt-2 text-[11px] uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
                >
                  24/7 emergency line open
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ===== PLATE — Map ===== */}
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
              Plate 03 · Walnut Creek, CA
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
            >
              Headquarters
            </span>
          </div>
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <iframe
              title="B&B Locksmith headquarters location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100631.70633896498!2d-122.11042028547088!3d37.90009028498399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808561d2d7e10f8d%3A0x8ce0f85892d68bb2!2sWalnut%20Creek%2C%20CA!5e0!3m2!1sen!2sus!4v1713100000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ===== 24/7 STRIP ===== */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#08080A" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-20 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:py-24">
          <div>
            <span
              className="text-[10px] uppercase tracking-[0.4em]"
              style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
            >
              Emergency
            </span>
            <h2
              className="mt-4 uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,5vw,4rem)]"
              style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
            >
              Locked out?
              <br />
              We&apos;re on the way.
            </h2>
          </div>
          <a
            href={`tel:${CONTACT.phone1}`}
            className="group inline-flex items-center gap-3 border px-7 py-4 text-[11px] uppercase tracking-[0.3em] transition-colors"
            style={{
              borderColor: "#E63946",
              backgroundColor: "#E63946",
              color: "#F4F0E6",
              fontFamily: "var(--f-mono)",
            }}
          >
            Call {CONTACT.phone1}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
