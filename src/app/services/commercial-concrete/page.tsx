import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicePageContent from "@/components/sections/ServicePageContent";

const service = getServiceBySlug("commercial-concrete")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: { images: ["/og-image.jpg"] },
  alternates: {
    canonical:
      "https://mckinneyconcreteexperts.com/services/commercial-concrete",
  },
};

export default function CommercialConcretePage() {
  return <ServicePageContent service={service} />;
}
