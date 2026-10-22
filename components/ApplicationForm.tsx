"use client";

import { useActionState } from "react";
import { submitApplication, type ApplicationFormState } from "@/app/actions/careers";
import type { Job } from "@/lib/careers-data";

const initialState: ApplicationFormState = { success: false, error: null };

const labelClass =
  "mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-600";
const inputClass =
  "w-full border-2 border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-brand-red focus:outline-none";

const SOURCES = ["Indeed", "Google", "LinkedIn", "Friend or employee", "Saw our van", "Other"];
const GENERAL_EXPERIENCE = ["None yet, I want to learn", "Less than 2 years", "2 to 5 years", "5+ years"];

type Props = {
  /** When set, the form applies to this job only. */
  job?: Pick<Job, "title" | "extraQuestion" | "experienceOptions">;
  /** Titles offered in the position dropdown (general application). */
  positions?: string[];
};

export default function ApplicationForm({ job, positions = [] }: Props) {
  const [state, formAction, isPending] = useActionState(submitApplication, initialState);
  const experienceOptions = job?.experienceOptions ?? GENERAL_EXPERIENCE;
  const extra = job?.extraQuestion;

  if (state.success) {
    return (
      <div className="border-2 border-gray-200 bg-white p-10 text-center" role="status">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-brand-red text-white">
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-lg font-black uppercase tracking-tight text-gray-900">Application Sent</h3>
        <p className="text-sm text-gray-600">
          Thanks for applying to B&amp;B Locksmith. If it&apos;s a fit, we&apos;ll call you to talk about the role.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="bg-white">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        className="absolute -left-[9999px] h-0 w-0"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {state.error && (
        <div className="mb-6 border-2 border-brand-red bg-red-50 p-4" role="alert">
          <p className="text-sm font-bold text-red-800">{state.error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="app-name" className={labelClass}>Full name *</label>
          <input id="app-name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="app-phone" className={labelClass}>Phone *</label>
          <input id="app-phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="app-email" className={labelClass}>Email *</label>
          <input id="app-email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>

        {job ? (
          <input type="hidden" name="position" value={job.title} />
        ) : (
          <div className="sm:col-span-2">
            <label htmlFor="app-position" className={labelClass}>Position interested in *</label>
            <select id="app-position" name="position" required className={inputClass} defaultValue="Not sure / general">
              <option>Not sure / general</option>
              {positions.map((title) => (
                <option key={title}>{title}</option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label htmlFor="app-experience" className={labelClass}>Years of experience</label>
          <select id="app-experience" name="experience" className={inputClass}>
            {experienceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="app-source" className={labelClass}>How did you hear about us?</label>
          <select id="app-source" name="source" className={inputClass}>
            {SOURCES.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        {extra && (
          <div className="sm:col-span-2">
            <label htmlFor="app-extra" className={labelClass}>
              {extra.label}
              {extra.required ? " *" : ""}
            </label>
            {extra.type === "textarea" ? (
              <textarea id="app-extra" name={extra.name} rows={3} required={extra.required} className={inputClass} />
            ) : (
              <input
                id="app-extra"
                name={extra.name}
                type="url"
                placeholder="https://"
                required={extra.required}
                className={inputClass}
              />
            )}
          </div>
        )}

        <div className="sm:col-span-2">
          <label htmlFor="app-resume" className={labelClass}>Resume (optional, PDF or Word, up to 4 MB)</label>
          <input
            id="app-resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className={`${inputClass} border-dashed file:mr-4 file:border-0 file:bg-gray-900 file:px-4 file:py-2 file:text-xs file:font-bold file:uppercase file:tracking-[0.15em] file:text-white`}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="app-message" className={labelClass}>Anything else we should know?</label>
          <textarea id="app-message" name="message" rows={3} className={inputClass} />
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="mt-6 w-full bg-brand-red px-8 py-4 text-sm font-extrabold uppercase tracking-[0.15em] text-white transition-colors hover:bg-red-700 disabled:opacity-50"
      >
        {isPending ? "Sending..." : "Submit Application"}
      </button>
      <p className="mt-4 text-xs text-gray-600">
        B&amp;B Locksmith &amp; Security is an equal opportunity employer.
      </p>
    </form>
  );
}
