'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { CircularGallery, type GalleryItem } from '@/components/ui/circular-gallery-2'

interface PortfolioImage {
  src: string
  alt: string
  /** CSS object-position — unused by the WebGL gallery, kept for back-compat. */
  objectPosition?: string
}

interface PortfolioCarouselProps {
  heading?: string
  images: PortfolioImage[]
}

const EASE_OUT = [0.16, 1, 0.3, 1] as const

export function PortfolioCarousel({ images }: PortfolioCarouselProps) {
  // Map the site's image catalogue into the WebGL gallery's item shape.
  // Text is left blank — the design has no per-card captions; the shader
  // discards transparent labels so nothing renders under the cards.
  const galleryItems: GalleryItem[] = images.map((img) => ({
    image: img.src,
    text: '',
  }))

  return (
    <section
      className="relative bg-[#F8F8F8] overflow-hidden"
      style={{
        paddingTop: 'var(--section-pad-top)',
        paddingBottom: 'var(--section-pad-bot)',
      }}
      aria-label="Portfolio gallery"
    >
      {/* Paper-grain background — same recipe as Hero / sibling sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% 10%, rgba(212,175,96,0.08), transparent 60%), radial-gradient(900px 500px at 85% 85%, rgba(26,22,18,0.05), transparent 60%)',
        }}
      />

      <div className="relative">
        {/* ── Header ────────────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col items-center text-center"
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
            style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--color-near-black)' }}
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

          <div className="mt-8 md:mt-10">
            <Button variant="primary" size="md" href="/gallery">
              View Gallery
            </Button>
          </div>
        </motion.div>

        {/* ── WebGL circular gallery ────────────────────────────────── */}
        <motion.div
          className="relative mt-14 md:mt-20 h-[520px] md:h-[620px] w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE_OUT }}
        >
          <CircularGallery
            items={galleryItems}
            bend={3}
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </motion.div>
      </div>
    </section>
  )
}
