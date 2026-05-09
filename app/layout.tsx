import type { Metadata } from "next";
import "./globals.css";

const RECOVERED_HTML_CLASS =
  "antonio_b47e2d09-module__jHFPkG__variable " +
  "playfair_display_8b9f05ca-module__VpeZJG__variable " +
  "barlow_50adef27-module__zJyUna__variable " +
  "jetbrains_mono_3a70181d-module__P3MDrW__variable";

export const metadata: Metadata = {
  title: "B&B Locksmith | Trusted Bay Area Security & Locksmith Experts",
  description:
    "Bay Area's #1 locksmith and commercial security service for over 15 years. Licensed C-28 contractor. Commercial, residential, and automotive locksmith services.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={RECOVERED_HTML_CLASS}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "B&B Locksmith & Security Inc.",
              telephone: "+1-925-266-3393",
              email: "office@blocksmithpro.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1449 SOS Drive",
                addressLocality: "Walnut Creek",
                addressRegion: "CA",
                postalCode: "94597",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "Place",
                name: "San Francisco Bay Area",
              },
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "200",
              },
              url: "https://blocksmithpro.com",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
