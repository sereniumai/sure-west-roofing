'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import ImageRevealWide from '@/components/ui/image-reveal-wide'

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

const EASE_OUT = [0.16, 1, 0.3, 1] as const

export function PortfolioCarousel({
  images,
  fanCount,
}: PortfolioCarouselProps) {
  // Default to 5 cards (2 on each side of centre), or fewer if we don't
  // have that many images. Always clamped to an odd number.
  const defaultCount = Math.min(5, images.length % 2 === 0 ? images.length - 1 : images.length)
  const count = fanCount ?? (defaultCount > 0 ? defaultCount : 1)
  const fanImages = images.slice(0, count).map((img) => img.src)

  return (
    <section
      className="relative bg-[#F8F8F8] overflow-x-clip"
      style={{
        paddingTop: 'var(--section-pad-top)',
        paddingBottom: 'var(--section-pad-bot)',
      }}
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
        <motion.div
          className="flex flex-col items-center text-center max-w-[1320px] mx-auto"
          style={{
            paddingLeft: 'var(--section-pad-x)',
            paddingRight: 'var(--section-pad-x)',
          }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <span
            className="inline-flex items-center h-8 md:h-9 px-3 md:px-4 text-[13px] md:text-[14px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm] mb-6"
            style={{ background: 'rgba(212,175,96,0.12)', color: 'var(--color-accent, #D4AF60)' }}
          >
            Our Work
          </span>

          <h2
            className="font-display font-semibold leading-[1.05] text-[--color-near-black] max-w-[980px]"
            style={{
              fontSize: 'clamp(30px, 4.2vw, 60px)',
              letterSpacing: '-0.035em',
            }}
          >
            Roofing Projects Completed Across Cochrane, Calgary &amp; Canmore
          </h2>

          <p
            className="mt-6 md:mt-7 max-w-[640px] text-[--color-near-black]/70 leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: "'Inter', system-ui, sans-serif",
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
        </motion.div>

        {/* ── Wide fan reveal ─────────────────────────────────────────── */}
        <motion.div
          className="relative mt-1 md:mt-2 flex items-center justify-center max-w-[1320px] mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE_OUT }}
        >
          <div className="scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 transition-transform">
            <ImageRevealWide images={fanImages} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
