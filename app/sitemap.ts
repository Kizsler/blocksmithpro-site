import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { SERVICES, LOCATIONS } from "@/lib/site-data";

// Bump this date whenever page content meaningfully changes — using new Date()
// stamps every URL with the build time, which teaches Google to ignore lastmod.
const CONTENT_UPDATED = new Date("2026-06-11");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://blocksmithpro.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: CONTENT_UPDATED },
    { url: `${baseUrl}/services`, lastModified: CONTENT_UPDATED },
    { url: `${baseUrl}/about`, lastModified: CONTENT_UPDATED },
    { url: `${baseUrl}/contact`, lastModified: CONTENT_UPDATED },
    { url: `${baseUrl}/blog`, lastModified: CONTENT_UPDATED },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: CONTENT_UPDATED,
  }));

  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: CONTENT_UPDATED,
  }));

  const posts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
