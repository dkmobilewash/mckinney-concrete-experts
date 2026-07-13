export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string; // ISO (YYYY-MM-DD)
  dateDisplay: string;
  readTime: string;
  category: string;
  heroImage: string;
  heroAlt: string;
}

// Frontmatter for each post. Body content lives in the page files under
// src/app/blog/<slug>/page.tsx so it can include rich internal links.
export const blogPosts: BlogPostMeta[] = [
  {
    slug: "how-to-choose-a-concrete-contractor-in-mckinney",
    title: "How to Choose a Concrete Contractor in McKinney",
    description:
      "A practical guide to hiring the right concrete contractor in McKinney, TX — what to check, what to ask, and the red flags to avoid before you sign.",
    excerpt:
      "Not sure how to vet a concrete contractor? Here's exactly what to look for, what to ask, and the warning signs that should make you keep looking.",
    date: "2026-05-20",
    dateDisplay: "May 20, 2026",
    readTime: "7 min read",
    category: "Hiring Guide",
    heroImage: "/mckinney-photos-named/concrete-services-mckinney-tx.jpg",
    heroAlt: "Concrete contractor reviewing a project plan in McKinney, Texas",
  },
  {
    slug: "concrete-vs-asphalt-driveways-mckinney",
    title: "Concrete vs. Asphalt Driveways in McKinney",
    description:
      "Concrete or asphalt for your McKinney driveway? Compare cost, lifespan, maintenance, and how each holds up in North Texas clay soil and heat.",
    excerpt:
      "The two most common driveway materials, compared head-to-head for McKinney's climate, soil, and long-term cost.",
    date: "2026-06-18",
    dateDisplay: "June 18, 2026",
    readTime: "8 min read",
    category: "Driveways",
    heroImage: "/mckinney-photos-named/concrete-driveway-mckinney-tx.jpg",
    heroAlt: "New concrete driveway in McKinney, Texas",
  },
  {
    slug: "concrete-driveway-cost-mckinney",
    title: "Concrete Driveway Cost in McKinney (2026)",
    description:
      "What drives the cost of a concrete driveway in McKinney, TX in 2026 — thickness, finish, size, and site factors — plus how to get an accurate quote.",
    excerpt:
      "A clear breakdown of what affects concrete driveway pricing in McKinney, so you know what your estimate is really based on.",
    date: "2026-07-02",
    dateDisplay: "July 2, 2026",
    readTime: "7 min read",
    category: "Cost Guide",
    heroImage: "/mckinney-photos-named/colored-concrete-driveway-mckinney.jpg",
    heroAlt: "Finished concrete driveway with decorative coloring in McKinney",
  },
];

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
