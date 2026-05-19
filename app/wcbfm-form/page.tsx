"use client";

import { useActionState } from "react";
import { submitLead } from "@/app/actions/wcbfm-leads";

const INITIAL_STATE = { success: false, error: null };

const inputStyle = {
  width: "100%",
  border: "1px solid #1A1A1A22",
  padding: "14px 16px",
  fontSize: "14px",
  fontFamily: "var(--f-body)",
  color: "#1A1A1A",
  backgroundColor: "#FFFFFF",
  outline: "none",
} as const;

const labelStyle = {
  display: "block",
  fontFamily: "var(--f-mono)",
  fontSize: "10px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.3em",
  color: "#1A1A1A66",
  marginBottom: "8px",
};

export default function WCBFMFormPage() {
  const [state, action, pending] = useActionState(submitLead, INITIAL_STATE);

  if (state.success) {
    return (
      <main style={{ backgroundColor: "#FFFFFF" }}>
        <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
          <span
            className="mb-6 text-[10px] uppercase tracking-[0.35em]"
            style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
          >
            WCBFM 2026 · B&amp;B Locksmith
          </span>
          <h1
            className="uppercase leading-[0.85] tracking-[-0.02em] text-[clamp(3rem,10vw,7rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
          >
            You&apos;re
            <br />
            <span style={{ color: "#E63946" }}>In.</span>
          </h1>
          <p
            className="mt-8 max-w-sm text-base leading-relaxed"
            style={{ fontFamily: "var(--f-body)", color: "#1A1A1ACC" }}
          >
            We&apos;ll be in touch soon. Talk to us at the booth if you have
            questions — we&apos;re right here.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: "#FFFFFF", color: "#1A1A1A" }}>
      <section className="mx-auto max-w-2xl px-6 py-16 sm:px-10 lg:py-24">

        <span
          className="text-[10px] uppercase tracking-[0.35em]"
          style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
        >
          WCBFM 2026 · B&amp;B Locksmith
        </span>

        <h1
          className="mt-4 uppercase leading-[0.85] tracking-[-0.02em] text-[clamp(2.5rem,8vw,5.5rem)]"
          style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
        >
          Stay in
          <br />
          <span style={{ color: "#E63946" }}>the loop.</span>
        </h1>

        <p
          className="mt-6 max-w-md text-base leading-relaxed"
          style={{ fontFamily: "var(--f-body)", color: "#1A1A1ACC" }}
        >
          Leave your info and we&apos;ll follow up with everything you need to
          know about DoorBird and what B&amp;B can do for your property.
        </p>

        <form action={action} className="mt-12 flex flex-col gap-5">

          <div>
            <label htmlFor="first_name" style={labelStyle}>First Name</label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              autoComplete="given-name"
              required
              placeholder="Alex"
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="company" style={labelStyle}>Company</label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              required
              placeholder="Acme Properties LLC"
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="email" style={labelStyle}>Company Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="alex@yourcompany.com"
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="phone" style={labelStyle}>Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              placeholder="(415) 000-0000"
              style={inputStyle}
            />
          </div>

          {state.error && (
            <p
              className="text-sm"
              style={{ fontFamily: "var(--f-body)", color: "#E63946" }}
            >
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="mt-2 inline-flex items-center justify-center gap-3 border px-7 py-4 text-[11px] uppercase tracking-[0.3em] transition-opacity disabled:opacity-50"
            style={{
              borderColor: "#E63946",
              backgroundColor: "#E63946",
              color: "#FFFFFF",
              fontFamily: "var(--f-mono)",
              cursor: pending ? "not-allowed" : "pointer",
            }}
          >
            {pending ? "Submitting..." : "Submit →"}
          </button>

        </form>
      </section>
    </main>
  );
}
