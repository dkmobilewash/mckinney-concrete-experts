import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | McKinney Concrete Experts",
  description:
    "Privacy policy for McKinney Concrete Experts. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | McKinney Concrete Experts",
    description:
      "Privacy policy for McKinney Concrete Experts. Learn how we collect, use, and protect your personal information.",
    url: "https://mckinneyconcreteexperts.com/privacy-policy",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "McKinney Concrete Experts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | McKinney Concrete Experts",
    description:
      "Privacy policy for McKinney Concrete Experts.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://mckinneyconcreteexperts.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold font-display tracking-tight text-primary mb-8">
          Privacy Policy
        </h1>
        <p className="text-mid text-sm mb-8">
          Effective Date: January 1, 2024
        </p>

        <div className="prose prose-headings:font-display prose-headings:text-primary prose-p:text-mid prose-li:text-mid max-w-none space-y-6">
          <p>
            McKinney Concrete Experts (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your
            privacy and is committed to protecting the personal information you
            share with us. This Privacy Policy explains how we collect, use,
            and safeguard information when you visit our website at
            mckinneyconcreteexperts.com or submit an inquiry through our
            contact form.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Information We Collect
          </h2>
          <p>
            We collect personal information only when you voluntarily submit it
            through our contact form. This includes your name, phone number, and
            email address, as well as any project details you choose to share in
            the message field. We do not collect personal information
            automatically through tracking technologies beyond what is described
            below.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p>
            We use the information you provide solely to respond to your service
            inquiry, provide estimates, and communicate with you about potential
            concrete projects. Your information is never sold, rented, or shared
            with third parties for marketing purposes. We may share your
            information with subcontractors or partners only when necessary to
            fulfill a service you have requested, and only with your knowledge.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Cookies and Tracking
          </h2>
          <p>
            Our website does not use advertising or third-party tracking
            cookies. We use only standard functional session cookies necessary
            for the website to operate correctly. We may optionally use Google
            Analytics with anonymized IP addresses to understand general website
            traffic patterns. No personally identifiable information is
            collected through analytics.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Data Retention
          </h2>
          <p>
            Contact form submissions and inquiry data are retained for a maximum
            of 12 months from the date of submission, after which they are
            permanently deleted from our systems. If a service agreement is
            established, related records may be retained longer as required for
            business and legal purposes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion
            of any personal information we hold about you. To make such a
            request, please contact us at{" "}
            <a
              href="mailto:info@mckinneyconcreteexperts.com"
              className="text-accent hover:text-accent-dark"
            >
              info@mckinneyconcreteexperts.com
            </a>
            . We will respond to your request within 30 days.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those websites.
            We encourage you to review the privacy policies of any third-party
            sites you visit.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Changes to This Policy
          </h2>
          <p>
            We reserve the right to update this Privacy Policy at any time.
            Changes will be posted on this page with an updated effective date.
            Your continued use of the website after any changes constitutes
            acceptance of the revised policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
          <p>
            This Privacy Policy is governed by and construed in accordance with
            the laws of the State of Texas, without regard to its conflict of
            law provisions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please
            contact us at{" "}
            <a
              href="mailto:info@mckinneyconcreteexperts.com"
              className="text-accent hover:text-accent-dark"
            >
              info@mckinneyconcreteexperts.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
