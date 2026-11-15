"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { useMotionPreference } from "./motion-provider";

const pointCount = 1400;
const points = Array.from({ length: pointCount }, (_, index) => {
  const y = 1 - (index / (pointCount - 1)) * 2;
  const radius = Math.sqrt(1 - y * y);
  const longitude = index * Math.PI * (3 - Math.sqrt(5));
  return {
    x: Math.cos(longitude) * radius,
    y,
    z: Math.sin(longitude) * radius,
  };
});
const signals = [points[78], points[235], points[491], points[657]];

export function DottedGlobe() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const angle = useRef(0.4);
  const { paused } = useMotionPreference();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const element = canvas.current;
    const context = element?.getContext("2d");
    if (!element || !context) return;
    const dark = resolvedTheme === "dark";
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let lastTime = 0;
    let inView = false;
    let width = 0;
    let height = 0;
    function draw(time: number) {
      if (!context || !element) return;
      if (time - lastTime >= 1000 / 30 || lastTime === 0) {
        const elapsed = lastTime ? Math.min(time - lastTime, 64) : 0;
        lastTime = time;
        if (!paused && !preference.matches && inView && !document.hidden)
          angle.current += elapsed * 0.00012;
        context.clearRect(0, 0, width, height);
        const radius = width * 0.41;
        const cx = width * 0.54;
        const cy = height * 0.07 + radius;
        const cos = Math.cos(angle.current),
          sin = Math.sin(angle.current);
        for (const point of points) {
          const x = point.x * cos + point.z * sin;
          const z = point.z * cos - point.x * sin;
          const depth = (z + 1) / 2;
          context.beginPath();
          context.arc(
            cx + x * radius,
            cy + point.y * radius,
            0.55 + depth * 0.85,
            0,
            Math.PI * 2,
          );
          context.fillStyle = `rgba(${dark ? "170, 192, 143" : "83, 99, 65"}, ${0.08 + depth * 0.72})`;
          context.fill();
        }
        for (const point of signals) {
          const x = point.x * cos + point.z * sin;
          const z = point.z * cos - point.x * sin;
          if (z < 0) continue;
          const px = cx + x * radius,
            py = cy + point.y * radius;
          context.beginPath();
          context.arc(px, py, 7, 0, Math.PI * 2);
          context.fillStyle = dark
            ? "rgba(187, 215, 143, .2)"
            : "rgba(153, 173, 117, .18)";
          context.fill();
          context.beginPath();
          context.arc(px, py, 2.6, 0, Math.PI * 2);
          context.fillStyle = dark ? "#bfd990" : "#7e9556";
          context.fill();
        }
        element.dataset.ready = "true";
      }
      if (inView && !paused && !preference.matches && !document.hidden)
        frame = requestAnimationFrame(draw);
    }
    function start() {
      cancelAnimationFrame(frame);
      lastTime = 0;
      frame = requestAnimationFrame(draw);
    }
    const resize = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width;
      height = entry.contentRect.height;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      element.width = width * dpr;
      element.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      start();
    });
    const visibility = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();
      else cancelAnimationFrame(frame);
    });
    function onVisibilityChange() {
      if (document.hidden) cancelAnimationFrame(frame);
      else if (inView) start();
    }
    resize.observe(element);
    visibility.observe(element);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      visibility.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [paused, resolvedTheme]);

  return (
    <div className="globe-scene" aria-hidden="true">
      <div className="globe-halo" />
      <div className="globe-fallback" />
      <canvas ref={canvas} className="globe-canvas" />
      <span className="globe-latitude latitude-one" />
      <span className="globe-latitude latitude-two" />
      <span className="globe-coordinate">IDEAS WITHOUT BORDERS</span>
    </div>
  );
}
