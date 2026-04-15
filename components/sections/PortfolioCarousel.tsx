'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

interface PortfolioImage {
  src: string
  alt: string
  /** CSS object-position for the <img> — use to nudge a specific photo's crop (e.g. "70% center"). Defaults to "center". */
  objectPosition?: string
}

interface PortfolioCarouselProps {
  heading?: string
  images: PortfolioImage[]
}

// ── Static 3D cylinder tuning ────────────────────────────────────────
// Cards lie on a vertical-axis cylinder whose axis sits BEHIND the
// cards (away from the viewer). The viewer sees the convex front of
// the cylinder: the centre card is closest to camera, side cards
// curve backward, and each side card's inner edge tilts forward toward
// the viewer — the Rooferio "panorama wrapped on a barrel" look.
//
// Implementation borrows the GSAP-ring trick: each card uses
//   transform-origin: 50% 50% -ARC_RADIUSpx  (pivot pushed behind card)
//   transform: translate(-50%, -50%) rotateY(angle)
// so a single rotateY sweeps the card along the cylinder. No sin/cos
// math needed — the browser composes the rotation around the offset
// origin.
//
// Touching condition (cards form a continuous wall, no gaps):
//   ARC_RADIUS * sin(ARC_STEP_DEG_rad) ≈ CARD_WIDTH
// At 8.5°, 1100 * 0.148 ≈ 163px per slot; card width set just above
// so seams meet cleanly.
//
// Edge bleed: outermost card (±9 from centre for 19 images) sits at
// ±76.5°, swung to x ≈ ±1070px — past a 1400px viewport, so the
// cylinder runs off-screen on both sides.
const ARC_RADIUS = 1100      // px — radius of the cylinder
const ARC_STEP_DEG = 8.5     // degrees between adjacent cards (chosen so cards touch)
const PERSPECTIVE_PX = 1400

export function PortfolioCarousel({ images }: PortfolioCarouselProps) {
  const n = images.length
  const center = (n - 1) / 2

  return (
    <section
      className="relative overflow-hidden bg-[#F8F8F8]"
      style={{ padding: 'var(--section-pad-top) 0 var(--section-pad-bot)' }}
    >
      {/* Subtle paper-grain texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% 10%, rgba(212,175,96,0.08), transparent 60%), radial-gradient(900px 500px at 85% 85%, rgba(26,22,18,0.05), transparent 60%)',
        }}
      />

      {/* Centered header */}
      <motion.div
        className="relative flex flex-col items-center text-center"
        style={{
          paddingLeft: 'var(--section-pad-x)',
          paddingRight: 'var(--section-pad-x)',
        }}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      >
        {/* Chip-style eyebrow, matches the hero credential pills */}
        <span
          className="inline-flex items-center h-8 md:h-9 px-3 md:px-4 text-[13px] md:text-[14px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm] mb-6"
          style={{
            background: 'rgba(0,0,0,0.04)',
            color: 'var(--color-near-black)',
          }}
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
          Every roof in our gallery was completed by our in-house Red Seal Journeyman team. No subcontractors. No compromises.
        </p>

        <div className="flex items-center mt-8 md:mt-10">
          <Button variant="primary" size="md" href="/gallery">
            View Gallery
          </Button>
        </div>
      </motion.div>

      {/* Static 3D concave arc of project photos. No scroll/drag yet —
          get the layout correct first, then layer carousel on top. */}
      <div
        className="relative w-full mt-16 md:mt-24 overflow-hidden"
        style={{
          perspective: `${PERSPECTIVE_PX}px`,
          perspectiveOrigin: '50% 50%',
        }}
      >
        <div
          className="relative mx-auto"
          style={{
            width: '100%',
            height: 'clamp(320px, 34vw, 460px)',
            transformStyle: 'preserve-3d',
          }}
        >
          {images.map((card, i) => {
            const psiDeg = (i - center) * ARC_STEP_DEG
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 rounded-[--radius-md]"
                style={{
                  width: 'clamp(140px, 14vw, 175px)',
                  height: 'clamp(240px, 24vw, 310px)',
                  transform: `translate(-50%, -50%) rotateY(${psiDeg.toFixed(2)}deg)`,
                  transformOrigin: `50% 50% -${ARC_RADIUS}px`,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  overflow: 'hidden',
                  boxShadow:
                    '0 30px 50px -20px rgba(20,20,20,0.45), 0 12px 22px -14px rgba(20,20,20,0.22)',
                }}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-full object-cover pointer-events-none select-none"
                  style={{ objectPosition: card.objectPosition ?? 'center' }}
                  draggable={false}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
