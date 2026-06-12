import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Locksmith Tips & Security Advice | B&B Locksmith Field Notes",
  description:
    "Security insights, lock-out playbooks, and Bay Area locksmith advice from the B&B Locksmith field team.",
  alternates: { canonical: "/blog" },
};

const pad = (n: number) => String(n).padStart(2, "0");

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main style={{ backgroundColor: "#F4F0E6", color: "#1A1A1A" }}>
      {/* ===== HERO — Field notes ===== */}
      <section
        className="relative overflow-hidden border-b"
        style={{ backgroundColor: "#1A1A1A", borderColor: "#F4F0E61A" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-center gap-6 px-6 py-20 sm:px-10 lg:py-28">
          <span
            className="text-[10px] uppercase tracking-[0.4em]"
            style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
          >
            Field notes
          </span>
          <h1
            className="mt-6 uppercase leading-[0.85] tracking-[-0.01em] text-[clamp(3rem,8vw,7rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
          >
            Notes from
            <br />
            the field.
          </h1>
          <p
            className="max-w-2xl text-base sm:text-lg"
            style={{ fontFamily: "var(--f-body)", color: "#F4F0E6CC" }}
          >
            Dispatches from a working locksmith. Security playbooks, lock-out
            lessons, and the occasional war story.
          </p>
        </div>
      </section>

      {/* ===== NOTES GRID ===== */}
      <section
        className="relative border-b"
        style={{ backgroundColor: "#F4F0E6", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <span
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
            >
              {posts.length} {posts.length === 1 ? "note" : "notes"}
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
            >
              Most recent first
            </span>
          </div>

          {posts.length === 0 ? (
            <p
              className="text-base"
              style={{ fontFamily: "var(--f-body)", color: "#1A1A1A99" }}
            >
              No notes yet. Check back soon.
            </p>
          ) : (
            <div
              className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"
              style={{ backgroundColor: "#1A1A1A1A" }}
            >
              {posts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-6 p-8 transition-colors"
                  style={{ backgroundColor: "#F4F0E6" }}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="text-[10px] uppercase tracking-[0.4em]"
                      style={{
                        fontFamily: "var(--f-mono)",
                        color: "#E63946",
                      }}
                    >
                      Note {pad(i + 1)}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px w-8 transition-all duration-300 group-hover:w-14"
                      style={{ backgroundColor: "#E63946" }}
                    />
                  </div>
                  <p
                    className="text-[11px] uppercase tracking-[0.2em]"
                    style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A66" }}
                  >
                    {fmtDate(post.date)}
                  </p>
                  <h2
                    className="uppercase leading-[0.92] text-2xl sm:text-3xl"
                    style={{
                      fontFamily: "var(--f-display)",
                      color: "#1A1A1A",
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--f-body)",
                      color: "#1A1A1ACC",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <span
                    className="mt-auto inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em]"
                    style={{
                      fontFamily: "var(--f-mono)",
                      color: "#1A1A1A",
                    }}
                  >
                    Read note
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ backgroundColor: "#08080A" }}>
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 py-20 sm:px-10 lg:py-28">
          <span
            className="text-[10px] uppercase tracking-[0.35em]"
            style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
          >
            The call
          </span>
          <h2
            className="uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2.5rem,6vw,5rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
          >
            Need eyes on a real
            <br />
            security problem?
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 border px-7 py-4 text-[11px] uppercase tracking-[0.3em] transition-colors"
            style={{
              borderColor: "#E63946",
              backgroundColor: "#E63946",
              color: "#F4F0E6",
              fontFamily: "var(--f-mono)",
            }}
          >
            Request a free assessment
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
