import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm">
          <li>
            <Link
              href="/"
              className="text-mid hover:text-accent transition-colors"
            >
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3 text-mid" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-mid hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
