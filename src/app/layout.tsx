import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "McKinney Concrete Experts | Driveways, Patios & More",
  description:
    "McKinney's trusted concrete contractors. Driveways, patios, pool decks, foundations, and commercial work across McKinney and Collin County. Free estimates.",
  openGraph: {
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    title: "McKinney Concrete Experts | Driveways, Patios & More",
    description:
      "McKinney's trusted concrete contractors. Driveways, patios, pool decks, foundations, and commercial work across McKinney and Collin County. Free estimates.",
    url: siteConfig.url,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "McKinney Concrete Experts | Driveways, Patios & More",
    description:
      "McKinney's trusted concrete contractors. Driveways, patios, pool decks, foundations, and commercial work across McKinney and Collin County. Free estimates.",
    images: [siteConfig.ogImage],
  },
  other: {
    "theme-color": "#B45309",
  },
  manifest: "/site.webmanifest",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.ogImage}`,
  telephone: siteConfig.phoneE164,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: siteConfig.address.country,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneE164,
    contactType: "customer service",
    availableLanguage: "English",
  },
  ...(siteConfig.sameAs.length > 0 && { sameAs: siteConfig.sameAs }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body text-primary bg-white antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
