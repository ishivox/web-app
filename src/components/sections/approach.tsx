import Link from "next/link";
import { Button } from "@/components/ui/button";
export function ApproachSection() {
  return (
    <section className="section approach" id="approach">
      <div data-reveal="">
        <span className="kicker">FROM FIRST THOUGHT TO NEXT CHAPTER</span>
        <h2>
          Thoughtful process.
          <br />
          Meaningful outcomes.
        </h2>
        <p>
          Make space for discovery. Bring focus to the idea.
          <br />
          Keep moving, learning, and making it better.
        </p>
        <Button asChild className="gap-5">
          <Link href="/#contact">
            Start a conversation{" "}
            <svg>
              <use href="#arrow"></use>
            </svg>
          </Link>
        </Button>
      </div>
      <div className="steps">
        <article data-reveal="" data-reveal-delay="90">
          <span>01</span>
          <div>
            <h3>Listen &amp; understand</h3>
            <p>Start with the people, the purpose, and the right questions.</p>
          </div>
        </article>
        <article data-reveal="" data-reveal-delay="90">
          <span>02</span>
          <div>
            <h3>Explore &amp; shape</h3>
            <p>
              Connect perspectives and turn possibilities into a clear
              direction.
            </p>
          </div>
        </article>
        <article data-reveal="" data-reveal-delay="90">
          <span>03</span>
          <div>
            <h3>Build &amp; evolve</h3>
            <p>Create with care, learn through feedback, and keep improving.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
