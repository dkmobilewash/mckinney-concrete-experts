import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTABanner from "@/components/sections/CTABanner";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { siteConfig } from "@/lib/siteConfig";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.ogImage}`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteConfig.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteConfig.url}/blog/${post.slug}`,
      },
    ],
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-accent text-sm font-display font-bold mb-6 hover:text-accent-dark transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <span className="inline-block bg-accent/10 text-accent font-display text-xs font-bold px-3 py-1 rounded mb-4">
            {post.category}
          </span>

          <h1 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-mid mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <div className="amber-rule mb-8" />

          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-mid leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="border-t border-border mt-12 pt-8">
            <p className="text-mid text-sm mb-4">
              Need help with your concrete project in McKinney?{" "}
              <Link href="/contact" className="text-accent font-bold hover:text-accent-dark transition-colors">
                Get a free estimate
              </Link>{" "}
              or call{" "}
              <a href="tel:+12144278053" className="text-accent font-bold hover:text-accent-dark transition-colors">
                (214) 427-8053
              </a>
              .
            </p>
          </div>
        </div>
      </article>

      {otherPosts.length > 0 && (
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-xl text-primary mb-6">
              More Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <span className="inline-block bg-accent/10 text-accent font-display text-xs font-bold px-2 py-0.5 rounded mb-2">
                    {p.category}
                  </span>
                  <h3 className="font-display font-bold text-primary text-sm mb-2 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-mid text-xs leading-relaxed">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
