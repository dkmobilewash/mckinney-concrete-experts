@AGENTS.md

# McKinney Concrete Experts — Project Memory

## What this is
Marketing website for **McKinney Concrete Experts**, a concrete contractor serving
McKinney, TX and surrounding Collin County communities. Goal: rank in local search
and convert visitors into free-estimate phone calls / form submissions.

Note: this Next.js project is a **rebuild**. The domain
`mckinneyconcreteexperts.com` currently serves a separate WordPress site — this repo
has not been deployed to that domain yet.

## Tech stack
- **Next.js 16.2.9** (App Router) with **Turbopack** dev server
- **React 19.2.4** + **TypeScript 5**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **react-hook-form** + **zod** for the contact form
- **lucide-react** for icons
- **next-sitemap** generates `sitemap.xml` / `robots.txt` on build (`postbuild`)
- Fonts: Oswald (display) + Inter (body) via `next/font`
- Deploys to **Vercel** (`vercel.json`: framework nextjs, build `npm run build`)

> ⚠️ Next.js 16 has breaking changes vs. older versions. Check
> `node_modules/next/dist/docs/` before writing framework code (see AGENTS.md).

## Commands
- `npm install` — install dependencies (first time)
- `npm run dev` — start dev server at http://localhost:3000
- `npm run build` — production build (also runs next-sitemap)
- `npm run lint` — ESLint

## Structure (`src/`)
- `app/` — App Router pages
  - `page.tsx` (home), `contact/`, `gallery/`, `privacy-policy/`, `terms-of-service/`
  - `services/` — index + 6 service pages: driveways, patios, pool-decks,
    block-walls, foundations-slabs, commercial-concrete
  - `service-areas/` — 8 location pages: stonebridge-ranch, craig-ranch,
    trinity-falls, tucker-hill, allen, fairview, celina, anna
  - `api/contact/route.ts` — contact form submission endpoint
  - `layout.tsx` — root layout, site-wide SEO metadata, Header + Footer
  - `globals.css` — Tailwind + design tokens
- `components/`
  - `layout/` — Header, Footer, MobileMenu
  - `sections/` — HeroSection, ServicesGrid, ServicePageContent, AreaPageContent,
    GalleryGrid, TestimonialsSection, WhyChooseUs, CTABanner
  - `forms/ContactForm.tsx`
  - `ui/` — Button, Badge, SectionHeading
- `data/` — **content lives here**: `services.ts`, `locations.ts`, `testimonials.ts`.
  Edit these to change service/area copy, benefits, process steps, testimonials.
- `types/index.ts` — shared TS types (ServiceData, LocationData, etc.)
- `lib/utils.ts` — helpers
- `public/mckinney-photos-named/` — SEO-named project photos used across the site

## Editing conventions
- To change service or service-area page **content**, edit the objects in
  `src/data/*.ts` rather than the page components — pages render from this data.
- Service/area pages are generated from slugs; keep `data`, `next-sitemap.config.js`,
  and any nav links in sync when adding or removing a page.
- Images are referenced by descriptive, SEO-friendly filenames in
  `public/mckinney-photos-named/`.

## Contact / business details
- Phone shown on live WordPress site: (214) 833-9489
- Metadata base URL: https://mckinneyconcreteexperts.com
