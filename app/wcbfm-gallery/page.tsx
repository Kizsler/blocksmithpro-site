import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WCBFM Gallery | B&B Locksmith",
  description: "Photos and highlights from B&B Locksmith at WCBFM 2026.",
};

export default function WCBFMGalleryPage() {
  return (
    <main style={{ backgroundColor: "#FFFFFF", color: "#1A1A1A" }}>
      <section
        className="flex min-h-[70vh] flex-col items-center justify-center border-b px-6 text-center"
        style={{ borderColor: "#1A1A1A1A" }}
      >
        <span
          className="mb-6 text-[10px] uppercase tracking-[0.35em]"
          style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
        >
          WCBFM 2026 · May 20
        </span>
        <h1
          className="uppercase leading-[0.85] tracking-[-0.02em] text-[clamp(3rem,10vw,8rem)]"
          style={{ fontFamily: "var(--f-display)", color: "#1A1A1A" }}
        >
          Coming
          <br />
          <span style={{ color: "#E63946" }}>Soon.</span>
        </h1>
        <p
          className="mt-8 max-w-md text-base leading-relaxed"
          style={{ fontFamily: "var(--f-body)", color: "#1A1A1ACC" }}
        >
          Gallery photos from the show will be posted here after the event.
          Check back May 21st.
        </p>
        <Link
          href="/wcbfm"
          className="group mt-10 inline-flex items-center gap-3 border px-7 py-4 text-[11px] uppercase tracking-[0.3em] transition-colors"
          style={{
            borderColor: "#E63946",
            backgroundColor: "#E63946",
            color: "#FFFFFF",
            fontFamily: "var(--f-mono)",
          }}
        >
          See the DoorBird page
          <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
