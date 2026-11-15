import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function ContactSection() {
  return (
    <section className="contact section" id="contact" data-reveal="">
      <span className="eyebrow">
        THE NEXT CHAPTER STARTS WITH A CONVERSATION
      </span>
      <h2>
        What could we
        <br />
        create <span className="underlined">together?</span>
      </h2>
      <p>Follow what we’re building. Start a conversation on GitHub.</p>
      <Button asChild className="gap-5">
        <a
          href="https://github.com/ishivox"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meet Ishivox <ArrowUpRight />
        </a>
      </Button>
    </section>
  );
}
