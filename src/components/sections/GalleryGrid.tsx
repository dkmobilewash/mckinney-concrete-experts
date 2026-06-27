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
  { src: "https://picsum.photos/seed/101/800/600", alt: "Stamped concrete driveway in Stonebridge Ranch", category: "Driveways" },
  { src: "https://picsum.photos/seed/102/800/600", alt: "Broom-finish patio with stamped border", category: "Patios" },
  { src: "https://picsum.photos/seed/103/800/600", alt: "Cool deck pool surround in Craig Ranch", category: "Pool Decks" },
  { src: "https://picsum.photos/seed/104/800/600", alt: "CMU retaining wall with decorative caps", category: "Block Walls" },
  { src: "https://picsum.photos/seed/105/800/600", alt: "Residential garage slab pour", category: "Foundations" },
  { src: "https://picsum.photos/seed/106/800/600", alt: "Commercial parking lot pour", category: "Commercial" },
  { src: "https://picsum.photos/seed/107/800/600", alt: "Exposed aggregate driveway in Trinity Falls", category: "Driveways" },
  { src: "https://picsum.photos/seed/108/800/600", alt: "Multi-level stamped patio", category: "Patios" },
  { src: "https://picsum.photos/seed/109/800/600", alt: "Pool deck resurfacing project", category: "Pool Decks" },
  { src: "https://picsum.photos/seed/110/800/600", alt: "Privacy block wall with stucco finish", category: "Block Walls" },
  { src: "https://picsum.photos/seed/111/800/600", alt: "Workshop slab with thickened edge", category: "Foundations" },
  { src: "https://picsum.photos/seed/112/800/600", alt: "ADA-compliant commercial sidewalk", category: "Commercial" },
  { src: "https://picsum.photos/seed/113/800/600", alt: "Colored concrete driveway and walkway", category: "Driveways" },
  { src: "https://picsum.photos/seed/114/800/600", alt: "Acid-stained backyard patio", category: "Patios" },
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
