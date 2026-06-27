import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section
      className="relative bg-accent py-20"
      style={{
        clipPath: "polygon(0 6%, 100% 0, 100% 94%, 0 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-8">
        <span className="block w-16 h-0.5 bg-white/40 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-semibold font-display text-white mb-4">
          Ready to Start Your McKinney Concrete Project?
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
          Call for a free estimate. No obligation. We serve all of McKinney and
          Collin County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="tel:+12144278053" variant="secondary" className="bg-primary border-primary text-white hover:bg-primary/80 hover:text-white">
            Call (214) 427-8053
          </Button>
          <Button href="/contact" variant="outline-white">
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
