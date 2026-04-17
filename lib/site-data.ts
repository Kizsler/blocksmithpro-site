// lib/site-data.ts

export const CONTACT = {
  phoneCall: "415-423-0182",
  phoneText: "925-266-3393",
  email: "office@blocksmithpro.com",
  address: "1449 SOS Drive, Walnut Creek CA 94597",
  hoursSummary: "Mon–Fri 8am–5pm",
} as const;

// Business hours in Pacific Time (America/Los_Angeles).
// day: 0=Sun ... 6=Sat. openHour/closeHour in 24h. null = closed.
export const HOURS_SCHEDULE = [
  { day: 0, openHour: null, closeHour: null, emergency: false, label: "Sun" },
  { day: 1, openHour: 8, closeHour: 17, emergency: false, label: "Mon" },
  { day: 2, openHour: 8, closeHour: 17, emergency: false, label: "Tue" },
  { day: 3, openHour: 8, closeHour: 17, emergency: false, label: "Wed" },
  { day: 4, openHour: 8, closeHour: 17, emergency: false, label: "Thu" },
  { day: 5, openHour: 8, closeHour: 17, emergency: false, label: "Fri" },
  { day: 6, openHour: 8, closeHour: 17, emergency: true, label: "Sat" },
] as const;

export const SOCIAL = {
  instagram: "https://www.instagram.com/bblocksmith/",
  facebook: "https://www.facebook.com/bblocksmith/",
  youtube: "https://www.youtube.com/@bblocksmith",
  linkedin: "https://www.linkedin.com/company/bb-locksmith-and-security",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
] as const;

