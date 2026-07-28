import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicePageContent from "@/components/sections/ServicePageContent";

const service = getServiceBySlug("driveways")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: "https://mckinneyconcreteexperts.com/services/driveways",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: service.metaTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: service.metaTitle,
    description: service.metaDescription,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://mckinneyconcreteexperts.com/services/driveways",
  },
};

export default function DrivewaysPage() {
  return <ServicePageContent service={service} />;
}
