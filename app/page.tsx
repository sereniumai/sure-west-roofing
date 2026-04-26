import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

import { Hero } from '@/components/sections/Hero'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { ServicesIconGrid } from '@/components/sections/ServicesIconGrid'

// Below-the-fold: code-split so these JS chunks don't block initial page JS.
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
  title: 'Roofing Contractor Cochrane',
  description:
    'Red Seal Journeyman certified roofing contractor in Cochrane, AB. Roof replacement, repair, hail damage & inspections serving Calgary & Canmore. Free estimates.',
  keywords: [
    'roofing contractor Cochrane',
    'roofer Cochrane AB',
    'roofing company Cochrane Alberta',
    'roof replacement Cochrane',
    'roof repair Cochrane',
    'hail damage roof repair Cochrane',
    'emergency roof repair Cochrane',
    'roof inspection Cochrane AB',
    'skylight installation Cochrane',
    'roofing contractor Calgary',
    'roofing contractor Canmore',
    'Red Seal roofing contractor Alberta',
    'residential roofing Cochrane',
    'Alberta roofing contractor',
    'Cochrane roofer',
  ],
  openGraph: {
    title: 'Roofing Contractor Cochrane | Sure West Roofing',
    description:
      'Certified roofing contractor in Cochrane, AB. Roof replacement, repair, hail damage & inspections. Free estimates.',
    url: 'https://surewestroofing.ca',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://surewestroofing.ca',
  },
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero
        h1={"Cochrane's Trusted\nRoofing Contractor"}
        subtitle="Red Seal Journeyman certified with over 250 roofs completed across Cochrane, Calgary and Canmore. Most replacements finished in a single day. We reply fast, even after hours."
        backgroundVideo="/images/Cochrane Roofing Contractor.mp4"
        backgroundImage="/images/Cochrane Roofing Contractors.jpg"
        primaryCTA={{ label: 'Get a Free Estimate', href: '/free-roof-estimate-cochrane' }}
        secondaryCTA={{ label: 'Explore Our Services', href: '/services' }}
        socialProofCount="150+"
        socialProofLabel="satisfied Cochrane homeowners"
      />

      {/* 2. Stats + Certifications */}
      <TrustLogos />

      {/* 3. Services Card Grid */}
      <ServicesIconGrid
        eyebrow="What We Do"
        heading={'Every Roofing Service.\nOne Standard.'}
        body="From full roof replacements to emergency hail damage repair, our Red Seal Journeyman team delivers the same uncompromising standard on every single job."
        cta={{ label: 'View All Roofing Services', href: '/services' }}
        services={[
          {
            title: 'Roof Replacement',
            href: '/roof-replacement',
            description:
              'Red Seal Journeyman certified tear-off and re-roof using IKO materials and a 10-year workmanship warranty. Most Cochrane jobs completed in a single day.',
            image: '/images/Roof Replacement Cochrane.avif',
            imageAlt: 'Roof replacement Cochrane AB',
            review: {
              quote:
                "I sought out this company to replace my aging roof due to their solid reputation in the community. They did not disappoint.",
              author: 'Bruce E',
              location: 'Cochrane, AB',
            },
          },
          {
            title: 'Roof Repair',
            href: '/roof-repair',
            description:
              'Cracked shingles, active leaks, failed flashing, or ice dam damage: our Cochrane roof repair crew diagnoses the cause and fixes it right the first time.',
            image: '/images/Roof Repair Cochrane.avif',
            imageAlt: 'Roof repair Cochrane AB',
            review: {
              quote:
                "I had a leak in my roof and they fix it in no time with extreme quality. Very honest and hard working people.",
              author: 'Caroline Esteves',
              location: 'Cochrane, AB',
            },
          },
          {
            title: 'Hail Damage Repair',
            href: '/hail-damage-repair',
            description:
              'We assess the damage, document everything, and manage your insurance adjuster from first call to final sign-off. No out-of-pocket cost to get started.',
            image: '/images/Roof Repair Cochrane.avif',
            imageAlt: 'Hail damage repair Cochrane AB',
            review: {
              quote:
                "Sure West Roofing provided great service from the very prompt initial inspection to determine the extent of hail damage to the roof.",
              author: 'Karen Kerkhoff',
              location: 'Cochrane, AB',
            },
          },
          {
            title: 'Roof Maintenance',
            href: '/roof-maintenance',
            description:
              'Scheduled visits, flashing top-ups, debris clearing, and minor repairs before they become major ones. The smartest way to extend the life of your Cochrane roof.',
            image: '/images/Roof Replacement Cochrane.avif',
            imageAlt: 'Roof maintenance Cochrane AB',
            review: {
              quote:
                "I've had Sure West come fix some small issues with my roof a few times. They are always honest and do great work.",
              author: 'BOA REI',
              location: 'Cochrane, AB',
            },
          },
          {
            title: 'Roof Inspection',
            href: '/roof-inspection',
            description:
              'Buying, selling, or overdue for a check: our Cochrane roof inspection covers every surface and the attic below, with a written report and photos.',
            image: '/images/Roof Inspection Cochrane.avif',
            imageAlt: 'Roof inspection Cochrane AB',
            review: {
              quote:
                "Didn't try to sell me a new roof, but gave an honest opinion on how much life the roof has.",
              author: 'Greg Carmichael',
              location: 'Cochrane, AB',
            },
          },
          {
            title: 'Skylight Installation',
            href: '/skylight-installation',
            description:
              'Natural light without the leaks. Our Cochrane skylight installation covers new units, full replacements, and resealing, all waterproofed and flashed to manufacturer spec.',
            image: '/images/Roof Installation Cochrane.avif',
            imageAlt: 'Skylight installation Cochrane AB',
            review: {
              quote:
                "We ran into an issue with our skylight and they handled the job in the most professional way.",
              author: 'M D',
              location: 'Cochrane, AB',
            },
          },
        ]}
      />

      {/* 4. Why Sure West */}
      <WhySureWest />

      {/* 5. Process */}
      <HowItWorks />

      {/* 6. Move the Mountain Brand Strip */}
      <BrandStrip />

      {/* 7. Reviews */}
      <Reviews />

      {/* 7. Our Work (Portfolio) */}
      <PortfolioCarousel
        images={[
          { src: '/images/Cochrane Roofing Contractor Gallery 1.webp', alt: 'Cochrane roofing contractor project 1' },
          { src: '/images/Cochrane Roofing Contractor Gallery 2.webp', alt: 'Cochrane roofing contractor project 2' },
          /* TODO: replace with Sure West truck or crew shot for brand continuity */
          { src: '/images/Cochrane Roofing Contractor Gallery 3.webp', alt: 'Cochrane roofing contractor project 3' },
          { src: '/images/Cochrane Roofing Contractor Gallery 4.webp', alt: 'Cochrane roofing contractor project 4' },
          { src: '/images/Cochrane Roofing Contractor Gallery 5.webp', alt: 'Cochrane roofing contractor project 5' },
          { src: '/images/Cochrane Roofing Contractor Gallery 6.webp', alt: 'Cochrane roofing contractor project 6' },
          { src: '/images/Cochrane Roofing Contractor Gallery 7.webp', alt: 'Cochrane roofing contractor project 7' },
          { src: '/images/Cochrane Roofing Contractor Gallery 8.webp', alt: 'Cochrane roofing contractor project 8' },
          { src: '/images/Cochrane Roofing Contractor Gallery 9.webp', alt: 'Cochrane roofing contractor project 9' },
          { src: '/images/Cochrane Roofing Contractor Gallery 10.webp', alt: 'Cochrane roofing contractor project 10', objectPosition: '70% center' },
          { src: '/images/Cochrane Roofing Contractor Gallery 12.webp', alt: 'Cochrane roofing contractor project 11' },
          { src: '/images/Cochrane Roofing Contractor Gallery 13.webp', alt: 'Cochrane roofing contractor project 12' },
          { src: '/images/Cochrane Roofing Contractor Gallery 14.webp', alt: 'Cochrane roofing contractor project 13' },
          { src: '/images/Cochrane Roofing Contractor Gallery 15.webp', alt: 'Cochrane roofing contractor project 14', objectPosition: '70% center' },
          { src: '/images/Cochrane Roofing Contractor Gallery 16.webp', alt: 'Cochrane roofing contractor project 15' },
          { src: '/images/Cochrane Roofing Contractor Gallery 19.webp', alt: 'Cochrane roofing contractor project 16' },
          { src: '/images/Cochrane Roofing Contractor Gallery 20.webp', alt: 'Cochrane roofing contractor project 17' },
          { src: '/images/Cochrane Roofing Contractor Gallery 21.webp', alt: 'Cochrane roofing contractor project 18' },
          { src: '/images/Cochrane Roofing Contractor Gallery 22.webp', alt: 'Cochrane roofing contractor project 19' },
        ]}
      />

      {/* 8. FAQ */}
      <HomeFAQ />

      {/* 9. Bottom CTA */}
      <BottomCTA
        heading={
          <>
            Ready for a Cochrane Roofing Contractor
            <br className="hidden md:block" /> You Can Actually Trust?
          </>
        }
        subtext="Red Seal certified roofing across Cochrane, Calgary, and Canmore. Free written estimate, 10-year workmanship warranty, and no sales pressure."
      />
    </>
  )
}
