import type { Metadata } from "next";
import { getLocationBySlug } from "@/data/locations";
import AreaPageContent from "@/components/sections/AreaPageContent";

const location = getLocationBySlug("allen")!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  openGraph: {
    title: location.metaTitle,
    description: location.metaDescription,
    url: `https://mckinneyconcreteexperts.com/service-areas/allen`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: location.metaTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: location.metaTitle,
    description: location.metaDescription,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: `https://mckinneyconcreteexperts.com/service-areas/allen`,
  },
};

export default function AllenPage() {
  return <AreaPageContent location={location} />;
}
