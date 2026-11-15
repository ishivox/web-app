import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ApproachSection } from "@/components/sections/approach";
import { ContactSection } from "@/components/sections/contact";
import { FeaturedProject } from "@/components/projects/featured-project";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/config/site";
export const metadata = {
  ...pageMetadata(site.title, site.description, "/"),
  title: { absolute: site.title },
};
export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <FeaturedProject />
      <AboutSection />
      <ApproachSection />
      <ContactSection />
    </main>
  );
}
