import { MotionProvider } from "@/components/motion/motion-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionProvider>
      <SiteHeader />
      {children}
      <SiteFooter />
    </MotionProvider>
  );
}
