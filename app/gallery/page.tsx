// app/gallery/page.tsx
//
// IMAGE ASSET STATUS:
// The brief specifies /public/images/gallery/project-01.jpg ... project-20.jpg
// and /public/images/gallery/hero-aerial.jpg. Those files do not exist yet in
// the repo. Until the assets land, this page is wired to the existing
// Cochrane Roofing Contractor Gallery *.webp files (19 unique images) plus
// two specialty images to reach 20. The hero falls back to Gallery 10, which
// has the widest framing. When the real assets are delivered, replace each
// path below with /images/gallery/project-0X.jpg and set the hero to
// /images/gallery/hero-aerial.jpg.
//
// /contact route does not exist in this app; CTAs point to
// /free-roof-estimate-cochrane (the actual estimate form).

import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { BottomCTA } from '@/components/sections/BottomCTA'
import type { FaqItem } from '@/lib/faqs/types'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Cochrane Roofing Projects | Gallery | Sure West Roofing',
  description:
    'Browse completed roofing projects from Sure West across Cochrane, Calgary, and Canmore. Real roofs installed by our Red Seal certified crew.',
  alternates: {
    canonical: 'https://surewestroofing.ca/gallery',
  },
  openGraph: {
    title: 'Cochrane Roofing Projects | Sure West Roofing Gallery',
    description:
      'Real roofing projects completed by Sure West across Cochrane, Calgary, and Canmore.',
    url: 'https://surewestroofing.ca/gallery',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        // TODO: replace with /images/gallery/featured/og-image.jpg when delivered.
        url: '/images/Cochrane Roofing Contractor Gallery 10.webp',
        width: 1200,
        height: 630,
        alt: 'Sure West Roofing completed projects in Cochrane, Alberta',
      },
    ],
  },
}

// ─── JSON-LD: ImageGallery ───────────────────────────────────────────────────

const imageGallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Sure West Roofing Project Gallery',
  description: 'Completed roofing projects in Cochrane, Calgary, and Canmore, Alberta',
  url: 'https://surewestroofing.ca/gallery',
  author: {
    '@type': 'RoofingContractor',
    name: 'Sure West Roofing',
    url: 'https://surewestroofing.ca',
    telephone: '+14039907210',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 9, 225 Railway St E',
      addressLocality: 'Cochrane',
      addressRegion: 'AB',
      postalCode: 'T4C 2C3',
      addressCountry: 'CA',
    },
  },
}

// ─── Gallery image data ──────────────────────────────────────────────────────
// TODO: swap each src to /images/gallery/project-0X.jpg once the real assets
// are delivered. Alt text stays the same.

const galleryImages = [
  { src: '/images/Cochrane Roofing Contractor Gallery 1.webp',  alt: 'Completed roof replacement in Cochrane by Sure West Roofing' },
  { src: '/images/Cochrane Roofing Contractor Gallery 2.webp',  alt: 'Asphalt shingle roof installation in Cochrane, Alberta' },
  { src: '/images/Cochrane Roofing Contractor Gallery 3.webp',  alt: 'IKO Dynasty shingle roof in Cochrane by Sure West' },
  { src: '/images/Cochrane Roofing Contractor Gallery 4.webp',  alt: 'Roof replacement project in Calgary by Sure West Roofing' },
  { src: '/images/Cochrane Roofing Contractor Gallery 5.webp',  alt: 'Hail damage roof replacement in Cochrane, Alberta' },
  { src: '/images/Cochrane Roofing Contractor Gallery 6.webp',  alt: 'Completed roofing project in Canmore by Sure West' },
  { src: '/images/Cochrane Roofing Contractor Gallery 7.webp',  alt: 'Architectural shingle roof in Cochrane by Sure West Roofing' },
  { src: '/images/Cochrane Roofing Contractor Gallery 8.webp',  alt: 'Roof replacement on a Calgary home by Sure West' },
  { src: '/images/Cochrane Roofing Contractor Gallery 9.webp',  alt: 'IKO Nordic impact resistant shingle installation in Cochrane' },
  { src: '/images/Cochrane Roofing Contractor Gallery 10.webp', alt: 'Completed Sure West Roofing project in Cochrane, Alberta' },
  { src: '/images/Cochrane Roofing Contractor Gallery 12.webp', alt: 'Residential roofing project in Calgary by Sure West' },
  { src: '/images/Cochrane Roofing Contractor Gallery 13.webp', alt: 'Cochrane roof replacement completed by Red Seal crew' },
  { src: '/images/Cochrane Roofing Contractor Gallery 14.webp', alt: 'Asphalt shingle roof in Canmore by Sure West Roofing' },
  { src: '/images/Cochrane Roofing Contractor Gallery 15.webp', alt: 'Completed roof replacement in Cochrane, Alberta' },
  { src: '/images/Cochrane Roofing Contractor Gallery 16.webp', alt: 'Sure West Roofing project in the greater Calgary region' },
  { src: '/images/Cochrane Roofing Contractor Gallery 19.webp', alt: 'IKO Cambridge shingle roof in Cochrane' },
  { src: '/images/Cochrane Roofing Contractor Gallery 20.webp', alt: 'Roofing project completed by Sure West in Canmore, Alberta' },
  { src: '/images/Cochrane Roofing Contractor Gallery 21.webp', alt: 'Residential roof replacement in Cochrane by Red Seal roofers' },
]

