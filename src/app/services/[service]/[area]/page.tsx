import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ChevronDown, Phone, MapPin } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { locations, getLocationBySlug } from "@/data/locations";
import { siteConfig } from "@/lib/siteConfig";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export function generateStaticParams() {
  const params: { service: string; area: string }[] = [];
  for (const service of services) {
    for (const location of locations) {
      params.push({ service: service.slug, area: location.slug });
    }
  }
  return params;
}

export const dynamicParams = false;

type Props = {
  params: Promise<{ service: string; area: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug, area: areaSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const location = getLocationBySlug(areaSlug);
  if (!service || !location) return {};

  const title = `${service.name} in ${location.name}, ${location.city === location.name ? "TX" : `${location.city} TX`} | ${siteConfig.name}`;
  const description = `Professional ${service.name.toLowerCase()} services in ${location.name}, ${location.city}. ${service.heroSubtitle} Serving ${location.name} and nearby areas. Free estimates — call ${siteConfig.phone}.`;
  const url = `${siteConfig.url}/services/${service.slug}/${location.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ServiceAreaPage({ params }: Props) {
  const { service: serviceSlug, area: areaSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const location = getLocationBySlug(areaSlug);
  if (!service || !location) notFound();

  const areaLabel =
    location.city === location.name
      ? `${location.name}, TX`
      : `${location.name}, ${location.city}`;
  const pageUrl = `${siteConfig.url}/services/${service.slug}/${location.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${areaLabel}`,
    description: `Professional ${service.name.toLowerCase()} services in ${location.name}. ${service.heroSubtitle}`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phoneE164,
      url: siteConfig.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
      },
    },
    areaServed: {
      "@type": location.type === "city" ? "City" : "Place",
      name: location.name,
      containedInPlace: {
        "@type": "City",
        name: location.city,
        containedInPlace: {
          "@type": "State",
          name: "Texas",
        },
      },
    },
    url: pageUrl,
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
      {
        "@type": "ListItem",
        position: 4,
        name: location.name,
        item: pageUrl,
      },
    ],
  };

  const faqItems = [
    {
      question: `How much do ${service.name.toLowerCase()} cost in ${location.name}?`,
      answer: `${service.name} pricing in ${location.name} varies based on size, finish, and site conditions. We provide free on-site estimates — call ${siteConfig.phone} for a detailed quote specific to your ${location.name} property.`,
    },
    {
      question: `Do you need a permit for ${service.name.toLowerCase()} in ${location.name}?`,
      answer: `Permit requirements depend on the scope of work. ${location.city === "McKinney" ? "The City of McKinney" : `${location.city}`} has specific building codes that may apply. We handle all necessary permit applications and inspections as part of our service.`,
    },
    ...service.faq.slice(0, 2),
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const nearbyServiceLinks = locations
    .filter((l) => l.slug !== location.slug)
    .slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.name, href: `/services/${service.slug}` },
          { label: location.name },
        ]}
      />

      <HeroSection
        title={`${service.name} in ${location.name}`}
        subtitle={`${service.heroSubtitle} Serving ${location.name} and surrounding ${location.county} County areas.`}
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        secondaryCtaText={`Call ${siteConfig.phone}`}
        secondaryCtaHref={`tel:${siteConfig.phoneE164}`}
        imageSrc={service.heroImage}
        imageAlt={`${service.name} in ${location.name}, ${location.city} TX`}
        height="medium"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <h2 className="font-display font-bold text-2xl text-primary">
                {service.name} Services in {location.name}
              </h2>
              <p className="text-mid leading-relaxed">
                {service.intro[0]}
              </p>
              <p className="text-mid leading-relaxed">
                {location.intro[0]}
              </p>
              {service.intro[1] && (
                <p className="text-mid leading-relaxed">
                  {service.intro[1]}
                </p>
              )}
            </div>
            <div className="bg-surface border border-accent/20 rounded-lg p-6">
              <h3 className="font-display font-bold text-lg text-primary mb-4">
                Get a Free Quote in {location.name}
              </h3>
              <p className="text-mid text-sm mb-4">
                Ready to discuss your {service.name.toLowerCase()} project in{" "}
                {location.name}? Call us or request a quote online.
              </p>
              <div className="flex items-start gap-3 mb-4 text-sm text-mid">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  Serving {location.name}
                  {location.nearbyAreas.length > 0 &&
                    `, ${location.nearbyAreas.slice(0, 2).join(", ")}`}
                  , and surrounding areas
                </span>
              </div>
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className="flex items-center gap-2 bg-accent text-white px-5 py-3 rounded font-display font-bold text-center justify-center mb-3 hover:bg-accent-dark transition-colors"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
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
          <SectionHeading
            title={`Why Choose Us for ${service.name} in ${location.name}`}
            centered={false}
          />
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

      {location.notableFeatures.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title={`About ${location.name}`}
              centered={false}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-mid leading-relaxed">{location.intro[1]}</p>
              </div>
              <div>
                <h3 className="font-display font-bold text-primary mb-3">
                  {location.name} Highlights
                </h3>
                <ul className="space-y-2">
                  {location.notableFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-mid text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-16 border-t border-border">
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

      {location.testimonial && (
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <blockquote className="border-l-4 border-accent pl-6">
                <p className="text-primary text-lg leading-relaxed italic mb-4">
                  &ldquo;{location.testimonial.quote}&rdquo;
                </p>
                <footer className="text-mid font-display">
                  — {location.testimonial.name}, {location.testimonial.area}
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" centered={false} />
          <div className="space-y-3 max-w-3xl">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="bg-surface border border-border rounded-lg group"
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

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={`${service.name} in Other Areas`}
            centered={false}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {nearbyServiceLinks.map((loc) => (
              <Link
                key={loc.slug}
                href={`/services/${service.slug}/${loc.slug}`}
                className="bg-white rounded-lg p-5 hover:shadow-md transition-shadow border border-border"
              >
                <h3 className="font-display font-bold text-primary mb-1">
                  {loc.name}
                </h3>
                <span className="text-accent font-display text-sm font-bold">
                  {service.name} &rarr;
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
