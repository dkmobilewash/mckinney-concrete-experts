import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import { BlogPostMeta } from "@/data/blog";

const SITE_URL = "https://www.mckinneyconcreteexperts.com";

type Props = {
  meta: BlogPostMeta;
  children: React.ReactNode;
};

export default function BlogPostLayout({ meta, children }: Props) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.date,
    image: `${SITE_URL}${meta.heroImage}`,
    url: `${SITE_URL}/blog/${meta.slug}`,
    author: { "@type": "Organization", name: "McKinney Concrete Experts" },
    publisher: {
      "@type": "Organization",
      name: "McKinney Concrete Experts",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.jpg` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${meta.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <HeroSection
        title={meta.title}
        subtitle={meta.excerpt}
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        imageSrc={meta.heroImage}
        imageAlt={meta.heroAlt}
        height="short"
      />

      <article className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav
            className="text-xs text-mid flex flex-wrap gap-1 mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/blog" className="hover:text-accent">
              Blog
            </Link>
            <span>/</span>
            <span className="text-primary">{meta.category}</span>
          </nav>

          <div className="flex items-center gap-3 text-xs text-mid mb-8">
            <span className="bg-accent/10 text-accent font-display font-bold px-3 py-1 rounded">
              {meta.category}
            </span>
            <time dateTime={meta.date}>{meta.dateDisplay}</time>
            <span>&bull;</span>
            <span>{meta.readTime}</span>
          </div>

          <div className="article">{children}</div>

          <div className="mt-12 border-t border-border pt-8">
            <Link
              href="/blog"
              className="text-accent font-display font-bold hover:underline"
            >
              &larr; Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
