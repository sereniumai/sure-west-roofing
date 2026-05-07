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
  title: { absolute: 'Roofing Contractor Canmore | Sure West Roofing' },
  description:
    'Canmore roofing contractor for steep mountain pitches, snow loads, and chinook winds. Red Seal Journeyman certified. Free written estimates.',
  keywords: [
    'roofing contractor Canmore',
    'Canmore roofer',
    'roofing company Canmore',
    'roof replacement Canmore',
    'roof repair Canmore',
    'mountain roofing Bow Valley',
    'snow load roof Canmore',
    'chinook wind roof Canmore',
    'Red Seal roofer Canmore',
    'residential roofing Canmore',
    'Canmore roofing services',
    'roofing Bow Valley Alberta',
    'ice dam repair Canmore',
  ],
  openGraph: {
    title: 'Roofing Contractor Canmore | Sure West Roofing',
    description:
      'Canmore roofing contractor for steep mountain pitches, snow loads, and chinook winds. Red Seal Journeyman certified. Free written estimates.',
    url: 'https://surewestroofing.ca/canmore-roofing-contractor',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://surewestroofing.ca/canmore-roofing-contractor',
  },
}

// ─── Canmore schema blocks ───────────────────────────────────────────────────

const canmoreBreadcrumbSchema = {
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
      name: 'Roofing Contractor Canmore',
      item: 'https://surewestroofing.ca/canmore-roofing-contractor',
    },
  ],
}

const canmoreServiceSchema = {
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
    name: 'Canmore',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Alberta' },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Canmore Roofing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Replacement Canmore' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Repair Canmore' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ice Dam Repair Canmore' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Maintenance Canmore' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Inspection Canmore' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Skylight Installation Canmore' } },
    ],
  },
}

// ─── FAQ data (Canmore-specific) ─────────────────────────────────────────────

