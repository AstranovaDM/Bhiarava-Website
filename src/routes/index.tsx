import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { AboutTeaser } from "@/components/site/AboutTeaser";
import { FeaturedProjects } from "@/components/site/FeaturedProjects";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Amenities } from "@/components/site/Amenities";
import { LocationAdvantages } from "@/components/site/LocationAdvantages";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhairava Infra & Realtors LLP — Premium Residential Open Plots" },
      { name: "description", content: "Bhairava Infra & Realtors LLP develops premium residential open plots crafted for long-term appreciation, prime connectivity and modern infrastructure across Telangana." },
      { property: "og:title", content: "Bhairava Infra & Realtors LLP" },
      { property: "og:description", content: "Where smart investments meet future living. Premium plotted developments across Telangana." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Bhairava Infra & Realtors LLP",
          url: "/",
          areaServed: "Telangana, India",
          telephone: "+91-99999-99999",
          email: "hello@bhairavainfra.in",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <AboutTeaser />
      <FeaturedProjects />
      <WhyChooseUs />
      <Amenities />
      <LocationAdvantages />
      <Stats />
      <Testimonials />
      <CTABand />
    </SiteLayout>
  );
}
