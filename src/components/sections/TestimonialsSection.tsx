import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-lg p-6"
        >
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, j) => (
              <Star
                key={j}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <blockquote className="text-gray-300 text-sm leading-relaxed mb-4">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="font-display text-accent font-bold text-sm">
            {testimonial.name}, {testimonial.area}
          </div>
        </div>
      ))}
    </div>
  );
}
