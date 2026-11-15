import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PdfStudioPreview } from "./pdf-studio-preview";
import { pdfStudio } from "@/content/projects";
export function FeaturedProject({ heading = true }: { heading?: boolean }) {
  return (
    <section className="section featured-section" id="work">
      {heading ? (
        <div className="section-heading" data-reveal="">
          <div>
            <span className="kicker">MADE AT ISHIVOX</span>
            <h2>Our ideas. Out in the world.</h2>
          </div>
          <p>
            Purposeful software, built with care.
            <br />
            Meet the project we’re bringing to life.
          </p>
        </div>
      ) : null}
      <div className="featured-project" data-reveal="" data-motion-scene="">
        <div className="featured-copy" data-reveal="" data-reveal-delay="70">
          <Badge variant="outline" className="w-fit gap-2">
            <span className="status-dot" /> Featured project ·{" "}
            {pdfStudio.status}
          </Badge>
          <div className="project-logo">
            <FileText />
          </div>
          <h3>
            {pdfStudio.name}
            <span className="project-period">.</span>
          </h3>
          <p>{pdfStudio.description}</p>
          <div className="project-tags">
            <Badge variant="secondary">Document generation</Badge>
            <Badge variant="secondary">Templates</Badge>
            <Badge variant="secondary">Developer API</Badge>
          </div>
          <Button asChild className="gap-5">
            <Link href={pdfStudio.href}>
              Explore PDF Studio <ArrowRight />
            </Link>
          </Button>
        </div>
        <Link
          className="featured-visual"
          href={pdfStudio.href}
          aria-label="Explore the PDF Studio project"
        >
          <PdfStudioPreview />
          <span className="visual-caption">
            A look at the product direction · Editor interface illustration
          </span>
        </Link>
      </div>
    </section>
  );
}
