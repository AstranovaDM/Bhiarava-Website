import { ArrowUpRight, MapPin, ShieldCheck, Ruler, TrendingUp, CalendarCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export function ProjectCard({ p, index = 0 }: { p: Project; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
      className="group relative overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)] ring-1 ring-border transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lux)]"
    >
      {/* Animated gold gradient border on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(130deg, transparent 30%, color-mix(in oklab, var(--color-gold) 55%, transparent) 50%, transparent 70%)",
          padding: "1.5px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={`${p.name}, ${p.location}`}
          width={1600}
          height={1200}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />

        {/* Status badge */}
        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-ink shadow-lg">
          {p.status}
        </span>
        {/* Approval badge */}
        <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-widest text-royal-deep shadow">
          <ShieldCheck className="h-3 w-3 text-royal" />
          {p.approval}
        </span>
        {/* Appreciation ribbon */}
        <span className="absolute right-4 bottom-4 inline-flex items-center gap-1 rounded-full bg-royal-deep/85 backdrop-blur px-3 py-1 text-[0.62rem] font-medium uppercase tracking-widest text-gold-soft">
          <TrendingUp className="h-3 w-3" />
          {p.appreciation}
        </span>
        <div className="absolute inset-x-4 bottom-4 flex items-center gap-2 text-white/90">
          <MapPin className="h-4 w-4 text-gold" />
          <span className="text-xs tracking-wide">{p.location}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-2xl leading-tight">{p.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.tagline}</p>

        <dl className="mt-5 grid grid-cols-3 gap-3 border-y border-border py-4 text-xs">
          <div>
            <dt className="flex items-center gap-1 text-muted-foreground"><Ruler className="h-3 w-3" /> Sizes</dt>
            <dd className="mt-1 font-medium text-foreground">{p.sizes}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-1 text-muted-foreground"><CalendarCheck className="h-3 w-3" /> Status</dt>
            <dd className="mt-1 font-medium text-foreground">{p.status}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Starting</dt>
            <dd className="mt-1 font-semibold text-gold">{p.startingPrice}</dd>
          </div>
        </dl>

        <div className="mt-5 flex items-center gap-3">
          <Link
            to="/projects/$slug"
            params={{ slug: p.slug }}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-royal-deep px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-ink"
          >
            Explore <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex flex-1 items-center justify-center rounded-full border border-gold/60 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-royal-deep transition hover:bg-gold hover:text-ink"
          >
            Book Visit
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
