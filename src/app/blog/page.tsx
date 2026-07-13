import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Concrete Tips & Guides | McKinney Concrete Experts",
  description:
    "Guides and advice on concrete driveways, patios, and hiring a contractor in McKinney, TX — from the team at McKinney Concrete Experts.",
  openGraph: { images: ["/og-image.jpg"] },
  alternates: {
    canonical: "https://www.mckinneyconcreteexperts.com/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <HeroSection
        title="Concrete Tips & Guides"
        subtitle="Straight answers on driveways, patios, cost, and hiring — from McKinney's concrete pros."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        imageSrc="/mckinney-photos-named/concrete-services-mckinney-tx.jpg"
        imageAlt="Concrete guides and tips for McKinney homeowners"
        height="short"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.heroAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-mid mb-3">
                    <span className="bg-accent/10 text-accent font-display font-bold px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-display font-bold text-primary mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-mid text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="text-accent font-display text-sm font-bold">
                    Read Article &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
