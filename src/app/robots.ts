import { type MetadataRoute } from "next"
import reader from "@/lib/keystatic"

export default async function robots(): Promise<MetadataRoute.Robots> {
  const settings = await reader.singletons.settings.read()
  if (!settings) throw new Error("Keystatic Content Not Found - settings")

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${settings.url}/sitemap.xml`,
  }
}
