'use client'

import { motion } from 'framer-motion'
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

// ── Editorial rhythm ─────────────────────────────────────────────────
// Instead of uniform tiles, cards rotate through a deterministic
// pattern of three shapes (tall portrait / wide landscape / standard).
// Combined with a subtle vertical baseline offset, the strip reads
// like a curated gallery wall — coffee-table-book pacing, not a bar.
type Shape = 'tall' | 'wide' | 'std'

const RHYTHM: Shape[] = ['std', 'tall', 'wide', 'std', 'tall', 'std', 'wide', 'tall']
// Vertical baseline offsets in px — small, just enough to break the
// dead-flat alignment without making it feel disorganised.
const Y_OFFSETS = [0, 14, -10, 6, -4, 12, -8, 2]

const SHAPE_STYLES: Record<Shape, { width: string; height: string }> = {
  tall: { width: 'clamp(220px, 21vw, 320px)', height: 'clamp(360px, 34vw, 500px)' },
  wide: { width: 'clamp(360px, 34vw, 520px)', height: 'clamp(260px, 24vw, 360px)' },
  std:  { width: 'clamp(280px, 26vw, 400px)', height: 'clamp(320px, 28vw, 420px)' },
}

export function PortfolioCarousel({ images }: PortfolioCarouselProps) {
  // Duplicate the source list so the marquee can translate -50% and seam back
  // onto an identical copy with no visible jump.
  const doubled = [...images, ...images]

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
          {/* Generous track height so vertical offsets never clip */}
          <div
            className="flex items-center w-max sw-marquee-track"
            style={{
              gap: 'clamp(20px, 2vw, 36px)',
              animationDuration: `${MARQUEE_DURATION_SEC}s`,
              paddingTop: '24px',
              paddingBottom: '24px',
            }}
          >
            {doubled.map((img, i) => {
              const shape = RHYTHM[i % RHYTHM.length]
              const yOffset = Y_OFFSETS[i % Y_OFFSETS.length]
              return (
                <PhotoCard
                  key={i}
                  img={img}
                  shape={shape}
                  yOffset={yOffset}
                  ariaHidden={i >= images.length /* second copy is decorative */}
                />
              )
            })}
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
  shape?: Shape
  yOffset?: number
  mobile?: boolean
  ariaHidden?: boolean
}

function PhotoCard({ img, shape = 'std', yOffset = 0, mobile, ariaHidden }: PhotoCardProps) {
  const sizeStyle = mobile
    ? { width: 'min(70vw, 320px)', height: 'min(92vw, 420px)' }
    : SHAPE_STYLES[shape]

  return (
    <div
      aria-hidden={ariaHidden || undefined}
      className={['relative flex-none', mobile ? 'snap-center' : ''].join(' ')}
      style={{
        ...sizeStyle,
        transform: mobile ? undefined : `translateY(${yOffset}px)`,
      }}
    >
      <div
        className="absolute inset-0 overflow-hidden rounded-[--radius-md]"
        style={{
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