const CANMORE_FAQS = [
  {
    question: 'Do you travel from Cochrane to work on Canmore roofs?',
    answerText:
      "Yes, regularly. Cochrane is about an hour from Canmore and our crews run jobs across the Bow Valley year-round. The distance doesn't change the standard: same Red Seal-led crew, same proven process, same 10-year workmanship guarantee.",
    answer: (
      <>
        Yes, regularly. Cochrane is about an hour from Canmore and our crews run jobs across the Bow Valley year-round. The distance doesn&apos;t change the standard: same Red Seal-led crew, same proven process, same 10-year workmanship guarantee.
      </>
    ),
  },
  {
    question: 'What makes a Canmore roof different from a Calgary or Cochrane roof?',
    answerText:
      "Three things. Pitch: Canmore homes often run steeper than 8:12, which changes safety, fastening, and material choice. Snow load: winter accumulation has to shed properly, which means correct ice-and-water coverage at eaves and proper attic ventilation. Chinook winds: fasteners and underlayment have to handle rapid temperature swings and high-wind events. Standard prairie roofing methods don't always cover all three.",
    answer: (
      <>
        Three things. Pitch: Canmore homes often run steeper than 8:12, which changes safety, fastening, and material choice.
        <br />
        <br />
        Snow load: winter accumulation has to shed properly, which means correct ice-and-water coverage at eaves and proper attic ventilation.
        <br />
        <br />
        Chinook winds: fasteners and underlayment have to handle rapid temperature swings and high-wind events. Standard prairie roofing methods don&apos;t always cover all three.
      </>
    ),
  },
  {
    question: 'What warranty do you offer on a Canmore roof replacement?',
    answerText:
      'Every Canmore roof replacement comes with a 10-year workmanship warranty in writing. We cover any issue tied to how we installed it. Manufacturer shingle warranties (IKO Cambridge, Dynasty, or Nordic) sit on top of that, often running 25 years to lifetime depending on the tier. We register your manufacturer warranty and support any future claim.',
    answer: (
      <>
        Every Canmore{' '}
        <Link href="/roof-replacement" className="faq-link">
          roof replacement
        </Link>{' '}
        comes with a 10-year workmanship warranty in writing. We cover any issue tied to how we installed it. Manufacturer shingle warranties (IKO Cambridge, Dynasty, or Nordic) sit on top of that, often running 25 years to lifetime depending on the tier. We register your manufacturer warranty and support any future claim.
      </>
    ),
  },
  {
    question: 'How do you handle ice dams on Canmore roofs?',
    answerText:
      'Ice dams form when warm attic air melts roof snow that refreezes at the cold eaves. The fix is rarely just clearing the dam. We start with a six-foot ice-and-water shield at the eaves, check attic insulation and ventilation for warm-air leaks, and address the underlying heat-loss issue. Done right once, ice dams stop being an annual problem.',
    answer: (
      <>
        Ice dams form when warm attic air melts roof snow that refreezes at the cold eaves. The fix is rarely just clearing the dam. We start with a six-foot ice-and-water shield at the eaves, check attic insulation and ventilation for warm-air leaks, and address the underlying heat-loss issue. Done right once, ice dams stop being an annual problem.
      </>
    ),
  },
  {
    question: 'How much does a roof replacement cost in Canmore?',
    answerText:
      'Roof replacement cost depends on several factors: roof size, pitch (Canmore homes often run steep), the materials you choose, the condition of the deck underneath, snow-load coverage at the eaves, and any soft-metal work at flashings. We come to your Canmore property in person, walk the roof, and send a clear, itemised written quote.',
    answer: (
      <>
        <Link href="/roof-replacement" className="faq-link">
          Roof replacement
        </Link>{' '}
        cost depends on several factors: roof size, pitch (Canmore homes often run steep), the materials you choose, the condition of the deck underneath, snow-load coverage at the eaves, and any soft-metal work at flashings. We come to your Canmore property in person, walk the roof, and send a clear, itemised written quote.
      </>
    ),
  },
  {
    question: 'What shingles do you install on Canmore homes?',
    answerText:
      "For Canmore we typically recommend IKO Nordic, the impact-rated, mountain-grade tier of our IKO line. It handles steep pitches, snow loads, and chinook freeze-thaw cycles better than the standard Cambridge or Dynasty tiers. We're an IKO ShieldPRO certified installer, so manufacturer warranties stay valid on top of our 10-year workmanship guarantee.",
    answer: (
      <>
        For Canmore we typically recommend IKO Nordic, the impact-rated, mountain-grade tier of our IKO line. It handles steep pitches, snow loads, and chinook freeze-thaw cycles better than the standard Cambridge or Dynasty tiers. We&apos;re an IKO ShieldPRO certified installer, so manufacturer warranties stay valid on top of our 10-year workmanship guarantee.
      </>
    ),
  },
  {
    question: 'Can you work on steep-pitch mountain roofs safely?',
    answerText:
      "Yes. Steep-pitch work requires proper fall arrest systems, anchored harnesses, and a crew trained for the conditions. Our Red Seal Journeyman certification is Canada's highest trade credential, and our crews are trained to the safety standards required for high-pitch and high-wind work. We don't subcontract steep work. The same in-house crew handles every roof.",
    answer: (
      <>
        Yes. Steep-pitch work requires proper fall arrest systems, anchored harnesses, and a crew trained for the conditions. Our Red Seal Journeyman certification is Canada&apos;s highest trade credential, and our crews are trained to the safety standards required for high-pitch and high-wind work. We don&apos;t subcontract steep work. The same in-house crew handles every roof.
      </>
    ),
  },
  {
    question: 'When is the best time of year to replace a roof in Canmore?',
    answerText:
      'Late spring through early fall is the practical window in the Bow Valley. Temperatures are warm enough for proper shingle sealing and dry enough to avoid weather pauses. Booking in late winter or early spring is the easiest way to lock a slot in the best window. We schedule weather-aware: if conditions threaten the install, we pause and secure the site rather than push through.',
    answer: (
      <>
        Late spring through early fall is the practical window in the Bow Valley. Temperatures are warm enough for proper shingle sealing and dry enough to avoid weather pauses. Booking in late winter or early spring is the easiest way to lock a slot in the best window. We schedule weather-aware: if conditions threaten the install, we pause and secure the site rather than push through.
      </>
    ),
  },
]

