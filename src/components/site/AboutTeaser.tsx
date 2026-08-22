import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import project3 from "@/assets/project-3.jpg";

export function AboutTeaser() {
  return (
    <Section className="bg-background">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="About Bhairava"
            title={<>A quieter kind of <em className="gold-text not-italic">luxury</em>.</>}
            intro="Bhairava Infra & Realtors LLP develops premium plotted communities that combine transparent legal foundations, thoughtful master-planning and the calm confidence of a family-run firm."
          />
          <p className="mt-6 text-muted-foreground">
            We believe land is the most enduring asset a family can own. Every project we launch is
            chosen for its long-term appreciation potential, infrastructural advantage and the kind
            of lifestyle that quietly signals success.
          </p>
          <Link to="/about" className="btn-gold mt-8 inline-flex">
            Our story <ArrowUpRight className="h-4 w-4" />
          </Link>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["12+", "Years"],
              ["25+", "Projects"],
              ["4,500+", "Families"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-serif text-3xl text-royal">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-7">
          <div className="relative grid grid-cols-6 grid-rows-6 gap-4 h-[520px] md:h-[600px]">
            <img src={hero5} alt="Modern clubhouse concept" width={1200} height={800}
              loading="lazy" className="col-span-4 row-span-4 h-full w-full rounded-3xl object-cover shadow-[var(--shadow-lux)]" />
            <img src={project3} alt="Landscaped walking path" width={800} height={600}
              loading="lazy" className="col-span-2 row-span-3 h-full w-full rounded-3xl object-cover" />
            <img src={hero4} alt="Community park at golden hour" width={1200} height={800}
              loading="lazy" className="col-span-6 row-span-2 h-full w-full rounded-3xl object-cover" />
          </div>
        </div>
      </div>
    </Section>
  );
}
