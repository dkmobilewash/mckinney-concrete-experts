import type { Metadata } from "next";
import { getLocationBySlug } from "@/data/locations";
import AreaPageContent from "@/components/sections/AreaPageContent";

const location = getLocationBySlug("fairview")!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  openGraph: { images: ["/og-image.jpg"] },
  alternates: {
    canonical: "https://www.mckinneyconcreteexperts.com/service-areas/fairview",
  },
};

export default function FairviewPage() {
  return <AreaPageContent location={location} />;
}
