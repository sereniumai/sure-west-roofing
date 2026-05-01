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
  title: 'Roofing Contractor Canmore',
  description:
    'Red Seal Journeyman certified roofing contractor serving Canmore and the Bow Valley. Built for mountain snow loads, chinook winds, and alpine architectural rules. Free written estimate.',
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
      'Red Seal certified roofing contractor serving Canmore. Built for Bow Valley snow loads, chinook winds, and alpine architectural control.',
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
      'Yes. Canmore is a core Sure West service area. Our crew drives the Trans-Canada west from our Cochrane base, typically an hour each way. Travel is included in every Canmore quote, so there is no extra charge compared with an in-town Cochrane roof.',
    answer: (
      <>
        Yes. Canmore is a core Sure West service area. Our crew drives the Trans-Canada west
        from our Cochrane base, typically an hour each way. Travel is included in every Canmore
        quote, so there is no extra charge compared with an in-town Cochrane roof.
      </>
    ),
  },
  {
    question: 'What makes a Canmore roof different from a Calgary or Cochrane roof?',
    answerText:
      'Three things: snow load, pitch, and wind. Canmore sits at roughly 1,300 metres and carries heavier seasonal snow loads than anywhere in the Calgary region. Rooflines are steeper to shed that snow. And the valley funnels chinook winds that can lift improperly fastened shingles. Every Sure West install in Canmore is built around those three realities.',
    answer: (
      <>
        Three things: snow load, pitch, and wind. Canmore sits at roughly 1,300 metres and
        carries heavier seasonal snow loads than anywhere in the Calgary region. Rooflines are
        steeper to shed that snow. And the valley funnels chinook winds that can lift improperly
        fastened shingles. Every Sure West install in Canmore is built around those three
        realities.
      </>
    ),
  },
  {
    question: 'Do you work in Canmore architectural control zones?',
    answerText:
      "Yes. Canmore has strict architectural guidelines, and in specific neighbourhoods like Three Sisters, Silvertip, and the Resort Centre, material and colour choices must pass architectural review. Sure West submits compliant shingle and accessory selections, and can liaise with your strata or architectural control committee directly. We won't quote a roof that hasn't been pre-cleared for approval.",
    answer: (
      <>
        Yes. Canmore has strict architectural guidelines, and in specific neighbourhoods like
        Three Sisters, Silvertip, and the Resort Centre, material and colour choices must pass
        architectural review. Sure West submits compliant shingle and accessory selections, and
        can liaise with your strata or architectural control committee directly. We will not
        quote a roof that has not been pre-cleared for approval.
      </>
    ),
  },
  {
    question: 'How do you handle ice dams on Canmore roofs?',
    answerText:
      "Ice dams are a Canmore-specific problem because of the snow-melt-refreeze cycle driven by chinooks and daytime sun. The real fix is not aggressive snow removal. It is better attic insulation, full ice-and-water shield at the eaves (usually six feet up the slope, double the Calgary-region standard), and properly vented soffits. Sure West builds every Canmore install to that spec from day one.",
    answer: (
      <>
        Ice dams are a Canmore-specific problem because of the snow-melt-refreeze cycle driven
        by chinooks and daytime sun. The real fix is not aggressive snow removal. It is better
        attic insulation, full ice-and-water shield at the eaves (usually six feet up the
        slope, double the Calgary-region standard), and properly vented soffits. Sure West
        builds every Canmore install to that spec from day one.
      </>
    ),
  },
  {
    question: 'How much does a roof replacement cost in Canmore?',
    answerText:
      'Most Canmore roof replacements fall between $14,000 and $38,000 depending on pitch, square footage, decking condition, and whether your home sits inside an architectural control zone. Steep alpine pitches, heavier ice-and-water protection, and premium shingle tiers push Canmore roofs higher than their Calgary equivalents. Every Sure West quote is fixed in writing before work begins.',
    answer: (
      <>
        Most Canmore roof replacements fall between $14,000 and $38,000 depending on pitch,
        square footage, decking condition, and whether your home sits inside an architectural
        control zone. Steep alpine pitches, heavier ice-and-water protection, and premium
        shingle tiers push Canmore roofs higher than their Calgary equivalents. Every Sure West
        quote is fixed in writing before work begins.
      </>
    ),
  },
  {
    question: 'What shingles do you install on Canmore homes?',
    answerText:
      'IKO Nordic is our default recommendation for Canmore. It is Class 4 impact-rated, tested for high wind uplift, and specifically engineered for mountain climates with heavy snow and freeze-thaw cycles. For architectural-control zones that require a specific aesthetic, IKO Dynasty in an approved colour is our second option. Both qualify for ShieldPRO warranty coverage when installed by Sure West.',
    answer: (
      <>
        IKO Nordic is our default recommendation for Canmore. It is Class 4 impact-rated, tested
        for high wind uplift, and specifically engineered for mountain climates with heavy snow
        and freeze-thaw cycles. For architectural-control zones that require a specific
        aesthetic, IKO Dynasty in an approved colour is our second option. Both qualify for
        ShieldPRO warranty coverage when installed by Sure West.
      </>
    ),
  },
  {
    question: 'Can you work on steep-pitch mountain roofs safely?',
    answerText:
      "Yes. Every Sure West crew member holds current Fall Protection certification, and we use full-harness, roof-anchor, and scaffolding systems on any pitch over 7:12. Most Canmore mountain homes are 8:12 to 12:12. We price safety into every Canmore quote. It's not an extra.",
    answer: (
      <>
        Yes. Every Sure West crew member holds current Fall Protection certification, and we
        use full-harness, roof-anchor, and scaffolding systems on any pitch over 7:12. Most
        Canmore mountain homes are 8:12 to 12:12. We price safety into every Canmore quote.
        It is not an extra.
      </>
    ),
  },
  {
    question: 'When is the best time of year to replace a roof in Canmore?',
    answerText:
      "Late May through late September is the window most Canmore homeowners target. Nighttime temperatures are consistently above the sealant activation threshold for asphalt shingles, and you avoid surprise snow events. Sure West also installs through October shoulder weather when the forecast allows, and books emergency repairs year-round. Avoid replacing in mid-winter unless it is an insurance emergency.",
    answer: (
      <>
        Late May through late September is the window most Canmore homeowners target.
        Nighttime temperatures are consistently above the sealant activation threshold for
        asphalt shingles, and you avoid surprise snow events. Sure West also installs through
        October shoulder weather when the forecast allows, and books{' '}
        <Link href="/roof-repair" className="faq-link">
          emergency repairs
        </Link>{' '}
        year-round. Avoid replacing in mid-winter unless it is an insurance emergency.
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
        subtitle="Red Seal Journeyman certified with over 250 roofs completed across Canmore, Cochrane and Calgary. Quality workmanship backed by a written 10-year guarantee. We reply fast, even after hours."
        backgroundVideo="/images/sure-west-best-cochrane-roofing-contractor.mp4"
        backgroundImage="/images/Cochrane Roofing Contractors.jpg"
        primaryCTA={{ label: 'Get a Free Estimate', href: '/free-roof-estimate-cochrane' }}
        secondaryCTA={{ label: 'Explore Our Services', href: '/services' }}
        socialProofCount="150+"
        socialProofLabel="satisfied Canmore homeowners"
      />

      {/* 2. Stats + Certifications */}
      <TrustLogos />

      {/* 3. Services Card Grid */}
      <ServicesIconGrid
        eyebrow="What We Do"
        heading={'Every Canmore Roofing Service.\nOne Standard.'}
        body="From full roof replacements to emergency hail damage repair, our Red Seal Journeyman team delivers the same uncompromising standard on every single job."
        cta={{ label: 'View All Roofing Services', href: '/services' }}
        services={[
          {
            title: 'Roof Replacement',
            href: '/roof-replacement',
            description:
              "Tear-off and reroof on Canmore's steep pitches using IKO Nordic shingles, six-foot ice and water shield at the eaves, and chinook-rated fastening. 10-year workmanship warranty.",
            image: '/images/roof-replacement-cochrane.webp',
            imageAlt: 'Roof replacement Canmore AB',
          },
          {
            title: 'Roof Repair',
            href: '/roof-repair',
            description:
              "Ice dam damage, wind-lifted shingles, cracked flashings, or a leak on an 8:12 pitch. Our Red Seal Canmore crew diagnoses the cause and warrants every fix.",
            image: '/images/roof-repairs-cochrane.webp',
            imageAlt: 'Roof repair Canmore AB',
          },
          {
            title: 'Roof Inspection',
            href: '/roof-inspection',
            description:
              "Pre-purchase, pre-sale, or just overdue. Our Canmore roof inspection covers every pitch, the attic, and ice-and-water coverage, with a written photo report and a plain-language verdict.",
            image: '/images/roof-inspection-cochrane.webp',
            imageAlt: 'Roof inspection Canmore AB',
          },
          {
            title: 'Roof Maintenance',
            href: '/roof-maintenance',
            description:
              "Spring and autumn visits tailored to Canmore: needle clearing, chinook-season flashing checks, and pre-winter vent inspections. The smartest way to extend a mountain roof.",
            image: '/images/roof-maintenance-cochrane.webp',
            imageAlt: 'Roof maintenance Canmore AB',
          },
          {
            title: 'Siding & Soft Metals',
            href: '/siding-soft-metals',
            description:
              "Siding, eavestroughs, fascia, and soffits on Canmore mountain homes. Premium materials built for chinook winds and freeze-thaw, finished by our Red Seal Bow Valley crew.",
            image: '/images/Cochrane Roofing Contractor Gallery 7.webp',
            imageAlt: 'Siding and soft metals Canmore AB',
          },
          {
            title: 'Skylight Installation',
            href: '/skylight-installation',
            description:
              "Alpine skylights built for Canmore snow loads and freeze-thaw cycles. New units, replacements, and resealing, flashed to manufacturer spec for mountain light without the leaks.",
            image: '/images/skylight-installation-cochrane.webp',
            imageAlt: 'Skylight installation Canmore AB',
          },
        ]}
      />

      {/* 4. Reviews, proof immediately after services (matches homepage flow) */}
      <Reviews
        sectionBg="#F7F5F0"
        cardBg="#FFFFFF"
        heading={
          <>
            What Canmore Homeowners
            <br className="hidden md:block" /> Say About Sure West Roofing
          </>
        }
        body="Here is what homeowners across Canmore, Cochrane and Calgary say."
      />

      {/* 5. Our Work (Portfolio), paired with reviews to keep proof block tight */}
      <PortfolioCarousel
        heading={
          <>
            Roofing Projects Completed Across<br className="hidden md:block" /> Canmore, Cochrane &amp; Calgary
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

      {/* 6. Why Sure West, differentiator landing on a primed viewer */}
      <WhySureWest
        heading={
          <>
            Canmore&apos;s Red Seal Certified
            <br />
            Roofing Contractor
          </>
        }
        body="Every roofing contractor in Canmore says they are the best. Here is what actually sets Sure West apart."
        cityName="Canmore"
      />

      {/* 7. How It Works, process info now that buyer is leaning in */}
      <HowItWorks cityName="Canmore" otherCities={['Cochrane', 'Calgary']} />

      {/* 8. Move the Mountain, emotional moment before the rational close */}
      <BrandStrip />

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
        subtext="Red Seal certified roofing across Canmore, Cochrane, and Calgary. Free written estimate, 10-year workmanship warranty, and no sales pressure."
      />
    </>
  )
}
