import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Concrete Tips & Guides | McKinney Concrete Experts Blog",
  description:
    "Expert concrete advice for McKinney, TX homeowners. Tips on driveways, patios, pool decks, maintenance, and more from McKinney Concrete Experts.",
  openGraph: {
    title: "Concrete Tips & Guides | McKinney Concrete Experts Blog",
    description:
      "Expert concrete advice for McKinney, TX homeowners. Tips on driveways, patios, pool decks, maintenance, and more.",
    url: "https://mckinneyconcreteexperts.com/blog",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "McKinney Concrete Experts Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Concrete Tips & Guides | McKinney Concrete Experts Blog",
    description:
      "Expert concrete advice for McKinney, TX homeowners. Tips on driveways, patios, pool decks, and maintenance.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://mckinneyconcreteexperts.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Concrete Tips & Guides"
            subtitle="Practical advice for McKinney homeowners from our team of concrete professionals."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-surface border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <span className="inline-block bg-accent/10 text-accent font-display text-xs font-bold px-3 py-1 rounded mb-4">
                    {post.category}
                  </span>
                  <h2 className="font-display font-bold text-lg text-primary mb-3 leading-tight">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-accent transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-mid text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-mid">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.publishDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
