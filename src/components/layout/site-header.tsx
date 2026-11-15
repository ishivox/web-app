import { ThemeToggle } from "@/components/theme/theme-toggle";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Brand } from "./brand";
import { MobileNav } from "./mobile-nav";
import { Button } from "@/components/ui/button";
import { navigation } from "@/config/site";
export function SiteHeader() {
  return (
    <header>
      <Brand />
      <nav aria-label="Main navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <Button asChild size="sm" className="header-cta gap-5">
          <Link href="/#contact">
            Let’s talk <ArrowRight />
          </Link>
        </Button>
        <MobileNav />
      </div>
    </header>
  );
}
