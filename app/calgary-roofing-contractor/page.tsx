import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import { Hero } from '@/components/sections/Hero'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { ServicesIconGrid } from '@/components/sections/ServicesIconGrid'

const WhySureWest = dynamic(() =>
  import('@/components/sections/WhySureWest').then((m) => m.WhySureWest),
)
const HowItWorks = dynamic(() =>
  import('@/components/sections/HowItWorks').then((m) => m.HowItWorks),
)
const BrandStrip = dynamic(() =>
  import('@/components/sections/BrandStrip').then((m) => m.BrandStrip),
)
const Reviews = dynamic(() =>
  import('@/components/sections/Reviews').then((m) => m.Reviews),
)
const PortfolioCarousel = dynamic(() =>
  import('@/components/sections/PortfolioCarousel').then((m) => m.PortfolioCarousel),
)
const HomeFAQ = dynamic(() =>
  import('@/components/sections/HomeFAQ').then((m) => m.HomeFAQ),
)
const BottomCTA = dynamic(() =>
  import('@/components/sections/BottomCTA').then((m) => m.BottomCTA),
)

export const metadata: Metadata = {
  title: 'Roofing Contractor Calgary',
  description:
    'Red Seal Journeyman certified roofing contractor serving Calgary. Roof replacement, hail damage claims, and repair across the NW, NE, SW and SE. Free written estimate.',
  keywords: [
    'roofing contractor Calgary',
    'Calgary roofer',
    'roofing company Calgary',
    'roof replacement Calgary',
    'roof repair Calgary',
    'hail damage roof repair Calgary',
    'Calgary hail roof',
    'insurance claim roofer Calgary',
    'Red Seal roofer Calgary',
    'residential roofing Calgary',
    'Calgary roofing services',
    'roofing Calgary NW',
    'roofing Calgary SW',
  ],
  openGraph: {
    title: 'Roofing Contractor Calgary | Sure West Roofing',
    description:
      'Red Seal certified roofing contractor serving Calgary. Roof replacement, hail damage claims, and repair. Free written estimate.',
    url: 'https://surewestroofing.ca/calgary-roofing-contractor',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://surewestroofing.ca/calgary-roofing-contractor',
  },
}

// ─── Local Business (Calgary-served) JSON-LD ─────────────────────────────────
// Re-asserts the service area with a Place entity for Calgary so this page
// surfaces in local results for "roofing contractor Calgary" searches.

const calgaryBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://surewestroofing.ca',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Roofing Contractor Calgary',
      item: 'https://surewestroofing.ca/calgary-roofing-contractor',
    },
  ],
}

const calgaryServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Residential Roofing',
  provider: {
    '@type': 'RoofingContractor',
    '@id': 'https://surewestroofing.ca/#organization',
    name: 'Sure West Roofing',
  },
  areaServed: {
    '@type': 'City',
    name: 'Calgary',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Alberta' },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Calgary Roofing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Replacement Calgary' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Repair Calgary' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hail Damage Roof Repair Calgary' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Maintenance Calgary' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Inspection Calgary' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Skylight Installation Calgary' } },
    ],
  },
}

// ─── FAQ data (Calgary-specific) ─────────────────────────────────────────────

