import { ShieldCheck, ClipboardList, Calendar, Star } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    stat: "Licensed & Fully Insured",
    description:
      "Full liability coverage and workers' comp on every project. We protect your property and our crew.",
  },
  {
    icon: ClipboardList,
    stat: "Free Estimates",
    description:
      "Detailed, written estimates at no cost. We show up, measure, and give you an honest number.",
  },
  {
    icon: Calendar,
    stat: "Serving McKinney Since 2008",
    description:
      "Over 15 years of concrete work across McKinney and Collin County. We know this territory.",
  },
  {
    icon: Star,
    stat: "5-Star Google Rated",
    description:
      "Our reputation is built on finished projects, not promises. Ask our customers.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {points.map((point) => (
        <div key={point.stat} className="text-center">
          <div className="inline-flex items-center justify-center bg-accent/10 text-accent rounded-full p-3 mb-4">
            <point.icon className="h-6 w-6" />
          </div>
          <span className="amber-rule-sm mx-auto mb-3" />
          <h3 className="font-display font-bold text-primary text-sm md:text-base mb-2">
            {point.stat}
          </h3>
          <p className="text-mid text-sm leading-relaxed">{point.description}</p>
        </div>
      ))}
    </div>
  );
}
