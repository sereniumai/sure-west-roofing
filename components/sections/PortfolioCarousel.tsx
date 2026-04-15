'use client'

import { motion, useAnimationFrame } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/Button'

interface PortfolioImage {
  src: string
  alt: string
  /** CSS object-position for the <img> — use to nudge a specific photo's crop. */
  objectPosition?: string
}

interface PortfolioCarouselProps {
  heading?: string
  images: PortfolioImage[]
}

const EASE_OUT = [0.16, 1, 0.3, 1] as const
// Slow + cinematic — the strip should feel like it's drifting, not racing.
const MARQUEE_DURATION_SEC = 130
// Centre vs. edge scaling. The card whose centre lines up with the viewport
// centre renders at 1.0; cards at the viewport edge render at MIN_SCALE.
const MIN_SCALE = 0.66
const MIN_OPACITY = 0.5

export function PortfolioCarousel({ images }: PortfolioCarouselProps) {
  const N = images.length
  // Duplicate the source list so the marquee can translate -50% and seam back
  // onto an identical copy with no visible jump.
  const doubled = [...images, ...images]

  // Per-card refs — we read each card's bounding rect every frame and write
  // a `scale()` to its inner wrapper so the card closest to the viewport
  // centre is biggest, falling off smoothly toward the edges.
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])

  useAnimationFrame(() => {
    if (typeof window === 'undefined') return
    const vw = window.innerWidth
    const centre = vw / 2
    // Cards beyond ~half the viewport from centre clamp to MIN_SCALE.
    const maxDist = vw * 0.5

    // Read pass — collect every card's distance from centre.
    const updates: Array<{ inner: HTMLElement; scale: number; opacity: number }> = []
    for (const card of cardRefs.current) {
      if (!card) continue
      const inner = card.firstElementChild as HTMLElement | null
      if (!inner) continue
      const rect = card.getBoundingClientRect()
      const cardCentre = rect.left + rect.width / 2
      const dist = Math.abs(cardCentre - centre)
      const t = Math.min(1, dist / maxDist)
      // Smoothstep for a softer, more organic falloff than linear.
      const eased = t * t * (3 - 2 * t)
      const scale = 1 - eased * (1 - MIN_SCALE)
      const opacity = 1 - eased * (1 - MIN_OPACITY)
      updates.push({ inner, scale, opacity })
    }

    // Write pass — apply transforms in a single batch (avoids layout thrash).
    for (const { inner, scale, opacity } of updates) {
      inner.style.transform = `scale(${scale.toFixed(3)})`
      inner.style.opacity = opacity.toFixed(3)
    }
  })

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

        {/* ── Photo wall — desktop / tablet marquee ─────────────────── */}
        <motion.div
          className="hidden md:block relative mt-14 md:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE_OUT }}
        >
          <div
            className="flex items-center w-max sw-marquee-track"
            style={{
              gap: 'clamp(16px, 1.6vw, 32px)',
              animationDuration: `${MARQUEE_DURATION_SEC}s`,
            }}
          >
            {doubled.map((img, i) => (
              <PhotoCard
                key={i}
                img={img}
                refCb={(el) => {
                  cardRefs.current[i] = el
                }}
                ariaHidden={i >= N /* second copy is decorative */}
              />
            ))}
          </div>

          {/* Edge fades — barely-there feather, just to soften the hard
              clip at the section's overflow boundary. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-[2vw] max-w-[36px] z-10"
            style={{
              background:
                'linear-gradient(to right, rgba(248,248,248,0.7) 0%, rgba(248,248,248,0) 100%)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-[2vw] max-w-[36px] z-10"
            style={{
              background:
                'linear-gradient(to left, rgba(248,248,248,0.7) 0%, rgba(248,248,248,0) 100%)',
            }}
          />
        </motion.div>

        {/* ── Mobile: snap-scroll strip ─────────────────────────────── */}
        <motion.div
          className="md:hidden mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
        >
          <div
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{
              paddingLeft: 'var(--section-pad-x)',
              paddingRight: 'var(--section-pad-x)',
            }}
          >
            <div className="flex gap-3 pb-2">
              {images.map((img, i) => (
                <PhotoCard key={i} img={img} mobile />
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Marquee keyframe — translate exactly half the doubled track so the
          loop seams onto its identical second copy invisibly. */}
      <style jsx>{`
        .sw-marquee-track {
          animation-name: sw-marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        @keyframes sw-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .sw-marquee-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}

// ── Single photo card ─────────────────────────────────────────────────
interface PhotoCardProps {
  img: PortfolioImage
  refCb?: (el: HTMLDivElement | null) => void
  mobile?: boolean
  ariaHidden?: boolean
}

function PhotoCard({ img, refCb, mobile, ariaHidden }: PhotoCardProps) {
  // Uniform card size — the centre-emphasis effect comes from a runtime
  // scale on the inner wrapper, not from a different rest size.
  const sizeStyle = mobile
    ? { width: 'min(70vw, 320px)', height: 'min(92vw, 420px)' }
    : { width: 'clamp(240px, 23vw, 360px)', height: 'clamp(320px, 30vw, 440px)' }

  return (
    <div
      ref={refCb}
      aria-hidden={ariaHidden || undefined}
      className={['relative flex-none', mobile ? 'snap-center' : ''].join(' ')}
      style={sizeStyle}
    >
      {/* Inner wrapper — receives the centre-distance scale/opacity each
          frame. Kept inside an outer slot so the marquee layout remains
          uniform regardless of how the inner is currently scaled. */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[--radius-md] will-change-transform"
        style={{
          transformOrigin: '50% 50%',
          boxShadow:
            '0 22px 38px -22px rgba(20,20,20,0.40), 0 10px 18px -12px rgba(20,20,20,0.18)',
        }}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: img.objectPosition ?? 'center' }}
          draggable={false}
          loading="lazy"
        />
      </div>
    </div>
  )
}
