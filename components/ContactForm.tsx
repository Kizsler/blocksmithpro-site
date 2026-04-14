"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { SERVICES } from "@/lib/site-data";

const initialState: ContactFormState = { success: false, error: null };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.success) {
    return (
      <div className="border-2 border-gray-200 p-10 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-brand-red text-white">
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-lg font-black uppercase tracking-tight text-gray-900">
          Message Sent
        </h3>
        <p className="text-sm text-gray-500">
          Thank you for contacting B&amp;B Locksmith. We will get back to you
          within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction}>
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        className="absolute -left-[9999px] h-0 w-0"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Error display */}
      {state.error && (
        <div className="mb-6 border-2 border-brand-red bg-red-50 p-4">
          <p className="text-sm font-bold text-brand-red">{state.error}</p>
        </div>
      )}

      {/* Fields grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-2 border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-brand-red focus:outline-none"
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full border-2 border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-brand-red focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border-2 border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-brand-red focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500"
          >
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full border-2 border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-brand-red focus:outline-none"
          />
        </div>

        {/* Service Type */}
        <div className="sm:col-span-2">
          <label
            htmlFor="serviceType"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500"
          >
            Service Type
          </label>
          <select
            id="serviceType"
            name="serviceType"
            className="w-full border-2 border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-brand-red focus:outline-none"
          >
            <option value="">Select a service...</option>
            {SERVICES.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full border-2 border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-brand-red focus:outline-none"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="mt-6 w-full bg-brand-red px-8 py-4 text-sm font-extrabold uppercase tracking-[0.15em] text-white hover:bg-red-700 transition-colors disabled:opacity-50"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
