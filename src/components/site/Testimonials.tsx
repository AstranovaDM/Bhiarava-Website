import { Section, SectionHeader } from "@/components/site/Section";
import { Quote } from "lucide-react";

const items = [
  {
    quote: "The clarity of paperwork and quality of infrastructure made our first plot investment truly stress-free. Our plot has already appreciated 2.4× in three years.",
    name: "Rajesh & Anitha Menon",
    role: "First-time Investors, Bengaluru",
  },
  {
    quote: "As an NRI, I needed a developer I could trust remotely. Bhairava handled everything from documentation to registration seamlessly.",
    name: "Vikram Sharma",
    role: "NRI Investor, Dubai",
  },
  {
    quote: "The community feels premium yet warm. Wide roads, landscaped avenues and the clubhouse — it exceeded every expectation.",
    name: "Dr. Meera Rao",
    role: "Homeowner, Bhairava Greens",
  },
];

export function Testimonials() {
  return (
    <Section className="bg-secondary/40">
      <SectionHeader
        eyebrow="Voices of Trust"
        title={<>What our <em className="gold-text not-italic">investors</em> say.</>}
        align="center"
      />

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {items.map((t) => (
          <figure
            key={t.name}
            className="relative rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
          >
            <Quote className="absolute -top-5 left-8 h-10 w-10 rounded-full bg-gold p-2 text-ink" />
            <blockquote className="font-serif text-lg leading-relaxed text-foreground">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-5">
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
