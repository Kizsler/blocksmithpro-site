// lib/schema.ts — JSON-LD builders. One business entity (@id) referenced everywhere.
import { CONTACT, SOCIAL, SERVICE_CITIES } from "@/lib/site-data";
import type { BlogPost } from "@/lib/blog";

export const SITE_URL = "https://blocksmithpro.com";
export const BUSINESS_ID = `${SITE_URL}/#business`;

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "1449 SOS Drive",
  addressLocality: "Walnut Creek",
  addressRegion: "CA",
  postalCode: "94597",
  addressCountry: "US",
};

const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "07:00",
    closes: "18:00",
  },
];

/** Sitewide business entity. No aggregateRating here — Google requires that
 *  markup only on pages that visibly display reviews (see homeBusinessSchema). */
export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": BUSINESS_ID,
    name: "B&B Locksmith & Security Inc.",
    alternateName: "BlockSmithPro",
    url: SITE_URL,
    telephone: `+1-${CONTACT.phone1}`,
    email: CONTACT.email,
    priceRange: "$$",
    image: `${SITE_URL}/images/logo.png`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.png`,
    },
    address: POSTAL_ADDRESS,
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.9101,
      longitude: -122.0652,
    },
    areaServed: SERVICE_CITIES.map((c) => ({ "@type": "City", name: c.name })),
    openingHoursSpecification: OPENING_HOURS,
    sameAs: [SOCIAL.instagram, SOCIAL.facebook, SOCIAL.youtube, SOCIAL.linkedin],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "B&B Locksmith & Security Inc.",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    ],
  };
}

export function serviceSchema(service: {
  slug: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "Place", name: "San Francisco Bay Area" },
  };
}

/** Location pages get a city-scoped variant pointing at the page URL. */
export function locationSchema(location: { slug: string; name: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": `${SITE_URL}/locations/${location.slug}#business`,
    name: "B&B Locksmith & Security Inc.",
    url: `${SITE_URL}/locations/${location.slug}`,
    telephone: `+1-${CONTACT.phone1}`,
    email: CONTACT.email,
    priceRange: "$$",
    address: POSTAL_ADDRESS,
    areaServed: { "@type": "City", name: location.name },
    openingHoursSpecification: OPENING_HOURS,
    parentOrganization: { "@id": BUSINESS_ID },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function blogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image ?? "/images/hero-poster.jpg"}`,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: "B&B Locksmith & Security Inc.",
    },
    publisher: {
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: "B&B Locksmith & Security Inc.",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}
