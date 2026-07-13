import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Concrete Service Areas | McKinney Concrete Experts",
  description:
    "Concrete contractors serving McKinney, TX and Collin County — Stonebridge Ranch, Craig Ranch, Trinity Falls, Allen, Fairview, Celina, Anna, and more. Free estimates.",
  openGraph: { images: ["/og-image.jpg"] },
  alternates: {
    canonical: "https://www.mckinneyconcreteexperts.com/service-areas",
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <HeroSection
        title="Concrete Service Areas in McKinney & Collin County"
        subtitle="Local concrete contractors serving McKinney and the surrounding North Texas communities — with the same quality on every job, in every neighborhood."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        imageSrc="/mckinney-photos-named/concrete-services-mckinney-tx.jpg"
        imageAlt="Concrete service areas across McKinney, Texas"
        height="medium"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-mid leading-relaxed mb-4">
              McKinney Concrete Experts serves homeowners and businesses across
              McKinney and Collin County. We know the soil, the HOAs, and the
              permitting in each community we work in — so your{" "}
              <Link
                href="/services/driveways"
                className="text-accent font-semibold hover:underline"
              >
                driveway
              </Link>
              ,{" "}
              <Link
                href="/services/patios"
                className="text-accent font-semibold hover:underline"
              >
                patio
              </Link>
              , or{" "}
              <Link
                href="/services/foundations-slabs"
                className="text-accent font-semibold hover:underline"
              >
                foundation
              </Link>{" "}
              is built for the conditions right where you live.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Communities We Serve" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/service-areas/${loc.slug}`}
                className="bg-white rounded-lg p-6 border border-border hover:shadow-md transition-shadow border-t-4 border-t-accent"
              >
                <h3 className="font-display font-bold text-primary text-lg mb-1">
                  {loc.name}
                </h3>
                <p className="text-mid text-sm leading-relaxed">
                  {loc.heroSubtitle}
                </p>
                <span className="text-accent font-display text-sm font-bold mt-3 inline-block">
                  View {loc.name} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