export const SERVICES = [
  {
    slug: "commercial-locksmith",
    image: "/images/services/commercial-locksmith-1.jpg",
    title: "Commercial Service",
    description:
      "Complete commercial locksmith solutions including master key systems, high-security locks, and building access management.",
    detail:
      "Running a business comes with enough challenges without worrying about security. B&B Locksmith offers fast and dependable commercial locksmith services across the Bay Area. We provide professional installation and upgrades for commercial door locks and access control systems, including keypads, smart locks, and master key systems. We also deliver fast, reliable commercial lockout services to get you back inside quickly without causing damage — available 24/7.",
    features: [
      "Access Control Systems",
      "Master Key Systems",
      "High-Security Locks",
      "Panic Bars & Exit Devices",
      "Lock Repair & Replacement",
      "Mortise Locks",
      "Keypad Locks",
      "Break-In & Vandalism Repairs",
      "CCTV & Security Cameras",
      "Emergency Lockout Service",
    ],
    icon: "building",
  },
  {
    slug: "residential-locksmith",
    image: "/images/services/residential-locksmith.jpg",
    title: "Residential Service",
    description:
      "Home security solutions from lock installation and rekeying to smart lock setup and emergency lockout assistance.",
    detail:
      "Lock problems can happen at any time and disrupt your day. B&B Locksmith offers trusted residential locksmith services to help with emergencies and improve your home security. We provide reliable lock installation and rekeying services including standard door locks, deadbolts, smart locks, and modern entry systems. Our team takes time to understand your home's security needs and recommends simple, effective solutions that fit your budget. Getting locked out of your home can be stressful — our trained technicians arrive on time and use safe, careful methods to open doors without causing damage to your locks or property.",
    features: [
      "Lock Installation & Rekeying",
      "Smart Locks",
      "Deadbolt Upgrades",
      "Door Closers",
      "Lever Handle Locks",
      "Keypad Locks",
      "Padlock Installation",
      "Key Copies",
      "Home Lockouts",
      "Emergency Service",
    ],
    icon: "home",
  },
  {
    slug: "automotive-locksmith",
    image: "/images/services/automotive-locksmith.jpg",
    title: "Automotive Service",
    description:
      "Car key cutting, transponder key programming, key fob replacement, and emergency vehicle lockout services.",
    detail:
      "Getting locked out of your car can be stressful and inconvenient. B&B Locksmith offers immediate assistance with skilled technicians available 24/7. We handle all types of keys, including transponder keys, key fobs, and traditional metal keys, and work with various vehicle types. If your car key is lost, broken, or not working, we can help with fast car key replacement and auto key programming. We cut keys matching originals precisely and program smart keys and fobs for modern vehicles — all on-site so you avoid costly towing.",
    features: [
      "Car Key Replacement",
      "Car Key Duplication",
      "Car Key Programming",
      "Transponder Key Cutting",
      "Key Fob Replacement",
      "Ignition Repair & Replacement",
      "Car Lock Repair",
      "Car Lockout Service",
      "Smart Key Programming",
      "Emergency Service",
    ],
    icon: "car",
  },
  {
    slug: "security-consulting",
    image: "/images/services/Security-Consulting.jpg",
    title: "Consulting Service",
    description:
      "Expert security assessments and consulting to identify vulnerabilities and recommend comprehensive protection strategies.",
    detail:
      "Our security consulting services help you identify vulnerabilities before they become problems. We provide comprehensive property security assessments, risk analysis, security system recommendations, compliance consulting for commercial properties, and ongoing security planning. Our experienced consultants work with you to develop a protection strategy tailored to your specific needs and budget. Whether you manage a single office or a portfolio of properties, we deliver actionable recommendations grounded in 15+ years of Bay Area security experience.",
    features: [
      "Property Security Assessments",
      "Risk Analysis",
      "System Recommendations",
      "Compliance Consulting",
      "Security Planning",
      "Access Audit & Review",
    ],
    icon: "search",
  },
  {
    slug: "access-control",
    image: "/images/services/access-control-systems.jpg",
    title: "Access Control",
    description:
      "Design and installation of electronic access control systems including keypads, card readers, and biometric solutions.",
    detail:
      "Smart access makes it easier to protect and manage any property. We install and support modern access control systems that use cards, PIN codes, mobile apps, or fingerprint entry instead of regular keys. This lets you decide who can enter certain rooms, offices, or buildings and when they can do it. Digital access also lowers the risk of lost or copied keys since permissions can be changed quickly. Our setups allow you to track entry activity, helping improve safety and accountability. We are official partners and certified installers for ProdataKey, Verkada, DoorBird, Bluewave Security, CDVI, and more.",
    features: [
      "Keycard & Fob Systems",
      "Electronic Keypads",
      "Biometric Readers",
      "Mobile Credential Systems",
      "Cloud-Managed Platforms",
      "User Permission Management",
      "Entry Activity Tracking",
      "Multi-Door Solutions",
      "System Upgrades & Repair",
      "Emergency Access Recovery",
    ],
    icon: "shield",
  },
  {
    slug: "buzzer-systems",
    image: "/images/services/buzzer-systems.jpg",
    title: "Buzzer Systems",
    description:
      "Installation and repair of buzzer and intercom entry systems for multi-tenant buildings and commercial properties.",
    detail:
      "We specialize in buzzer system installation and repair for multi-tenant buildings and commercial properties. Our services include new buzzer system installation, existing system repair and upgrades, video buzzer systems, integration with access control, and tenant directory setup. We work with all major brands and can retrofit older buildings with modern entry solutions that improve security and convenience for tenants and property managers alike.",
    features: [
      "New System Installation",
      "System Repair & Upgrades",
      "Video Buzzer Systems",
      "Access Control Integration",
      "Tenant Directory Setup",
      "Multi-Unit Solutions",
    ],
    icon: "bell",
  },
  {
    slug: "commercial-doors",
    image: "/images/services/commercial-doors-installation-and-replacement.jpg",
    title: "Commercial Doors",
    description:
      "Installation and replacement of commercial-grade doors including automatic closers, panic bars, and ADA-compliant hardware.",
    detail:
      "We install and replace commercial-grade doors and hardware for offices, retail spaces, and industrial properties. Our services include commercial door installation, automatic door closer installation and adjustment, panic bar and exit device installation, ADA-compliant hardware upgrades, hollow metal frame repair, and storefront aluminum door service. Every installation meets local building codes and fire safety requirements.",
    features: [
      "Commercial Door Installation",
      "Door Closer Installation",
      "Panic Bar & Exit Devices",
      "ADA-Compliant Hardware",
      "Hollow Metal Frame Repair",
      "Storefront Aluminum Doors",
    ],
    icon: "door",
  },
  {
    slug: "commercial-locking-hardware",
    image: "/images/services/commercial-locking-hardware.jpg",
    title: "Commercial Locking Hardware",
    description:
      "Supply and installation of high-grade commercial locks, deadbolts, and locking mechanisms from top manufacturers.",
    detail:
      "We supply and install commercial-grade locking hardware from top manufacturers including Schlage, Yale, ASSA ABLOY, and Medeco. Our services include high-security lock installation, master key system design, lock rekeying and re-pinning, electronic lock installation, and hardware specification consulting. We match the right hardware to your security requirements and budget with transparent pricing and expert recommendations.",
    features: [
      "High-Security Lock Installation",
      "Master Key System Design",
      "Lock Rekeying & Re-Pinning",
      "Mortise Locks",
      "Electronic Lock Installation",
      "Lock Combination Changes",
      "Hardware Specification Consulting",
    ],
    icon: "lock",
  },
  {
    slug: "intercom-systems",
    image: "/images/services/intercom-systems-1.jpg",
    title: "Intercom Systems",
    description:
      "Modern intercom system installation and service for residential complexes and commercial buildings.",
    detail:
      "Intercom systems make communication and visitor access easier for homes, offices, and commercial buildings. B&B Locksmith provides professional intercom installation for single-family homes, apartments, offices, schools, and gated buildings. We connect access systems with audio and video intercoms so residents or staff can see and talk to visitors before allowing entry. Our team also handles updates, repairs, and routine maintenance so systems keep working without trouble. For multi-unit spaces, we set up shared access that is simple for approved users and limited for others.",
    features: [
      "Audio Intercom Systems",
      "Video Intercom Systems",
      "IP-Based Solutions",
      "Multi-Tenant Directories",
      "HOA Security Solutions",
      "System Repairs & Maintenance",
      "Access Control Integration",
    ],
    icon: "mic",
  },
  {
    slug: "keyless-entry",
    image: "/images/services/keyless-entry-systems.jpg",
    title: "Keyless Entry",
    description:
      "Keyless entry system installation including smart locks, electronic keypads, and proximity-based access solutions.",
    detail:
      "Eliminate the hassle of traditional keys with our keyless entry solutions. We install and support electronic keypad locks, proximity card systems, Bluetooth-enabled locks, PIN code access systems, and combination keyless solutions. Perfect for businesses that need to manage employee access or homeowners who want the convenience of key-free entry. Every installation is customized to your doors, layout, and daily traffic needs.",
    features: [
      "Electronic Keypad Locks",
      "Proximity Card Systems",
      "Bluetooth-Enabled Locks",
      "PIN Code Access",
      "Mobile App Entry",
      "User Permission Management",
    ],
    icon: "key",
  },
  {
    slug: "smart-locks",
    image: "/images/services/smart-locks-installation-support.jpg",
    title: "Smart Locks",
    description:
      "Installation and support for Wi-Fi and Bluetooth smart locks with remote access, scheduling, and audit trail capabilities.",
    detail:
      "Smart locks give you control of your property from anywhere. We install and support Wi-Fi and Bluetooth smart locks with remote access and monitoring, scheduled access and auto-lock features, audit trail and access logging, and integration with home automation systems. We work with leading brands including August, Yale, Schlage, and Kwikset to find the right smart lock for your needs. Our team replaces outdated locks with modern smart lock systems that work with your current doors and hardware.",
    features: [
      "Wi-Fi & Bluetooth Smart Locks",
      "Remote Access & Monitoring",
      "Scheduled Access & Auto-Lock",
      "Audit Trail & Access Logging",
      "Home Automation Integration",
      "Brand Partners: August, Yale, Schlage, Kwikset",
    ],
    icon: "smartphone",
  },
  {
    slug: "safe-installation",
    image: "/images/services/safe-installation-and-opening.jpg",
    title: "Safe Installation",
    description:
      "Professional safe installation, relocation, and opening services for residential and commercial safes of all types.",
    detail:
      "Professional safe installation and opening services help protect your valuables and important documents with proper care and precision. We handle residential and commercial safe installation for homes and businesses including wall safes, floor safes, fireproof safes, and burglary safes, with a focus on proper placement, strong anchoring, and long-term security. For safe opening and access recovery, we use non-destructive methods and provide discreet, respectful service protecting your contents throughout.",
    features: [
      "Wall & Floor Safe Installation",
      "Fireproof Safes",
      "Burglar-Resistant Safes",
      "Safe Anchoring & Placement",
      "Safe Opening & Lockout",
      "Combination Recovery & Changes",
      "Safe Relocation",
      "Gun Safes",
    ],
    icon: "safe",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "B&B Locksmith has been my go to locksmith as a property manager for 10 years plus. They are reliable, professional, and always get the job done right.",
    author: "Alexandra M.",
    rating: 5,
  },
  {
    quote:
      "I have used B&B over 20 times this year already for a building I managed in Oakland. Their response time and quality of work is outstanding.",
    author: "J. Lynn",
    rating: 5,
  },
  {
    quote:
      "I found B&B Locksmith on Yelp and everything about the experience was great. From scheduling to the actual service, they were top notch.",
    author: "Leah R.",
    rating: 5,
  },
  {
    quote:
      "I was a bit skeptical of all of the positive Yelp reviews for B&B Locksmith, but they truly earned every single one. Exceptional service.",
    author: "Graham D.",
    rating: 5,
  },
] as const;

