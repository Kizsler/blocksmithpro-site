import Link from "next/link";

const ICON_MAP: Record<string, string> = {
  building: "\u{1F3E2}",
  home: "\u{1F3E0}",
  car: "\u{1F697}",
  search: "\u{1F50D}",
  shield: "\u{1F6E1}",
  bell: "\u{1F514}",
  door: "\u{1F6AA}",
  lock: "\u{1F512}",
  mic: "\u{1F3A4}",
  key: "\u{1F511}",
  smartphone: "\u{1F4F1}",
  safe: "\u{1F4E6}",
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <Link href="/services" className="group block">
      <div className="border-2 border-gray-200 p-6 transition-colors group-hover:border-brand-red">
        <div className="mb-4 text-4xl">{ICON_MAP[icon] ?? "\u{1F512}"}</div>
        <h3 className="mb-2 text-sm font-black uppercase tracking-[0.1em] text-gray-900">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-500">{description}</p>
      </div>
    </Link>
  );
}
