import { MotionToggle } from "@/components/motion/motion-provider";
import Link from "next/link";
import { Brand } from "./brand";
export function SiteFooter() {
  return (
    <footer>
      <Brand />
      <span>Ideas into impact.</span>
      <MotionToggle />
      <p>© {new Date().getFullYear()} Ishivox</p>
      <Link href="/projects">Our projects ↗</Link>
    </footer>
  );
}
