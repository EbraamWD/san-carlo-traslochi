import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { guides } from "@/lib/guides";
import { comuni } from "@/lib/zones";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, lastModified?: string) => ({
    url: `${site.url}${path}`,
    priority,
    ...(lastModified && { lastModified }),
  });

  return [
    page("/", 1),
    ...services.map((s) => page(`/${s.slug}`, 0.9)),
    page("/preventivo", 0.8),
    page("/zone", 0.8),
    ...comuni.map((c) => page(`/zone/${c.slug}`, 0.7)),
    page("/contatti", 0.7),
    page("/chi-siamo", 0.6),
    page("/guide", 0.5),
    ...guides.map((g) => page(`/guide/${g.slug}`, 0.5, g.dateModified)),
  ];
}
