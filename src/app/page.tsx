import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ClipboardList, Calendar, Star } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "McKinney Concrete Contractors | McKinney Concrete Experts",
  description:
    "Trusted concrete contractors in McKinney, TX: driveways, patios, pool decks & foundations. Serving Collin County. Call (214) 833-9489 for a free estimate.",
  openGraph: {
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.mckinneyconcreteexperts.com",
  },
};

const trustBadges = [
  { icon: ShieldCheck, text: "Licensed & Insured" },
  { icon: ClipboardList, text: "Free Estimates" },
  { icon: Calendar, text: "Serving McKinney Since 2008" },
  { icon: Star, text: "5-Star Google Rated" },
];

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "McKinney Concrete Experts",
    telephone: "+12148339489",
    address: {
      "@type": "PostalAddress",
      addressLocality: "McKinney",
      addressRegion: "TX",
      postalCode: "75069",
      addressCountry: "US",
    },
    areaServed: [
      "McKinney",
      "Stonebridge Ranch",
      "Craig Ranch",
      "Trinity Falls",
      "Tucker Hill",
      "Allen",
      "Fairview",
      "Celina",
      "Anna",
    ],
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <HeroSection
        title="McKinney's Trusted Concrete Contractors"
        subtitle="Driveways, patios, pool decks, and foundations built for McKinney homeowners who expect it done right — backed by free estimates and honest work."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        secondaryCtaText="See Our Work"
        secondaryCtaHref="/gallery"
        imageSrc="/mckinney-photos-named/mckinney-concrete-contractors-hero.jpg"
        imageAlt="Concrete contractors installing a driveway in McKinney, Texas"
        height="full"
      />

      <section className="bg-white border-y border-border py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center justify-center gap-2 font-display font-bold text-primary text-sm"
              >
                <badge.icon className="h-5 w-5 text-accent" />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Concrete Services in McKinney, TX" />
          <p className="text-center text-mid max-w-3xl mx-auto -mt-6 mb-12 leading-relaxed">
            From{" "}
            <Link
              href="/services/driveways"
              className="text-accent font-semibold hover:underline"
            >
              concrete driveway installation
            </Link>{" "}
            and{" "}
            <Link
              href="/services/patios"
              className="text-accent font-semibold hover:underline"
            >
              stamped concrete patios
            </Link>{" "}
            to{" "}
            <Link
              href="/services/foundations-slabs"
              className="text-accent font-semibold hover:underline"
            >
              foundation slabs
            </Link>{" "}
            and{" "}
            <Link
              href="/services/commercial-concrete"
              className="text-accent font-semibold hover:underline"
            >
              commercial concrete
            </Link>
            , our McKinney crews handle residential and commercial flatwork
            engineered for North Texas clay soil and freeze-thaw swings.
          </p>
          <ServicesGrid />
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why McKinney Homeowners Choose Our Concrete Company" />
          <WhyChooseUs />
        </div>
      </section>

      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What Our McKinney Customers Are Saying" light />
          <TestimonialsSection />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Concrete Contractors Serving McKinney & Collin County"
            subtitle="McKinney's growth — from Stonebridge Ranch to Trinity Falls, Allen to Celina — demands a contractor who knows the territory."
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/service-areas/${loc.slug}`}
                className="bg-accent/10 text-accent border border-accent/20 rounded px-4 py-2 font-display text-sm font-bold hover:bg-accent hover:text-white transition-colors"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
