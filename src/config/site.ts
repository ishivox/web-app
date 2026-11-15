import { defaultSiteUrl, defaultPdfStudioUrl } from "./domains";
import { canIndex, publicOrigin, publicHttpUrl } from "@/lib/seo-policy";
export const site = {
  name: "Ishivox",
  title: "Ishivox — Thoughtful software. Meaningful impact.",
  description:
    "Discover Ishivox and the software we are building. Explore PDF Studio, our PDF template and document-generation project.",
  url: publicOrigin(process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl),
  repository: "https://github.com/ishivox/web-app",
};
export const pdfStudioUrl = publicHttpUrl(
  process.env.NEXT_PUBLIC_PDF_STUDIO_URL || defaultPdfStudioUrl,
);
export const isIndexable = canIndex({
  origin: site.url,
  nodeEnv: process.env.NODE_ENV,
  deploymentEnv: process.env.VERCEL_ENV,
});
export function absoluteUrl(path: string) {
  return site.url ? new URL(path, site.url).href : undefined;
}
export const navigation = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/#about" },
  { label: "Our projects", href: "/projects" },
  { label: "Our approach", href: "/#approach" },
];
