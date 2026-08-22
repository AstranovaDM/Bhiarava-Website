import { Link } from "@tanstack/react-router";
import { Calendar, MessageCircle, Phone } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 gap-px border-t border-border bg-background/95 backdrop-blur-xl shadow-[0_-8px_24px_-10px_rgba(0,0,0,0.15)] lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href="tel:+919392893933"
        className="flex min-h-[56px] items-center justify-center gap-2 px-2 py-4 text-[0.7rem] font-semibold uppercase tracking-widest text-foreground"
      >
        <Phone className="h-4 w-4 shrink-0 text-royal" /> Call
      </a>
      <a
        href="https://wa.me/919392893933"
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[56px] items-center justify-center gap-2 px-2 py-4 text-[0.7rem] font-semibold uppercase tracking-widest text-foreground"
      >
        <MessageCircle className="h-4 w-4 shrink-0 text-[#25D366]" /> WhatsApp
      </a>
      <Link
        to="/contact"
        className="flex min-h-[56px] items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-soft px-2 py-4 text-[0.7rem] font-semibold uppercase tracking-widest text-ink"
      >
        <Calendar className="h-4 w-4 shrink-0" /> Visit
      </Link>
    </div>
  );
}