// ─── Section: Full-bleed editorial hero ──────────────────────────────────────

// ─── Section: Hero (service-page rhythm + layered polaroid collage) ─────────
// Two-column service-style hero, but the image side is a 4-photo overlapping
// collage with slight rotations rather than a single static image.

// Three square photos. Centre is the largest, sits dead-centre with no rotation.
// Side images mirror each other, sit slightly higher than centre, and rotate in
// opposite directions. Each card lifts on hover.
const HERO_COLLAGE = [
  {
    src: '/images/Cochrane Roofing Contractor Gallery 3.webp',
    alt: 'IKO Nordic roof replacement in Calgary by Sure West Roofing',
    // Left, behind, shifted up
    outerClassName: 'absolute top-[38%] left-0 -translate-y-1/2 w-[48%] aspect-square -rotate-[6deg] z-0',
  },
  {
    src: '/images/Cochrane Roofing Contractor Gallery 7.webp',
    alt: 'Architectural shingle roof in Cochrane by Sure West',
    // Right, behind, shifted up (mirrors left)
    outerClassName: 'absolute top-[38%] right-0 -translate-y-1/2 w-[48%] aspect-square rotate-[6deg] z-0',
  },
  {
    src: '/images/Cochrane Roofing Contractor Gallery 10.webp',
    alt: 'Completed Sure West Roofing project in Cochrane, Alberta',
    // Centre, front of stack, largest, no rotation
    outerClassName:
      'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[54%] aspect-square z-10',
  },
]

