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
  title: { absolute: 'Roofing Contractor Calgary | Sure West Roofing' },
  description:
    'Calgary roofing contractor for replacement, repair, and hail damage. Red Seal Journeyman certified, in-house crew, free written estimates.',
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
      'Calgary roofing contractor for replacement, repair, and hail damage. Red Seal Journeyman certified, in-house crew, free written estimates.',
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
      "Yes, regularly. Cochrane is about thirty minutes from most of Calgary, and our crews run jobs across the city year-round. The drive doesn't change the standard: same Red Seal-led crew, same proven process, and the same 10-year workmanship guarantee.",
    answer: (
      <>
        Yes, regularly. Cochrane is about thirty minutes from most of Calgary, and our crews run jobs across the city year-round. The drive doesn&apos;t change the standard: same Red Seal-led crew, same proven process, and the same 10-year workmanship guarantee.
      </>
    ),
  },
  {
    question: 'Which Calgary neighbourhoods do you work in?',
    answerText:
      "All of them. We've worked from inner-city Altadore to suburban Tuscany and the surrounding new builds. If your home is inside Calgary city limits, we cover it.",
    answer: (
      <>
        All of them. We&apos;ve worked from inner-city Altadore to suburban Tuscany and the surrounding new builds. If your home is inside Calgary city limits, we cover it.
      </>
    ),
  },
  {
    question: 'How do you handle hail damage insurance claims in Calgary?',
    answerText:
      "We handle Calgary hail damage insurance claims end-to-end: document the damage with photos and a written report, meet with your insurance adjuster on-site where it helps, and rebuild to the standard we'd put on our own homes. No pressure to file if the damage is borderline.",
    answer: (
      <>
        We handle Calgary{' '}
        <Link href="/hail-damage-repair" className="faq-link">
          hail damage insurance claims
        </Link>{' '}
        end-to-end: document the damage with photos and a written report, meet with your insurance adjuster on-site where it helps, and rebuild to the standard we&apos;d put on our own homes. No pressure to file if the damage is borderline.
      </>
    ),
  },
  {
    question: 'How much does a roof replacement cost in Calgary?',
    answerText:
      'Roof replacement cost depends on several factors: roof size, pitch, the materials you choose, the condition of the deck underneath, and any soft-metal work needed at flashings, valleys, and eaves. We come to your Calgary property in person, walk the roof, and send a clear, itemised written quote. No satellite-image pricing.',
    answer: (
      <>
        <Link href="/roof-replacement" className="faq-link">
          Roof replacement
        </Link>{' '}
        cost depends on several factors: roof size, pitch, the materials you choose, the condition of the deck underneath, and any soft-metal work needed at flashings, valleys, and eaves. We come to your Calgary property in person, walk the roof, and send a clear, itemised written quote. No satellite-image pricing.
      </>
    ),
  },
  {
    question: 'How do I know if my Calgary roof needs replacing?',
    answerText:
      "Common signs include curling or missing shingles, granules collecting in your gutters, repeated leaks, sagging spots, daylight visible from the attic, and a roof past 20 to 25 years old. The reliable way to know is an in-person roof inspection. We'll tell you whether repair or replacement is the right call and never push the bigger job.",
    answer: (
      <>
        Common signs include curling or missing shingles, granules collecting in your gutters, repeated leaks, sagging spots, daylight visible from the attic, and a roof past 20 to 25 years old. The reliable way to know is an in-person{' '}
        <Link href="/roof-inspection" className="faq-link">
          roof inspection
        </Link>
        . We&apos;ll tell you whether{' '}
        <Link href="/roof-repair" className="faq-link">
          repair
        </Link>{' '}
        or{' '}
        <Link href="/roof-replacement" className="faq-link">
          replacement
        </Link>{' '}
        is the right call and never push the bigger job.
      </>
    ),
  },
  {
    question: 'What shingles do you install on Calgary homes?',
    answerText:
      "We're an IKO ShieldPRO certified installer. Our standard line is IKO Cambridge for value, IKO Dynasty (our default recommendation) for upgraded durability and impact resistance, and IKO Nordic for premium installs. All come with manufacturer warranties on top of our 10-year workmanship guarantee.",
    answer: (
      <>
        We&apos;re an IKO ShieldPRO certified installer. Our standard line is IKO Cambridge for value, IKO Dynasty (our default recommendation) for upgraded durability and impact resistance, and IKO Nordic for premium installs. All come with manufacturer warranties on top of our 10-year workmanship guarantee.
      </>
    ),
  },
  {
    question: 'How fast can a Calgary roof replacement be completed?',
    answerText:
      "Most roof replacements are completed in a single day. Larger or steeper roofs can stretch to two. We schedule weather-aware: if conditions put your roof at risk mid-install, we pause, secure the site, and finish when it's safe. You'll know the expected timeline before the materials arrive.",
    answer: (
      <>
        Most{' '}
        <Link href="/roof-replacement" className="faq-link">
          roof replacements
        </Link>{' '}
        are completed in a single day. Larger or steeper roofs can stretch to two. We schedule weather-aware: if conditions put your roof at risk mid-install, we pause, secure the site, and finish when it&apos;s safe. You&apos;ll know the expected timeline before the materials arrive.
      </>
    ),
  },
  {
    question: 'Is Sure West Roofing licensed and insured to work in Calgary?',
    answerText:
      'Yes. Sure West carries $2 million in commercial liability insurance, WCB Alberta coverage on every team member, and a Red Seal Journeyman certified roofer on every job. As a homeowner, you can ask for a copy of our insurance certificate before any work starts. We recommend asking every contractor.',
    answer: (
      <>
        Yes. Sure West carries $2 million in commercial liability insurance, WCB Alberta coverage on every team member, and a Red Seal Journeyman certified roofer on every job. As a homeowner, you can ask for a copy of our insurance certificate before any work starts. We recommend asking every contractor.
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
        h1={"Calgary's Trusted\nRoofing Contractor"}
        subtitle="Red Seal Journeyman roofing contractor serving Calgary, Cochrane, and Canmore. Built on character, competency, and proven processes."
        backgroundVideo="/images/sure-west-best-cochrane-roofing-contractor.mp4"
        backgroundImage="/images/Cochrane Roofing Contractors.jpg"
        primaryCTA={{ label: 'Get a Free Estimate', href: '/free-roof-estimate-cochrane' }}
        secondaryCTA={{ label: 'Explore Our Services', href: '/services' }}
        socialProofCount="150+"
        socialProofLabel="satisfied Calgary homeowners"
      />

      {/* 2. Stats + Certifications */}
      <TrustLogos />

      {/* 3. Move the Mountain, brand philosophy anchor before services */}
      <BrandStrip />

      {/* 4. Services Card Grid */}
      <ServicesIconGrid
        eyebrow="What We Do"
        heading={'Every Calgary Roofing Service.\nOne Standard.'}
        body="From a quick roof repair to a full replacement, the standard doesn't change. The same Red Seal crew, proven process, and 10-year written guarantee come with every Calgary roof."
        cta={{ label: 'View All Roofing Services', href: '/services' }}
        services={[
          {
            title: 'Roof Replacement',
            href: '/roof-replacement',
            description:
              "The biggest job your roof will get, run by the same Red Seal crew from tear-off to walkthrough. Deck inspection, IKO install, magnetic nail sweep, and 10-year warranty in writing.",
            image: '/images/roof-replacement-cochrane.webp',
            imageAlt: 'Roof replacement Calgary AB',
          },
          {
            title: 'Roof Repair',
            href: '/roof-repair',
            description:
              "If your roof still has years left in it, we'll tell you so. Cracked shingles, active leaks, failed flashing, or ice dam damage fixed properly, with no upsell to a replacement.",
            image: '/images/roof-repairs-cochrane.webp',
            imageAlt: 'Roof repair Calgary AB',
          },
          {
            title: 'Roof Inspection',
            href: '/roof-inspection',
            description:
              "Buying, selling, or overdue for a check, a real inspection takes time. We're on the roof, in the attic, and around the flashings, with the truth in writing, clear photos, and a plain-language verdict.",
            image: '/images/roof-inspection-cochrane.webp',
            imageAlt: 'Roof inspection Calgary AB',
          },
          {
            title: 'Roof Maintenance',
            href: '/roof-maintenance',
            description:
              "Most roofs don't fail from weather, they fail because no one checks on them. Scheduled visits with flashing top-ups, debris clearing, and small fixes that keep big repairs away.",
            image: '/images/roof-maintenance-cochrane.webp',
            imageAlt: 'Roof maintenance Calgary AB',
          },
          {
            title: 'Siding & Soft Metals',
            href: '/siding-soft-metals',
            description:
              "Flashings, fascia, soffit, eavestroughs, and siding are where crews cut corners. Same Red Seal crew as the roofs, Alberta-weather materials, built for chinook and freeze-thaw.",
            image: '/images/Cochrane Roofing Contractor Gallery 7.webp',
            imageAlt: 'Siding and soft metals Calgary AB',
          },
          {
            title: 'Skylight Installation',
            href: '/skylight-installation',
            description:
              "Natural light without the leaks. Skylights fail when they're rushed, so we seal, flash, and finish them like the rest of the roof depends on it, manufacturer spec on every job.",
            image: '/images/skylight-installation-cochrane.webp',
            imageAlt: 'Skylight installation Calgary AB',
          },
        ]}
      />

      {/* 5. Reviews, proof immediately after services (matches homepage flow) */}
      <Reviews
        sectionBg="#FFFFFF"
        cardBg="#F7F5F0"
        heading={
          <>
            What Calgary Homeowners
            <br className="hidden md:block" /> Say About Sure West Roofing
          </>
        }
        body="Verified Google reviews from homeowners across Calgary, Cochrane, and Canmore."
      />

      {/* 6. Why Sure West, differentiator landing on a primed viewer */}
      <WhySureWest cityName="Calgary" />

      {/* 7. How It Works, process info now that buyer is leaning in */}
      <HowItWorks cityName="Calgary" otherCities={['Cochrane', 'Canmore']} />

      {/* 8. Our Work (Portfolio), visual proof before final objection handling */}
      <PortfolioCarousel
        heading={
          <>
            Real Roofs Across<br className="hidden md:block" /> Calgary, Cochrane, and Canmore
          </>
        }
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

      {/* 9. FAQ, Calgary-specific, final objection handling right before the ask */}
      <HomeFAQ faqs={CALGARY_FAQS} heading="Calgary Roofing Questions Answered" />

      {/* 10. Bottom CTA */}
      <BottomCTA
        heading={
          <>
            Ready for a Calgary
            <br /> Roofing Contractor
            <br className="hidden md:block" /> You Can Actually Trust?
          </>
        }
        subtext="Red Seal certified roofing across Calgary, Cochrane, and Canmore. In-house crew, free written estimate, 10-year workmanship warranty in writing, and no sales pressure."
      />
    </>
  )
}
