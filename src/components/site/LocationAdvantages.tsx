import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Building2, GraduationCap, Hospital, TrainFront, Plane, ShoppingBag } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";

const items = [
  { icon: Plane, label: "International Airport", meta: "35 min drive" },
  { icon: TrainFront, label: "MMTS / Metro Extension", meta: "12 min" },
  { icon: Building2, label: "Upcoming IT Corridor", meta: "8 min" },
  { icon: GraduationCap, label: "International Schools", meta: "5–15 min" },
  { icon: Hospital, label: "Multi-speciality Hospitals", meta: "10 min" },
  { icon: ShoppingBag, label: "Malls & Retail Hubs", meta: "15 min" },
];

export function LocationAdvantages() {
  return (
    <Section className="bg-secondary/40">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Location Advantages"
            title={<>Addresses along tomorrow's <em className="gold-text not-italic">growth corridors</em>.</>}
            intro="Our layouts sit precisely where infrastructure, employment and lifestyle converge — the exact conditions that historically drive premium land appreciation."
          />
          <Link to="/why-invest" className="btn-outline-ivory mt-8 !text-foreground !border-border hover:!bg-ink hover:!text-white">
            Why invest with Bhairava <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
          {items.map(({ icon: Icon, label, meta }) => (
            <li key={label} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition hover:border-gold">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-royal-deep text-gold">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold">{label}</div>
                <div className="text-xs text-muted-foreground">{meta}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
