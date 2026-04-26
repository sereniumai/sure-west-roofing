'use client'

import { Button } from '@/components/ui/Button'
import ImageRevealWide from '@/components/ui/image-reveal-wide'
import { Reveal } from '@/components/ui/Reveal'

interface PortfolioImage {
  src: string
  alt: string
  /** Legacy field — unused here but kept for back-compat with page.tsx */
  objectPosition?: string
}

interface PortfolioCarouselProps {
  heading?: string
  images: PortfolioImage[]
  /**
   * Number of cards to fan out. Defaults to the smallest odd number
   * that covers the provided images, capped at 9.
   */
  fanCount?: number
}


export function PortfolioCarousel({
  images,
  fanCount,
}: PortfolioCarouselProps) {
  // Default to 5 cards (2 on each side of centre), or fewer if we don't
  // have that many images. Always clamped to an odd number.
  const defaultCount = Math.min(5, images.length % 2 === 0 ? images.length - 1 : images.length)
  const count = fanCount ?? (defaultCount > 0 ? defaultCount : 1)
  const fanImages = images.slice(0, count).map((img) => img.src)
  // Mobile shows a tighter 3-card fan so the polaroids can render bigger
  // without overflowing the viewport. Desktop keeps the full 5-card spread.
  const mobileFanImages = images.slice(0, Math.min(3, images.length)).map((img) => img.src)

  return (
    <section
      className="relative bg-white overflow-x-clip py-20 md:py-24"
      aria-label="Portfolio gallery"
    >
      {/* Paper-grain background — same recipe as sibling sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% 10%, rgba(212,175,96,0.08), transparent 60%), radial-gradient(900px 500px at 85% 85%, rgba(26,22,18,0.05), transparent 60%)',
        }}
      />

      <div className="relative">
        {/* ── Header (constrained to 1320px like other sections) ─────── */}
        <Reveal>
        <div
          className="flex flex-col items-center text-center max-w-[1320px] mx-auto"
          style={{
            paddingLeft: 'var(--section-pad-x)',
            paddingRight: 'var(--section-pad-x)',
          }}
        >
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 600, lineHeight: 1 }}
          >
            Our Work
          </span>

          <h2
            className="font-display font-medium text-brand-navy max-w-[980px]"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            Roofing Projects Completed Across<br className="hidden md:block" /> Cochrane, Calgary &amp; Canmore
          </h2>

          <p
            className="mt-6 md:mt-7 max-w-[640px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            Every roof in our gallery was completed by our in-house Red Seal
            Journeyman team. No subcontractors. No compromises.
          </p>

          <div className="mt-7 md:mt-9">
            <Button variant="primary" size="md" href="/gallery">
              View Full Gallery
            </Button>
          </div>
        </div>
        </Reveal>

        {/* ── Wide fan reveal ─────────────────────────────────────────── */}
        <Reveal delay={150} noBlur>
        <div className="relative mt-1 md:mt-2 flex items-center justify-center max-w-[1320px] mx-auto">
          {/* Mobile: 3-card fan, bigger scale */}
          <div className="md:hidden scale-[0.6] transition-transform">
            <ImageRevealWide images={mobileFanImages} />
          </div>
          {/* Tablet & desktop: full 5-card fan, unchanged */}
          <div className="hidden md:block md:scale-100 lg:scale-110 transition-transform">
            <ImageRevealWide images={fanImages} />
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