export const CLIENT_LOGOS = [
  { name: "Compass", src: "/images/logos/compass.png" },
  { name: "CorePower Yoga", src: "/images/logos/corepower-yoga.png" },
  { name: "Five Below", src: "/images/logos/five-below.png" },
  { name: "Pandora", src: "/images/logos/pandora.png" },
  { name: "Prologis", src: "/images/logos/prologis.png" },
  { name: "Sares Regis Group", src: "/images/logos/sare-raise-group.png" },
  { name: "ZipRent", src: "/images/logos/zip-rent.png" },
  { name: "Dior", src: "/images/logos/dior.svg" },
] as const;

export const LOCATIONS = [
  {
    slug: "san-francisco",
    name: "San Francisco",
    description:
      "B&B Locksmith provides professional locksmith and security services throughout San Francisco. From commercial buildings in the Financial District to residential homes in the Sunset, our mobile fleet serves every neighborhood in the city.",
  },
  {
    slug: "san-jose",
    name: "San Jose",
    description:
      "Serving businesses and homeowners across San Jose and the South Bay. Our team provides fast, reliable locksmith and security services to the largest city in the Bay Area, from downtown offices to suburban communities.",
  },
  {
    slug: "fremont",
    name: "Fremont",
    description:
      "B&B Locksmith is proud to serve Fremont and the Tri-City area with professional locksmith and security solutions. From tech campuses to residential neighborhoods, we deliver trusted service throughout the East Bay.",
  },
  {
    slug: "walnut-creek",
    name: "Walnut Creek",
    description:
      "Based in Walnut Creek, B&B Locksmith is your local security partner. We serve businesses and residents throughout Walnut Creek, Concord, Pleasant Hill, Lafayette, and the surrounding Contra Costa County communities.",
  },
] as const;

export const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "1,000+", label: "5-Star Reviews" },
  { value: "4.9", label: "Yelp Rating" },
  { value: "C-28", label: "Licensed" },
] as const;
