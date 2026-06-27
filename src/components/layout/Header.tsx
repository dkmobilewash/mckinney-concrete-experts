"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { serviceNavItems } from "@/data/services";
import { locationNavItems } from "@/data/locations";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary",
        scrolled && "bg-primary/95 backdrop-blur shadow-md"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-display font-bold text-xl text-white">
              McKinney
            </span>
            <span className="font-display text-sm text-accent">
              Concrete Experts
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-white font-display text-sm hover:text-accent transition-colors">
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-border rounded-lg shadow-xl py-2">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-primary font-display text-sm hover:text-accent hover:bg-surface transition-colors"
                  >
                    All Services
                  </Link>
                  <div className="border-t border-border my-1" />
                  {serviceNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-primary font-display text-sm hover:text-accent hover:bg-surface transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-white font-display text-sm hover:text-accent transition-colors">
                Service Areas
                <ChevronDown className="h-4 w-4" />
              </button>
              {areasOpen && (
                <div className="absolute top-full left-0 w-80 bg-white border border-border rounded-lg shadow-xl py-2">
                  <div className="grid grid-cols-2 gap-0">
                    {locationNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-primary font-display text-sm hover:text-accent hover:bg-surface transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              className="px-4 py-2 text-white font-display text-sm hover:text-accent transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-white font-display text-sm hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+12144278053"
              className="hidden md:flex items-center gap-2 bg-accent text-white px-5 py-2 rounded font-display font-bold text-sm hover:bg-accent-dark transition-colors"
            >
              <Phone className="h-4 w-4" />
              (214) 427-8053
            </a>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
