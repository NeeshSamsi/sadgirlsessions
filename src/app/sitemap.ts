import { type MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sadgirlsessions.com",
      lastModified: new Date(),
    },
  ]
}
