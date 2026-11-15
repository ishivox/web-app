import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <main id="main-content" className="section page-intro">
      <span className="kicker">404 · PAGE NOT FOUND</span>
      <h1>A different possibility.</h1>
      <p>This page doesn’t exist. Let’s get you back to Ishivox.</p>
      <Button asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </main>
  );
}
