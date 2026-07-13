import Link from "next/link";
import { CheckCircle, ChevronDown, Phone, MapPin, Wrench } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { ServiceData, LocationData } from "@/types";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { uniqueCombos, serviceBlurbs } from "@/data/serviceCityContent";
import { resolvePath } from "@/lib/redirects";

const SITE_URL = "https://www.mckinneyconcreteexperts.com";

type Props = {
  service: ServiceData;
  location: LocationData;
};

export default function ServiceCityContent({ service, location }: Props) {
  const key = `${service.slug}:${location.slug}`;
  const unique = uniqueCombos[key];
  const blurb = serviceBlurbs[service.slug] ?? "quality concrete work";

  const intro: string[] = unique?.intro ?? [
    `${service.name} in ${location.name}, TX, done right the first time. McKinney Concrete Experts installs ${service.name.toLowerCase()} for homeowners and businesses across ${location.name} and ${location.county} County, engineered for North Texas clay soil and built to the standard ${location.name} expects.`,
    `We bring ${blurb} to ${location.name} and nearby ${location.nearbyAreas[0]} and ${location.nearbyAreas[1]}, backed by free estimates and honest work. Call (214) 833-9489 to talk through your ${location.name} project.`,
  ];

  const localNote = unique
    ? null
    : `${location.name} sits in ${location.county} County, where expansive clay soil and wide temperature swings make proper base prep, reinforcement, and drainage essential on every ${service.name.toLowerCase()} project.`;

  const faqs =
    unique?.faqs ?? [
      {
        question: `Do you serve all of ${location.name}?`,
        answer: `Yes — we cover ${location.name} and nearby ${location.nearbyAreas.join(
          ", "
        )}, plus all of McKinney and Collin County. Call (214) 833-9489 for a free estimate.`,
      },
      {
        question: `How do I get a quote for ${service.name.toLowerCase()} in ${location.name}?`,
        answer: `Call (214) 833-9489 or request a free estimate online. We'll visit your ${location.name} property, evaluate the site, and provide a detailed, no-obligation quote.`,
      },
    ];

  // Same service, nearby cities that have their own combo pages.
  const nearbyCityCombos = location.nearbyAreas
    .map((name) => locations.find((l) => l.name === name))
    .filter((l): l is LocationData => Boolean(l))
    .map((l) => ({
      name: l.name,
      href: resolvePath(`/services/${service.slug}/${l.slug}`),
    }));

  // Other services in the same city.
  const otherCityServices = services
    .filter((s) => s.slug !== service.slug)
    .map((s) => ({
      name: s.name,
      href: resolvePath(`/services/${s.slug}/${location.slug}`),
    }));

  const canonical = `${SITE_URL}/services/${service.slug}/${location.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${location.name}, TX`,
    serviceType: `${service.name} Concrete`,
    description: `${service.name} in ${location.name}, TX by McKinney Concrete Experts.`,
    url: canonical,
    areaServed: {
      "@type": location.type === "city" ? "City" : "Place",
      name: `${location.name}, TX`,
    },
    provider: {
      "@type": "LocalBusiness",
      name: "McKinney Concrete Experts",
      telephone: "+12148339489",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${SITE_URL}/services/${service.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: location.name,
        item: canonical,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

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

      <HeroSection
        title={`${service.name} in ${location.name}, TX`}
        subtitle={`${service.heroSubtitle} Serving ${location.name} and all of ${location.county} County.`}
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        secondaryCtaText="Call (214) 833-9489"
        secondaryCtaHref="tel:+12148339489"
        imageSrc={service.heroImage}
        imageAlt={`${service.name} in ${location.name}, Texas`}
        height="short"
      />

      {/* Breadcrumb nav */}
      <section className="bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-xs text-mid flex flex-wrap gap-1" aria-label="Breadcrumb">
            <Link href="/services" className="hover:text-accent">Services</Link>
            <span>/</span>
            <Link href={`/services/${service.slug}`} className="hover:text-accent">
              {service.name}
            </Link>
            <span>/</span>
            <Link href={`/service-areas/${location.slug}`} className="hover:text-accent">
              {location.name}
            </Link>
          </nav>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              {intro.map((p, i) => (
                <p key={i} className="text-mid leading-relaxed">
                  {p}
                </p>
              ))}
              {localNote && (
                <p className="text-mid leading-relaxed">{localNote}</p>
              )}
              <p className="text-mid leading-relaxed">
                Learn more about our{" "}
                <Link
                  href={`/services/${service.slug}`}
                  className="text-accent font-semibold hover:underline"
                >
                  {service.name.toLowerCase()} service
                </Link>{" "}
                or see everything we offer in{" "}
                <Link
                  href={`/service-areas/${location.slug}`}
                  className="text-accent font-semibold hover:underline"
                >
                  {location.name}
                </Link>
                .
              </p>
            </div>
            <div className="bg-surface border border-accent/20 rounded-lg p-6 self-start">
              <h2 className="font-display font-bold text-lg text-primary mb-4">
                Free {location.name} Estimate
              </h2>
              <a
                href="tel:+12148339489"
                className="flex items-center gap-2 bg-accent text-white px-5 py-3 rounded font-display font-bold text-center justify-center mb-3 hover:bg-accent-dark transition-colors"
              >
                <Phone className="h-4 w-4" />
                (214) 833-9489
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

      {service.scopeItems && service.scopeItems.length > 0 && (
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title={`Our ${service.name} Work in ${location.name}`}
              centered={false}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.scopeItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-primary text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" centered={false} />
          <div className="space-y-3 max-w-3xl">
            {faqs.map((item, i) => (
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

      {/* Sibling links: same service nearby, other services same city */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          {nearbyCityCombos.length > 0 && (
            <div>
              <h2 className="flex items-center gap-2 font-display font-bold text-lg text-primary mb-4">
                <MapPin className="h-5 w-5 text-accent" />
                {service.name} in Nearby Cities
              </h2>
              <ul className="space-y-2">
                {nearbyCityCombos.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="text-accent font-semibold hover:underline"
                    >
                      {service.name} in {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h2 className="flex items-center gap-2 font-display font-bold text-lg text-primary mb-4">
              <Wrench className="h-5 w-5 text-accent" />
              Other Services in {location.name}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {otherCityServices.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-accent font-semibold hover:underline"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
