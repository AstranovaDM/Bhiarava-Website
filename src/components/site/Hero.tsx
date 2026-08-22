import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp, MapPin, Award, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";

const slides = [
  { src: hero1, alt: "Grand ceremonial entrance of a premium plotted development at golden hour" },
  { src: hero2, alt: "Illuminated luxury gated community archway at dusk" },
  { src: hero3, alt: "Tree-lined boulevards inside a premium township, aerial view" },
  { src: hero4, alt: "Families walking through a landscaped community park at sunset" },
  { src: hero5, alt: "Modern luxury clubhouse with pool at sunset" },
  { src: hero6, alt: "Aerial twilight view of an illuminated plotted township" },
];

const trust = [
  { icon: Award, label: "Premium Layout" },
  { icon: ShieldCheck, label: "Approved Projects" },
  { icon: TrendingUp, label: "High Appreciation" },
  { icon: MapPin, label: "Prime Connectivity" },
  { icon: Sparkles, label: "Secure Investment" },
];

export function Hero() {
  const [i, setI] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const overlay = useTransform(scrollY, [0, 400], [0, 0.35]);
  const contentY = useTransform(scrollY, [0, 500], [0, -60]);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink text-white">
      {/* Parallax slide layer */}
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== idx}
          >
            <img
              src={s.src}
              alt={s.alt}
              width={1920}
              height={1200}
              fetchPriority={idx === 0 ? "high" : "auto"}
              loading={idx === 0 ? "eager" : "lazy"}
              className={`h-full w-full object-cover ${i === idx ? "animate-ken-burns" : ""}`}
            />
          </div>
        ))}
      </motion.div>

      <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(0,0,0,0.6),transparent)]" />
      <motion.div className="absolute inset-0 bg-ink pointer-events-none" style={{ opacity: overlay }} />

      <motion.div
        style={{ y: contentY, paddingTop: "calc(env(safe-area-inset-top) + 76px + 48px)" }}
        className="container-lux relative z-10 flex min-h-[100svh] flex-col justify-center pb-28 md:!pt-32 md:pb-24"
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          className="max-w-3xl"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } } }}
            className="eyebrow !text-gold-soft"
          >
            Bhairava Infra &amp; Realtors LLP
          </motion.span>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1] } } }}
            className="mt-4 font-serif text-[2.35rem] leading-[1.1] tracking-tight sm:mt-5 sm:text-6xl md:text-7xl"
          >
            Where Smart Investments <br className="hidden md:block" />
            Meet <em className="gold-text not-italic">Future Living</em>.
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } } }}
            className="mt-5 max-w-xl text-[1.125rem] leading-[1.6] text-white/80 sm:mt-6 sm:text-base md:text-lg"
          >
            Premium residential open plots crafted for long-term appreciation, excellent
            connectivity and modern infrastructure.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } } }}
            className="mt-8 flex w-full max-w-[340px] flex-col items-stretch gap-4 sm:mt-9 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Link to="/projects" className="btn-gold group w-full text-base sm:w-auto sm:text-sm">
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://wa.me/919392893933?text=Hi%2C%20I%27d%20like%20to%20book%20a%20site%20visit%20with%20Bhairava%20Infra."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-ivory w-full text-base sm:w-auto sm:text-sm"
            >
              Book Site Visit
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mt-12 md:mt-20"
        >
          <div className="glass-dark rounded-2xl px-5 py-5 md:px-8">
            <ul className="grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-5 lg:grid-cols-5">
              {trust.map(({ icon: Icon, label }) => (
                <li key={label} className="flex min-w-0 items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold sm:h-10 sm:w-10">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[0.8rem] font-medium leading-snug tracking-wide text-white/90 sm:text-sm">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 right-6 z-10 hidden gap-2 md:flex">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Show slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-10 bg-gold" : "w-5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