const CALGARY_FAQS = [
  {
    question: 'Do you travel from Cochrane to work on Calgary roofs?',
    answerText:
      'Yes. Calgary is a core service area for Sure West Roofing. Our crew drives in daily from our Cochrane base, typically a 30 to 45 minute commute depending on your neighbourhood. Travel is included in every Calgary roofing quote, so there is no surcharge for being in the city rather than Cochrane.',
    answer: (
      <>
        Yes. Calgary is a core service area for Sure West Roofing. Our crew drives in daily from
        our Cochrane base, typically a 30 to 45 minute commute depending on your neighbourhood.
        Travel is included in every Calgary roofing quote, so there is no surcharge for being in
        the city rather than Cochrane.
      </>
    ),
  },
  {
    question: 'Which Calgary neighbourhoods do you work in?',
    answerText:
      'All of them. Sure West Roofing works across the entire city, including the inner-city communities like Kensington, Killarney, and Altadore, the NW quadrant covering Tuscany, Royal Oak, and Rocky Ridge, the NE including Saddle Ridge and Redstone, the SW down to Evergreen and Millrise, and the SE across Cranston, McKenzie Lake, and Mahogany.',
    answer: (
      <>
        All of them. Sure West Roofing works across the entire city, including the inner-city
        communities like Kensington, Killarney, and Altadore, the NW quadrant covering Tuscany,
        Royal Oak, and Rocky Ridge, the NE including Saddle Ridge and Redstone, the SW down to
        Evergreen and Millrise, and the SE across Cranston, McKenzie Lake, and Mahogany.
      </>
    ),
  },
  {
    question: 'How do you handle hail damage insurance claims in Calgary?',
    answerText:
      'Calgary sits in one of the most active hail corridors in North America, so insurance claims are a major part of what we do here. We start with a free post-storm inspection, document every impact with dated photos, submit a detailed scope to your adjuster, and work directly with them through to approval. You only pay your deductible. We handle the rest.',
    answer: (
      <>
        Calgary sits in one of the most active hail corridors in North America, so insurance
        claims are a major part of what we do here. We start with a free post-storm inspection,
        document every impact with dated photos, submit a detailed scope to your adjuster, and
        work directly with them through to approval. You only pay your deductible. We handle the
        rest. See our{' '}
        <Link href="/hail-damage-repair" className="faq-link">
          hail damage repair page
        </Link>{' '}
        for the full process.
      </>
    ),
  },
  {
    question: 'How much does a roof replacement cost in Calgary?',
    answerText:
      'Most Calgary roof replacements land between $9,000 and $28,000 depending on size, pitch, decking condition, shingle tier, and accessory work like flashing, vents, and skylights. Inner-city homes with steeper pitches or complex rooflines sit at the higher end. Suburban homes with standard pitches are usually mid-range. Your free Sure West estimate locks the price in writing before work begins.',
    answer: (
      <>
        Most Calgary roof replacements land between $9,000 and $28,000 depending on size, pitch,
        decking condition, shingle tier, and accessory work like flashing, vents, and skylights.
        Inner-city homes with steeper pitches or complex rooflines sit at the higher end.
        Suburban homes with standard pitches are usually mid-range. Your free Sure West estimate
        locks the price in writing before work begins.
      </>
    ),
  },
  {
    question: 'Do I need a roofing permit in Calgary?',
    answerText:
      'The City of Calgary does not require a building permit for a straight like-for-like shingle replacement on an existing residential roof. If you are changing decking, changing materials, or altering the roof structure, a permit is required. Sure West handles any permit paperwork on your behalf if your scope calls for it.',
    answer: (
      <>
        The City of Calgary does not require a building permit for a straight like-for-like
        shingle replacement on an existing residential roof. If you are changing decking,
        changing materials, or altering the roof structure, a permit is required. Sure West
        handles any permit paperwork on your behalf if your scope calls for it.
      </>
    ),
  },
  {
    question: 'What shingles do you install on Calgary homes?',
    answerText:
      "We install IKO architectural shingles across three tiers. IKO Cambridge is the entry point for straightforward replacements. IKO Dynasty is the Calgary workhorse and our most-installed tier. IKO Nordic is Class 4 impact-rated, engineered for hail-prone zones, and popular across the city's hail corridors. As an IKO ShieldPRO installer, we can qualify every roof we install for top-tier manufacturer warranty coverage.",
    answer: (
      <>
        We install IKO architectural shingles across three tiers. IKO Cambridge is the entry
        point for straightforward replacements. IKO Dynasty is the Calgary workhorse and our
        most-installed tier. IKO Nordic is Class 4 impact-rated, engineered for hail-prone zones,
        and popular across the city&apos;s hail corridors. As an IKO ShieldPRO installer, we can
        qualify every roof we install for top-tier manufacturer warranty coverage.
      </>
    ),
  },
  {
    question: 'How fast can a Calgary roof replacement be completed?',
    answerText:
      'Most Calgary single-family roof replacements are completed in one to two days, weather permitting. Larger homes, steep-pitch two-storeys in established communities, or projects with significant decking repairs run two to three days. We work through the full scope in one visit rather than leaving your roof opened across multiple weeks.',
    answer: (
      <>
        Most Calgary single-family roof replacements are completed in one to two days, weather
        permitting. Larger homes, steep-pitch two-storeys in established communities, or
        projects with significant decking repairs run two to three days. We work through the
        full scope in one visit rather than leaving your roof opened across multiple weeks.
      </>
    ),
  },
  {
    question: 'Is Sure West Roofing licensed and insured to work in Calgary?',
    answerText:
      'Yes. Sure West holds an active City of Calgary business licence, carries a $2 million general liability policy, and every crew member is covered by WCB Alberta. Every Calgary homeowner has the right to see proof of coverage before work begins and we are happy to provide it.',
    answer: (
      <>
        Yes. Sure West holds an active City of Calgary business licence, carries a $2 million
        general liability policy, and every crew member is covered by WCB Alberta. Every Calgary
        homeowner has the right to see proof of coverage before work begins and we are happy to
        provide it.
      </>
    ),
  },
]

