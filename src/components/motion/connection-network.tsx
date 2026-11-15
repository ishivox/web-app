const connections = [
  { path: "M160 45H300L370 140H560", delay: "0s" },
  { path: "M34 140H560", delay: "-1.2s" },
  { path: "M160 235H300L450 140H560", delay: "-2.4s" },
  { path: "M560 140H750L820 45H960", delay: "-1.6s" },
  { path: "M560 140H1086", delay: "-.4s" },
  { path: "M560 140H670L820 235H960", delay: "-2.8s" },
];
export function ConnectionNetwork() {
  return (
    <svg
      className="wires"
      viewBox="0 0 1120 280"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="connection-glow"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="1120"
          y2="0"
        >
          <stop stopColor="#b7c6a0" stopOpacity="0" />
          <stop offset=".55" stopColor="#7d8f64" />
          <stop offset="1" stopColor="#435831" />
        </linearGradient>
      </defs>
      {connections.map(({ path, delay }) => (
        <g key={path}>
          <path className="connection-track" d={path} />
          <path
            className="connection-beam"
            pathLength="1"
            d={path}
            style={{ animationDelay: delay }}
          />
        </g>
      ))}
    </svg>
  );
}
