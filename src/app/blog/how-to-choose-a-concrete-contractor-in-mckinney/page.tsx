import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/sections/BlogPostLayout";
import { getPostBySlug } from "@/data/blog";

const meta = getPostBySlug("how-to-choose-a-concrete-contractor-in-mckinney")!;

export const metadata: Metadata = {
  title: `${meta.title} | McKinney Concrete Experts`,
  description: meta.description,
  openGraph: { images: [meta.heroImage] },
  alternates: {
    canonical: `https://www.mckinneyconcreteexperts.com/blog/${meta.slug}`,
  },
};

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        A concrete driveway, patio, or foundation is one of the more expensive
        exterior projects a McKinney homeowner will take on — and unlike a coat
        of paint, a bad pour is difficult and costly to fix. The good news is
        that separating a quality concrete contractor from a risky one comes
        down to a handful of concrete questions and a little homework. Here is
        exactly what to look for before you hand over a deposit.
      </p>

      <h2>1. Confirm they&apos;re licensed and insured</h2>
      <p>
        Texas doesn&apos;t require a state license for general concrete flatwork,
        but that makes insurance even more important. Any contractor working on
        your property should carry both general liability insurance and
        workers&apos; compensation. If a worker is injured on an uninsured job,
        the homeowner can be held liable. Ask for a certificate of insurance and
        actually read the coverage dates — don&apos;t just take &ldquo;yes,
        we&apos;re insured&rdquo; at face value.
      </p>
      <p>
        For structural work like{" "}
        <Link href="/services/foundations-slabs">foundations and slabs</Link> or
        tall{" "}
        <Link href="/services/block-walls">retaining and block walls</Link>,
        also ask whether the project requires engineering and a City of McKinney
        permit. A contractor who waves off permitting on a job that clearly needs
        it is telling you something important.
      </p>

      <h2>2. Look for local, McKinney-specific experience</h2>
      <p>
        North Texas sits on expansive clay soil that swells when wet and shrinks
        in drought, sometimes moving several inches across a season. A contractor
        who works this area every day knows to prepare the base properly,
        reinforce with the right rebar or post-tension system, place control
        joints at correct intervals, and grade for drainage. A crew that mostly
        works in other soil conditions may pour a slab that looks fine on day one
        and cracks badly within a year or two.
      </p>
      <p>
        Local experience also means familiarity with HOA design standards in
        communities like Stonebridge Ranch and Tucker Hill, and with the City of
        McKinney permitting process. You can see the range of communities we work
        in on our{" "}
        <Link href="/service-areas">service areas page</Link>.
      </p>

      <h2>3. Ask about thickness, reinforcement, and base prep</h2>
      <p>
        This is where quality is won or lost — and where cheap bids cut corners.
        For a residential{" "}
        <Link href="/services/driveways">concrete driveway</Link>, you want a
        minimum of 4 inches of thickness (5 inches or more if you park trucks or
        trailers), steel reinforcement set on chairs at the correct height, and a
        properly compacted base. If a bid is dramatically lower than the others,
        ask what thickness and reinforcement it includes. Often the answer is
        &ldquo;less.&rdquo;
      </p>
      <ul>
        <li>
          <strong>Thickness:</strong> 4&quot; standard residential, 5&quot;+ for
          heavy vehicles.
        </li>
        <li>
          <strong>Reinforcement:</strong> rebar grid or wire mesh, positioned in
          the slab — not lying on the dirt.
        </li>
        <li>
          <strong>Base:</strong> compacted subgrade, with granular fill where
          needed.
        </li>
        <li>
          <strong>Joints:</strong> control joints cut at proper spacing to
          direct where the concrete cracks.
        </li>
      </ul>

      <h2>4. Read reviews — and ask for local references</h2>
      <p>
        Online reviews are a starting point, but pay attention to what
        they&apos;re about. Reviews that mention crews showing up on time,
        clean finishes, and concrete that&apos;s held up for years are far more
        useful than a five-star rating with no detail. Ask for a few references
        from recent jobs in your area, and if you can, drive by a completed
        project to see the finish quality in person.
      </p>

      <h2>5. Get a detailed, written estimate</h2>
      <p>
        A professional estimate should spell out the scope: square footage,
        thickness, reinforcement, finish type, joint plan, and what site prep or
        removal is included. Vague one-line quotes make it impossible to compare
        bids fairly and leave room for surprise charges. A written estimate also
        protects both sides if a question comes up mid-project.
      </p>

      <h2>Red flags to walk away from</h2>
      <ul>
        <li>Demands a large cash deposit up front before any work is scheduled.</li>
        <li>Won&apos;t provide proof of insurance.</li>
        <li>Pressures you to sign today with a &ldquo;this price expires&rdquo; pitch.</li>
        <li>Can&apos;t clearly explain thickness, reinforcement, or drainage.</li>
        <li>Has no verifiable local work you can look at.</li>
      </ul>

      <h2>The bottom line</h2>
      <p>
        The cheapest bid is rarely the best value with concrete — the cost of
        redoing a failed pour dwarfs the savings. Hire the contractor who
        answers your questions clearly, documents the scope in writing, carries
        real insurance, and can show you quality work in McKinney. If you&apos;d
        like a detailed, no-pressure estimate that spells all of this out,{" "}
        <Link href="/contact">request a free quote</Link> and we&apos;ll walk
        your project with you.
      </p>
    </BlogPostLayout>
  );
}
