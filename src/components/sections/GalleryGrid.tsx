"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GalleryImage } from "@/types";

const categories = [
  "All",
  "Driveways",
  "Patios",
  "Pool Decks",
  "Block Walls",
  "Foundations",
  "Commercial",
];

const galleryImages: GalleryImage[] = [
  { src: "/mckinney-photos-named/stamped-concrete-driveway-stonebridge-ranch.jpg", alt: "Stamped concrete driveway in Stonebridge Ranch", category: "Driveways" },
  { src: "/mckinney-photos-named/stamped-patio-craig-ranch.jpg", alt: "Stamped patio with slate pattern in Craig Ranch", category: "Patios" },
  { src: "/mckinney-photos-named/cool-deck-pool-surround-mckinney.jpg", alt: "Cool deck pool surround in McKinney", category: "Pool Decks" },
  { src: "/mckinney-photos-named/cmu-retaining-wall-mckinney-tx.jpg", alt: "CMU retaining wall with decorative caps", category: "Block Walls" },
  { src: "/mckinney-photos-named/garage-slab-pour-mckinney-tx.jpg", alt: "Residential garage slab pour in McKinney", category: "Foundations" },
  { src: "/mckinney-photos-named/commercial-parking-lot-concrete-mckinney.jpg", alt: "Commercial parking lot concrete pour", category: "Commercial" },
  { src: "/mckinney-photos-named/exposed-aggregate-driveway-trinity-falls.jpg", alt: "Exposed aggregate driveway in Trinity Falls", category: "Driveways" },
  { src: "/mckinney-photos-named/multi-level-concrete-patio-mckinney.jpg", alt: "Multi-level stamped concrete patio", category: "Patios" },
  { src: "/mckinney-photos-named/pool-deck-resurfacing-mckinney-tx.jpg", alt: "Pool deck resurfacing project in McKinney", category: "Pool Decks" },
  { src: "/mckinney-photos-named/privacy-block-wall-mckinney.jpg", alt: "Privacy block wall with stucco finish", category: "Block Walls" },
  { src: "/mckinney-photos-named/workshop-slab-mckinney-tx.jpg", alt: "Workshop slab with thickened edge", category: "Foundations" },
  { src: "/mckinney-photos-named/ada-sidewalk-commercial-mckinney-tx.jpg", alt: "ADA-compliant commercial sidewalk in McKinney", category: "Commercial" },
  { src: "/mckinney-photos-named/colored-concrete-driveway-mckinney.jpg", alt: "Colored concrete driveway and walkway", category: "Driveways" },
  { src: "/mckinney-photos-named/acid-stained-patio-mckinney-tx.jpg", alt: "Acid-stained backyard patio in McKinney", category: "Patios" },
];

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={cn(
              "px-4 py-2 rounded font-display text-sm transition-colors",
              activeFilter === cat
                ? "bg-accent text-white"
                : "bg-surface border border-border text-mid hover:border-accent"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((image, i) => (
          <div key={i} className="group relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/60 transition-colors duration-300 flex items-center justify-center">
              <span className="font-display text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
