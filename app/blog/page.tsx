import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Our Blog | B&B Locksmith",
  description:
    "Security insights, tips, and guides from the Bay Area's trusted locksmith and security experts.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            label="Insights"
            heading="Our Blog"
            light
            center
          />
        </div>
      </section>

      {/* ===== POSTS GRID ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
