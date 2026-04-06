import type { Metadata } from 'next'
import {
  ShieldCheck,
  MapPin,
  ClipboardCheck,
  Home,
  Wrench,
  CloudLightning,
  Search,
  Sun,
} from 'lucide-react'

import { Hero } from '@/components/sections/Hero'
import { ImpactSection } from '@/components/sections/ImpactSection'
import { ReasonsSection } from '@/components/sections/ReasonsSection'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { CredibilitySection } from '@/components/sections/CredibilitySection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ServiceAreasSection } from '@/components/sections/ServiceAreasSection'
import { ContactCTASection } from '@/components/sections/ContactCTASection'

export const metadata: Metadata = {
  title: 'Roofing Contractor Cochrane AB | Roof Replacement & Repair | Cochrane Roofing Pro',
  description: 'Cochrane Roofing Pro. Certified roofing contractor in Cochrane, AB. Roof replacement, repair, hail damage & inspections. Serving Calgary & Canmore. Free estimates.',
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
    title: 'Roofing Contractor Cochrane AB | Cochrane Roofing Pro',
    description: 'Certified roofing contractor in Cochrane, AB. Roof replacement, repair, hail damage & inspections. Free estimates.',
    url: 'https://cochraneroofingpro.ca',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://cochraneroofingpro.ca',
  },
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero
        h1={"Cochrane's Trusted\nRoofing Contractor"}
        subtitle="Protecting homes across Cochrane, Calgary, and Canmore from Alberta's toughest weather. Hail, ice, and everything in between. Certified roofing contractors. Free estimates."
        backgroundImage="/images/Cochrane Roofing Contractors.jpg"
        primaryCTA={{ label: 'Get a Free Estimate', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Our Services', href: '/services' }}
        socialProofCount="150+"
        socialProofLabel="satisfied Cochrane homeowners"
      />

      {/* 2. Stats */}
      <ImpactSection />

      {/* 3. Services */}
      <ServicesGrid
        label="Roofing Services Cochrane AB"
        heading="Roofing Services in Cochrane."
        headingAccent="Every Job, One Standard."
        body="From full roof replacements to emergency hail damage repair in Cochrane. Our certified roofing team delivers the same uncompromising standard on every single job. No subcontractors. No shortcuts. No exceptions."
        cta={{ label: 'View all services', href: '/services' }}
        services={[
          {
            title: 'Roof Replacement',
            href: '/roof-replacement/cochrane',
            description:
              "Complete tear-off and replacement using premium materials engineered for Alberta's extreme weather conditions. Free inspection included on every job.",
            icon: <Home />,
            image: '/images/Cochrane Roof Replacement.jpg',
            imageAlt: 'Roof replacement Cochrane AB',
            features: [
              'Premium asphalt and metal roofing options',
              'Full removal of old materials',
              'Backed by manufacturer warranty',
            ],
          },
          {
            title: 'Roof Repair',
            href: '/roof-repair/cochrane',
            description:
              'Fast, affordable, certified roof repairs in Cochrane that get you back to normal without the stress or disruption. We respond quickly because a damaged roof cannot wait.',
            icon: <Wrench />,
            image: '/images/Cochrane Roof Repair.jpg',
            imageAlt: 'Roof repair Cochrane AB',
            features: [
              'Emergency and non-emergency repairs',
              'All roofing materials covered',
              'Written warranty on all work',
            ],
          },
          {
            title: 'Hail Damage Repair',
            href: '/hail-damage-repair/cochrane',
            description:
              'Alberta hailstorms hit hard and Cochrane is no exception. We respond fast, document everything for your insurance claim, and restore your roof to pre-storm condition.',
            icon: <CloudLightning />,
            image: '/images/Cochrane Roof Replacement.jpg',
            imageAlt: 'Hail damage roof repair Cochrane AB',
            features: [
              'Insurance claim assistance',
              'Photo documentation included',
              'Direct insurer liaison',
            ],
          },
          {
            title: 'Roof Maintenance',
            href: '/roof-maintenance/cochrane',
            description:
              'Regular roof maintenance in Cochrane extends the life of your roof and helps you avoid costly emergency repairs. Prevention is always cheaper than replacement.',
            icon: <ClipboardCheck />,
            image: '/images/Cochrane Roof Repair.jpg',
            imageAlt: 'Roof maintenance Cochrane AB',
            features: [
              'Annual inspection packages',
              'Gutter cleaning and checks',
              'Early problem detection',
            ],
          },
          {
            title: 'Roof Inspection',
            href: '/roof-inspection/cochrane',
            description:
              'Our certified roof and attic inspections in Cochrane give you the full picture before problems become expensive disasters. Essential for home buyers and annual maintenance.',
            icon: <Search />,
            image: '/images/Cochrane Roof Replacement.jpg',
            imageAlt: 'Roof inspection Cochrane AB',
            features: [
              'Full roof and attic assessment',
              'Detailed written report',
              'Photo documentation',
            ],
          },
          {
            title: 'Skylight Installation',
            href: '/skylight-installation/cochrane',
            description:
              'Brighten your Cochrane home with natural light. Our certified team installs skylights properly. No leaks, no drafts, no problems. Completely hassle-free.',
            icon: <Sun />,
            image: '/images/Cochrane Roof Repair.jpg',
            imageAlt: 'Skylight installation Cochrane AB',
            features: [
              'All skylight brands and sizes',
              'Full weatherproofing included',
              'Clean installation guaranteed',
            ],
          },
        ]}
      />

      {/* 4. Why Us */}
      <ReasonsSection
        label="Why Cochrane Roofing Pro"
        heading="Cochrane's Certified Roofing Contractor."
        headingAccent="Built on Trust."
        body="Most roofers show up, do the job, and move on. We don't want that. Every roof we touch gets the same care we'd put into our own home. That's the standard Cochrane homeowners keep coming back for."
        image="/images/Cochrane Roof Replacement.jpg"
        imageAlt="Cochrane roofing contractor at work"
        points={[
          {
            title: 'Certified and qualified',
            description:
              'Our team holds the highest roofing credentials available in Alberta. Every job is done right.',
            icon: <ShieldCheck />,
          },
          {
            title: 'Local and always available',
            description:
              "We're based in Cochrane. When you call, you get a real person, not a call centre.",
            icon: <MapPin />,
          },
          {
            title: 'Honest pricing, no surprises',
            description:
              'The price we quote is the price you pay. Fully itemised. In writing. Always.',
            icon: <ClipboardCheck />,
          },
        ]}
      />

      {/* 5. Process */}
      <CredibilitySection
        label="Our Process"
        heading={"How We Take Care of\nYour Cochrane Roof"}
        body="Three simple steps. From your first enquiry to the final walkthrough. Every stage is managed with complete transparency. No grey areas. No surprises."
        image=""
        imageAlt=""
        badgeNumber=""
        badgeLabel=""
        steps={[
          {
            number: 1,
            title: 'Free Roof Inspection',
            description:
              'We come to you anywhere in Cochrane, Calgary, or Canmore for a free on-site roof assessment. No pressure. No obligation. Just an honest conversation about what your roof needs and what it will cost.',
          },
          {
            number: 2,
            title: 'Clear, Itemised Quote',
            description:
              'You receive a fully itemised written quote with every cost explained upfront. The number on that document is the number you pay on completion. No hidden extras. No last-minute additions. That is our promise.',
          },
          {
            number: 3,
            title: 'Clean, Certified Installation',
            description:
              "Our certified team installs your roof to the highest standard. We don't sign off until the work is right. Your site is left clean. Your roof is built to last.",
          },
        ]}
      />

      {/* 6. Reviews */}
      <TestimonialsSection
        label="Client Reviews"
        heading="What Cochrane Homeowners Say About Us"
        body="Every review is from a real Cochrane homeowner. No templates. No filler."
        reviewCount="80+"
        rating={5}
        googleReviewsUrl="https://www.google.com/maps/place/Cochrane+Roofing+Pro"
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

      {/* 7. Service Areas */}
      <ServiceAreasSection />

      {/* 8. FAQ */}
      <FAQSection
        label="FAQs"
        heading={"Frequently Asked Roofing\nQuestions in Cochrane, AB"}
        body="Honest answers to what Cochrane homeowners ask us most. Still have a question? Contact us and we will get straight back to you."
        schemaEnabled={false}
        faqs={[
          {
            question: 'How much does a roof replacement cost in Cochrane?',
            answer:
              'Roof replacement costs in Cochrane typically range from $8,000 to $25,000 depending on the size of your roof, the materials you choose, and the complexity of the job. Every project is different which is why we offer <a href="/contact">free on-site estimates</a> with a clear written quote before any work begins. Get in touch to book your free inspection.',
          },
          {
            question: 'How do I know if my roof needs replacing or just repairing?',
            answer:
              'If your roof is under 15 years old and the damage is isolated, a <a href="/roof-repair/cochrane">roof repair</a> is usually the right call. If it is over 20 years old, has widespread damage, or is failing in multiple areas, <a href="/roof-replacement/cochrane">replacement</a> is likely more cost effective long term. Our team offers free <a href="/roof-inspection/cochrane">roof inspections in Cochrane</a> to help you make the right decision without any sales pressure.',
          },
          {
            question: 'Do you handle Alberta insurance claims for hail damage?',
            answer:
              'Yes. We have extensive experience working with Alberta insurance companies on hail damage roof repair claims in Cochrane and Calgary. We document all damage with photographs and a detailed inspection report, and we work directly alongside your insurance adjuster to make the process as smooth as possible. Learn more about our <a href="/hail-damage-repair/cochrane">hail damage repair service in Cochrane</a>.',
          },
          {
            question: 'How long does a roof replacement take in Cochrane?',
            answer:
              'Most residential <a href="/roof-replacement/cochrane">roof replacements in Cochrane</a> are completed within one to two days depending on the size and complexity of your roof. We provide a clear timeline before work begins and keep you updated throughout every stage of the project.',
          },
          {
            question: 'Are you licensed and insured to work in Alberta?',
            answer:
              'Yes. Cochrane Roofing Pro is fully licensed and insured to operate in Alberta. We carry full liability insurance and WCB coverage on every single job, protecting both our team and your property.',
          },
          {
            question: 'Do you serve Calgary and Canmore as well as Cochrane?',
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
              'Yes. We understand that a damaged roof cannot wait. We offer <a href="/roof-repair/cochrane">emergency roof repair in Cochrane</a> and the surrounding area, responding as fast as possible to prevent further water damage to your home.',
          },
        ]}
      />

      {/* 9. Contact CTA */}
      <ContactCTASection />
    </>
  )
}
