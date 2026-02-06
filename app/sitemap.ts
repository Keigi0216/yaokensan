import type { MetadataRoute } from "next";

/** Search Console 用。本番 URL 固定（VERCEL_URL はプレビューで変わるため使わない） */
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yaokensan-two.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
