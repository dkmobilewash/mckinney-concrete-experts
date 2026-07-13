import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicePageContent from "@/components/sections/ServicePageContent";

const service = getServiceBySlug("pool-decks")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: { images: ["/og-image.jpg"] },
  alternates: {
    canonical: "https://www.mckinneyconcreteexperts.com/services/pool-decks",
  },
};

export default function PoolDecksPage() {
  return <ServicePageContent service={service} />;
}
