import type { Metadata } from 'next'

import { Hero } from '@/components/sections/Hero'
import { ServicesIconGrid } from '@/components/sections/ServicesIconGrid'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { PortfolioCarousel } from '@/components/sections/PortfolioCarousel'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { StatsVideoReveal } from '@/components/sections/StatsVideoReveal'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { ContactCTASection } from '@/components/sections/ContactCTASection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ServiceAreasSection } from '@/components/sections/ServiceAreasSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ParallaxImageStrip } from '@/components/sections/ParallaxImageStrip'

export const metadata: Metadata = {
  title: 'Roofing Contractor Cochrane | Sure West Roofing',
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
    title: 'Roofing Contractor Cochrane AB | Sure West Roofing',
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
        subtitle="Cochrane's trusted roofing contractor. Red Seal Journeyman certified. Roof replacement, repair, hail damage and inspections across Cochrane, Calgary and Canmore. Free estimates always."
        backgroundVideo="/images/Cochrane Roofing Contractor.mp4"
        backgroundImage="/images/Cochrane Roofing Contractors.jpg"
        primaryCTA={{ label: 'Get a Free Estimate', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Our Services', href: '/services' }}
        socialProofCount="150+"
        socialProofLabel="satisfied Cochrane homeowners"
      />

      {/* 2. Parallax Video Strip */}
      <ParallaxImageStrip
        src="/images/Cochrane Roofing Contractors.jpg"
        video="/images/Cochrane Roofing Contractor.mp4"
        alt="Cochrane roofing aerial view"
      />

      {/* 3. Services Card Grid */}
      <ServicesIconGrid
        eyebrow="What We Do"
        heading={'Every Roofing Service.\nOne Standard.'}
        body="From full roof replacements to emergency hail damage repair, our Red Seal Journeyman team delivers the same uncompromising standard on every single job."
        services={[
          {
            title: 'Roof Replacement',
            href: '/roof-replacement-cochrane',
            description:
              "Complete tear-off and replacement using premium materials engineered for Alberta's extreme weather. Free inspection included.",
            image: '/images/Cochrane Roof Replacement.jpg',
            imageAlt: 'Roof replacement Cochrane AB',
            review: {
              quote:
                "They replaced our roof after last summer's hailstorm. From the inspection to the final cleanup, everything was professional and on time.",
              author: 'Michelle T',
              location: 'Cochrane, AB',
            },
          },
          {
            title: 'Roof Repair',
            href: '/roof-repair-cochrane',
            description:
              'Fast, affordable, Journeyman-approved repairs that get you back to normal without the stress or the disruption.',
            image: '/images/Cochrane Roof Repair.jpg',
            imageAlt: 'Roof repair Cochrane AB',
          },
          {
            title: 'Hail Damage Repair',
            href: '/hail-damage-repair-cochrane',
            description:
              'Alberta storms hit hard. We respond fast, document everything, and work directly with your insurance adjuster.',
            image: '/images/Cochrane Roof Replacement.jpg',
            imageAlt: 'Hail damage repair Cochrane AB',
          },
          {
            title: 'Roof Maintenance',
            href: '/roof-maintenance-cochrane',
            description:
              'Extend the life of your roof and avoid costly emergency repairs with expert ongoing maintenance from a certified team.',
            image: '/images/Cochrane Roof Replacement.jpg',
            imageAlt: 'Roof maintenance Cochrane AB',
          },
          {
            title: 'Roof Inspection',
            href: '/roof-inspection-cochrane',
            description:
              'Red Seal certified roof and attic inspections that give you the full picture before problems become expensive disasters.',
            image: '/images/Cochrane Roof Repair.jpg',
            imageAlt: 'Roof inspection Cochrane AB',
          },
          {
            title: 'Skylight Installation',
            href: '/skylight-installation-cochrane',
            description:
              'Brighten your home with natural light. Properly installed by a Journeyman certified team. Completely hassle-free.',
            image: '/images/Cochrane Roof Repair.jpg',
            imageAlt: 'Skylight installation Cochrane AB',
          },
        ]}
      />

      {/* 3. Portfolio Carousel */}
      <PortfolioCarousel
        heading={"A Look at What\nWe've Nailed"}
        images={[
          { src: '/images/Cochrane Roof Replacement.jpg', alt: 'Roof replacement project in Cochrane' },
          { src: '/images/Cochrane Roof Repair.jpg', alt: 'Roof repair project in Cochrane' },
          { src: '/images/Cochrane Roofing Contractors.jpg', alt: 'Roofing project aerial view' },
          { src: '/images/Cochrane Roof Replacement.jpg', alt: 'Residential roof replacement' },
          { src: '/images/Cochrane Roof Repair.jpg', alt: 'Professional roof repair' },
          { src: '/images/Cochrane Roofing Contractors.jpg', alt: 'Cochrane roofing work' },
          { src: '/images/Cochrane Roof Replacement.jpg', alt: 'New roof installation' },
        ]}
      />

      {/* 4. Why Choose Us */}
      <WhyChooseUs
        heading={"Because Your Roof Deserves Better Than 'Good Enough'"}
        features={[
          {
            icon: 'ShieldCheck',
            title: 'Certified & Qualified',
            description: 'Our team holds the highest roofing credentials available in Alberta. Every job is done right, every time.',
          },
          {
            icon: 'MapPin',
            title: 'Local & Always Available',
            description: "We're based in Cochrane. When you call, you get a real person, not a call centre. Always.",
          },
          {
            icon: 'ClipboardCheck',
            title: 'Honest Pricing',
            description: 'The price we quote is the price you pay. Fully itemised. In writing. No surprises.',
          },
          {
            icon: 'Award',
            title: 'Premium Materials',
            description: "We use only the best roofing materials engineered for Alberta's extreme weather conditions.",
          },
          {
            icon: 'Clock',
            title: 'Fast Response',
            description: 'Emergency roof damage? We respond quickly because a damaged roof cannot wait.',
          },
          {
            icon: 'FileText',
            title: 'Full Documentation',
            description: 'Photo documentation, detailed reports, and insurance claim assistance on every project.',
          },
        ]}
      />

      {/* 5. Stats + Video Reveal */}
      <StatsVideoReveal
        stats={[
          {
            number: '250',
            suffix: '+',
            label: 'Roofs Completed',
            description: 'From cozy homes to commercial builds, we\'ve covered a lot of ground.',
          },
          {
            number: '20',
            suffix: '+',
            label: 'Years Experience',
            description: 'Skilled, certified, and always up for the climb.',
          },
          {
            number: '100',
            suffix: '%',
            label: 'Free Estimates',
            description: 'Reliable and transparent, how roof estimates should be.',
          },
          {
            number: '5',
            suffix: '.0',
            label: 'Google Rating',
            description: 'Across Google reviews, our customers love the results.',
          },
        ]}
        videoEmbed="https://player.vimeo.com/video/917317949"
        backgroundImage="/images/Cochrane Roofing Contractors.jpg"
      />

      {/* 6. Trust Logos */}
      <TrustLogos />

      {/* 7. Process */}
      <ProcessSection
        heading={"Here's How We Make\nRoofing Easy-Peasy"}
        body="Three simple steps. From your first enquiry to the final walkthrough. Every stage is managed with complete transparency."
        steps={[
          {
            number: 1,
            title: 'Free Roof Inspection',
            description:
              'We come to you anywhere in Cochrane, Calgary, or Canmore for a free on-site roof assessment. No pressure. No obligation. Just an honest conversation about what your roof needs.',
          },
          {
            number: 2,
            title: 'Clear, Itemised Quote',
            description:
              'You receive a fully itemised written quote with every cost explained upfront. The number on that document is the number you pay. No hidden extras.',
          },
          {
            number: 3,
            title: 'Clean, Certified Installation',
            description:
              "Our certified team installs your roof to the highest standard. We don't sign off until the work is right. Your site is left clean. Your roof is built to last.",
          },
        ]}
      />

      {/* 9. Contact Strip */}
      <ContactCTASection />

      {/* 10. Testimonials */}
      <TestimonialsSection
        label="Client Reviews"
        heading={"Don't Take Our Word\nFor It, Take Theirs"}
        body="Every review is from a real Cochrane homeowner. No templates. No filler."
        reviewCount="80+"
        rating={5}
        googleReviewsUrl="https://www.google.com/maps/place/Sure+West+Roofing"
        testimonials={[
          {
            name: 'Michelle T',
            location: 'Cochrane, AB',
            initials: 'MT',
            rating: 5,
            text: "They replaced our roof after last summer's hailstorm. From the inspection to the final cleanup, everything was professional and on time. Would not hesitate to recommend them.",
          },
          {
            name: 'Rachel S',
            location: 'Cochrane, AB',
            initials: 'RS',
            rating: 5,
            text: 'We had an emergency leak during a late October snowstorm. They were at our house within a few hours and had it sorted the same day. Unbelievable service.',
          },
          {
            name: 'Ryan and Sara',
            location: 'Cochrane, AB',
            initials: 'RS',
            rating: 5,
            text: 'Honest, clean, reliable. Visited a day early, showing up to test our confidence in their quality. The roof looks incredible.',
          },
          {
            name: 'Sarah B',
            location: 'Cochrane, AB',
            initials: 'SB',
            rating: 5,
            text: "Three quotes. They weren't the cheapest but they were the only ones who put it all in writing. Worth every penny.",
          },
        ]}
      />

      {/* 11. Service Areas */}
      <ServiceAreasSection />

      {/* 12. FAQ */}
      <FAQSection
        label="FAQs"
        heading={"Let's Climb Through Your\nQuestions, One by One"}
        body="Honest answers to what Cochrane homeowners ask us most. Still have a question? Contact us and we will get straight back to you."
        schemaEnabled={false}
        faqs={[
          {
            question: 'How much does a roof replacement cost in Cochrane?',
            answer:
              'Roof replacement costs in Cochrane typically range from $8,000 to $25,000 depending on the size of your roof, the materials you choose, and the complexity of the job. Every project is different which is why we offer <a href="/contact">free on-site estimates</a> with a clear written quote before any work begins. Get in touch to book your free inspection.',
          },
          {
            question:
              'How do I know if my roof needs replacing or just repairing?',
            answer:
              'If your roof is under 15 years old and the damage is isolated, a <a href="/roof-repair-cochrane">roof repair</a> is usually the right call. If it is over 20 years old, has widespread damage, or is failing in multiple areas, <a href="/roof-replacement-cochrane">replacement</a> is likely more cost effective long term. Our team offers free <a href="/roof-inspection-cochrane">roof inspections in Cochrane</a> to help you make the right decision without any sales pressure.',
          },
          {
            question:
              'Do you handle Alberta insurance claims for hail damage?',
            answer:
              'Yes. We have extensive experience working with Alberta insurance companies on hail damage roof repair claims in Cochrane and Calgary. We document all damage with photographs and a detailed inspection report, and we work directly alongside your insurance adjuster to make the process as smooth as possible. Learn more about our <a href="/hail-damage-repair-cochrane">hail damage repair service in Cochrane</a>.',
          },
          {
            question: 'How long does a roof replacement take in Cochrane?',
            answer:
              'Most residential <a href="/roof-replacement-cochrane">roof replacements in Cochrane</a> are completed within one to two days depending on the size and complexity of your roof. We provide a clear timeline before work begins and keep you updated throughout every stage of the project.',
          },
          {
            question: 'Are you licensed and insured to work in Alberta?',
            answer:
              'Yes. Sure West Roofing is fully licensed and insured to operate in Alberta. We carry full liability insurance and WCB coverage on every single job, protecting both our team and your property.',
          },
          {
            question:
              'Do you serve Calgary and Canmore as well as Cochrane?',
            answer:
              'Yes. While Cochrane is our home base we serve homeowners across Calgary and Canmore too. We have dedicated pages for our <a href="/roofing-contractor-calgary">roofing services in Calgary</a> and our <a href="/roofing-contractor-canmore">roofing services in Canmore</a> if you would like to learn more.',
          },
          {
            question: 'What roofing materials do you use in Cochrane?',
            answer:
              "We work with all major roofing materials suited to Alberta's climate including architectural asphalt shingles, impact-resistant shingles, metal roofing, and flat roofing systems. We help every homeowner choose the right material for their budget, their home, and Cochrane's specific weather conditions.",
          },
          {
            question: 'Do you offer emergency roof repair in Cochrane?',
            answer:
              'Yes. We understand that a damaged roof cannot wait. We offer <a href="/roof-repair-cochrane">emergency roof repair in Cochrane</a> and the surrounding area, responding as fast as possible to prevent further water damage to your home.',
          },
        ]}
      />

      {/* 13. Final CTA */}
      <FinalCTA />
    </>
  )
}