export default function RoofingContractorCalgaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calgaryBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calgaryServiceSchema) }}
      />

      {/* 1. Hero */}
      <Hero
        h1={"Calgary's Red Seal Certified\nRoofing Contractor"}
        subtitle="Red Seal Journeyman certified with over 250 roofs completed across Calgary, Cochrane and Canmore. Quality workmanship backed by a written 10-year guarantee. We reply fast, even after hours."
        backgroundVideo="/images/sure-west-best-cochrane-roofing-contractor.mp4"
        backgroundImage="/images/Cochrane Roofing Contractors.jpg"
        primaryCTA={{ label: 'Get a Free Estimate', href: '/free-roof-estimate-cochrane' }}
        secondaryCTA={{ label: 'View Calgary Services', href: '/services' }}
        socialProofCount="150+"
        socialProofLabel="Calgary homeowners served"
      />

      {/* 2. Stats + Certifications */}
      <TrustLogos />

      {/* 3. Services grid, Calgary localized */}
      <ServicesIconGrid
        eyebrow="Calgary Services"
        heading={'Every Roofing Service.\nOne Calgary Standard.'}
        body="From hail-belt replacements to leak repairs and adjuster-ready inspections, our Red Seal Journeyman team delivers the same uncompromising standard on every Calgary roof."
        cta={{ label: 'View All Roofing Services', href: '/services' }}
        services={[
          {
            title: 'Roof Replacement',
            href: '/roof-replacement',
            description:
              "Red Seal certified tear-off and reroof on Calgary homes, from inner-city bungalows to new suburban builds. IKO shingles and a 10-year workmanship warranty on every Calgary roof.",
            image: '/images/roof-replacement-cochrane.webp',
            imageAlt: 'Roof replacement Calgary AB',
          },
          {
            title: 'Roof Repair',
            href: '/roof-repair',
            description:
              "Active leaks, lifted shingles, failed flashing, or storm damage on your Calgary home. Our Red Seal crew diagnoses the root cause and warrants every repair in writing.",
            image: '/images/roof-repairs-cochrane.webp',
            imageAlt: 'Roof repair Calgary AB',
          },
          {
            title: 'Roof Inspection',
            href: '/roof-inspection',
            description:
              "Buying in Altadore, selling in Tuscany, or just overdue. Our Calgary roof inspection covers every surface and the attic, with a written photo report you can share with buyers and insurers.",
            image: '/images/roof-inspection-cochrane.webp',
            imageAlt: 'Roof inspection Calgary AB',
          },
          {
            title: 'Roof Maintenance',
            href: '/roof-maintenance',
            description:
              "Annual visits for Calgary homes: flashing top-ups, vent checks, debris clearing, and small fixes before winter turns them into expensive ones. The smartest insurance for your roof.",
            image: '/images/roof-maintenance-cochrane.webp',
            imageAlt: 'Roof maintenance Calgary AB',
          },
          {
            title: 'Siding & Soft Metals',
            href: '/siding-soft-metals',
            description:
              "Siding, eavestroughs, fascia, and soffits on Calgary homes. Premium materials matched to Alberta weather, finished by the same Red Seal crew that does our roofs.",
            image: '/images/Cochrane Roofing Contractor Gallery 7.webp',
            imageAlt: 'Siding and soft metals Calgary AB',
          },
          {
            title: 'Skylight Installation',
            href: '/skylight-installation',
            description:
              "Natural light without the leaks. New skylights, full replacements, and resealing for Calgary homes, flashed and waterproofed to manufacturer spec in a single visit.",
            image: '/images/skylight-installation-cochrane.webp',
            imageAlt: 'Skylight installation Calgary AB',
          },
        ]}
      />

      {/* 4. Reviews, proof immediately after services (matches homepage flow) */}
      <Reviews
        sectionBg="#F7F5F0"
        cardBg="#FFFFFF"
        heading={
          <>
            What Calgary and Cochrane Homeowners
            <br className="hidden md:block" /> Say About Sure West Roofing
          </>
        }
      />

      {/* 5. Our Work (Portfolio), paired with reviews to keep proof block tight */}
      <PortfolioCarousel
        images={[
          { src: '/images/Cochrane Roofing Contractor Gallery 1.webp', alt: 'Calgary roofing contractor completed project 1' },
          { src: '/images/Cochrane Roofing Contractor Gallery 2.webp', alt: 'Calgary roofing contractor completed project 2' },
          { src: '/images/Cochrane Roofing Contractor Gallery 3.webp', alt: 'Calgary roofing contractor completed project 3' },
          { src: '/images/Cochrane Roofing Contractor Gallery 4.webp', alt: 'Calgary roofing contractor completed project 4' },
          { src: '/images/Cochrane Roofing Contractor Gallery 5.webp', alt: 'Calgary roofing contractor completed project 5' },
          { src: '/images/Cochrane Roofing Contractor Gallery 6.webp', alt: 'Calgary roofing contractor completed project 6' },
          { src: '/images/Cochrane Roofing Contractor Gallery 7.webp', alt: 'Calgary roofing contractor completed project 7' },
          { src: '/images/Cochrane Roofing Contractor Gallery 8.webp', alt: 'Calgary roofing contractor completed project 8' },
          { src: '/images/Cochrane Roofing Contractor Gallery 9.webp', alt: 'Calgary roofing contractor completed project 9' },
          { src: '/images/Cochrane Roofing Contractor Gallery 10.webp', alt: 'Calgary roofing contractor completed project 10', objectPosition: '70% center' },
          { src: '/images/Cochrane Roofing Contractor Gallery 12.webp', alt: 'Calgary roofing contractor completed project 11' },
          { src: '/images/Cochrane Roofing Contractor Gallery 13.webp', alt: 'Calgary roofing contractor completed project 12' },
          { src: '/images/Cochrane Roofing Contractor Gallery 14.webp', alt: 'Calgary roofing contractor completed project 13' },
          { src: '/images/Cochrane Roofing Contractor Gallery 15.webp', alt: 'Calgary roofing contractor completed project 14', objectPosition: '70% center' },
          { src: '/images/Cochrane Roofing Contractor Gallery 16.webp', alt: 'Calgary roofing contractor completed project 15' },
          { src: '/images/Cochrane Roofing Contractor Gallery 19.webp', alt: 'Calgary roofing contractor completed project 16' },
          { src: '/images/Cochrane Roofing Contractor Gallery 20.webp', alt: 'Calgary roofing contractor completed project 17' },
          { src: '/images/Cochrane Roofing Contractor Gallery 21.webp', alt: 'Calgary roofing contractor completed project 18' },
          { src: '/images/Cochrane Roofing Contractor Gallery 22.webp', alt: 'Calgary roofing contractor completed project 19' },
        ]}
      />

      {/* 6. Why Sure West, differentiator landing on a primed viewer */}
      <WhySureWest
        eyebrow="Why Calgary Chooses Sure West"
        heading={
          <>
            A Red Seal Roofing Contractor
            <br />
            Built for Calgary Weather
          </>
        }
        body="Calgary has more roofing contractors than any other city we serve. Here is what makes Sure West the right one for your Calgary home."
      />

      {/* 7. How It Works, process info now that buyer is leaning in */}
      <HowItWorks
        eyebrow="Our Calgary Process"
        heading={
          <>
            From First Call to Finished
            <br className="hidden md:block" /> Calgary Roof in Three Steps
          </>
        }
        body="A straightforward Calgary roofing experience, designed around your schedule and your home."
      />

      {/* 8. Move the Mountain, emotional moment before the rational close */}
      <BrandStrip />

      {/* 9. FAQ, Calgary-specific, final objection handling right before the ask */}
      <HomeFAQ
        eyebrow="Calgary FAQs"
        heading="Calgary Roofing Questions Answered"
        body="The questions Calgary homeowners ask us most about replacement, hail claims, pricing, and scheduling."
        faqs={CALGARY_FAQS}
      />

      {/* 10. Bottom CTA */}
      <BottomCTA
        heading={
          <>
            Need a Roofing Contractor
            <br className="hidden md:block" /> for Your Calgary Home?
          </>
        }
        subtext="Free on-site Calgary roof inspection. Fixed written quote within 24 hours. Hail claim support from first call to final payment."
      />
    </>
  )
}
