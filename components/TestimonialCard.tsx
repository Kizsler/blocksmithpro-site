interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
}

export default function TestimonialCard({
  quote,
  author,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="border-2 border-gray-200 border-t-[3px] border-t-brand-red bg-white p-6">
      <div className="mb-3 flex gap-0.5 text-brand-red">
        {Array.from({ length: rating }, (_, i) => (
          <span key={i} className="text-lg">
            &#9733;
          </span>
        ))}
      </div>
      <p className="mb-4 text-sm italic leading-relaxed text-gray-600">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-xs font-black uppercase tracking-[0.15em] text-gray-900">
        {author}
      </p>
    </div>
  );
}
