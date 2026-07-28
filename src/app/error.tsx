"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-xl px-4 text-center">
        <span className="font-display text-6xl font-bold text-accent">Oops</span>
        <h1 className="font-display text-3xl font-bold text-primary mt-4 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-mid mb-8">
          We hit an unexpected problem. Try refreshing the page, or head back to
          our homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-accent text-white px-6 py-3 rounded font-display font-bold hover:bg-accent-dark transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border-2 border-primary text-primary px-6 py-3 rounded font-display font-bold hover:bg-primary hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
