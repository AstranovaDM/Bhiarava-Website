import { Section, SectionHeader } from "@/components/site/Section";
import {
  Route, Zap, Droplets, Waves, CloudRain, Footprints, Baby, Trees, Lightbulb, Sprout, Shield, Flower2,
} from "lucide-react";

const amenities = [
  { icon: Route, label: "40ft Wide Roads" },
  { icon: Zap, label: "Underground Electricity" },
  { icon: Droplets, label: "Water Pipeline" },
  { icon: Waves, label: "Modern Drainage" },
  { icon: CloudRain, label: "Rainwater Harvesting" },
  { icon: Footprints, label: "Walking Track" },
  { icon: Baby, label: "Children's Park" },
  { icon: Trees, label: "Open Green Spaces" },
  { icon: Lightbulb, label: "Street Lighting" },
  { icon: Sprout, label: "Landscaping" },
  { icon: Flower2, label: "Avenue Plantation" },
  { icon: Shield, label: "24×7 Security" },
];

export function Amenities() {
  return (
    <Section className="bg-background">
      <SectionHeader
        eyebrow="Infrastructure & Amenities"
        title={<>Every detail, <em className="gold-text not-italic">quietly perfected</em>.</>}
        intro="From the width of the roads to the softness of the landscape lights, our communities are engineered for a lifestyle that ages beautifully."
      />

      <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {amenities.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center transition hover:border-gold hover:bg-secondary/50"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-royal-deep text-gold transition group-hover:bg-gold group-hover:text-royal-deep">
              <Icon className="h-6 w-6" />
            </span>
            <span className="text-xs font-medium tracking-wide text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
