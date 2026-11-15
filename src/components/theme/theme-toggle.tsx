"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="theme-toggle"
      aria-label="Toggle light and dark theme"
      title="Toggle light and dark theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Moon className="theme-moon" aria-hidden="true" />
      <Sun className="theme-sun" aria-hidden="true" />
    </Button>
  );
}
