import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { businessSchema } from "@/lib/schema";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const RECOVERED_HTML_CLASS =
  "antonio_b47e2d09-module__jHFPkG__variable " +
  "playfair_display_8b9f05ca-module__VpeZJG__variable " +
  "barlow_50adef27-module__zJyUna__variable " +
  "jetbrains_mono_3a70181d-module__P3MDrW__variable";

export const metadata: Metadata = {
  metadataBase: new URL("https://blocksmithpro.com"),
  title: "B&B Locksmith | Trusted Bay Area Security & Locksmith Experts",
  description:
    "Professional locksmith and commercial security services across the Bay Area. Licensed C-28 contractor. Commercial, residential, and automotive locksmith services.",
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
    <html lang="en" className={RECOVERED_HTML_CLASS} suppressHydrationWarning>
      <body>
        <JsonLd data={businessSchema()} />
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
        <Header />
        {children}
        <Footer />
        {/* UserWay Accessibility Widget */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d){
                var s = d.createElement("script");
                s.setAttribute("data-account","5GdFmBflq0");
                s.setAttribute("src","https://cdn.userway.org/widget.js");
                (d.body || d.head).appendChild(s);
              })(document)
            `,
          }}
        />
      </body>
    </html>
  );
}
