import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import GalleryGrid from "@/components/sections/GalleryGrid";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Project Gallery | McKinney Concrete Experts",
  description:
    "Browse completed concrete projects across McKinney, TX — driveways, patios, pool decks, block walls, foundations, and commercial work. See our craftsmanship.",
  openGraph: { images: ["/og-image.jpg"] },
  alternates: {
    canonical: "https://mckinneyconcreteexperts.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="Our Work Across McKinney"
        subtitle="Browse completed projects — driveways, patios, pool decks, block walls, foundations, and commercial work."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        imageSrc="https://picsum.photos/seed/gallery/1600/900"
        imageAlt="Concrete project gallery"
        height="short"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
