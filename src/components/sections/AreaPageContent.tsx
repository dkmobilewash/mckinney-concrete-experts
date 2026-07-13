import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import { LocationData } from "@/types";
import { resolvePath } from "@/lib/redirects";

type AreaPageContentProps = {
  location: LocationData;
};

const areaImages: Record<string, string> = {
  "stonebridge-ranch": "/mckinney-photos-named/concrete-contractor-stonebridge-ranch-mckinney.jpg",
  "craig-ranch": "/mckinney-photos-named/concrete-contractor-craig-ranch-mckinney.jpg",
  "trinity-falls": "/mckinney-photos-named/concrete-contractor-trinity-falls-mckinney.jpg",
  "tucker-hill": "/mckinney-photos-named/concrete-contractor-tucker-hill-mckinney.jpg",
  "allen": "/mckinney-photos-named/concrete-contractor-allen-tx.jpg",
  "fairview": "/mckinney-photos-named/concrete-contractor-fairview-tx.jpg",
  "celina": "/mckinney-photos-named/concrete-contractor-celina-tx.jpg",
  "anna": "/mckinney-photos-named/concrete-contractor-anna-tx.jpg",
};

const serviceSlugs: Record<string, string> = {
  Driveways: "driveways",
  Patios: "patios",
  "Pool Decks": "pool-decks",
  "Block Walls": "block-walls",
  "Foundations & Slabs": "foundations-slabs",
  "Commercial Concrete": "commercial-concrete",
};

export default function AreaPageContent({ location }: AreaPageContentProps) {
  const heroTitle =
    location.type === "community"
      ? `Concrete Contractors Serving ${location.name}, McKinney TX`
      : `Concrete Contractors in ${location.name}, TX`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.mckinneyconcreteexperts.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: "https://www.mckinneyconcreteexperts.com/service-areas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.name,
        item: `https://www.mckinneyconcreteexperts.com/service-areas/${location.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <HeroSection
        title={heroTitle}
        subtitle={location.heroSubtitle}
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        secondaryCtaText="Call (214) 833-9489"
        secondaryCtaHref="tel:+12148339489"
        imageSrc={areaImages[location.slug] || `/mckinney-photos-named/concrete-contractor-${location.slug}.jpg`}
        imageAlt={`Concrete services in ${location.name}`}
        height="short"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            {location.intro.map((paragraph, i) => (
              <p key={i} className="text-mid leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={`Concrete Services in ${location.name}`}
            subtitle={`Explore each service we provide in ${location.name} — tap any option for details specific to your area.`}
            centered={false}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {location.services.map((service) => (
              <Link
                key={service}
                href={
                  serviceSlugs[service]
                    ? resolvePath(
                        `/services/${serviceSlugs[service]}/${location.slug}`
                      )
                    : "/services"
                }
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border hover:shadow-md transition-shadow"
              >
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                <span className="font-display font-bold text-primary text-sm">
                  {service}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-surface border border-border rounded-lg p-6 max-w-2xl">
            <h2 className="font-display font-bold text-xl text-primary mb-4">
              About {location.name}
            </h2>
            <ul className="space-y-2">
              {location.notableFeatures.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-mid text-sm"
                >
                  <span className="text-accent mt-1">&#8226;</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="text-gray-300 leading-relaxed mb-4">
                &ldquo;{location.testimonial.quote}&rdquo;
              </blockquote>
              <div className="font-display text-accent font-bold text-sm">
                {location.testimonial.name}, {location.testimonial.area}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-mid leading-relaxed">
            We also serve{" "}
            {location.nearbyAreas.map((area, i) => (
              <span key={area}>
                <span className="font-bold text-primary">{area}</span>
                {i < location.nearbyAreas.length - 2
                  ? ", "
                  : i === location.nearbyAreas.length - 2
                    ? ", and "
                    : ""}
              </span>
            ))}
            , and all of McKinney and Collin County.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Request a Free Estimate" />
          <div className="max-w-2xl mx-auto">
            <ContactForm defaultArea={location.name} />
          </div>
        </div>
      </section>
    </>
  );
}
