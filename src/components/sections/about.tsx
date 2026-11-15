import { Card } from "@/components/ui/card";
import { CollaborationGrid } from "@/components/motion/collaboration-grid";
import { RocketScene } from "@/components/motion/rocket-scene";
import { TaskSequence } from "@/components/motion/task-sequence";
import { DottedGlobe } from "@/components/motion/dotted-globe";

export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="section-heading" data-reveal="">
        <div>
          <span className="kicker">THE ISHIVOX WAY</span>
          <h2>
            Different perspectives.
            <br />
            Shared possibilities.
          </h2>
        </div>
        <p>
          Good things happen when curious minds come together. We start with a
          question, explore with intention, and build with care.
        </p>
      </div>
      <div className="bento motion-bento">
        <Card className="card people-card" data-motion-scene="" data-reveal="">
          <span className="bento-index">01 / TOGETHER</span>
          <h3>Built around people.</h3>
          <p>
            Different perspectives. One shared purpose. A space to think,
            create, and move forward.
          </p>
          <CollaborationGrid />
        </Card>
        <Card
          className="card focus-card"
          data-motion-scene=""
          data-reveal=""
          data-reveal-delay="90"
        >
          <RocketScene />
          <div className="bento-card-copy">
            <span className="bento-index">02 / MOMENTUM</span>
            <h3>
              Small details. <br />
              Bigger thinking.
            </h3>
            <p>
              Considered choices at every step.
              <br />
              Because how we build matters.
            </p>
          </div>
        </Card>
        <Card
          className="card progress-card"
          data-motion-scene=""
          data-reveal=""
          data-reveal-delay="150"
        >
          <span className="bento-index">03 / PROGRESS</span>
          <h3>Keep moving forward.</h3>
          <p>From that first “what if” to the next meaningful step.</p>
          <TaskSequence />
        </Card>
        <Card
          className="card globe-card"
          data-motion-scene=""
          data-reveal=""
          data-reveal-delay="220"
        >
          <span className="bento-index">04 / POSSIBILITY</span>
          <h3>Good ideas travel.</h3>
          <p>
            Curiosity has no borders. Connect perspectives, share what we learn,
            and build something that matters.
          </p>
          <DottedGlobe />
        </Card>
      </div>
    </section>
  );
}
