import type { Metadata } from "next";
import { getLocationBySlug } from "@/data/locations";
import AreaPageContent from "@/components/sections/AreaPageContent";

const location = getLocationBySlug("craig-ranch")!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  openGraph: { images: ["/og-image.jpg"] },
  alternates: {
    canonical:
      "https://mckinneyconcreteexperts.com/service-areas/craig-ranch",
  },
};

export default function CraigRanchPage() {
  return <AreaPageContent location={location} />;
}
