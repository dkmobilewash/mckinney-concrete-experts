import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Concrete Services in McKinney TX | McKinney Concrete Experts",
  description:
    "Full-range concrete services in McKinney TX — driveways, patios, pool decks, block walls, foundations, and commercial concrete. Licensed, insured, free estimates.",
  openGraph: {
    title: "Concrete Services in McKinney TX | McKinney Concrete Experts",
    description:
      "Full-range concrete services in McKinney TX — driveways, patios, pool decks, block walls, foundations, and commercial concrete. Licensed, insured, free estimates.",
    url: "https://mckinneyconcreteexperts.com/services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Concrete Services in McKinney TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Concrete Services in McKinney TX | McKinney Concrete Experts",
    description:
      "Full-range concrete services in McKinney TX — driveways, patios, pool decks, block walls, foundations, and commercial concrete.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://mckinneyconcreteexperts.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services" }]} />

      <HeroSection
        title="Professional Concrete Services in McKinney, TX"
        subtitle="From residential driveways to commercial flatwork — quality concrete work across McKinney and Collin County."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        imageSrc="/mckinney-photos-named/concrete-services-mckinney-tx.jpg"
        imageAlt="Concrete services in McKinney, Texas"
        height="medium"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-mid leading-relaxed mb-4">
              McKinney&apos;s growth means concrete work across the spectrum — from
              Stonebridge Ranch patio upgrades to Trinity Falls new construction,
              commercial pours in the US-380 corridor to foundation work on
              larger properties in Celina and Anna.
            </p>
            <p className="text-mid leading-relaxed">
              We handle it all with the same attention to preparation, materials,
              and finish quality that McKinney homeowners and business owners
              expect.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Concrete Services" />
          <ServicesGrid />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why McKinney Homeowners Choose Us" />
          <WhyChooseUs />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
