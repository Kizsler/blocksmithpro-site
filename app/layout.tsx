import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

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
    <html lang="en" className={inter.className}>
      <body className="bg-white text-gray-700">
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
                ratingValue: "4.9",
                reviewCount: "200",
              },
              url: "https://blocksmithpro.com",
            }),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
