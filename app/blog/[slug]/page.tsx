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
    return { title: "Post Not Found | B&B Locksmith" };
  }
  return {
    title: `${post.title} | B&B Locksmith`,
    description: post.excerpt,
  };
}

function markdownToHtml(md: string): string {
  return md
    // ### headings (h3) — must come before ## to avoid partial match
    .replace(
      /^### (.+)$/gm,
      '<h3 class="mb-3 mt-8 text-base font-black uppercase tracking-tight text-gray-900">$1</h3>'
    )
    // ## headings (h2)
    .replace(
      /^## (.+)$/gm,
      '<h2 class="mb-4 mt-10 text-xl font-black uppercase tracking-tight text-gray-900">$1</h2>'
    )
    // **bold**
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
    // Paragraphs: wrap non-empty lines that don't start with <
    .split(/\n\n+/)
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("<")) return trimmed;
      return `<p class="mb-4 text-sm leading-relaxed text-gray-500">${trimmed}</p>`;
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

  const htmlContent = markdownToHtml(post.content);

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 h-1 w-14 bg-brand-red" />
        </div>
      </section>

      {/* ===== ARTICLE ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <article dangerouslySetInnerHTML={{ __html: htmlContent }} />

          <div className="mt-12 border-t-2 border-gray-200 pt-8">
            <Link
              href="/blog"
              className="text-sm font-bold text-brand-red hover:text-red-700 transition-colors"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
