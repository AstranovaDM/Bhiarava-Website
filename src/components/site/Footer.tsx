import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-royal-deep text-white">
      <div className="container-lux py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/70">
              Crafting premium residential open plots designed for long-term appreciation,
              trusted infrastructure and modern living.
            </p>
          </div>

          <div>
            <h4 className="eyebrow !text-gold-soft">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {[
                ["/about", "About"],
                ["/projects", "Projects"],
                ["/gallery", "Gallery"],
                ["/why-invest", "Why Invest"],
                ["/blog", "Blog"],
                ["/faq", "FAQ"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="transition hover:text-gold">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow !text-gold-soft">Get in touch</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><a href="https://www.google.com/maps/dir/?api=1&destination=H.No.%205-31-8%2C%201st%20Floor%2C%20Above%20Bank%20of%20Maharashtra%2C%204%2F14%2C%20Brodipet" target="_blank" rel="noopener noreferrer" className="hover:text-gold">H.No. 5-31-8, 1st Floor, Above Bank of Maharashtra, 4/14, Brodipet</a></li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><a href="tel:+919392893933">+91 93928 93933</a></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow !text-gold-soft">Newsletter</h4>
            <p className="mt-5 text-sm text-white/70">Investment insights and new launches, once a month.</p>
            <form className="mt-4 flex overflow-hidden rounded-full border border-white/20 bg-white/5">
              <input
                type="email"
                required
                placeholder="you@email.com"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm placeholder:text-white/40 focus:outline-none"
              />
              <button type="submit" className="btn-gold m-1 !py-2 !px-5 text-xs">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Bhairava Infra &amp; Realtors LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">RERA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
