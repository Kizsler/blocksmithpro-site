import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return { title: "Note not found | B&B Locksmith" };
  }
  return {
    title: `${post.title} | B&B Locksmith`,
    description: post.excerpt,
  };
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const pad = (n: number) => String(n).padStart(2, "0");

function renderInline(text: string): string {
  return text
    .replace(
      /\[([^\]]+)\]\(([^)\s]+)\)/g,
      `<a href="$2" style="color:#E63946;text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1px">$1</a>`
    )
    .replace(
      /\*\*(.+?)\*\*/g,
      `<strong style="color:#1A1A1A;font-weight:600">$1</strong>`
    )
    .replace(
      /`([^`]+)`/g,
      `<code style="font-family:var(--f-mono);background-color:#1A1A1A0F;color:#1A1A1A;padding:0.1em 0.4em;font-size:0.9em">$1</code>`
    );
}

function markdownToHtml(md: string): string {
  return md
    .replace(/\r\n/g, "\n")
    .split(/\n\n+/)
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("<")) return trimmed;

      if (/^### /.test(trimmed)) {
        return `<h3 style="font-family:var(--f-display);color:#1A1A1A" class="mb-4 mt-10 uppercase leading-[0.95] text-xl sm:text-2xl">${renderInline(trimmed.slice(4))}</h3>`;
      }
      if (/^## /.test(trimmed)) {
        return `<h2 style="font-family:var(--f-display);color:#1A1A1A" class="mb-5 mt-12 uppercase leading-[0.92] text-2xl sm:text-3xl">${renderInline(trimmed.slice(3))}</h2>`;
      }

      const lines = trimmed.split("\n");
      const isUnordered = lines.every((l) => /^[-*]\s+/.test(l));
      const isOrdered = lines.every((l) => /^\d+\.\s+/.test(l));

      if (isUnordered) {
        const items = lines
          .map(
            (l) =>
              `<li style="font-family:var(--f-body);color:#1A1A1ACC" class="mb-2 pl-2">${renderInline(l.replace(/^[-*]\s+/, ""))}</li>`
          )
          .join("");
        return `<ul style="list-style-type:square;padding-left:1.5rem;color:#E63946" class="mb-5">${items}</ul>`;
      }
      if (isOrdered) {
        const items = lines
          .map(
            (l) =>
              `<li style="font-family:var(--f-body);color:#1A1A1ACC" class="mb-2 pl-2">${renderInline(l.replace(/^\d+\.\s+/, ""))}</li>`
          )
          .join("");
        return `<ol style="list-style-type:decimal;padding-left:1.5rem;color:#E63946" class="mb-5">${items}</ol>`;
      }

      return `<p style="font-family:var(--f-body);color:#1A1A1ACC" class="mb-5 text-base leading-relaxed">${renderInline(trimmed)}</p>`;
    })
    .join("\n");
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  const noteNumber = index >= 0 ? pad(index + 1) : "01";
  const htmlContent = markdownToHtml(post.content);

  return (
    <main style={{ backgroundColor: "#F4F0E6", color: "#1A1A1A" }}>
      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden border-b"
        style={{ backgroundColor: "#1A1A1A", borderColor: "#F4F0E61A" }}
      >
        <div className="mx-auto flex max-w-5xl flex-col justify-center gap-6 px-6 py-20 sm:px-10 lg:py-28">
          <div className="flex items-center gap-3">
            <span
              className="text-[10px] uppercase tracking-[0.4em]"
              style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
            >
              Field notes · Note {noteNumber}
            </span>
            <span
              aria-hidden="true"
              className="h-px w-8"
              style={{ backgroundColor: "#E63946" }}
            />
            <span
              className="text-[10px] uppercase tracking-[0.4em]"
              style={{ fontFamily: "var(--f-mono)", color: "#F4F0E6CC" }}
            >
              {fmtDate(post.date)}
            </span>
          </div>
          <h1
            className="mt-4 uppercase leading-[0.88] tracking-[-0.01em] text-[clamp(2.5rem,6vw,5.5rem)]"
            style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
          >
            {post.title}
          </h1>
          {post.excerpt && (
            <p
              className="max-w-2xl text-base sm:text-lg"
              style={{ fontFamily: "var(--f-body)", color: "#F4F0E6CC" }}
            >
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* ===== BODY ===== */}
      <section
        className="relative border-b"
        style={{ backgroundColor: "#F4F0E6", borderColor: "#1A1A1A1A" }}
      >
        <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 lg:py-24">
          <article
            className="space-y-1"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          <div
            className="mt-16 flex items-center justify-between border-t pt-8"
            style={{ borderColor: "#1A1A1A1A" }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--f-mono)", color: "#1A1A1A" }}
            >
              <span aria-hidden="true">←</span>
              All field notes
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
            >
              Talk to us
              <span aria-hidden="true">→</span>
            </Link>
          </div>
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
            Got a lock problem
            <br />
            this article didn&apos;t fix?
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
