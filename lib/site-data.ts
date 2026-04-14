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
    title: "Commercial Service",
    description:
      "Complete commercial locksmith solutions including master key systems, high-security locks, and building access management.",
    icon: "building",
  },
  {
    title: "Residential Service",
    description:
      "Home security solutions from lock installation and rekeying to smart lock setup and emergency lockout assistance.",
    icon: "home",
  },
  {
    title: "Automotive Service",
    description:
      "Car key cutting, transponder key programming, key fob replacement, and emergency vehicle lockout services.",
    icon: "car",
  },
  {
    title: "Consulting Service",
    description:
      "Expert security assessments and consulting to identify vulnerabilities and recommend comprehensive protection strategies.",
    icon: "search",
  },
  {
    title: "Access Control",
    description:
      "Design and installation of electronic access control systems including keypads, card readers, and biometric solutions.",
    icon: "shield",
  },
  {
    title: "Buzzer Systems",
    description:
      "Installation and repair of buzzer and intercom entry systems for multi-tenant buildings and commercial properties.",
    icon: "bell",
  },
  {
    title: "Commercial Doors",
    description:
      "Installation and replacement of commercial-grade doors including automatic closers, panic bars, and ADA-compliant hardware.",
    icon: "door",
  },
  {
    title: "Commercial Locking Hardware",
    description:
      "Supply and installation of high-grade commercial locks, deadbolts, and locking mechanisms from top manufacturers.",
    icon: "lock",
  },
  {
    title: "Intercom Systems",
    description:
      "Modern intercom system installation and service for residential complexes and commercial buildings.",
    icon: "mic",
  },
  {
    title: "Keyless Entry",
    description:
      "Keyless entry system installation including smart locks, electronic keypads, and proximity-based access solutions.",
    icon: "key",
  },
  {
    title: "Smart Locks",
    description:
      "Installation and support for Wi-Fi and Bluetooth smart locks with remote access, scheduling, and audit trail capabilities.",
    icon: "smartphone",
  },
  {
    title: "Safe Installation",
    description:
      "Professional safe installation, relocation, and opening services for residential and commercial safes of all types.",
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
] as const;

export const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "4.9", label: "Yelp Rating" },
  { value: "C-28", label: "Licensed" },
] as const;
