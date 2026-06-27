import Image from "next/image";
import Button from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  imageSrc: string;
  imageAlt: string;
  height?: "full" | "medium" | "short";
};

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  imageSrc,
  imageAlt,
  height = "medium",
}: HeroSectionProps) {
  const heightClasses = {
    full: "min-h-screen",
    medium: "min-h-[520px]",
    short: "min-h-[320px]",
  };

  return (
    <section
      className={cn(
        "relative flex items-center overflow-hidden",
        heightClasses[height]
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/65" />
      <div className="absolute inset-0 concrete-texture" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className={cn("max-w-2xl", height === "short" ? "text-center md:text-left" : "text-center md:text-left")}>
          <span className="amber-rule mb-6 mx-auto md:mx-0" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-display text-white">
            {title}
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed font-body">
            {subtitle}
          </p>
          {(ctaText || secondaryCtaText) && (
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {ctaText && (
                <Button href={ctaHref} variant="primary">
                  {ctaText}
                </Button>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <Button href={secondaryCtaHref} variant="outline-white">
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      {height === "full" && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="h-8 w-8 text-white animate-bounce" />
        </div>
      )}
    </section>
  );
}
