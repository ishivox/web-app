import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { PdfStudioPreview } from "@/components/projects/pdf-studio-preview";
import { StructuredData } from "@/components/structured-data";
import { pdfStudio } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, site, pdfStudioUrl } from "@/config/site";
export const metadata = pageMetadata(
  "PDF Studio — PDF templates & document generation",
  pdfStudio.description,
  pdfStudio.href,
);
const applicationUrl = pdfStudioUrl;
export default function PdfStudioPage() {
  return (
    <main id="main-content">
      {site.url ? (
        <>
          <StructuredData
            data={{
              "@context": "https://schema.org",
              "@type": "SoftwareSourceCode",
              name: pdfStudio.name,
              description: pdfStudio.description,
              url: absoluteUrl(pdfStudio.href),
              codeRepository: pdfStudio.repository,
              programmingLanguage: "TypeScript",
              author: {
                "@type": "Organization",
                name: site.name,
                url: site.url,
              },
            }}
          />
          <StructuredData
            data={{
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: site.url,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Projects",
                  item: absoluteUrl("/projects"),
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "PDF Studio",
                  item: absoluteUrl(pdfStudio.href),
                },
              ],
            }}
          />
        </>
      ) : null}
      <section className="section project-intro">
        <Link href="/projects" className="back-link">
          <ArrowLeft size={14} /> All projects
        </Link>
        <Badge variant="outline" className="gap-2">
          <span className="status-dot" /> {pdfStudio.status}
        </Badge>
        <div className="project-logo">
          <FileText />
        </div>
        <h1>
          Documents, designed.
          <br />
          <span className="underlined">PDF Studio.</span>
        </h1>
        <p>{pdfStudio.description}</p>
        <div className="actions">
          <Button asChild>
            <a
              href={pdfStudio.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the repository <ArrowUpRight />
            </a>
          </Button>
          {applicationUrl ? (
            <Button variant="secondary" asChild>
              <a
                href={applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open PDF Studio <ArrowUpRight />
              </a>
            </Button>
          ) : (
            <Button variant="secondary" asChild>
              <a href="#capabilities">How it works ↓</a>
            </Button>
          )}
        </div>
      </section>
      <div className="project-preview-wrap">
        <PdfStudioPreview />
        <p>
          Product direction illustration. The visual editor is in development.
        </p>
      </div>
      <section className="section" id="capabilities">
        <div className="section-heading">
          <div>
            <span className="kicker">UNDER THE HOOD</span>
            <h2>
              One template.
              <br />A world of documents.
            </h2>
          </div>
          <p>
            Separate your document’s structure from its data. Reuse the design,
            supply new values, and generate the next PDF.
          </p>
        </div>
        <div className="capability-grid">
          {pdfStudio.features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
      <section className="section project-status">
        <div>
          <span className="kicker">WHERE THINGS STAND</span>
          <h2>
            A foundation in place.
            <br />
            More to come.
          </h2>
        </div>
        <div>
          <p>
            The repository includes the rendering engine, stored-template
            generation API, and typed client. The web editor is currently
            scaffolded; the visual experience shown here represents the
            direction we’re working toward.
          </p>
          <p>
            Follow development in the repository for implementation details and
            current limitations.
          </p>
          <Button asChild variant="outline">
            <a
              href={pdfStudio.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow PDF Studio <ArrowUpRight />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
