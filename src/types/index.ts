export type ServiceData = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroSubtitle: string;
  intro: string[];
  benefits: string[];
  processSteps: {
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  overviewExtra?: string[];
  scopeItems?: string[];
  specs?: { label: string; value: string }[];
  pricingFactors?: string[];
  relatedServices: string[];
};

export type LocationData = {
  name: string;
  slug: string;
  type: "community" | "city";
  city: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string[];
  nearbyAreas: string[];
  services: string[];
  testimonial: {
    quote: string;
    name: string;
    area: string;
  };
  notableFeatures: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  area: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};
