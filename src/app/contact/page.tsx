import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin, CheckCircle } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact McKinney Concrete Experts | Free Estimates",
  description:
    "Get a free concrete estimate in McKinney, TX. Call (214) 833-9489 or fill out our form. We serve McKinney, Allen, Fairview, Celina, Anna, and surrounding areas.",
  openGraph: { images: ["/og-image.jpg"] },
  alternates: {
    canonical: "https://www.mckinneyconcreteexperts.com/contact",
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
    name: "McKinney Concrete Experts",
    telephone: "+12148339489",
    address: {
      "@type": "PostalAddress",
      addressLocality: "McKinney",
      addressRegion: "TX",
      postalCode: "75069",
      addressCountry: "US",
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
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <HeroSection
        title="Get Your Free Estimate"
        subtitle="Tell us about your project and we'll get back to you within 1 business day."
        ctaText="Call (214) 833-9489"
        ctaHref="tel:+12148339489"
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
                    href="tel:+12148339489"
                    className="flex items-center gap-3 group"
                  >
                    <Phone className="h-6 w-6 text-accent" />
                    <span className="font-display font-bold text-2xl text-primary group-hover:text-accent transition-colors">
                      (214) 833-9489
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
                    Mon–Sat 7:00am–6:00pm
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-mid text-sm">McKinney, TX</span>
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
