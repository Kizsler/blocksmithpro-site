// lib/site-data.ts

export const CONTACT = {
  phone1: "415-423-0182",
  phone2: "925-266-3393",
  email: "office@blocksmithpro.com",
  address: "1449 SOS Drive, Walnut Creek CA 94597",
} as const;

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
    slug: "rekeying",
    image: "/images/services/residential-locksmith.jpg",
    title: "Rekeying",
    description:
      "Lock rekeying for homes, businesses, and rentals across the Bay Area — every old key stops working, your hardware stays.",
    detail:
      "Rekeying changes the pins inside your existing lock so old keys no longer work — without replacing the hardware. It's the right move after moving into a new home, between tenants, after a break-in or lost keys, or when too many copies of a key are floating around. B&B Locksmith rekeys standard door locks, deadbolts, commercial cylinders, and master key systems on-site across the Bay Area. Your technician inspects each lock first; if the hardware is worn or damaged we'll tell you straight whether rekeying or replacement is the better spend. Most homes are done in a single visit, and every lock can be keyed to a single key so one key runs the whole house. You approve the written quote before any work begins.",
    features: [
      "Whole-Home Rekeying",
      "Move-In Rekeying",
      "Tenant Turnover Rekeying",
      "Post-Break-In Rekeying",
      "Key Matching (One Key, Every Door)",
      "Deadbolt Rekeying",
      "Commercial Cylinder Rekeying",
      "Master Key System Rekeying",
      "Lost Key Lock Changes",
      "Emergency Rekeying",
    ],
    icon: "home",
    faq: [
      {
        question: "How much does it cost to rekey a lock in the Bay Area?",
        answer:
          "Cost depends on how many locks you have, the lock type, and whether any hardware needs service — which is why B&B Locksmith gives you a written quote on-site before any work begins. Rekeying is almost always significantly cheaper than replacing locks, because your existing hardware stays on the door and only the pins inside the cylinder change.",
      },
      {
        question: "Should I rekey or replace my locks when I move into a new home?",
        answer:
          "Rekey, in most cases. When you move in, you have no idea how many copies of the old key exist — previous owners, their relatives, contractors, neighbors. Rekeying makes every one of those keys useless in a single visit, and B&B Locksmith can key every door to one new key while we're there. Replacement only makes sense if the existing hardware is worn, damaged, or you want to upgrade to higher-security or smart locks.",
      },
      {
        question: "How long does rekeying take?",
        answer:
          "A typical single-family home — four to six locks — is usually done in well under an hour once the technician is at the door. B&B Locksmith rekeys on-site from the truck, so there's no taking your locks away or second appointment. Larger jobs like apartment turnovers or commercial master key systems take longer and are quoted up front.",
      },
      {
        question: "Can all my locks be keyed to one key?",
        answer:
          "Usually, yes. If your locks are the same brand or compatible keyways, B&B Locksmith can key every exterior door to a single key — one key for the front door, back door, garage entry, and side gate. If you have mixed brands we'll tell you which ones can be matched and what it would take to bring the rest in line.",
      },
    ],
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
      "I needed an extra key for my Subaru. I chose B&B at random after another service never called back. I texted them and they got right back to me. The quote was reasonable for the fob and programming, the work got scheduled for a convenient time.",
    author: "Pamela Carr",
    rating: 5,
    source: "Google",
    date: "4 months ago",
  },
  {
    quote:
      "B&B Locksmith was absolutely phenomenal! I contacted them during the weekend and followed-up with an appointment within a day. The team showed up on time and were professional from beginning to the end. They solved my problems carefully.",
    author: "CJ Koenig",
    rating: 5,
    source: "Google",
    date: "10 months ago",
  },
  {
    quote:
      "B&B Locksmith were awesome from the beginning. I lost my car fob and the dealer quoted me an outrageous price to replace. These guys were the cheapest from other locksmiths I've called and very professional and friendly.",
    author: "Winona Farris",
    rating: 5,
    source: "Google",
    date: "2 years ago",
  },
  {
    quote:
      "They were one of a few companies that responded to my request on Yelp and had the best price. Aaron called me when on his way and was very professional and extremely personable. He was able to cut a manual key for my car that didn't exist.",
    author: "Allison White",
    rating: 5,
    source: "Google",
    date: "4 years ago",
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
  { name: "Herc Rentals", src: "/images/logos/herc-rentals.svg" },
  { name: "Equinox", src: "/images/logos/equinox.svg" },
  { name: "Discord", src: "/images/logos/discord.svg" },
  { name: "Twist Bio", src: "/images/logos/twist-bioscience.svg" },
  { name: "CHP", src: "/images/logos/chp.svg" },
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
  { value: "20+", label: "Years Experience" },
  { value: "1,000+", label: "5-Star Reviews" },
  { value: "5.0", label: "Star Rating" },
  { value: "C-28", label: "Licensed" },
] as const;

export const SERVICE_CITIES = [
  { name: "San Francisco", href: "/locations/san-francisco" },
  { name: "San Jose", href: "/locations/san-jose" },
  { name: "Fremont", href: "/locations/fremont" },
  { name: "Walnut Creek", href: "/locations/walnut-creek" },
  { name: "Oakland", href: "/contact" },
  { name: "Berkeley", href: "/contact" },
  { name: "Concord", href: "/contact" },
  { name: "San Ramon", href: "/contact" },
  { name: "Dublin", href: "/contact" },
  { name: "Pleasanton", href: "/contact" },
  { name: "Livermore", href: "/contact" },
  { name: "Richmond", href: "/contact" },
] as const;
