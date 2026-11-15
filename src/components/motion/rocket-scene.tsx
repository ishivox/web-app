import { Rocket } from "lucide-react";
export function RocketScene() {
  return (
    <div className="rocket-scene" aria-hidden="true">
      <div className="rocket-orbit" />
      <div className="speed-lines">
        {Array.from({ length: 7 }, (_, index) => (
          <i
            key={index}
            style={{
              top: `${12 + index * 12}%`,
              animationDelay: `${-index * 0.41}s`,
              animationDuration: `${1 + (index % 3) * 0.25}s`,
            }}
          />
        ))}
      </div>
      <div className="rocket-flight">
        <span className="rocket-trail" />
        <span className="rocket-body">
          <Rocket />
        </span>
        <span className="rocket-exhaust" />
      </div>
      <span className="rocket-star star-one">✦</span>
      <span className="rocket-star star-two">+</span>
    </div>
  );
}
