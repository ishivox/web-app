"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { navigation } from "@/config/site";
export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-nav">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Open navigation">
            <Menu />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle className="text-xl font-semibold">
            Explore Ishivox
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Find out about our organization and projects.
          </DialogDescription>
          <div className="grid gap-2">
            {navigation.map((item) => (
              <DialogClose key={item.href} asChild>
                <Link
                  className="rounded-md px-3 py-3 hover:bg-secondary"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </DialogClose>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
