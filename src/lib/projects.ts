import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

export type NearbyPlace = { name: string; distance: string; type: "school" | "hospital" | "airport" | "tech" | "highway" | "market" };

export type Project = {
  slug: string;
  name: string;
  location: string;
  price: string;
  startingPrice: string;
  sizes: string;
  approval: string;
  status: "Ongoing" | "New Launch" | "Ready to Register";
  image: string;
  gallery: string[];
  tagline: string;
  appreciation: string;
  highlights: string[];
  nearby: NearbyPlace[];
  masterPlan?: string;
};

export const projects: Project[] = [
  {
    slug: "bhairava-greens",
    name: "Bhairava Greens",
    location: "Shadnagar, Hyderabad",
    price: "₹ 24.9 L onwards",
    startingPrice: "₹ 24.9 L",
    sizes: "167 – 500 sq yd",
    approval: "DTCP + RERA",
    status: "New Launch",
    image: project1,
    gallery: [project1, hero3, hero5, hero4],
    tagline: "Signature plotted community with landscaped avenues and a resort-style clubhouse.",
    appreciation: "3.2× projected over 5 yrs",
    highlights: [
      "40+ ft blacktop internal roads",
      "Resort-style clubhouse with pool",
      "24×7 security with CCTV",
      "Underground drainage & electrical",
      "Landscaped central spine",
      "EV charging bays",
    ],
    nearby: [
      { name: "ORR Exit 13", distance: "6 km", type: "highway" },
      { name: "Rajiv Gandhi Intl. Airport", distance: "22 km", type: "airport" },
      { name: "Delhi Public School", distance: "8 km", type: "school" },
      { name: "Apollo Hospital", distance: "12 km", type: "hospital" },
      { name: "Symbiosis Campus", distance: "10 km", type: "school" },
      { name: "Kohinoor Tech Park", distance: "14 km", type: "tech" },
    ],
  },
  {
    slug: "bhairava-heights",
    name: "Bhairava Heights",
    location: "Sadashivpet, Sangareddy",
    price: "₹ 32.5 L onwards",
    startingPrice: "₹ 32.5 L",
    sizes: "200 – 700 sq yd",
    approval: "HMDA",
    status: "Ongoing",
    image: project2,
    gallery: [project2, hero4, hero3, hero5],
    tagline: "Villa-plot enclave nestled beside the hills with panoramic sunset views.",
    appreciation: "2.8× projected over 5 yrs",
    highlights: [
      "Hillside villa plots",
      "Sunset promenade",
      "Organic farm zone",
      "Yoga & meditation deck",
      "Rainwater harvesting",
      "Solar street lighting",
    ],
    nearby: [
      { name: "NH-65 Highway", distance: "3 km", type: "highway" },
      { name: "IIT Hyderabad", distance: "18 km", type: "school" },
      { name: "Sangareddy District HQ", distance: "9 km", type: "market" },
      { name: "ISB Campus", distance: "26 km", type: "school" },
      { name: "AIIMS Bibinagar", distance: "35 km", type: "hospital" },
      { name: "Patancheru IT Park", distance: "20 km", type: "tech" },
    ],
  },
  {
    slug: "bhairava-meadows",
    name: "Bhairava Meadows",
    location: "Yadadri Corridor",
    price: "₹ 18.2 L onwards",
    startingPrice: "₹ 18.2 L",
    sizes: "150 – 400 sq yd",
    approval: "RERA",
    status: "Ready to Register",
    image: project3,
    gallery: [project3, hero5, hero4, hero3],
    tagline: "Family-first township with waterbodies, jogging tracks and children's play zones.",
    appreciation: "2.5× projected over 5 yrs",
    highlights: [
      "Two natural waterbodies",
      "1.2 km jogging loop",
      "Children's adventure park",
      "Amphitheatre & event lawn",
      "Community organic garden",
      "Pet-friendly zones",
    ],
    nearby: [
      { name: "Yadadri Temple", distance: "8 km", type: "market" },
      { name: "Warangal Highway", distance: "2 km", type: "highway" },
      { name: "Global Indian School", distance: "6 km", type: "school" },
      { name: "KIMS Hospital", distance: "14 km", type: "hospital" },
      { name: "Bhongir Fort Township", distance: "5 km", type: "market" },
      { name: "Pharma City", distance: "22 km", type: "tech" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
