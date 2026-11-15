import { ImageResponse } from "next/og";
export const alt = "Ishivox — Thoughtful software. Meaningful impact.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "65px 75px",
        background: "#f5f6f0",
        color: "#191a18",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 36, fontWeight: 700 }}>
        ishivox
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          letterSpacing: -3,
          lineHeight: 1.1,
        }}
      >
        <span>Thoughtful software.</span>
        <span>Meaningful impact.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#69715c",
          fontSize: 24,
        }}
      >
        <span>Ideas into impact.</span>
        <span>Featuring PDF Studio ↗</span>
      </div>
    </div>,
    size,
  );
}
