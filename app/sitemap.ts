import type { MetadataRoute } from "next"
import { services, site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: site.url, lastModified, priority: 1 },
    ...services.map((s) => ({ url: `${site.url}/leistungen/${s.slug}`, lastModified, priority: 0.8 })),
    { url: `${site.url}/kontakt`, lastModified, priority: 0.7 },
  ]
}
