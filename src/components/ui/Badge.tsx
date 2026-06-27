import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type BadgeProps = {
  icon: LucideIcon;
  text: string;
  className?: string;
};

export default function Badge({ icon: Icon, text, className }: BadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 font-display font-bold text-primary",
        className
      )}
    >
      <Icon className="h-5 w-5 text-accent" />
      <span>{text}</span>
    </div>
  );
}
