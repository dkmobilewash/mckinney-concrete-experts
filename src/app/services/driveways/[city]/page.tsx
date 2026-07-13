import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { locations, getLocationBySlug } from "@/data/locations";
import ServiceCityContent from "@/components/sections/ServiceCityContent";

const SERVICE_SLUG = "driveways";
const service = getServiceBySlug(SERVICE_SLUG)!;
const SITE_URL = "https://www.mckinneyconcreteexperts.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) return {};
  return {
    title: `${service.name} in ${location.name}, TX | McKinney Concrete Experts`,
    description: `${service.name} in ${location.name}, TX. Free estimates from McKinney Concrete Experts — call (214) 833-9489.`,
    openGraph: { images: ["/og-image.jpg"] },
    alternates: {
      canonical: `${SITE_URL}/services/${SERVICE_SLUG}/${location.slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) notFound();
  return <ServiceCityContent service={service} location={location} />;
}
