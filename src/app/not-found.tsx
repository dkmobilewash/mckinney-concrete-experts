import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-xl px-4 text-center">
        <span className="font-display text-8xl font-bold text-accent">404</span>
        <h1 className="font-display text-3xl font-bold text-primary mt-4 mb-4">
          Page Not Found
        </h1>
        <p className="text-mid mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on solid ground.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-accent text-white px-6 py-3 rounded font-display font-bold hover:bg-accent-dark transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-primary text-primary px-6 py-3 rounded font-display font-bold hover:bg-primary hover:text-white transition-colors"
          >
            Contact Us
          </Link>
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="border-2 border-accent text-accent px-6 py-3 rounded font-display font-bold hover:bg-accent hover:text-white transition-colors"
          >
            Call {siteConfig.phone}
          </a>
        </div>
        <div className="mt-12">
          <h2 className="font-display font-bold text-lg text-primary mb-4">
            Popular Pages
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="text-accent hover:text-accent-dark transition-colors">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-accent hover:text-accent-dark transition-colors">
                Project Gallery
              </Link>
            </li>
            <li>
              <Link href="/services/driveways" className="text-accent hover:text-accent-dark transition-colors">
                Concrete Driveways
              </Link>
            </li>
            <li>
              <Link href="/services/patios" className="text-accent hover:text-accent-dark transition-colors">
                Concrete Patios
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
