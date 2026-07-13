import type { Metadata } from "next";
import { getLocationBySlug } from "@/data/locations";
import AreaPageContent from "@/components/sections/AreaPageContent";

const location = getLocationBySlug("tucker-hill")!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  openGraph: { images: ["/og-image.jpg"] },
  alternates: {
    canonical:
      "https://www.mckinneyconcreteexperts.com/service-areas/tucker-hill",
  },
};

export default function TuckerHillPage() {
  return <AreaPageContent location={location} />;
}
