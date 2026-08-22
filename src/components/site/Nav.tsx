import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/why-invest", label: "Why Invest" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, y / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-2xl border-b border-border shadow-[0_4px_24px_-10px_rgba(0,0,0,0.1)]"
          : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className={`container-lux flex items-center justify-between gap-3 transition-all duration-500 sm:gap-6 ${scrolled ? "h-[72px] lg:h-16" : "h-[76px] lg:h-20"}`}>
        <Logo variant={scrolled ? "dark" : "light"} />

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`group relative px-3 py-2 text-[0.82rem] font-medium tracking-wide transition-colors ${
                scrolled ? "text-foreground/80 hover:text-gold" : "text-white/85 hover:text-gold"
              }`}
              activeProps={{ className: "!text-gold [&_.nav-underline]:!scale-x-100" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <span
                aria-hidden
                className="nav-underline pointer-events-none absolute inset-x-3 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919392893933"
            className={`hidden md:inline-flex items-center gap-2 text-sm ${
              scrolled ? "text-foreground/70" : "text-white/85"
            } hover:text-gold transition`}
          >
            <Phone className="h-4 w-4" />
            <span className="tracking-wide">+91 93928 93933</span>
          </a>
          <Link to="/contact" className="btn-gold hidden sm:inline-flex text-xs !py-2.5 !px-5">
            Book Site Visit
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`lg:hidden grid h-11 w-11 place-items-center rounded-full border ${
              scrolled ? "border-border text-foreground" : "border-white/30 text-white"
            }`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden">
        <div
          className="h-full origin-left bg-gradient-to-r from-gold via-gold-soft to-royal transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-royal-deep/95 backdrop-blur-xl text-white lg:hidden animate-rise">
          <div className="container-lux flex h-20 items-center justify-between">
            <Logo variant="light" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/30"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="container-lux mt-8 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-serif text-2xl tracking-wide"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold mt-8 w-full">
              Book Site Visit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
