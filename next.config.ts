import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      // ── Canonical host: www → apex ────────────────────────────────────────
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.blocksmithpro.com" }],
        destination: "https://blocksmithpro.com/:path*",
        permanent: true,
      },

      // ── Short vanity URLs → canonical /services/* pages ──────────────────
      { source: "/commercial-locksmith", destination: "/services/commercial-locksmith", permanent: true },
      { source: "/residential-locksmith", destination: "/services/residential-locksmith", permanent: true },
      { source: "/automotive-locksmith", destination: "/services/automotive-locksmith", permanent: true },
      { source: "/security-consulting", destination: "/services/security-consulting", permanent: true },
      { source: "/access-control", destination: "/services/access-control", permanent: true },
      { source: "/buzzer-systems", destination: "/services/buzzer-systems", permanent: true },
      { source: "/commercial-doors", destination: "/services/commercial-doors", permanent: true },
      { source: "/commercial-locking-hardware", destination: "/services/commercial-locking-hardware", permanent: true },
      { source: "/intercom-systems", destination: "/services/intercom-systems", permanent: true },
      { source: "/keyless-entry", destination: "/services/keyless-entry", permanent: true },
      { source: "/smart-locks", destination: "/services/smart-locks", permanent: true },
      { source: "/safe-installation", destination: "/services/safe-installation", permanent: true },
      { source: "/safes", destination: "/services/safe-installation", permanent: true },
      { source: "/rekey", destination: "/services/residential-locksmith", permanent: true },
      { source: "/rekeying", destination: "/services/residential-locksmith", permanent: true },
      { source: "/commercial", destination: "/services/commercial-locksmith", permanent: true },
      { source: "/residential", destination: "/services/residential-locksmith", permanent: true },
      { source: "/automotive", destination: "/services/automotive-locksmith", permanent: true },
      { source: "/intercom", destination: "/services/intercom-systems", permanent: true },
      { source: "/doors", destination: "/services/commercial-doors", permanent: true },

      // ── Page renames ──────────────────────────────────────────────────────
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/terms-and-conditions", destination: "/contact", permanent: true },
      { source: "/privacy-policy", destination: "/contact", permanent: true },

      // ── Service URL changes ───────────────────────────────────────────────
      { source: "/services/access-control-systems", destination: "/services/access-control", permanent: true },
      { source: "/services/consulting", destination: "/services/security-consulting", permanent: true },
      { source: "/services/commercial-doors-installation-and-replacement", destination: "/services/commercial-doors", permanent: true },
      { source: "/services/smart-locks-installation-support", destination: "/services/smart-locks", permanent: true },
      { source: "/services/safe-installation-and-opening", destination: "/services/safe-installation", permanent: true },
      { source: "/services/keyless-entry-systems", destination: "/services/keyless-entry", permanent: true },

      // ── Location pages (old top-level → /locations/*) ─────────────────────
      { source: "/walnut-creek", destination: "/locations/walnut-creek", permanent: true },
      { source: "/san-jose", destination: "/locations/san-jose", permanent: true },
      { source: "/san-francisco", destination: "/locations/san-francisco", permanent: true },
      { source: "/fremont", destination: "/locations/fremont", permanent: true },

      // ── City-keyed service pages (wildcard) ───────────────────────────────
      { source: "/commercial-locksmith-:city", destination: "/services/commercial-locksmith", permanent: true },
      { source: "/residential-locksmith-:city", destination: "/services/residential-locksmith", permanent: true },
      { source: "/automotive-locksmith-:city", destination: "/services/automotive-locksmith", permanent: true },
      { source: "/emergency-locksmith-:city", destination: "/contact", permanent: true },
      { source: "/lock-rekeying-:city", destination: "/services/residential-locksmith", permanent: true },
      { source: "/lock-repair-:city", destination: "/services/residential-locksmith", permanent: true },
      { source: "/safe-installation-opening-:city", destination: "/services/safe-installation", permanent: true },
      { source: "/smart-locks-:city", destination: "/services/smart-locks", permanent: true },
      { source: "/commercial-door-installation-:city", destination: "/services/commercial-doors", permanent: true },
      { source: "/commercial-locking-hardware-installation-:city", destination: "/services/commercial-locking-hardware", permanent: true },
      { source: "/intercom-systems-:city", destination: "/services/intercom-systems", permanent: true },
      { source: "/keyless-entry-systems-:city", destination: "/services/keyless-entry", permanent: true },
      { source: "/access-control-systems-:city", destination: "/services/access-control", permanent: true },
      { source: "/buzzer-systems-:city", destination: "/services/buzzer-systems", permanent: true },

      // ── Old blog post slugs → blog index ─────────────────────────────────
      { source: "/blog/locksmith-services-in-san-francisco-ca", destination: "/blog", permanent: true },
      { source: "/blog/locksmith-services-in-san-jose-ca", destination: "/blog", permanent: true },
      { source: "/blog/locksmith-services-in-walnut-creek-ca", destination: "/blog", permanent: true },
      { source: "/blog/locksmith-services-in-fremont-ca", destination: "/blog", permanent: true },
      { source: "/blog/commercial-locksmith-services-bay-area", destination: "/blog", permanent: true },
      { source: "/blog/residential-locksmith-services-bay-area", destination: "/blog", permanent: true },
      { source: "/blog/automotive-locksmith-services-bay-area", destination: "/blog", permanent: true },
      { source: "/blog/emergency-locksmith-services-bay-area", destination: "/blog", permanent: true },
      { source: "/blog/access-control-systems-bay-area", destination: "/blog", permanent: true },
      { source: "/blog/smart-locks-installation-bay-area", destination: "/blog", permanent: true },
      { source: "/blog/safe-installation-opening-bay-area", destination: "/blog", permanent: true },
      { source: "/blog/intercom-systems-installation-bay-area", destination: "/blog", permanent: true },
      { source: "/blog/buzzer-systems-installation-bay-area", destination: "/blog", permanent: true },
      { source: "/blog/keyless-entry-systems-bay-area", destination: "/blog", permanent: true },
      { source: "/blog/commercial-doors-installation-bay-area", destination: "/blog", permanent: true },
      { source: "/blog/master-key-systems-bay-area", destination: "/blog", permanent: true },
      { source: "/blog/high-security-locks-bay-area", destination: "/blog", permanent: true },
      { source: "/blog/lock-rekeying-services-bay-area", destination: "/blog", permanent: true },
      { source: "/blog/lock-repair-services-bay-area", destination: "/blog", permanent: true },
      { source: "/blog/security-consulting-bay-area", destination: "/blog", permanent: true },
      { source: "/blog/commercial-locking-hardware-bay-area", destination: "/blog", permanent: true },
      { source: "/blog/how-to-choose-a-locksmith", destination: "/blog", permanent: true },
      { source: "/blog/importance-of-rekeying-your-locks", destination: "/blog", permanent: true },
      { source: "/blog/benefits-of-access-control-systems", destination: "/blog", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*.mp4",
        headers: [
          { key: "Accept-Ranges", value: "bytes" },
          { key: "Content-Type", value: "video/mp4" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path*.webm",
        headers: [
          { key: "Accept-Ranges", value: "bytes" },
          { key: "Content-Type", value: "video/webm" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Self-hosted fonts use content-hashed filenames, safe to cache forever
        source: "/_recovered/media/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
