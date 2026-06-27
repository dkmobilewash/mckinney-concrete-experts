import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-accent overflow-hidden"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={service.heroImage}
              alt={service.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold font-display text-primary mb-2">
              {service.name}
            </h3>
            <p className="text-mid text-sm leading-relaxed mb-4">
              {service.intro[0].slice(0, 150)}...
            </p>
            <span className="text-accent hover:text-accent-dark font-display text-sm font-bold">
              Learn More &rarr;
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
