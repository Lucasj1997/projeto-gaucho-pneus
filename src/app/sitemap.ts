import type { MetadataRoute } from "next";
import {
  PATH_AJUDA_MEDIDA_PNEU,
  PATH_SERVICOS_COLHEITADEIRA,
  PATH_SERVICOS_DUPLAGEM,
  PATH_SERVICOS_TRATOR,
} from "@/lib/routes";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();
  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/privacidade`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${base}${PATH_SERVICOS_TRATOR}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${base}${PATH_SERVICOS_COLHEITADEIRA}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${base}${PATH_SERVICOS_DUPLAGEM}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${base}${PATH_AJUDA_MEDIDA_PNEU}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.65,
    },
  ];
}
