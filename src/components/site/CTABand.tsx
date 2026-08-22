import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";

export function CTABand() {
  return (
    <section className="relative overflow-hidden">
      <img src={hero1} alt="" aria-hidden width={1920} height={1200} loading="lazy"
        className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-royal-deep/85" />
      <div className="container-lux relative py-20 md:py-28 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow !text-gold-soft">Reserve your visit</span>
          <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
            Walk the roads, feel the trees, meet the community.
          </h2>
          <p className="mt-5 text-white/80">
            Our private site visits include a chauffeured tour, layout walkthrough and a personal
            investment consultation. Weekends slots fill quickly.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold">
              Book a Site Visit <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#" className="btn-outline-ivory">Download Brochure</a>
          </div>
        </div>
      </div>
    </section>
  );
}
