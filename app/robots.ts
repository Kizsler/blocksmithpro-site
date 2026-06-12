import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Staging (SITE_ENV=staging on the Fly staging app) must never be indexed —
  // otherwise it becomes a duplicate-content competitor like the old staging2 site.
  if (process.env.SITE_ENV === "staging") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/wcbfm", "/wcbfm-form", "/wcbfm-admin", "/wcbfm-login", "/api/"],
    },
    sitemap: "https://blocksmithpro.com/sitemap.xml",
  };
}
