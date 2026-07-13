// Central redirect map.
// Track any page that has been merged/retired here so that internal links,
// sitemap generation, and page components can all respect the redirect and
// point to the canonical target instead of the retired URL.
//
// Format: { from: "/old-path", to: "/canonical-path", permanent: true }
// `permanent: true` => 301/308 (SEO equity passes). Use false for temporary.

export interface RedirectRule {
  from: string;
  to: string;
  permanent: boolean;
}

// Keyword-cannibalization audit (Phase 1): no duplicate-intent pages found.
// Every service and city page targets a distinct primary keyword, so no
// pages needed to be redirected. Add rules here if that changes.
export const redirects: RedirectRule[] = [];

const redirectFrom = new Map(redirects.map((r) => [r.from, r]));

/** Resolve a path to its canonical target, following the redirect map. */
export function resolvePath(path: string): string {
  const rule = redirectFrom.get(path);
  return rule ? rule.to : path;
}

/** True if this path has been redirected (should be excluded from sitemaps). */
export function isRedirected(path: string): boolean {
  return redirectFrom.has(path);
}
