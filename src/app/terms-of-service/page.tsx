import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | McKinney Concrete Experts",
  description:
    "Terms of service for the McKinney Concrete Experts website. Read our terms and conditions.",
  alternates: {
    canonical: "https://mckinneyconcreteexperts.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold font-display tracking-tight text-primary mb-8">
          Terms of Service
        </h1>
        <p className="text-mid text-sm mb-8">
          Effective Date: January 1, 2024
        </p>

        <div className="prose prose-headings:font-display prose-headings:text-primary prose-p:text-mid prose-li:text-mid max-w-none space-y-6">
          <p>
            Welcome to mckinneyconcreteexperts.com (the &ldquo;Website&rdquo;), operated by
            McKinney Concrete Experts (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing
            or using this Website, you agree to be bound by the following Terms
            of Service. If you do not agree with these terms, please do not use
            the Website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Website Use</h2>
          <p>
            This Website is provided for informational purposes only. The
            content on this Website, including text, images, and other
            materials, is intended to provide general information about our
            concrete services. While we strive to keep the information accurate
            and up to date, we make no representations or warranties of any
            kind, express or implied, about the completeness, accuracy,
            reliability, or availability of the Website or the information
            contained on it.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            No Contractor-Client Relationship
          </h2>
          <p>
            Use of this Website does not create a contractor-client
            relationship between you and McKinney Concrete Experts. Submitting
            a contact form or inquiry does not constitute a service agreement.
            All concrete services require a signed written contract between you
            and McKinney Concrete Experts before any work begins.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by applicable law, McKinney
            Concrete Experts shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising out of or
            related to your use of, or inability to use, the Website. This
            includes, without limitation, damages for loss of profits, data,
            or other intangible losses, even if we have been advised of the
            possibility of such damages.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Intellectual Property
          </h2>
          <p>
            All content on this Website, including but not limited to text,
            graphics, logos, images, and design elements, is the property of
            McKinney Concrete Experts and is protected by applicable copyright
            and trademark laws. You may not reproduce, distribute, modify, or
            create derivative works from any content on this Website without
            our prior written consent.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance
            with the laws of the State of Texas. Any disputes arising from or
            related to these terms shall be subject to the exclusive
            jurisdiction of the courts located in Collin County, Texas.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Modifications</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time
            without prior notice. Changes will be effective immediately upon
            posting to this page. Your continued use of the Website after any
            modifications constitutes acceptance of the revised terms. We
            encourage you to review this page periodically for updates.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, please contact
            us at{" "}
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