export default function RoofingContractorCanmorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(canmoreBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(canmoreServiceSchema) }}
      />

      {/* 1. Hero */}
      <Hero
        h1={"Canmore's Trusted\nRoofing Contractor"}
        subtitle="Red Seal Journeyman roofing contractor serving Canmore, Cochrane, and Calgary. Built on character, competency, and proven processes."
        backgroundVideo="/images/sure-west-best-cochrane-roofing-contractor.mp4"
        backgroundImage="/images/Cochrane Roofing Contractors.jpg"
        primaryCTA={{ label: 'Get a Free Estimate', href: '/free-roof-estimate-cochrane' }}
        secondaryCTA={{ label: 'Explore Our Services', href: '/services' }}
        socialProofCount="150+"
        socialProofLabel="satisfied Canmore homeowners"
      />

      {/* 2. Stats + Certifications */}
      <TrustLogos />

      {/* 3. Move the Mountain, brand philosophy anchor before services */}
      <BrandStrip />

      {/* 4. Services Card Grid */}
      <ServicesIconGrid
        eyebrow="What We Do"
        heading={'Every Canmore Roofing Service.\nOne Standard.'}
        body="From a quick roof repair to a full replacement, the standard doesn't change. The same Red Seal crew, proven process, and 10-year written guarantee come with every Canmore roof."
        cta={{ label: 'View All Roofing Services', href: '/services' }}
        services={[
          {
            title: 'Roof Replacement',
            href: '/roof-replacement',
            description:
              "The biggest job your roof will get, run by the same Red Seal crew from tear-off to walkthrough. Deck inspection, IKO install, magnetic nail sweep, and 10-year warranty in writing.",
            image: '/images/roof-replacement-cochrane.webp',
            imageAlt: 'Roof replacement Canmore AB',
          },
          {
            title: 'Roof Repair',
            href: '/roof-repair',
            description:
              "If your roof still has years left in it, we'll tell you so. Cracked shingles, active leaks, failed flashing, or ice dam damage fixed properly, with no upsell to a replacement.",
            image: '/images/roof-repairs-cochrane.webp',
            imageAlt: 'Roof repair Canmore AB',
          },
          {
            title: 'Roof Inspection',
            href: '/roof-inspection',
            description:
              "Buying, selling, or overdue for a check, a real inspection takes time. We're on the roof, in the attic, and around the flashings, with the truth in writing, clear photos, and a plain-language verdict.",
            image: '/images/roof-inspection-cochrane.webp',
            imageAlt: 'Roof inspection Canmore AB',
          },
          {
            title: 'Roof Maintenance',
            href: '/roof-maintenance',
            description:
              "Most roofs don't fail from weather, they fail because no one checks on them. Scheduled visits with flashing top-ups, debris clearing, and small fixes that keep big repairs away.",
            image: '/images/roof-maintenance-cochrane.webp',
            imageAlt: 'Roof maintenance Canmore AB',
          },
          {
            title: 'Siding & Soft Metals',
            href: '/siding-soft-metals',
            description:
              "Flashings, fascia, soffit, eavestroughs, and siding are where crews cut corners. Same Red Seal crew as the roofs, Alberta-weather materials, built for chinook and freeze-thaw.",
            image: '/images/Cochrane Roofing Contractor Gallery 7.webp',
            imageAlt: 'Siding and soft metals Canmore AB',
          },
          {
            title: 'Skylight Installation',
            href: '/skylight-installation',
            description:
              "Natural light without the leaks. Skylights fail when they're rushed, so we seal, flash, and finish them like the rest of the roof depends on it, manufacturer spec on every job.",
            image: '/images/skylight-installation-cochrane.webp',
            imageAlt: 'Skylight installation Canmore AB',
          },
        ]}
      />

      {/* 5. Reviews, proof immediately after services (matches homepage flow) */}
      <Reviews
        sectionBg="#FFFFFF"
        cardBg="#F7F5F0"
        heading={
          <>
            What Canmore Homeowners
            <br className="hidden md:block" /> Say About Sure West Roofing
          </>
        }
        body="Verified Google reviews from homeowners across Canmore, Calgary, and Cochrane."
      />

      {/* 6. Why Sure West, differentiator landing on a primed viewer */}
      <WhySureWest cityName="Canmore" />

      {/* 7. How It Works, process info now that buyer is leaning in */}
      <HowItWorks cityName="Canmore" otherCities={['Calgary', 'Cochrane']} />

      {/* 8. Our Work (Portfolio), visual proof before final objection handling */}
      <PortfolioCarousel
        heading={
          <>
            Real Roofs Across<br className="hidden md:block" /> Canmore, Calgary, and Cochrane
          </>
        }
        images={[
          { src: '/images/Cochrane Roofing Contractor Gallery 1.webp', alt: 'Canmore roofing contractor completed project 1' },
          { src: '/images/Cochrane Roofing Contractor Gallery 2.webp', alt: 'Canmore roofing contractor completed project 2' },
          { src: '/images/Cochrane Roofing Contractor Gallery 3.webp', alt: 'Canmore roofing contractor completed project 3' },
          { src: '/images/Cochrane Roofing Contractor Gallery 4.webp', alt: 'Canmore roofing contractor completed project 4' },
          { src: '/images/Cochrane Roofing Contractor Gallery 5.webp', alt: 'Canmore roofing contractor completed project 5' },
          { src: '/images/Cochrane Roofing Contractor Gallery 6.webp', alt: 'Canmore roofing contractor completed project 6' },
          { src: '/images/Cochrane Roofing Contractor Gallery 7.webp', alt: 'Canmore roofing contractor completed project 7' },
          { src: '/images/Cochrane Roofing Contractor Gallery 8.webp', alt: 'Canmore roofing contractor completed project 8' },
          { src: '/images/Cochrane Roofing Contractor Gallery 9.webp', alt: 'Canmore roofing contractor completed project 9' },
          { src: '/images/Cochrane Roofing Contractor Gallery 10.webp', alt: 'Canmore roofing contractor completed project 10', objectPosition: '70% center' },
          { src: '/images/Cochrane Roofing Contractor Gallery 12.webp', alt: 'Canmore roofing contractor completed project 11' },
          { src: '/images/Cochrane Roofing Contractor Gallery 13.webp', alt: 'Canmore roofing contractor completed project 12' },
          { src: '/images/Cochrane Roofing Contractor Gallery 14.webp', alt: 'Canmore roofing contractor completed project 13' },
          { src: '/images/Cochrane Roofing Contractor Gallery 15.webp', alt: 'Canmore roofing contractor completed project 14', objectPosition: '70% center' },
          { src: '/images/Cochrane Roofing Contractor Gallery 16.webp', alt: 'Canmore roofing contractor completed project 15' },
          { src: '/images/Cochrane Roofing Contractor Gallery 19.webp', alt: 'Canmore roofing contractor completed project 16' },
          { src: '/images/Cochrane Roofing Contractor Gallery 20.webp', alt: 'Canmore roofing contractor completed project 17' },
          { src: '/images/Cochrane Roofing Contractor Gallery 21.webp', alt: 'Canmore roofing contractor completed project 18' },
          { src: '/images/Cochrane Roofing Contractor Gallery 22.webp', alt: 'Canmore roofing contractor completed project 19' },
        ]}
      />

      {/* 9. FAQ, Canmore-specific, final objection handling right before the ask */}
      <HomeFAQ faqs={CANMORE_FAQS} heading="Canmore Roofing Questions Answered" />

      {/* 10. Bottom CTA */}
      <BottomCTA
        heading={
          <>
            Ready for a Canmore
            <br /> Roofing Contractor
            <br className="hidden md:block" /> You Can Actually Trust?
          </>
        }
        subtext="Red Seal certified roofing across Canmore, Cochrane, and Calgary. In-house crew, free written estimate, 10-year workmanship warranty in writing, and no sales pressure."
      />
    </>
  )
}
