import type { Metadata } from 'next'
import {
  ShieldCheck,
  MapPin,
  ClipboardCheck,
  Home,
  Wrench,
  CloudLightning,
  AlertTriangle,
  Search,
  Sun,
} from 'lucide-react'
import { generateMetadata as seoMetadata } from '@/lib/seo'
import { Hero } from '@/components/sections/Hero'
import { ImpactSection } from '@/components/sections/ImpactSection'
import { ReasonsSection } from '@/components/sections/ReasonsSection'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { CredibilitySection } from '@/components/sections/CredibilitySection'
import { CTABanner } from '@/components/sections/CTABanner'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { BlogPreview } from '@/components/sections/BlogPreview'
import { FAQSection } from '@/components/sections/FAQSection'

export const metadata: Metadata = seoMetadata({
  title: 'Roofing Contractor Cochrane AB | Sure West Roofing',
  description:
    'Sure West Roofing - Red Seal certified roofing contractor in Cochrane, AB. Roof replacement, repair, hail damage restoration and emergency roofing. Free estimates.',
  slug: '',
})

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero
        h1={"Cochrane's Trusted\nRoofing Contractor"}
        subtitle="Protecting homes across Cochrane, Calgary, and Canmore from Alberta's toughest weather - hail, ice, and everything in between."
        primaryCTA={{ label: 'Book A Free Consultation', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Our Services', href: '/services' }}
        socialProofCount="150+"
        socialProofLabel="satisfied Cochrane homeowners"
        backgroundVideo="/videos/Best Roofing Company Cochrane.mp4"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* 2. Impact */}
      <ImpactSection />

      {/* 3. Services */}
      <ServicesGrid
        label="What we do"
        heading="Professional roofing services in Cochrane, AB"
        body="From full roof replacements to emergency repairs, every job is done by Red Seal certified tradespeople."
        cta={{ label: 'View all services', href: '/services' }}
        services={[
          {
            title: 'Roof Replacement',
            href: '/roof-replacement/cochrane',
            description:
              "Full tear-off and replacement with premium materials built for Alberta's climate.",
            icon: <Home />,
            image: '/images/services/roof-replacement.jpg',
          },
          {
            title: 'Roof Repair',
            href: '/roof-repair/cochrane',
            description:
              'Leaks, damaged shingles, flashing issues and more. Fast, lasting repairs.',
            icon: <Wrench />,
            image: '/images/services/roof-repair.jpg',
          },
          {
            title: 'Hail Damage Repair',
            href: '/hail-damage-repair/cochrane',
            description:
              'Alberta hail damage experts. We handle the repairs and your insurance claim.',
            icon: <CloudLightning />,
            image: '/images/services/hail-damage.jpg',
          },
          {
            title: 'Roof Maintenance',
            href: '/roof-maintenance/cochrane',
            description:
              "Annual maintenance to extend your roof's life and prevent costly repairs.",
            icon: <ClipboardCheck />,
            image: '/images/services/roof-maintenance.jpg',
          },
          {
            title: 'Roof Inspection',
            href: '/roof-inspection/cochrane',
            description:
              'Detailed inspection reports. Know exactly what condition your roof is in.',
            icon: <Search />,
            image: '/images/services/roof-inspection.jpg',
          },
          {
            title: 'Skylight Installation',
            href: '/skylight-installation/cochrane',
            description:
              'Properly sealed skylights installed to Alberta building code.',
            icon: <Sun />,
            image: '/images/services/skylight-installation.jpg',
          },
          {
            title: 'Emergency Roof Repair',
            href: '/emergency-roof-repair/cochrane',
            description:
              '24/7 emergency response across Cochrane, Calgary and surrounding areas.',
            icon: <AlertTriangle />,
            image: '/images/services/emergency-repair.jpg',
          },
        ]}
      />

      {/* 4. Reasons */}
      <ReasonsSection
        label="Why Sure West"
        heading="Reasons to choose our roofing services"
        body="Most roofers show up, do the job, and move on. We don't work that way. Every roof we touch gets the same care we'd put into our own home. That's the standard Craig built this company on, and it's why Cochrane homeowners keep coming back."
        image="/images/cochrane roofing company.png"
        imageAlt="Cochrane roofing company Sure West Roofing"
        points={[
          {
            title: 'Quality you can see',
            description:
              'Red Seal certified means our work meets the highest trade standard in Canada. We use premium materials, never cut corners, and stand behind every install.',
            icon: <ShieldCheck />,
          },
          {
            title: 'Local and always available',
            description:
              "We live and work in Cochrane. When you call, you get a real person, not a call centre. We show up fast, especially when it matters most.",
            icon: <MapPin />,
          },
          {
            title: 'Honest pricing, no surprises',
            description:
              "You get a clear, itemised quote before any work begins. No hidden fees, no pressure. Just a straight answer on what your roof needs and what it costs.",
            icon: <ClipboardCheck />,
          },
        ]}
      />

      {/* 4. Credibility / Process */}
      <CredibilitySection
        label="Our process"
        heading="How we take care of your Cochrane roof"
        image="/images/credibility.jpg"
        imageAlt="Red Seal certified roofing team Cochrane"
        badgeNumber="Red Seal"
        badgeLabel="Certified contractor"
        steps={[
          {
            number: 1,
            title: 'Free roof inspection',
            description:
              'We assess your roof thoroughly and give you an honest report -no upselling, no pressure.',
          },
          {
            number: 2,
            title: 'Clear, itemised quote',
            description:
              "You get a written quote with everything broken down. No hidden fees, no surprises when the invoice arrives.",
          },
          {
            number: 3,
            title: 'Clean, certified installation',
            description:
              "Our Red Seal crew arrives on time, works clean, and doesn't leave until the job is done right and the site is clear.",
          },
        ]}
      />

      {/* 5. CTA Banner */}
      <CTABanner
        heading="Ready to protect your Cochrane home?"
        subtext="Get a free, no-obligation estimate from Cochrane's Red Seal roofing contractor. Most estimates completed within 48 hours."
        primaryCTA={{ label: 'Get a free estimate', href: '/contact' }}
        secondaryCTA={{ label: '(403) 000-0000', href: 'tel:4030000000' }}
        backgroundImage="/images/cta-bg.jpg"
      />

      {/* 6. Testimonials */}
      <TestimonialsSection
        label="Client reviews"
        heading="What Cochrane homeowners say about us"
        body="Every review is from a real Cochrane-area homeowner. No templates, no filler."
        reviewCount="80+"
        rating={5}
        testimonials={[
          {
            name: 'Jason K.',
            location: 'Cochrane, AB',
            initials: 'JK',
            rating: 5,
            text: "Sure West replaced our roof after last summer's hailstorm. From the inspection to the final cleanup, everything was professional and on time. Would not hesitate to recommend them.",
          },
          {
            name: 'Michelle T.',
            location: 'Cochrane, AB',
            initials: 'MT',
            rating: 5,
            text: 'We had an emergency leak during a late-October snowstorm. They were at our house within a few hours and had it sorted the same day. Unbelievable service.',
          },
          {
            name: 'Ryan & Sara L.',
            location: 'Springbank, AB',
            initials: 'RL',
            rating: 5,
            text: "Honest quote, clean crew, finished a day early. Knowing they're Red Seal certified gave us real confidence in the quality. The roof looks fantastic.",
          },
          {
            name: 'David M.',
            location: 'Cochrane, AB',
            initials: 'DM',
            rating: 5,
            text: "Had three quotes. Sure West wasn't the cheapest but they were the only Red Seal crew. Three years on and not a single issue. Worth every cent.",
          },
        ]}
      />

      {/* 7. Blog Preview */}
      <BlogPreview
        label="Roofing tips"
        heading="Helpful roofing articles for Cochrane homeowners"
        body="Practical advice on protecting your roof through Alberta's seasons."
        cta={{ label: 'View all articles', href: '/blog' }}
        posts={[
          {
            slug: 'hail-season-cochrane',
            category: 'Hail Damage',
            title: 'What Alberta hail season means for your Cochrane roof',
            date: 'March 2025',
            excerpt:
              "Alberta sits in one of Canada's most active hail corridors. Here's what every Cochrane homeowner should know before summer.",
            image: '/images/blog-hail.jpg',
          },
          {
            slug: 'roof-replacement-cost-cochrane',
            category: 'Costs & Budgeting',
            title: 'How much does a roof replacement cost in Cochrane?',
            date: 'February 2025',
            excerpt:
              'A realistic breakdown of what Cochrane homeowners pay for a full roof replacement in 2025.',
            image: '/images/blog-cost.jpg',
          },
          {
            slug: 'signs-roof-needs-replacing',
            category: 'Maintenance',
            title: '8 signs your Cochrane roof needs replacing',
            date: 'January 2025',
            excerpt:
              'Most roof failures give warning signs months before they become emergencies. Here\'s what to look for.',
            image: '/images/blog-signs.jpg',
          },
        ]}
      />

      {/* 8. FAQ */}
      <FAQSection
        label="Common questions"
        heading="Frequently asked questions"
        body="Honest answers to what Cochrane homeowners ask us most often."
        schemaEnabled={true}
        faqs={[
          {
            question: 'How much does a roof replacement cost in Cochrane?',
            answer:
              'Most residential roof replacements in Cochrane range from $8,000 to $18,000 depending on roof size, pitch, and materials. We provide a detailed written quote after a free inspection so you know exactly what to expect before any work begins.',
          },
          {
            question:
              'How do I know if my roof needs replacing or just repairing?',
            answer:
              "If your roof is under 15 years old and damage is isolated to one area, repair is usually the right call. If it's over 20 years old, has widespread granule loss, or has experienced major hail impact, replacement is typically more cost-effective long term. A free inspection will tell you exactly where you stand.",
          },
          {
            question:
              'Do you handle Alberta insurance claims for hail damage?',
            answer:
              'Yes. We work directly with most Alberta insurance providers and can help document damage for your claim. We do not charge separately for this -it\'s part of the service.',
          },
          {
            question:
              'How long does a roof replacement take in Cochrane?',
            answer:
              'Most standard residential replacements take 1 to 3 days depending on roof size and complexity. We give you a clear timeline before we start and keep you updated throughout.',
          },
          {
            question:
              'Are you licensed and insured to work in Alberta?',
            answer:
              'Yes. Sure West Roofing is fully licensed in Alberta, carries comprehensive liability insurance, and our lead roofers hold Red Seal certification -the highest interprovincial trade standard in Canada.',
          },
        ]}
      />
    </>
  )
}
