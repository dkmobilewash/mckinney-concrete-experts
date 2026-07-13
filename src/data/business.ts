// Central business profile (NAP + config). Fields left as empty strings are
// intentionally hidden by the UI until a real value is supplied, so nothing
// ever renders as a blank or placeholder on the live site.

export interface OpeningHours {
  days: string[];
  opens: string; // 24h "HH:MM"
  closes: string;
}

export const business = {
  name: "McKinney Concrete Experts",
  tagline: "McKinney's Trusted Concrete Contractors",
  phoneDisplay: "(214) 833-9489",
  phoneHref: "tel:+12148339489",
  telephoneE164: "+12148339489",
  email: "info@mckinneyconcreteexperts.com",
  url: "https://www.mckinneyconcreteexperts.com",
  image: "https://www.mckinneyconcreteexperts.com/og-image.jpg",
  foundingYear: 2008,
  priceRange: "$$",

  // Leave empty to hide the license display in the footer/about.
  // Example once known: "TX RMLC #123456".
  license: "",

  address: {
    // streetAddress intentionally omitted until confirmed — do not render blank.
    locality: "McKinney",
    region: "TX",
    postalCode: "75069",
    country: "US",
  },

  // Approx. geo center of McKinney, TX.
  geo: { latitude: 33.1976, longitude: -96.6153 },

  hoursDisplay: "Mon–Sat 7:00am–6:00pm",
  openingHours: [
    {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "18:00",
    },
  ] as OpeningHours[],

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
    "Collin County",
  ],

  // Leave empty to hide the corresponding social icon (no dead links).
  social: {
    facebook: "",
    instagram: "",
    google: "",
  },
};

// Complete LocalBusiness structured data, built from the profile above.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${business.url}/#business`,
    name: business.name,
    description:
      "Concrete contractors in McKinney, TX providing driveways, patios, pool decks, block walls, foundations, and commercial concrete across Collin County.",
    url: business.url,
    telephone: business.telephoneE164,
    email: business.email,
    image: business.image,
    logo: business.image,
    priceRange: business.priceRange,
    foundingDate: String(business.foundingYear),
    address: {
      "@type": "PostalAddress",
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: business.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    openingHoursSpecification: business.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    ...(business.license ? { hasCredential: business.license } : {}),
    ...(Object.values(business.social).some(Boolean)
      ? { sameAs: Object.values(business.social).filter(Boolean) }
      : {}),
  };
}
