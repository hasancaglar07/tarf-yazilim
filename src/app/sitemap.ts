import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tarfyazilim.com";

const routes = [
  "/",
  "/hakkimizda",
  "/hizmetler",
  "/urunler",
  "/urunler/erp",
  "/urunler/crm",
  "/urunler/pos",
  "/urunler/api",
  "/sektorler",
  "/basari-hikayeleri",
  "/blog",
  "/kariyer",
  "/destek",
  "/iletisim",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
