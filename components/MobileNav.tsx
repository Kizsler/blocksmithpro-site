"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/site-data";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Full-screen overlay */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-brand-darker/95">
          <nav className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-black uppercase tracking-[0.15em] text-white hover:text-brand-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-12 bg-brand-red px-8 py-3 text-sm font-extrabold uppercase tracking-[0.15em] text-white hover:bg-red-700 transition-colors"
          >
            Free Assessment
          </Link>
        </div>
      )}
    </div>
  );
}
