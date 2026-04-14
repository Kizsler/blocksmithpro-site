import Link from "next/link";
import Image from "next/image";

function ServiceIcon({ name }: { name: string }) {
  const props = {
    className: "h-10 w-10 stroke-brand-red",
    viewBox: "0 0 48 48",
    fill: "none",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "building":
      return (
        <svg {...props}>
          <rect x="8" y="12" width="32" height="30" />
          <line x1="8" y1="12" x2="24" y2="4" />
          <line x1="24" y1="4" x2="40" y2="12" />
          <rect x="14" y="18" width="6" height="6" />
          <rect x="28" y="18" width="6" height="6" />
          <rect x="14" y="28" width="6" height="6" />
          <rect x="28" y="28" width="6" height="6" />
          <rect x="20" y="36" width="8" height="6" />
        </svg>
      );
    case "home":
      return (
        <svg {...props}>
          <path d="M6 24L24 8L42 24" />
          <path d="M12 22V40H36V22" />
          <rect x="20" y="30" width="8" height="10" />
        </svg>
      );
    case "car":
      return (
        <svg {...props}>
          <path d="M10 30L14 18H34L38 30" />
          <rect x="6" y="30" width="36" height="10" />
          <circle cx="14" cy="40" r="3" />
          <circle cx="34" cy="40" r="3" />
          <line x1="20" y1="18" x2="18" y2="30" />
          <line x1="28" y1="18" x2="30" y2="30" />
        </svg>
      );
    case "search":
      return (
        <svg {...props}>
          <circle cx="20" cy="20" r="12" />
          <line x1="29" y1="29" x2="40" y2="40" />
          <path d="M16 20H24" />
          <path d="M20 16V24" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M24 4L8 12V24C8 34 24 44 24 44C24 44 40 34 40 24V12L24 4Z" />
          <polyline points="17 24 22 29 31 19" />
        </svg>
      );
    case "bell":
      return (
        <svg {...props}>
          <path d="M12 22C12 14 17 10 24 10C31 10 36 14 36 22V32H12V22Z" />
          <line x1="8" y1="32" x2="40" y2="32" />
          <path d="M20 32V34C20 36.2 21.8 38 24 38C26.2 38 28 36.2 28 34V32" />
          <line x1="24" y1="6" x2="24" y2="10" />
        </svg>
      );
    case "door":
      return (
        <svg {...props}>
          <rect x="12" y="6" width="24" height="36" />
          <rect x="16" y="10" width="16" height="12" />
          <circle cx="32" cy="30" r="2" />
          <line x1="8" y1="42" x2="40" y2="42" />
        </svg>
      );
    case "lock":
      return (
        <svg {...props}>
          <rect x="12" y="22" width="24" height="20" />
          <path d="M16 22V16C16 10.5 19.6 6 24 6C28.4 6 32 10.5 32 16V22" />
          <circle cx="24" cy="32" r="3" />
          <line x1="24" y1="35" x2="24" y2="38" />
        </svg>
      );
    case "mic":
      return (
        <svg {...props}>
          <rect x="14" y="6" width="20" height="28" rx="2" />
          <circle cx="24" cy="16" r="4" />
          <line x1="18" y1="26" x2="30" y2="26" />
          <line x1="18" y1="30" x2="30" y2="30" />
          <line x1="24" y1="34" x2="24" y2="42" />
          <line x1="18" y1="42" x2="30" y2="42" />
        </svg>
      );
    case "key":
      return (
        <svg {...props}>
          <circle cx="16" cy="18" r="10" />
          <circle cx="16" cy="18" r="4" />
          <line x1="24" y1="24" x2="40" y2="40" />
          <line x1="34" y1="36" x2="38" y2="32" />
          <line x1="30" y1="32" x2="34" y2="28" />
        </svg>
      );
    case "smartphone":
      return (
        <svg {...props}>
          <rect x="14" y="4" width="20" height="40" rx="2" />
          <line x1="14" y1="10" x2="34" y2="10" />
          <line x1="14" y1="36" x2="34" y2="36" />
          <circle cx="24" cy="40" r="1.5" />
          <path d="M20 20L22 24L26 18L28 24" />
        </svg>
      );
    case "safe":
      return (
        <svg {...props}>
          <rect x="8" y="8" width="32" height="32" />
          <circle cx="24" cy="24" r="8" />
          <circle cx="24" cy="24" r="3" />
          <line x1="24" y1="16" x2="24" y2="19" />
          <line x1="24" y1="29" x2="24" y2="32" />
          <line x1="16" y1="24" x2="19" y2="24" />
          <line x1="29" y1="24" x2="32" y2="24" />
          <rect x="36" y="20" width="4" height="8" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <rect x="12" y="22" width="24" height="20" />
          <path d="M16 22V16C16 10.5 19.6 6 24 6C28.4 6 32 10.5 32 16V22" />
          <circle cx="24" cy="32" r="3" />
        </svg>
      );
  }
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  slug?: string;
  image?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  slug,
  image,
}: ServiceCardProps) {
  return (
    <Link href={slug ? `/services/${slug}` : "/services"} className="group block">
      <div className="border-2 border-gray-200 transition-all duration-300 ease-out group-hover:border-brand-red group-hover:shadow-lg group-hover:-translate-y-1">
        {image ? (
          <div className="relative overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={540}
              height={380}
              className="h-48 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-red/0 transition-colors duration-300 ease-out group-hover:bg-brand-red/10" />
          </div>
        ) : (
          <div className="px-6 pt-6">
            <ServiceIcon name={icon} />
          </div>
        )}
        <div className="p-6">
          <h3 className="mb-2 text-sm font-black uppercase tracking-[0.1em] text-gray-900">
            {title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-500">{description}</p>
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-red">
            Learn More &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
