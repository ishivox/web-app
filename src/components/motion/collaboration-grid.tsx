import {
  Braces,
  PenTool,
  Sparkles,
  Layers3,
  Lightbulb,
  Shapes,
  MousePointer2,
  Component,
  Code2,
} from "lucide-react";
const tiles = [
  { Icon: PenTool, name: "Design" },
  { Icon: Braces, name: "Engineering" },
  { Icon: Sparkles, name: "Ideas" },
  { Icon: Layers3, name: "Systems" },
  { Icon: Lightbulb, name: "Discovery" },
  { Icon: Shapes, name: "Exploration" },
  { Icon: MousePointer2, name: "Experience" },
  { Icon: Component, name: "Building" },
  { Icon: Code2, name: "Technology" },
];
export function CollaborationGrid() {
  return (
    <div className="collaboration-visual" aria-hidden="true">
      <div className="collaboration-grid">
        {tiles.map(({ Icon, name }, index) => (
          <div key={name} className="collaboration-cell">
            <div
              className="collaboration-tile"
              style={{ animationDelay: `${-(index * 1.7)}s` }}
            >
              <Icon />
              <span>{name}</span>
            </div>
            <div className="tile-echo">
              <Icon />
            </div>
          </div>
        ))}
      </div>
      <div className="collaboration-caption">
        <span className="status-dot" /> Different minds. Shared momentum.
      </div>
    </div>
  );
}
