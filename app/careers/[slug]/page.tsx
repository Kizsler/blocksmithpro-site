import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ApplicationForm from "@/components/ApplicationForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, SITE_URL } from "@/lib/schema";
import { CONTACT } from "@/lib/site-data";
import { DEPARTMENTS, JOBS, JOBS_POSTED, getJob, type Job } from "@/lib/careers-data";

export function generateStaticParams() {
  return JOBS.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return { title: "Job not found | B&B Locksmith" };
  return {
    title: `${job.title} | Careers | B&B Locksmith`,
    description: `${job.payLabel}. ${job.summary}`,
    alternates: { canonical: `/careers/${job.slug}` },
  };
}

/** Google for Jobs markup. https://developers.google.com/search/docs/appearance/structured-data/job-posting */
function jobPostingSchema(job: Job) {
  const description = [
    ...job.about.map((p) => `<p>${p}</p>`),
    ...job.sections.map(
      (s) => `<h3>${s.heading}</h3><ul>${s.items.map((item) => `<li>${item}</li>`).join("")}</ul>`
    ),
  ].join("");
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description,
    datePosted: JOBS_POSTED,
    employmentType: "FULL_TIME",
    directApply: true,
    url: `${SITE_URL}/careers/${job.slug}`,
    hiringOrganization: {
      "@type": "Organization",
      name: "B&B Locksmith & Security Inc.",
      sameAs: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1449 SOS Drive",
        addressLocality: "Walnut Creek",
        addressRegion: "CA",
        postalCode: "94597",
        addressCountry: "US",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        minValue: job.payMin,
        maxValue: job.payMax,
        unitText: job.payUnit,
      },
    },
  };
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  const dept = DEPARTMENTS.find((d) => d.id === job.department);

  return (
    <main style={{ backgroundColor: "#F4F0E6", color: "#1A1A1A" }}>
      <JsonLd
        data={[
          jobPostingSchema(job),
          breadcrumbSchema([
            { name: "Careers", path: "/careers" },
            { name: job.title, path: `/careers/${job.slug}` },
          ]),
        ]}
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b" style={{ backgroundColor: "#1A1A1A", borderColor: "#F4F0E61A" }}>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <nav aria-label="Breadcrumb" className="text-sm" style={{ color: "#F4F0E6CC" }}>
            <Link href="/careers" className="underline hover:text-white">
              Careers
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span>{dept?.name}</span>
          </nav>
          <h1
            className="mt-6 uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2.5rem,6vw,5rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
          >
            {job.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-base" style={{ color: "#F4F0E6CC" }}>
            <span>{job.type}</span>
            <span>Walnut Creek HQ · Bay Area</span>
            <span className="font-bold" style={{ color: "#F4F0E6" }}>
              {job.payLabel}
            </span>
          </div>
          {job.payNote && (
            <p className="mt-3 text-base font-semibold" style={{ color: "#F4F0E6" }}>
              {job.payNote}
            </p>
          )}
          <a
            href="#apply"
            className="mt-8 inline-block bg-brand-red px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-red-700"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* ===== BODY ===== */}
      <section>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1.6fr_1fr] lg:py-20">
          <article className="border bg-white p-7 sm:p-10" style={{ borderColor: "#1A1A1A1A" }}>
            <h2
              className="uppercase leading-none tracking-[-0.01em] text-[1.9rem]"
              style={{ fontFamily: "var(--f-display)" }}
            >
              About the role
            </h2>
            {job.about.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed" style={{ color: "#1A1A1ACC" }}>
                {p}
              </p>
            ))}

            {job.sections.map((section) => (
              <div key={section.heading} className="mt-10">
                <h2
                  className="uppercase leading-none tracking-[-0.01em] text-[1.9rem]"
                  style={{ fontFamily: "var(--f-display)" }}
                >
                  {section.heading}
                </h2>
                <ul className="mt-4 space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-relaxed" style={{ color: "#1A1A1ACC" }}>
                      <span aria-hidden="true" style={{ color: "#E63946" }}>
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </article>

          <aside id="apply" className="scroll-mt-32 border-2 border-gray-900 bg-white p-6 sm:p-8">
            <h2
              className="uppercase leading-none tracking-[-0.01em] text-[1.9rem]"
              style={{ fontFamily: "var(--f-display)" }}
            >
              Apply for this job
            </h2>
            <p className="mb-6 mt-2 text-sm text-gray-600">Takes about 5 minutes. Works on your phone.</p>
            <ApplicationForm
              job={{ title: job.title, extraQuestion: job.extraQuestion, experienceOptions: job.experienceOptions }}
            />
            <p className="mt-6 text-sm text-gray-600">
              Questions? Call{" "}
              <a href={`tel:${CONTACT.phone1}`} className="font-bold underline">
                {CONTACT.phone1}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${CONTACT.email}`} className="font-bold underline">
                {CONTACT.email}
              </a>
              .
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
