import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function BlogCard({ slug, title, date, excerpt }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <div className="border-2 border-gray-200 transition-all duration-300 ease-out group-hover:border-brand-red group-hover:shadow-lg group-hover:-translate-y-1">
        {/* Red top bar */}
        <div className="h-2 origin-top bg-brand-red transition-transform duration-300 ease-out group-hover:scale-y-150" />
        <div className="p-6">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h3 className="mb-3 text-sm font-black uppercase tracking-[0.1em] text-gray-900">
            {title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-500">
            {excerpt}
          </p>
          <span className="text-sm font-bold text-brand-red">
            Read More &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
