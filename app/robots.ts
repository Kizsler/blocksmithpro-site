import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/wcbfm", "/wcbfm-form", "/wcbfm-admin", "/wcbfm-login", "/api/"],
    },
    sitemap: "https://blocksmithpro.com/sitemap.xml",
  };
}
