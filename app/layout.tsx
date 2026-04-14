import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className="bg-white text-gray-700">{children}</body>
    </html>
  );
}
