import { FeaturedProject } from "@/components/projects/featured-project";
import { ContactSection } from "@/components/sections/contact";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Our projects",
  "Explore software made at Ishivox, featuring PDF Studio: a PDF template and document-generation platform in development.",
  "/projects",
);
export default function ProjectsPage() {
  return (
    <main id="main-content">
      <section className="section page-intro">
        <span className="kicker">THE THINGS WE’RE BUILDING</span>
        <h1>
          Ideas into <span className="underlined">useful software.</span>
        </h1>
        <p>
          A closer look at our projects, the problems they explore,
          <br className="desktop" /> and the thinking behind them.
        </p>
      </section>
      <FeaturedProject heading={false} />
      <ContactSection />
    </main>
  );
}
