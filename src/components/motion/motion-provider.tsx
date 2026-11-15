"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Pause, Play } from "lucide-react";

const MotionContext = createContext({
  paused: false,
  reduced: false,
  toggle: () => {},
});

/** Content stays visible in SSR/no-JS; motion progressively enhances it. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const pausedRef = useRef(false);
  const runningReveals = useRef<Animation[]>([]);
  const [manualPause, setManualPause] = useState(false);
  const [reduced, setReduced] = useState(false);
  const paused = manualPause || reduced;

  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    pausedRef.current = paused;
    if (paused) {
      runningReveals.current.forEach((animation) => animation.cancel());
      runningReveals.current = [];
    }
  }, [paused]);

  useEffect(() => {
    const container = root.current;
    if (!container) return;
    const animations: Animation[] = [];
    runningReveals.current = animations;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const reveals = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          reveals.unobserve(element);
          if (pausedRef.current || preference.matches) continue;
          const delay = Math.min(Number(element.dataset.revealDelay) || 0, 350);
          animations.push(
            element.animate(
              [
                { opacity: 0, transform: "translateY(22px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: 700,
                delay,
                easing: "cubic-bezier(.22,1,.36,1)",
                fill: "backwards",
              },
            ),
          );
        }
      },
      { threshold: 0.08 },
    );
    const scenes = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          (entry.target as HTMLElement).dataset.inView = String(
            entry.isIntersecting,
          );
        }
      },
      { rootMargin: "60px", threshold: 0 },
    );
    container
      .querySelectorAll("[data-reveal]")
      .forEach((element) => reveals.observe(element));
    container
      .querySelectorAll("[data-motion-scene]")
      .forEach((element) => scenes.observe(element));
    return () => {
      reveals.disconnect();
      scenes.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [pathname]);

  return (
    <MotionContext.Provider
      value={{
        paused,
        reduced,
        toggle: () => setManualPause((value) => !value),
      }}
    >
      <div
        ref={root}
        className="motion-surface"
        data-motion={paused ? "paused" : "running"}
      >
        {children}
      </div>
    </MotionContext.Provider>
  );
}

export function useMotionPreference() {
  return useContext(MotionContext);
}

export function MotionToggle() {
  const { paused, reduced, toggle } = useMotionPreference();
  return (
    <button
      type="button"
      className="motion-toggle"
      onClick={toggle}
      disabled={reduced}
      aria-pressed={paused}
      aria-label={
        reduced
          ? "Animations disabled by your reduced motion preference"
          : paused
            ? "Resume animations"
            : "Pause animations"
      }
    >
      {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
      <span>
        {reduced ? "Reduced motion" : paused ? "Resume motion" : "Pause motion"}
      </span>
    </button>
  );
}
