import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { businessSchema } from "@/lib/schema";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
// Google Ads conversion tracking (account 722-385-3410)
const ADS_ID = "AW-973764595";
const ADS_PHONE_CLICK = "AW-973764595/4OVUCJHMjKYdEPPvqdAD";
// Meta Pixel: dataset "B&B Website Pixel (blocksmithpro.com)", B&B business portfolio
const META_PIXEL_ID = "4016314765189819";

const RECOVERED_HTML_CLASS =
  "antonio_b47e2d09-module__jHFPkG__variable " +
  "playfair_display_8b9f05ca-module__VpeZJG__variable " +
  "barlow_50adef27-module__zJyUna__variable " +
  "jetbrains_mono_3a70181d-module__P3MDrW__variable";

const IS_STAGING = process.env.SITE_ENV === "staging";

export const metadata: Metadata = {
  metadataBase: new URL("https://blocksmithpro.com"),
  title: "B&B Locksmith | Trusted Bay Area Security & Locksmith Experts",
  description:
    "Professional locksmith and commercial security services across the Bay Area. Licensed C-28 contractor. Commercial, residential, and automotive locksmith services.",
  openGraph: {
    type: "website",
    siteName: "B&B Locksmith & Security Inc.",
    title: "B&B Locksmith | Trusted Bay Area Security & Locksmith Experts",
    description:
      "Professional locksmith and commercial security services across the Bay Area. Licensed C-28 contractor, serving since 2011.",
    url: "https://blocksmithpro.com",
    images: [{ url: "/images/hero-poster.jpg", width: 1200, height: 675 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "B&B Locksmith | Trusted Bay Area Security & Locksmith Experts",
    description:
      "Professional locksmith and commercial security services across the Bay Area. Licensed C-28 contractor, serving since 2011.",
    images: ["/images/hero-poster.jpg"],
  },
  icons: {
    icon: "/images/favicon.png",
  },
  // Belt-and-suspenders with robots.ts: keep staging out of every index.
  ...(IS_STAGING ? { robots: { index: false, follow: false } } : {}),
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
        {/* Google tag: Analytics + Google Ads */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID || ADS_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${GA_ID ? `gtag('config', '${GA_ID}');` : ""}
              gtag('config', '${ADS_ID}');
              document.addEventListener('click', function (e) {
                var a = e.target && e.target.closest ? e.target.closest('a[href^="tel:"]') : null;
                if (a) { gtag('event', 'conversion', { send_to: '${ADS_PHONE_CLICK}' }); }
              }, true);
            `,
          }}
        />
        {/* Meta Pixel: PageView, plus Contact on call/text taps. Off on staging. */}
        {!IS_STAGING && META_PIXEL_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
                document,'script','https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
                document.addEventListener('click', function (e) {
                  var a = e.target && e.target.closest ? e.target.closest('a[href^="tel:"], a[href^="sms:"]') : null;
                  if (a) { fbq('track', 'Contact', { method: a.getAttribute('href').indexOf('sms:') === 0 ? 'text' : 'call' }); }
                }, true);
              `,
            }}
          />
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
