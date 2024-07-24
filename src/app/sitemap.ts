import { type MetadataRoute } from "next"
import reader from "@/lib/keystatic"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const settings = await reader.singletons.settings.read()
  if (!settings) throw new Error("Keystatic Content Not Found - settings")
  const { url } = settings

  return [
    {
      url,
      lastModified: new Date(),
    },
  ]
}
