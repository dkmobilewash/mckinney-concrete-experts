import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicePageContent from "@/components/sections/ServicePageContent";

const service = getServiceBySlug("block-walls")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: { images: ["/og-image.jpg"] },
  alternates: {
    canonical: "https://www.mckinneyconcreteexperts.com/services/block-walls",
  },
};

export default function BlockWallsPage() {
  return <ServicePageContent service={service} />;
}
