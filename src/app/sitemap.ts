import type { MetadataRoute } from "next";
import { absoluteUrl, isIndexable } from "@/config/site";
import { projects } from "@/content/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable) return [];
  return ["/", "/projects", ...projects.map((project) => project.href)].map(
    (path) => ({
      url: absoluteUrl(path)!,
      changeFrequency: "monthly",
      priority: path === "/" ? 1 : 0.8,
    }),
  );
}
