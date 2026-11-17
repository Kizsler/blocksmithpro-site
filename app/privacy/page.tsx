import type { Metadata } from "next";
import { CONTACT } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy | B&B Locksmith & Security",
  description:
    "How B&B Locksmith & Security Inc collects, uses and protects the information you share with us through our website, forms, ads, calls and texts.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: "Who we are",
    body: [
      `B&B Locksmith And Security Inc ("B&B", "we", "us") is a locksmith and security company based at ${CONTACT.address}. This policy explains what information we collect when you use blocksmithpro.com, fill out one of our forms (including forms inside our Facebook and Instagram ads), call us or text us, and what we do with it.`,
    ],
  },
  {
    title: "What we collect",
    body: [
      "Information you give us: your name, phone number, email address, business name, city or service address, and details about the job you need done (for example the type of business, number of doors, or whether you need an install or a repair).",
      "Information collected automatically when you visit our website: pages viewed, the device and browser you use, approximate location, and how you arrived at the site. We collect this with cookies and similar tools from Google Analytics, Google Ads and the Meta Pixel.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "To contact you about your request, give you a quote, schedule and perform the work, and follow up afterward.",
      "To understand which of our ads and pages bring in real customers, and to show our ads to people who are likely to need our services.",
      "We do not sell your personal information.",
    ],
  },
  {
    title: "Who we share it with",
    body: [
      "Only with service providers that help us run the business, such as our website host, email and phone providers, scheduling and invoicing software, and advertising platforms (Google and Meta) for ad measurement. They may only use the information to provide their services to us.",
      "We may also share information if the law requires it.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can ask us what information we have about you, ask us to correct it, or ask us to delete it. Email us or call us using the contact details below.",
      "You can block or delete cookies in your browser settings, and you can control ad personalization in your Google and Meta account settings.",
      "If you get a text from us and no longer want them, reply STOP.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "We keep customer and job records for as long as we need them to serve you and to meet our tax, licensing and legal obligations. We delete lead information we no longer need.",
    ],
  },
  {
    title: "Contact",
    body: [
      `Questions about this policy or your information: email ${CONTACT.email} or call ${CONTACT.phone1}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main style={{ backgroundColor: "#F4F0E6", color: "#1A1A1A" }}>
      <section className="mx-auto max-w-3xl px-6 py-16 sm:px-10 lg:py-24">
        <h1
          className="uppercase leading-[0.9] tracking-[-0.01em] text-[clamp(2.5rem,6vw,4.5rem)]"
          style={{ fontFamily: "var(--f-display)" }}
        >
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm" style={{ fontFamily: "var(--f-body)", color: "#1A1A1A99" }}>
          Last updated November 17, 2026
        </p>
        <div className="mt-10 space-y-10" style={{ fontFamily: "var(--f-body)" }}>
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2
                className="uppercase text-xl tracking-wide"
                style={{ fontFamily: "var(--f-display)" }}
              >
                {s.title}
              </h2>
              {s.body.map((p) => (
                <p key={p} className="mt-3 text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
