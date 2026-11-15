import { ConnectionNetwork } from "@/components/motion/connection-network";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export function Hero() {
  return (
    <section className="hero">
      <Link href="/projects/pdf-studio" className="eyebrow" data-reveal="">
        <span className="status-dot"></span> Made at Ishivox · Meet PDF Studio ↗
      </Link>
      <h1 data-reveal="" data-reveal-delay="70">
        Great ideas deserve
        <br />
        an <span className="underlined">extraordinary future.</span>
      </h1>
      <p data-reveal="" data-reveal-delay="140">
        We bring thoughtful design and purposeful technology together.
        <br className="desktop" /> Turning what’s next into something that
        matters.
      </p>
      <div className="actions" data-reveal="" data-reveal-delay="210">
        <Button asChild className="gap-5">
          <Link href="/projects">
            Explore our projects{" "}
            <svg>
              <use href="#arrow"></use>
            </svg>
          </Link>
        </Button>
        <Button asChild variant="secondary" className="gap-5">
          <Link href="/#about">
            Discover Ishivox <span>↗</span>
          </Link>
        </Button>
      </div>
      <div
        aria-label="Design, development, and people connected through Ishivox"
        className="connections"
        data-motion-scene=""
        data-reveal=""
        data-reveal-delay="280"
      >
        <ConnectionNetwork />
        <div className="node n1">
          <svg>
            <use href="#people"></use>
          </svg>
        </div>
        <div className="node n2">
          <svg>
            <use href="#layers"></use>
          </svg>
        </div>
        <div className="node n3">
          <svg>
            <use href="#spark"></use>
          </svg>
        </div>
        <div className="node center">
          <span>
            <svg>
              <use href="#mark"></use>
            </svg>
          </span>
        </div>
        <div className="node n4">
          <svg>
            <use href="#code"></use>
          </svg>
        </div>
        <div className="node n5">
          <svg>
            <use href="#grid"></use>
          </svg>
        </div>
        <div className="node n6">
          <svg>
            <use href="#globe"></use>
          </svg>
        </div>
        <span className="wire-label l1">HUMAN BY DESIGN</span>
        <span className="wire-label l2">BUILT FOR WHAT’S NEXT</span>
      </div>
      <div className="hero-caption">
        <span>THOUGHTFUL BY NATURE. AMBITIOUS BY CHOICE.</span>
        <Link href="/#about">
          Discover the possibilities <span>↓</span>
        </Link>
      </div>
    </section>
  );
}
