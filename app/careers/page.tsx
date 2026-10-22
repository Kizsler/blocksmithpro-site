import type { Metadata } from "next";
import Image from "next/image";
import CareersList from "@/components/CareersList";
import ApplicationForm from "@/components/ApplicationForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { CONTACT } from "@/lib/site-data";
import { JOBS, WHY_WORK_HERE, CAREER_PATH, HIRING_STEPS } from "@/lib/careers-data";

export const metadata: Metadata = {
  title: "Careers | Locksmith & Access Control Jobs | B&B Locksmith",
  description:
    "Join B&B Locksmith & Security in Walnut Creek. Hiring commercial locksmith, access control, and safe technicians, apprentices, sales, marketing, and office staff. Pay posted on every job.",
  alternates: { canonical: "/careers" },
};

const FACTS = [
  { num: "Since 2011", sub: "15+ years in the Bay Area" },
  { num: "C-28", sub: "Licensed, bonded, and insured" },
  { num: "5.0★", sub: "1,000+ five-star reviews" },
  { num: "Walnut Creek", sub: "Home base for the whole Bay" },
] as const;

const pad = (n: number) => String(n).padStart(2, "0");

export default function CareersPage() {
  return (
    <main style={{ backgroundColor: "#F4F0E6", color: "#1A1A1A" }}>
      <JsonLd data={breadcrumbSchema([{ name: "Careers", path: "/careers" }])} />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b" style={{ backgroundColor: "#1A1A1A", borderColor: "#F4F0E61A" }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:py-28">
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.4em]"
              style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
            >
              Careers at B&amp;B
            </p>
            <h1
              className="mt-6 uppercase leading-[0.85] tracking-[-0.01em] text-[clamp(3rem,7vw,6rem)]"
              style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
            >
              Build a career
              <br />
              <span style={{ color: "#E63946" }}>in security.</span>
            </h1>
            <p
              className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ fontFamily: "var(--f-body)", color: "#F4F0E6CC" }}
            >
              We&apos;re a family-owned commercial locksmith and security company based in Walnut Creek. Our team
              installs and services locks, access control, and security hardware for offices, properties, and
              industrial sites across the Bay Area. We&apos;re growing, and we&apos;re hiring.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#positions"
                className="bg-brand-red px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-red-700"
              >
                See Open Positions
              </a>
              <a
                href="#apply"
                className="border px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-colors hover:bg-white/10"
                style={{ borderColor: "#F4F0E666", color: "#F4F0E6" }}
              >
                General Application
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden border-b-[6px] border-brand-red">
            <Image
              src="/images/van-fleet.jpg"
              alt="The B&B Locksmith van fleet"
              fill
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== FACTS ===== */}
      <section className="border-b bg-white" style={{ borderColor: "#1A1A1A1A" }}>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 sm:px-10 lg:grid-cols-4">
          {FACTS.map((fact) => (
            <div key={fact.num}>
              <div
                className="uppercase leading-none text-[clamp(1.5rem,2.5vw,2rem)]"
                style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
              >
                {fact.num}
              </div>
              <div className="mt-2 text-sm text-gray-600">{fact.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY WORK HERE ===== */}
      <section className="border-b" style={{ borderColor: "#1A1A1A1A" }}>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <h2
            className="uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.25rem)]"
            style={{ fontFamily: "var(--f-display)" }}
          >
            Why people work here
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg" style={{ color: "#1A1A1ACC" }}>
            Good people stay where they&apos;re paid fairly, trained well, and know what&apos;s expected.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: "#1A1A1A1A" }}>
            {WHY_WORK_HERE.map((item, i) => (
              <div key={item.title} className="bg-white p-8">
                <span
                  className="text-[10px] uppercase tracking-[0.35em]"
                  style={{ fontFamily: "var(--f-mono)", color: "#B3242F" }}
                >
                  {pad(i + 1)}
                </span>
                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#1A1A1ACC" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CAREER PATH ===== */}
      <section className="border-b" style={{ backgroundColor: "#1A1A1A", borderColor: "#F4F0E61A" }}>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <h2
            className="uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.25rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
          >
            A real path forward
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg" style={{ color: "#F4F0E6CC" }}>
            Start where you are. We train people up and promote from inside.
          </p>
          <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {CAREER_PATH.map((step, i) => (
              <li key={step.title} className="border-t-4 border-brand-red pt-5">
                <span
                  className="text-[10px] uppercase tracking-[0.35em]"
                  style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
                >
                  Step {pad(i + 1)}
                </span>
                <div
                  className="mt-2 uppercase leading-none text-[1.6rem]"
                  style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
                >
                  {step.title}
                </div>
                <p className="mt-3 text-sm" style={{ color: "#F4F0E6CC" }}>
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== OPEN POSITIONS ===== */}
      <section id="positions" className="scroll-mt-32 border-b" style={{ borderColor: "#1A1A1A1A" }}>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <h2
            className="uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.25rem)]"
            style={{ fontFamily: "var(--f-display)" }}
          >
            Open positions
          </h2>
          <p className="mb-10 mt-4 max-w-2xl text-base sm:text-lg" style={{ color: "#1A1A1ACC" }}>
            Roles in the field, in sales, in marketing, and in the office. Click any role for the full description,
            pay, and a short application.
          </p>
          <CareersList />
        </div>
      </section>

      {/* ===== HOW HIRING WORKS ===== */}
      <section className="border-b bg-white" style={{ borderColor: "#1A1A1A1A" }}>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
          <h2
            className="uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.25rem)]"
            style={{ fontFamily: "var(--f-display)" }}
          >
            How hiring works
          </h2>
          <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {HIRING_STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center text-lg"
                  style={{ backgroundColor: "#1A1A1A", color: "#F4F0E6", fontFamily: "var(--f-display)" }}
                >
                  {i + 1}
                </span>
                <div>
                  <div className="font-bold">{step.title}</div>
                  <p className="mt-1 text-sm text-gray-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== GENERAL APPLICATION ===== */}
      <section id="apply" className="scroll-mt-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_1.6fr] lg:py-24">
          <div>
            <h2
              className="uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2rem,4vw,3.25rem)]"
              style={{ fontFamily: "var(--f-display)" }}
            >
              Don&apos;t see your role?
            </h2>
            <p className="mt-4 text-base sm:text-lg" style={{ color: "#1A1A1ACC" }}>
              We&apos;re always looking for good people. Send us your info and we&apos;ll reach out when something
              fits.
            </p>
            <p className="mt-4 text-sm" style={{ color: "#1A1A1ACC" }}>
              Questions about a job? Call{" "}
              <a href={`tel:${CONTACT.phone1}`} className="font-bold underline">
                {CONTACT.phone1}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${CONTACT.email}`} className="font-bold underline">
                {CONTACT.email}
              </a>
              .
            </p>
          </div>
          <div className="border p-6 sm:p-8 bg-white" style={{ borderColor: "#1A1A1A1A" }}>
            <ApplicationForm positions={JOBS.map((job) => job.title)} />
          </div>
        </div>
      </section>
    </main>
  );
}
