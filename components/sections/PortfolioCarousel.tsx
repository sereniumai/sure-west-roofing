'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface PortfolioImage {
  src: string
  alt: string
  /** Optional caption shown on the gold pill on hover. */
  caption?: string
  /** CSS object-position for the <img> — use to nudge a specific photo's crop. */
  objectPosition?: string
}

interface PortfolioCarouselProps {
  heading?: string
  images: PortfolioImage[]
}

// Easing — matches Hero / other sections
const EASE_OUT = [0.16, 1, 0.3, 1] as const

// Marquee speed: total seconds for one full loop of the (N-image) row.
// Slow + cinematic — the strip should feel like it's drifting, not racing.
const MARQUEE_DURATION_SEC = 70

export function PortfolioCarousel({ images }: PortfolioCarouselProps) {
  const N = images.length
  const [paused, setPaused] = useState(false)

  // Duplicate the source list so the marquee can translate -50% and seam back
  // onto an identical copy without any visible jump.
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
      {/* Paper-grain background — same recipe as Hero / other sections */}
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
        </motion.div>

        {/* ── Photo wall ────────────────────────────────────────────── */}
        {/* Desktop / tablet: continuous marquee with hover-pause */}
        <motion.div
          className="hidden md:block relative mt-14 md:mt-20"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE_OUT }}
        >
          <div
            className="flex gap-5 md:gap-6 w-max sw-marquee-track"
            style={{
              animationDuration: `${MARQUEE_DURATION_SEC}s`,
              animationPlayState: paused ? 'paused' : 'running',
            }}
          >
            {doubled.map((img, i) => (
              <PhotoCard
                key={i}
                img={img}
                index={i % N}
                total={N}
                ariaHidden={i >= N /* second copy is decorative */}
              />
            ))}
          </div>

          {/* Edge fades — the strip dissolves into the section bg at the edges
              for a soft cinematic frame. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-[10vw] max-w-[220px] z-10"
            style={{
              background:
                'linear-gradient(to right, rgba(248,248,248,1) 0%, rgba(248,248,248,0.85) 55%, rgba(248,248,248,0) 100%)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-[10vw] max-w-[220px] z-10"
            style={{
              background:
                'linear-gradient(to left, rgba(248,248,248,1) 0%, rgba(248,248,248,0.85) 55%, rgba(248,248,248,0) 100%)',
            }}
          />
        </motion.div>

        {/* Mobile: snap-scroll strip (no auto-motion, no scroll-jack) */}
        <motion.div
          className="md:hidden mt-10"
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
                <PhotoCard
                  key={i}
                  img={img}
                  index={i}
                  total={N}
                  mobile
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <motion.div
          className="flex justify-center mt-12 md:mt-16"
          style={{
            paddingLeft: 'var(--section-pad-x)',
            paddingRight: 'var(--section-pad-x)',
          }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE_OUT }}
        >
          <Button variant="primary" size="md" href="/gallery">
            View Gallery
          </Button>
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
  index: number
  total: number
  mobile?: boolean
  ariaHidden?: boolean
}

function PhotoCard({ img, index, total, mobile, ariaHidden }: PhotoCardProps) {
  const sizeStyle = mobile
    ? { width: 'min(78vw, 360px)', height: 'min(102vw, 470px)' }
    : { width: 'clamp(260px, 27vw, 420px)', height: 'clamp(340px, 36vw, 540px)' }

  return (
    <div
      aria-hidden={ariaHidden || undefined}
      className={[
        'group relative flex-none overflow-hidden rounded-[--radius-md]',
        'transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
        mobile ? 'snap-center' : 'hover:-translate-y-1.5',
      ].join(' ')}
      style={{
        ...sizeStyle,
        boxShadow:
          '0 28px 48px -24px rgba(20,20,20,0.42), 0 12px 22px -14px rgba(20,20,20,0.20)',
      }}
    >
      {/* Image — slow Ken-Burns-style zoom on hover */}
      <img
        src={img.src}
        alt={img.alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
        style={{ objectPosition: img.objectPosition ?? 'center' }}
        draggable={false}
        loading="lazy"
      />

      {/* Bottom gradient for caption contrast — fades in on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(to top, rgba(20,20,20,0.65) 0%, rgba(20,20,20,0) 100%)',
        }}
      />

      {/* Index chip — top-left, always visible */}
      <span
        className="absolute top-4 left-4 inline-flex items-center h-7 px-2.5 text-[11px] font-body font-bold uppercase tracking-[0.14em] rounded-[--radius-sm] bg-white/95 text-[--color-near-black] tabular-nums shadow-sm backdrop-blur-[2px]"
      >
        {String(index + 1).padStart(2, '0')}
        <span className="text-[--color-near-black]/40 mx-1">/</span>
        {String(total).padStart(2, '0')}
      </span>

      {/* Caption pill — bottom-left, slides in on hover */}
      <span
        className="absolute bottom-4 left-4 inline-flex items-center h-8 px-3 text-[12px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm] translate-y-2 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100"
        style={{ background: 'var(--color-accent)', color: 'var(--color-near-black)' }}
      >
        {img.caption ?? `Project ${String(index + 1).padStart(2, '0')}`}
      </span>
    </div>
  )
}
