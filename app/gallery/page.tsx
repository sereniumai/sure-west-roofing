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
import { Button } from '@/components/ui/Button'
import { BottomCTA } from '@/components/sections/BottomCTA'
import { GalleryGrid } from '@/components/sections/GalleryGrid'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Cochrane Roofing Projects Gallery',
  description:
    'Browse completed roofing projects from Sure West across Cochrane, Calgary, and Canmore. Installed by our in-house crew, Red Seal Journeyman supervised.',
  alternates: {
    canonical: 'https://surewestroofing.ca/gallery',
  },
  openGraph: {
    title: 'Cochrane Roofing Projects Gallery | Sure West Roofing',
    description:
      'Browse completed roofing projects from Sure West across Cochrane, Calgary, and Canmore. Installed by our in-house crew, Red Seal Journeyman supervised.',
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
  { src: '/images/Cochrane Roofing Contractor Gallery 13.webp', alt: 'Cochrane roof replacement completed by the Sure West in-house crew' },
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
    // Centre, front of stack, largest, no rotation. Shift crop right so the
    // house sits more centred in the visible frame.
    outerClassName:
      'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[54%] aspect-square z-10',
    objectPosition: '65% center',
  },
]

function GalleryHero() {
  return (
    <section
      className="relative bg-[#F7F5F0] pt-36 md:pt-44 pb-16 md:pb-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: content column */}
          <div>
            <span
              className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] text-[#C49A2C]"
              style={{
                background: '#F7F5F0',
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
              installed by our in-house crew, Red Seal Journeyman supervised.
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
              <span className="hidden md:inline">250+ Roofs Completed</span>
              <span aria-hidden="true" className="hidden md:inline" style={{ color: '#C49A2C' }}>·</span>
              <span>Red Seal Journeyman</span>
              <span aria-hidden="true" style={{ color: '#C49A2C' }}>·</span>
              <span>IKO ShieldPRO Installer</span>
            </div>
          </div>

          {/* Right: layered polaroid collage */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative w-full aspect-[5/4] max-w-[640px] mx-auto">
              {HERO_COLLAGE.map((img) => (
                // Outer: positioning + rotation (static, rotation stays stable on hover)
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
                      style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
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

// Gallery grid is rendered by the client component at
// components/sections/GalleryGrid.tsx. It handles scroll-in animation and
// click-to-open lightbox with prev/next navigation.

// ─── Section: Final CTA (shared BottomCTA, matches service pages) ───────────

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />

      <GalleryHero />
      <GalleryGrid images={galleryImages} />
      <BottomCTA
        heading={
          <>
            Like What You See?
            <br className="hidden md:block" /> Let&apos;s Add Your Roof to the Gallery.
          </>
        }
        subtext="Free in-home estimate. Fixed written quote. Red Seal Journeyman certified, no sales pressure."
      />
    </>
  )
}
