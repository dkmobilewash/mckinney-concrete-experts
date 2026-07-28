import Link from "next/link";
import { CheckCircle, ChevronDown, Phone } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ServiceData } from "@/types";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/siteConfig";

type ServicePageContentProps = {
  service: ServiceData;
};

export default function ServicePageContent({
  service,
}: ServicePageContentProps) {
  const relatedServices = services.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in McKinney, TX`,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phoneE164,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: "McKinney",
      containedInPlace: {
        "@type": "State",
        name: "Texas",
      },
    },
    url: `${siteConfig.url}/services/${service.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
        name: "Services",
        item: `${siteConfig.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${siteConfig.url}/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      <HeroSection
        title={service.name}
        subtitle={service.heroSubtitle}
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        secondaryCtaText="Call (214) 427-8053"
        secondaryCtaHref="tel:+12144278053"
        imageSrc={service.heroImage}
        imageAlt={`${service.name} in McKinney, Texas`}
        height="medium"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              {service.intro.map((paragraph, i) => (
                <p key={i} className="text-mid leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="bg-surface border border-accent/20 rounded-lg p-6">
              <h3 className="font-display font-bold text-lg text-primary mb-4">
                Get a Free Quote
              </h3>
              <p className="text-mid text-sm mb-6">
                Ready to discuss your {service.name.toLowerCase()} project? Call
                us or request a quote online.
              </p>
              <a
                href="tel:+12144278053"
                className="flex items-center gap-2 bg-accent text-white px-5 py-3 rounded font-display font-bold text-center justify-center mb-3 hover:bg-accent-dark transition-colors"
              >
                <Phone className="h-4 w-4" />
                (214) 427-8053
              </a>
              <Link
                href="/contact"
                className="block text-center border-2 border-primary text-primary px-5 py-3 rounded font-display font-bold hover:bg-primary hover:text-white transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Choose Us" centered={false} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary text-sm leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Process" centered={false} />
          <div className="space-y-6">
            {service.processSteps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-display font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display font-bold text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-mid text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" centered={false} />
          <div className="space-y-3 max-w-3xl">
            {service.faq.map((item, i) => (
              <details
                key={i}
                className="bg-white border border-border rounded-lg group"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-display font-bold text-primary text-sm">
                  {item.question}
                  <ChevronDown className="h-5 w-5 text-mid shrink-0 transition-transform duration-200 chevron-icon" />
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-mid text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Related Services" centered={false} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="bg-surface rounded-lg p-6 hover:shadow-md transition-shadow border border-border"
                >
                  <h3 className="font-display font-bold text-primary mb-2">
                    {related.name}
                  </h3>
                  <p className="text-mid text-sm leading-relaxed">
                    {related.heroSubtitle}
                  </p>
                  <span className="text-accent font-display text-sm font-bold mt-3 inline-block">
                    Learn More &rarr;
                  </span>
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
