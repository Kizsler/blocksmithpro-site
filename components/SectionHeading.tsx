interface SectionHeadingProps {
  label: string;
  heading: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  label,
  heading,
  light,
  center,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
        {label}
      </p>
      <h2
        className={`text-3xl font-black uppercase tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {heading}
      </h2>
      <div
        className={`mt-4 h-1 w-14 bg-brand-red accent-bar-animated ${center ? "mx-auto accent-bar-center" : ""}`}
      />
    </div>
  );
}
