// Service x City combination content.
// High-intent combos have hand-written intros and city-specific FAQs below.
// All other combinations fall back to localized templated content built in
// ServiceCityContent from the service and location data.

export interface ComboContent {
  intro: string[];
  faqs: { question: string; answer: string }[];
}

// Short service phrase used in templated (non-high-intent) combo copy.
export const serviceBlurbs: Record<string, string> = {
  "driveways": "durable, properly reinforced concrete driveways",
  "patios": "custom concrete patios for real outdoor living",
  "pool-decks": "cool, slip-resistant pool decks",
  "block-walls": "engineered retaining and privacy walls",
  "foundations-slabs": "engineered foundations and standalone slabs",
  "commercial-concrete": "code-compliant commercial concrete and flatwork",
};

// key = `${serviceSlug}:${citySlug}`
export const uniqueCombos: Record<string, ComboContent> = {
  "driveways:stonebridge-ranch": {
    intro: [
      "A concrete driveway in Stonebridge Ranch has to clear two bars: the HOA's aesthetic standards across its 70-plus villages, and North Texas clay soil that moves with every wet-dry season. We pour driveways in Stonebridge Ranch to both — clean broom or decorative finishes that match the community's polished look, over a properly compacted base with rebar sized for Collin County's expansive clay.",
      "Many Stonebridge Ranch homes built in the 1990s are now due for full driveway replacement. We handle tear-out and repour with correct thickness (4\" for cars, 5\"+ for heavier vehicles), control joints at the right spacing, and a penetrating sealer to fight UV and freeze-thaw — so your new driveway looks right and lasts.",
    ],
    faqs: [
      {
        question: "Will my new driveway meet Stonebridge Ranch HOA standards?",
        answer: "Yes. We're familiar with Stonebridge Ranch's design expectations and pour clean, well-edged finishes that pass HOA review. We can match neighboring broom finishes or install a decorative option you've had approved.",
      },
      {
        question: "How long does a driveway replacement take in Stonebridge Ranch?",
        answer: "Most residential driveways are torn out and repoured in 1–2 days, followed by a 7-day cure before you park on them. We'll give you a firm schedule at the estimate.",
      },
    ],
  },
  "driveways:craig-ranch": {
    intro: [
      "Craig Ranch mixes new construction, townhomes, and higher-end homes around the TPC golf course — and driveways here range from first pours on new builds to replacements on the community's earlier sections. We install concrete driveways across Craig Ranch built for the soil and the community's active, amenity-rich standard.",
      "Whether you need a clean broom finish or a stamped, exposed-aggregate drive with real curb appeal, we handle grade, drainage, reinforcement, and finish so your Craig Ranch driveway holds up through Texas summers and the occasional hard freeze.",
    ],
    faqs: [
      {
        question: "Do you pour driveways for new construction in Craig Ranch?",
        answer: "Yes — we handle first-time driveway pours for newly completed Craig Ranch homes as well as replacements and extensions on established properties.",
      },
      {
        question: "Can you match a decorative finish to my Craig Ranch home?",
        answer: "Absolutely. Stamped and exposed-aggregate finishes can be tailored to complement your home's exterior and the community's look.",
      },
    ],
  },
  "driveways:trinity-falls": {
    intro: [
      "Trinity Falls' nature-forward design and gentle river-valley topography mean driveways here need careful attention to grade and drainage. We pour concrete driveways across Trinity Falls — both first pours for new builds and upgrades for established homeowners — that shed water correctly and sit on a stable, compacted base.",
      "From broom-finish drives to decorative stamped approaches that suit the community's wooded setting, we build to proper thickness and reinforcement for Collin County clay so your Trinity Falls driveway performs for decades.",
    ],
    faqs: [
      {
        question: "Do you handle drainage grading on Trinity Falls driveways?",
        answer: "Yes. Trinity Falls' natural site grades make drainage important — we form every driveway with the right slope so water flows away from your home and garage.",
      },
      {
        question: "Can you pour a driveway on my new Trinity Falls build?",
        answer: "We regularly pour first driveways for newly completed Trinity Falls homes, coordinating around builder timelines.",
      },
    ],
  },
  "driveways:allen": {
    intro: [
      "Allen's established neighborhoods are full of driveways installed 20-plus years ago that are cracking, settling, or simply worn out. We specialize in driveway replacement across Allen — tear-out, base repair, and a fresh pour engineered for the same clay soil McKinney and Allen share.",
      "Whether it's a straightforward broom-finish replacement or a decorative upgrade, we pour Allen driveways to proper thickness with correct reinforcement and jointing, then seal them against UV and freeze-thaw for a long, low-maintenance life.",
    ],
    faqs: [
      {
        question: "Do you replace old driveways in Allen?",
        answer: "Yes — driveway replacement in Allen's established neighborhoods is one of our most common jobs. We handle removal, base prep, and repour.",
      },
      {
        question: "Is Allen within your service area?",
        answer: "Allen borders our McKinney core service area and is fully covered. Call (214) 833-9489 for a free Allen estimate.",
      },
    ],
  },
  "driveways:celina": {
    intro: [
      "Celina is one of Texas's fastest-growing cities, and most driveway work here is new-construction oriented — first pours for homes just finishing in Celina's many master-planned communities. We install concrete driveways across Celina built to handle the new-build timeline and the region's demanding clay soil.",
      "From standard broom finishes to stamped decorative drives, we pour Celina driveways with proper base prep, reinforcement, and drainage so your first driveway is done right and won't need redoing.",
    ],
    faqs: [
      {
        question: "Do you serve new master-planned communities in Celina?",
        answer: "Yes — we work throughout Celina's new developments along US-380 and Preston Road, pouring first driveways and extensions.",
      },
      {
        question: "How thick should my Celina driveway be?",
        answer: "We recommend 4\" for standard vehicles and 5\"+ for trucks or trailers, reinforced for Collin County clay.",
      },
    ],
  },
  "driveways:anna": {
    intro: [
      "Anna's rapid residential growth means most driveways here are first pours for new homes. We install concrete driveways across Anna — engineered for North Texas clay soil and built to the same standard we bring to McKinney's established communities.",
      "New driveways, extensions, and garage-to-street approaches: we handle grade, base, reinforcement, and finish so your Anna driveway starts strong and stays that way.",
    ],
    faqs: [
      {
        question: "Do you pour driveways for new builds in Anna?",
        answer: "Yes — first-time driveway pours for newly completed Anna homes are a core part of our work in the area.",
      },
      {
        question: "Is Anna in your service area?",
        answer: "Anna sits at the northern edge of our Collin County service area and is fully covered. Call (214) 833-9489 for a free estimate.",
      },
    ],
  },
  "patios:stonebridge-ranch": {
    intro: [
      "Stonebridge Ranch backyards — many with mature landscaping and established trees — are ideal for concrete patios that expand outdoor living without fighting the existing yard. We build patios across Stonebridge Ranch, from clean broom-finish slabs to stamped concrete that mimics stone and slate, all to the community's polished standard.",
      "We work around established beds, irrigation, and trees, set proper drainage away from the home, and seal every patio for lasting color. For older Stonebridge Ranch homes, patio expansion and resurfacing are among our most-requested projects.",
    ],
    faqs: [
      {
        question: "Can you work around my mature Stonebridge Ranch landscaping?",
        answer: "Yes — we regularly build patios around established trees, beds, and irrigation, planning the layout to protect what you want to keep.",
      },
      {
        question: "What patio finishes work best in Stonebridge Ranch?",
        answer: "Broom finishes suit clean, low-maintenance spaces; stamped and stained concrete add a decorative, stone-like look that fits the community's aesthetic.",
      },
    ],
  },
  "patios:craig-ranch": {
    intro: [
      "Craig Ranch homeowners invest in outdoor living, and a well-built concrete patio is the foundation of it. We pour patios across Craig Ranch — stamped, stained, or broom-finished — sized and shaped for entertaining, with the drainage and jointing that keep them looking sharp.",
      "From new-build patio extensions to full outdoor rooms on established Craig Ranch lots, we handle design, forming, finish, and sealing so your patio matches the community's active, upscale character.",
    ],
    faqs: [
      {
        question: "Do you build stamped patios in Craig Ranch?",
        answer: "Yes — stamped concrete in slate, stone, and wood-plank patterns is one of our most popular Craig Ranch options.",
      },
      {
        question: "Can you extend my builder's patio in Craig Ranch?",
        answer: "Absolutely. Extending small builder patios into full outdoor living areas is a common Craig Ranch project for us.",
      },
    ],
  },
  "patios:trinity-falls": {
    intro: [
      "Trinity Falls residents chose the community for its connection to nature, and outdoor living is central to the lifestyle. We build concrete patios across Trinity Falls — from broom-finish slabs to stamped surfaces — designed to extend your indoor space into the community's wooded, trail-laced setting.",
      "New builds often come with undersized builder patios; we extend and upgrade them into real outdoor rooms, with drainage tuned to Trinity Falls' natural grades and finishes that suit its natural character.",
    ],
    faqs: [
      {
        question: "Can you extend a builder patio in Trinity Falls?",
        answer: "Yes — patio extensions on newer Trinity Falls homes are one of our most common projects, turning small slabs into full outdoor living areas.",
      },
      {
        question: "What patio style fits Trinity Falls' natural setting?",
        answer: "Earth-toned stamped and stained finishes complement the community's wooded character, though clean broom finishes are always a solid choice.",
      },
    ],
  },
  "patios:allen": {
    intro: [
      "Allen's established homes often have original patios that are too small or worn for how families actually use their backyards. We build and expand concrete patios across Allen — broom, stamped, and stained — that add real, usable outdoor living space.",
      "We handle layout around existing landscaping, proper drainage, and a durable sealed finish so your Allen patio holds up through Texas summers with minimal maintenance.",
    ],
    faqs: [
      {
        question: "Do you expand existing patios in Allen?",
        answer: "Yes — patio expansion is one of our most requested Allen projects, adding space for dining, seating, and entertaining.",
      },
      {
        question: "How much maintenance does a concrete patio need?",
        answer: "Very little — rinse it clean and reseal every 2–3 years to keep the color and protect the surface.",
      },
    ],
  },
  "patios:celina": {
    intro: [
      "Celina's new-build homes frequently come with minimal builder patios. We pour full concrete patios across Celina — stamped, stained, or broom-finished — that make a brand-new backyard genuinely usable from the start.",
      "From simple slabs to decorative outdoor rooms, we handle shape, drainage, and finish so your Celina patio matches the quality of your new home and stands up to North Texas weather.",
    ],
    faqs: [
      {
        question: "Can you add a patio to my new Celina home?",
        answer: "Yes — pouring full patios for newly built Celina homes is one of our most common jobs in the area.",
      },
      {
        question: "Do you offer stamped patios in Celina?",
        answer: "We do — stamped concrete in stone and slate patterns is a popular choice for Celina's new homes.",
      },
    ],
  },
  "pool-decks:stonebridge-ranch": {
    intro: [
      "With Stonebridge Ranch's long pool season and hot Texas summers, a pool deck has to stay cool underfoot and slip-resistant when wet. We pour and resurface pool decks across Stonebridge Ranch using cool-deck coatings that can cut surface temperature by up to 30°F.",
      "Whether you're finishing a new pool or resurfacing a cracked, faded deck, we deliver textured, chlorine- and UV-resistant surfaces that fit the community's resort-like standard.",
    ],
    faqs: [
      {
        question: "Can you resurface my existing Stonebridge Ranch pool deck?",
        answer: "In most cases yes — if the concrete is structurally sound, we can apply a cool-deck overlay without a full tear-out.",
      },
      {
        question: "Will a cool deck really stay cooler in summer?",
        answer: "Yes — cool-deck coatings reflect heat and can reduce surface temperature by up to 30°F versus standard gray concrete.",
      },
    ],
  },
  "pool-decks:craig-ranch": {
    intro: [
      "Craig Ranch's active, amenity-focused lifestyle extends to backyard pools that get used all season. We build and resurface pool decks across Craig Ranch with slip-resistant, heat-reflective finishes engineered for the Texas pool environment.",
      "From new pool-deck pours to cool-deck resurfacing on older decks, we deliver surfaces that stay comfortable barefoot and resist chlorine and UV for years.",
    ],
    faqs: [
      {
        question: "Do you pour new pool decks in Craig Ranch?",
        answer: "Yes — we pour decks around new gunite and fiberglass pools and resurface existing decks throughout Craig Ranch.",
      },
      {
        question: "What finish keeps a pool deck cool in Craig Ranch?",
        answer: "Textured cool-deck coatings in light, sandstone tones stay coolest and resist fading.",
      },
    ],
  },
  "pool-decks:tucker-hill": {
    intro: [
      "Tucker Hill's traditional-neighborhood design and strong HOA standards call for pool decks that are both attractive and practical. We resurface and pour pool decks across Tucker Hill with slip-resistant, cool-to-the-touch finishes that fit the community's classic look.",
      "Cracked or overheating decks are a common Tucker Hill project — a cool-deck overlay restores the surface, drops the temperature, and adds slip resistance without a full tear-out where the concrete is sound.",
    ],
    faqs: [
      {
        question: "Will a resurfaced pool deck meet Tucker Hill's design standards?",
        answer: "Yes — we finish decks in colors and textures that suit Tucker Hill's traditional aesthetic and HOA expectations.",
      },
      {
        question: "Can you fix a cracking, too-hot pool deck in Tucker Hill?",
        answer: "Usually yes — a cool-deck overlay repairs the surface, reduces heat, and improves grip when the underlying slab is sound.",
      },
    ],
  },
  "pool-decks:trinity-falls": {
    intro: [
      "Trinity Falls' outdoor-oriented lifestyle and warm season make a comfortable pool deck a priority. We pour and resurface pool decks across Trinity Falls with heat-reflective cool-deck coatings and slip-resistant textures built for long Texas summers.",
      "New pours around fresh pools or overlays on aging decks — we deliver chlorine- and UV-resistant finishes that stay cool and complement the community's natural setting.",
    ],
    faqs: [
      {
        question: "Do you resurface pool decks in Trinity Falls?",
        answer: "Yes — cool-deck resurfacing on structurally sound decks is a common Trinity Falls project.",
      },
      {
        question: "How soon can we use the pool area after the work?",
        answer: "Light foot traffic is usually fine after 48–72 hours; full use after about 7 days.",
      },
    ],
  },
  "foundations-slabs:celina": {
    intro: [
      "Celina's explosive new-home growth means constant demand for engineered slabs and foundations. We pour foundations and standalone slabs across Celina — garage floors, workshop pads, and accessory structures — built for Collin County's expansive clay with post-tension or rebar systems as engineered.",
      "Every Celina slab is coordinated with soil testing and structural engineering, formed to grade, and inspected before the pour so it stands up to the soil movement that defines North Texas.",
    ],
    faqs: [
      {
        question: "Do you pour garage and workshop slabs in Celina?",
        answer: "Yes — standalone garage, workshop, and storage-building slabs are a common Celina project, sized and reinforced for your intended use.",
      },
      {
        question: "Why is post-tension used on Celina foundations?",
        answer: "Celina sits on the same expansive clay as the rest of Collin County; post-tension cables resist cracking from seasonal soil movement.",
      },
    ],
  },
  "foundations-slabs:anna": {
    intro: [
      "Anna's residential boom brings steady demand for garage slabs, workshop pads, and foundation work on new and growing properties. We pour engineered slabs and foundations across Anna, built for Collin County clay and code-compliant with City permitting handled.",
      "From first garage slabs on new Anna homes to workshop and storage pads on larger lots, we coordinate engineering, form to grade, and cure to spec for a slab that lasts.",
    ],
    faqs: [
      {
        question: "Do you pour workshop and garage slabs in Anna?",
        answer: "Yes — standalone slabs for garages, workshops, and storage buildings are among our most common Anna projects.",
      },
      {
        question: "Do you handle permits for Anna slab work?",
        answer: "Yes — we manage required permitting and inspections for foundation and slab work in Anna.",
      },
    ],
  },
  "foundations-slabs:trinity-falls": {
    intro: [
      "Trinity Falls' active new construction and larger lots create demand for engineered foundations and standalone slabs. We pour foundations, garage floors, and workshop pads across Trinity Falls, engineered for Collin County's expansive clay and the community's river-valley grades.",
      "We coordinate soil testing and structural design, form grade beams and slabs to plan, and pass pre-pour inspection so your Trinity Falls foundation moves with the soil instead of cracking against it.",
    ],
    faqs: [
      {
        question: "Do you pour slabs for accessory buildings in Trinity Falls?",
        answer: "Yes — garage, workshop, and storage-building slabs on Trinity Falls properties are a regular project for us.",
      },
      {
        question: "Is a post-tension foundation necessary in Trinity Falls?",
        answer: "For residential foundations on Collin County clay, post-tension is the standard approach to resist seasonal soil movement.",
      },
    ],
  },
};

export const highIntentComboKeys: string[] = Object.keys(uniqueCombos);

export function isHighIntentCombo(serviceSlug: string, citySlug: string): boolean {
  return Boolean(uniqueCombos[`${serviceSlug}:${citySlug}`]);
}
