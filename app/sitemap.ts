import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://farmo.in"
  const now = new Date()

  const pages = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/machinery", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/labors", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/working-clusters", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/partner", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/knowledge-bite", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
