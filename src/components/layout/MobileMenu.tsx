"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { serviceNavItems } from "@/data/services";
import { locationNavItems } from "@/data/locations";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [areasExpanded, setAreasExpanded] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    setServicesExpanded(false);
    setAreasExpanded(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, close]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="p-2 text-white"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-primary text-white">
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-5">
              <a
                href="tel:+12144278053"
                className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded font-display font-bold text-lg"
              >
                <Phone className="h-5 w-5" />
                (214) 427-8053
              </a>
              <button
                onClick={close}
                className="p-2 text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col px-4 py-4">
              <div>
                <button
                  onClick={() => setServicesExpanded(!servicesExpanded)}
                  className="flex items-center justify-between w-full py-3 text-lg font-display font-bold"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      servicesExpanded && "rotate-180"
                    )}
                  />
                </button>
                {servicesExpanded && (
                  <div className="pl-4 pb-2 flex flex-col gap-1">
                    <Link
                      href="/services"
                      onClick={close}
                      className="py-2 text-accent font-display"
                    >
                      All Services
                    </Link>
                    {serviceNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={close}
                        className="py-2 text-gray-300 font-display hover:text-accent"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setAreasExpanded(!areasExpanded)}
                  className="flex items-center justify-between w-full py-3 text-lg font-display font-bold"
                >
                  Service Areas
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      areasExpanded && "rotate-180"
                    )}
                  />
                </button>
                {areasExpanded && (
                  <div className="pl-4 pb-2 flex flex-col gap-1">
                    {locationNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={close}
                        className="py-2 text-gray-300 font-display hover:text-accent"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/gallery"
                onClick={close}
                className="py-3 text-lg font-display font-bold"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                onClick={close}
                className="py-3 text-lg font-display font-bold"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
