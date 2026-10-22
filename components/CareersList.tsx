"use client";

import { useState } from "react";
import Link from "next/link";
import { DEPARTMENTS, JOBS, type Department } from "@/lib/careers-data";

type Filter = "all" | Department;

export default function CareersList() {
  const [filter, setFilter] = useState<Filter>("all");

  const groups = DEPARTMENTS.map((dept) => ({
    ...dept,
    jobs: JOBS.filter((job) => job.department === dept.id),
  })).filter((g) => g.jobs.length > 0);

  const tabs: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All roles", count: JOBS.length },
    ...groups.map((g) => ({ id: g.id, label: g.name, count: g.jobs.length })),
  ];

  const visible = filter === "all" ? groups : groups.filter((g) => g.id === filter);

  return (
    <div>
      <div role="group" aria-label="Filter by department" className="mb-12 flex flex-wrap gap-3">
        {tabs.map((tab) => {
          const active = tab.id === filter;
          return (
            <button
              key={tab.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(tab.id)}
              className={`min-h-[44px] border-2 px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors ${
                active
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 bg-white text-gray-900 hover:border-gray-900"
              }`}
              style={{ fontFamily: "var(--f-body)" }}
            >
              {tab.label} ({tab.count})
            </button>
          );
        })}
      </div>

      {visible.map((group) => (
        <div key={group.id} className="mb-14">
          <div
            className="mb-6 flex flex-wrap items-baseline gap-4 border-b pb-3"
            style={{ borderColor: "#1A1A1A1A" }}
          >
            <h3
              className="uppercase leading-none tracking-[-0.01em] text-[clamp(1.75rem,3vw,2.25rem)]"
              style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
            >
              {group.name}
            </h3>
            <span className="text-sm" style={{ fontFamily: "var(--f-body)", color: "#1A1A1AB3" }}>
              {group.blurb}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {group.jobs.map((job) => (
              <article
                key={job.slug}
                className="flex flex-col gap-3 border bg-white p-7"
                style={{ borderColor: "#1A1A1A1A" }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-[10px] uppercase tracking-[0.3em]"
                    style={{ fontFamily: "var(--f-mono)", color: "#B3242F" }}
                  >
                    {group.name}
                  </span>
                  <span className="text-xs text-gray-600">{job.type}</span>
                </div>
                <h4
                  className="uppercase leading-[1.05] tracking-[-0.01em] text-[1.65rem]"
                  style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
                >
                  {job.title}
                </h4>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  <span className="text-gray-600">Walnut Creek HQ · Bay Area</span>
                  <span className="font-bold text-gray-900">{job.payLabel}</span>
                </div>
                {job.payNote && <p className="text-sm font-semibold text-gray-900">{job.payNote}</p>}
                <p className="flex-grow text-[15px] leading-relaxed" style={{ color: "#1A1A1ACC" }}>
                  {job.summary}
                </p>
                <Link
                  href={`/careers/${job.slug}`}
                  className="self-start border-b-2 border-brand-red py-1 text-xs font-extrabold uppercase tracking-[0.15em] text-gray-900 hover:text-brand-red"
                  aria-label={`View and apply: ${job.title}`}
                >
                  View &amp; Apply →
                </Link>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
