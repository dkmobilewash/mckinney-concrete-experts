import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicePageContent from "@/components/sections/ServicePageContent";

const service = getServiceBySlug("foundations-slabs")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: { images: ["/og-image.jpg"] },
  alternates: {
    canonical: "https://mckinneyconcreteexperts.com/services/foundations-slabs",
  },
};

export default function FoundationsSlabsPage() {
  return <ServicePageContent service={service} />;
}
