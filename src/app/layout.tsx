import { ThemeProvider } from "@/components/theme/theme-provider";
import type { Metadata, Viewport } from "next";
import { site, isIndexable } from "@/config/site";
import { IconSymbols } from "@/components/layout/icon-symbols";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url ?? "http://localhost:3000"),
  title: { default: site.title, template: "%s | Ishivox" },
  description: site.description,
  applicationName: site.name,
  robots: { index: isIndexable, follow: isIndexable },
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#121510" },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <IconSymbols />
        {site.url ? (
          <StructuredData
            data={{
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${site.url}/#organization`,
              name: site.name,
              url: site.url,
              description: site.description,
              sameAs: ["https://github.com/ishivox"],
            }}
          />
        ) : null}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
