import { Section, SectionHeader } from "@/components/site/Section";
import { Award, ShieldCheck, TrendingUp, Leaf, HandCoins, MapPinned } from "lucide-react";

const items = [
  { icon: Award, title: "Legacy of Trust", body: "A decade of transparent dealings, clear titles and delighted families across Telangana." },
  { icon: ShieldCheck, title: "Fully Approved", body: "Every project is DTCP / HMDA / RERA compliant with clear encumbrance certificates." },
  { icon: TrendingUp, title: "Proven Appreciation", body: "Our earliest layouts have delivered 3× – 5× appreciation for long-term investors." },
  { icon: Leaf, title: "Master-Planned", body: "Wide avenues, underground utilities and 30%+ open spaces designed by leading architects." },
  { icon: HandCoins, title: "Flexible Ownership", body: "Curated payment plans, home-loan tie-ups and NRI-friendly documentation support." },
  { icon: MapPinned, title: "Prime Corridors", body: "Handpicked locations along growth corridors, ORR, IT hubs and upcoming infrastructure." },
];

export function WhyChooseUs() {
  return (
    <Section className="bg-secondary/40">
      <SectionHeader
        eyebrow="Why Bhairava"
        title={<>A quiet standard of <em className="gold-text not-italic">excellence</em>.</>}
        intro="We hold ourselves to the details that matter — legal clarity, thoughtful design, uncompromising infrastructure and long-term value."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, body }, idx) => (
          <div
            key={title}
            className="group relative rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-[var(--shadow-soft)]"
          >
            <span className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-gold to-gold-soft text-ink shadow-[var(--shadow-gold)]">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-serif text-xl">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            <span className="absolute right-6 top-6 font-serif text-4xl text-border transition group-hover:text-gold/40">
              {String(idx + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
