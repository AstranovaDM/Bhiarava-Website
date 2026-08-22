import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, X } from "lucide-react";

const KEY = "bhairava-brochure-shown";

export function BrochurePopup() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY)) return;

    const trigger = () => {
      if (sessionStorage.getItem(KEY)) return;
      sessionStorage.setItem(KEY, "1");
      setOpen(true);
    };

    // Exit intent (desktop)
    const onMove = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };
    // Fallback timeout (all devices)
    const t = window.setTimeout(trigger, 45000);

    document.addEventListener("mouseleave", onMove);
    return () => {
      document.removeEventListener("mouseleave", onMove);
      window.clearTimeout(t);
    };
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/70 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-card p-8 shadow-[var(--shadow-lux)]"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground hover:text-foreground transition"
            >
              <X className="h-4 w-4" />
            </button>
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-gold to-gold-soft text-ink">
              <Download className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-serif text-3xl">Before you leave…</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Download the Bhairava investor brochure — pricing, master plans, appreciation data and site-visit slots.
            </p>
            {sent ? (
              <div className="mt-6 rounded-xl border border-gold bg-gold/10 p-4 text-sm text-foreground">
                Thank you — the brochure is on its way to your inbox.
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="mt-6 space-y-3"
              >
                <input required placeholder="Full name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none" />
                <input required type="tel" placeholder="Phone" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none" />
                <input required type="email" placeholder="Email" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none" />
                <button type="submit" className="btn-gold w-full">Send me the brochure</button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