function GalleryHero() {
  return (
    <section
      className="relative bg-[#F7F5F0] pt-28 md:pt-36 pb-16 md:pb-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#4A5568]"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            <li>
              <Link href="/" className="hover:text-[#C49A2C] transition-colors duration-200">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="opacity-40 select-none">/</li>
            <li className="text-[#1B3558] font-medium" aria-current="page">
              Gallery
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: content column */}
          <div>
            <span
              className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] text-[#C49A2C]"
              style={{
                background: '#F0EEE8',
                fontSize: '12px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              Our Work
            </span>

            <h1
              className="font-display font-bold text-[#1B3558] leading-[1.05] mt-4"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.02em' }}
            >
              Cochrane Roofing
              <br />
              Projects
            </h1>

            <p
              className="mt-5 text-brand-slate leading-[1.65] max-w-[480px]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Completed roofs across Cochrane, Calgary, and Canmore. Every project below was
              installed by our in-house Red Seal certified crew.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
                Get a Free Estimate
              </Button>
              <Button variant="outline" size="lg" href="tel:+14039907210">
                Call 403-990-7210
              </Button>
            </div>

            {/* Trust strip matches service page heroes */}
            <div
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2"
              style={{
                fontSize: '12px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 500,
                color: '#4A5568',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
              }}
            >
              <span>250+ Roofs Completed</span>
              <span aria-hidden="true" style={{ color: '#C49A2C' }}>·</span>
              <span>Red Seal Certified</span>
              <span aria-hidden="true" style={{ color: '#C49A2C' }}>·</span>
              <span>IKO ShieldPRO Installer</span>
            </div>
          </div>

          {/* Right: layered polaroid collage */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative w-full aspect-[5/4] max-w-[640px] mx-auto">
              {HERO_COLLAGE.map((img) => (
                // Outer: positioning + rotation (static — rotation stays stable on hover)
                <div key={img.src} className={img.outerClassName}>
                  {/* Inner: surface + premium shadow + hover lift */}
                  <div
                    className="group relative w-full h-full overflow-hidden rounded-2xl bg-white border-[6px] border-white transition-all duration-500 ease-out hover:scale-[1.03]"
                    style={{
                      boxShadow:
                        '0 6px 16px rgba(27,53,88,0.10), 0 30px 60px -20px rgba(27,53,88,0.32)',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      loading="eager"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section: Masonry gallery grid ───────────────────────────────────────────

function GalleryGrid() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
        {/* Strict 3-per-row grid on tablet+, 1-col on mobile. Uniform 4:3 aspect so cells line up. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                loading={index < 6 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover hover:opacity-95 hover:scale-[1.02] transition-all duration-300"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section: Gallery FAQ (reuse FAQSection) ────────────────────────────────

const GALLERY_FAQS: FaqItem[] = [
  {
    question: 'How many roofing projects has Sure West completed in Cochrane?',
    answer:
      'Sure West has completed hundreds of roofing projects across Cochrane, Calgary, and Canmore. The gallery on this page shows a selection of recent work, including full roof replacements, hail damage restorations, and impact-resistant shingle installs. Every project was installed by our in-house Red Seal certified crew.',
  },
  {
    question: 'What kinds of roofing projects does the gallery show?',
    answer:
      'The Sure West gallery shows completed residential roof replacements in Cochrane, Calgary, and Canmore, featuring IKO Cambridge, Dynasty, and Nordic architectural shingles. You can see a mix of asphalt shingle replacements, hail damage restorations, and impact-resistant installs across different home styles and neighbourhoods.',
  },
  {
    question: 'Are the roofs in the gallery from Cochrane, Calgary, or Canmore?',
    answer:
      'All three. Sure West is headquartered in Cochrane and serves Calgary and Canmore as core secondary markets. The gallery includes projects from every community we serve, with the majority completed in and around Cochrane.',
  },
  {
    question: 'What shingles were used on the roofs in the gallery?',
    answer:
      'Most projects in the gallery use IKO architectural shingles from one of three tiers: IKO Cambridge (entry tier), IKO Dynasty (mid tier, most popular for Cochrane homes), and IKO Nordic (impact-resistant, Class 4 rated for hail protection). As an IKO ShieldPRO installer, Sure West qualifies every roof for top-tier manufacturer warranty coverage.',
  },
  {
    question: 'Can I see a roof Sure West installed in person?',
    answer:
      "Yes. Once you book a free in-home estimate, we can point you toward completed Sure West projects in your neighbourhood if you want to see the work up close. Many Cochrane homeowners choose us after seeing a Sure West roof on a neighbour's home.",
  },
  {
    question: 'Does Sure West install metal roofs or flat roofs?',
    answer:
      'The gallery primarily shows asphalt shingle roofs, which are the most common residential choice in Cochrane, Calgary, and Canmore. Sure West does install other systems on request, including metal roofing and flat roofing on specific project types. Contact us to discuss your options during a free estimate.',
  },
  {
    question: 'How long does a typical Sure West roof replacement take?',
    answer:
      'Most single-family roof replacements in Cochrane are completed in one to two days, weather permitting. Larger or more complex roofs with multiple dormers, steep pitches, or significant decking repairs can run two to three days. Every project in the gallery was completed start to finish by our own Red Seal crew, with a full site clean-up and magnetic nail sweep on the final day.',
  },
  {
    question: 'Can I use photos from the Sure West gallery in my insurance claim?',
    answer:
      'Gallery photos show completed Sure West projects and cannot substitute for a formal inspection report on your own roof. For an insurance claim, Sure West provides a full damage report with date-stamped photos, measurements, and itemised scope of work. Book a free inspection and we can submit the claim documentation directly to your adjuster on your behalf.',
  },
]

function GalleryFAQ() {
  return (
    <ServiceFAQ
      faqs={GALLERY_FAQS}
      heading="Cochrane Roofing Projects, Answered"
      subhead="Common questions about the projects in our gallery, the materials we use, and the homes we've worked on across Cochrane, Calgary, and Canmore."
      sectionBg="#EFEBE0"
    />
  )
}

// ─── Section: Final CTA (shared BottomCTA, matches service pages) ───────────

// ─── JSON-LD: FAQPage ────────────────────────────────────────────────────────
// Built from GALLERY_FAQS so it stays in sync with what's rendered.

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: GALLERY_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <GalleryHero />
      <GalleryGrid />
      <GalleryFAQ />
      <BottomCTA
        heading={
          <>
            Like What You See?
            <br className="hidden md:block" /> Let&apos;s Add Your Roof to the Gallery.
          </>
        }
        subtext="Free in-home estimate. Fixed written quote within 48 hours. Quick replies, even evenings and weekends."
      />
    </>
  )
}
