import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FloatingCTA } from "./FloatingCTA";
import { BrochurePopup } from "./BrochurePopup";
import { StickyMobileCTA } from "./StickyMobileCTA";
import type { ReactNode } from "react";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-hidden">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <div aria-hidden className="lg:hidden" style={{ height: "calc(env(safe-area-inset-bottom) + 56px)" }} />
      <FloatingCTA />
      <StickyMobileCTA />
      <BrochurePopup />
    </div>
  );
}

/** Interior pages need a non-transparent top offset because Nav is fixed. */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden bg-royal-deep pt-32 pb-20 text-white md:pt-40 md:pb-28">
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(60% 80% at 20% 0%, rgba(199,154,59,0.4), transparent), radial-gradient(50% 60% at 100% 100%, rgba(27,95,167,0.5), transparent)" }} />
      <div className="container-lux relative">
        <span className="eyebrow !text-gold-soft">{eyebrow}</span>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-white/75 md:text-lg">{intro}</p>}
        <div className="mt-8 h-px w-24 bg-gold" />
      </div>
    </header>
  );
}
