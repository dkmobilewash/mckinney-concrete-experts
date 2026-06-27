import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <span className={cn("amber-rule mb-4", centered && "mx-auto")} />
      <h2
        className={cn(
          "text-3xl md:text-4xl font-semibold font-display tracking-tight",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-gray-300" : "text-mid"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
