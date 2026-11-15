import type { Metadata } from "next";
import { absoluteUrl, isIndexable, site } from "@/config/site";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    robots: { index: isIndexable, follow: isIndexable },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: absoluteUrl(path),
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Ishivox — Thoughtful software. Meaningful impact.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
