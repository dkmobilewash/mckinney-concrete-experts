import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin, CheckCircle } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact McKinney Concrete Experts | Free Estimates",
  description:
    "Get a free concrete estimate in McKinney, TX. Call (214) 427-8053 or fill out our form. We serve McKinney, Allen, Fairview, Celina, Anna, and surrounding areas.",
  openGraph: {
    title: "Contact McKinney Concrete Experts | Free Estimates",
    description:
      "Get a free concrete estimate in McKinney, TX. Call (214) 427-8053 or fill out our form. We serve McKinney, Allen, Fairview, Celina, Anna, and surrounding areas.",
    url: "https://mckinneyconcreteexperts.com/contact",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact McKinney Concrete Experts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact McKinney Concrete Experts | Free Estimates",
    description:
      "Get a free concrete estimate in McKinney, TX. Call (214) 427-8053 or fill out our form.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://mckinneyconcreteexperts.com/contact",
  },
};

const areasServed = [
  "Stonebridge Ranch",
  "Craig Ranch",
  "Trinity Falls",
  "Tucker Hill",
  "Allen",
  "Fairview",
  "Celina",
  "Anna",
];

export default function ContactPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}${siteConfig.ogImage}`,
    priceRange: siteConfig.priceRange,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      "McKinney",
      "Stonebridge Ranch",
      "Craig Ranch",
      "Trinity Falls",
      "Tucker Hill",
      "Allen",
      "Fairview",
      "Celina",
      "Anna",
    ],
    ...(siteConfig.sameAs.length > 0 && { sameAs: siteConfig.sameAs }),
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
        name: "Contact",
        item: `${siteConfig.url}/contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Breadcrumbs items={[{ label: "Contact" }]} />

      <HeroSection
        title="Get Your Free Estimate"
        subtitle="Tell us about your project and we'll get back to you within 1 business day."
        ctaText="Call (214) 427-8053"
        ctaHref="tel:+12144278053"
        imageSrc="/mckinney-photos-named/free-concrete-estimate-mckinney-tx.jpg"
        imageAlt="Contact McKinney Concrete Experts"
        height="short"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <h2 className="font-display font-bold text-2xl text-primary mb-6">
                Request a Quote
              </h2>
              <ContactForm />
            </div>

            <div className="md:col-span-2">
              <div className="bg-surface border border-border rounded-lg p-6 space-y-6">
                <div>
                  <a
                    href="tel:+12144278053"
                    className="flex items-center gap-3 group"
                  >
                    <Phone className="h-6 w-6 text-accent" />
                    <span className="font-display font-bold text-2xl text-primary group-hover:text-accent transition-colors">
                      (214) 427-8053
                    </span>
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <a
                    href="mailto:info@mckinneyconcreteexperts.com"
                    className="text-mid text-sm hover:text-accent transition-colors"
                  >
                    info@mckinneyconcreteexperts.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-mid text-sm">
                    Mon&ndash;Sat 7:00am&ndash;6:00pm
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-mid text-sm">
                    1575 Heritage Dr, McKinney, TX 75069
                  </span>
                </div>

                <div className="border-t border-border pt-4">
                  <h3 className="font-display font-bold text-sm text-primary mb-3">
                    Areas Served
                  </h3>
                  <ul className="space-y-2">
                    {areasServed.map((area) => (
                      <li
                        key={area}
                        className="flex items-center gap-2 text-mid text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-accent" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-mid text-sm">
                    All inquiries receive a response within 1 business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107085.47665474629!2d-96.7396557!3d33.1972465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c14a4ab2e1e03%3A0x15b4bfc13e1d5f0e!2sMcKinney%2C%20TX%2075069!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="McKinney, TX map"
            className="rounded-lg"
          />
        </div>
      </section>
    </>
  );
}
