'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface PortfolioImage {
  src: string
  alt: string
  /** Optional location label revealed on hover (e.g. "Bow Valley, Cochrane"). */
  caption?: string
  /** CSS object-position for the <img> — use to nudge a specific photo's crop. */
  objectPosition?: string
}

interface PortfolioCarouselProps {
  heading?: string
  images: PortfolioImage[]
}

const EASE_OUT = [0.16, 1, 0.3, 1] as const
// Slow + cinematic — the strip should feel like it's drifting, not racing.
const MARQUEE_DURATION_SEC = 85

export function PortfolioCarousel({ images }: PortfolioCarouselProps) {
  const N = images.length
  const [paused, setPaused] = useState(false)
  const [hoveredKey, setHoveredKey] = useState<number | null>(null)

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
        </motion.div>

        {/* ── Photo wall — desktop / tablet marquee ─────────────────── */}
        <motion.div
          className="hidden md:block relative mt-16 md:mt-24"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => {
            setPaused(false)
            setHoveredKey(null)
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE_OUT }}
        >
          <div
            className="flex items-center w-max sw-marquee-track"
            style={{
              gap: 'clamp(20px, 2vw, 40px)',
              animationDuration: `${MARQUEE_DURATION_SEC}s`,
              animationPlayState: paused ? 'paused' : 'running',
            }}
          >
            {doubled.map((img, i) => (
              <PhotoCard
                key={i}
                img={img}
                /* Vary card height in a 4-step rhythm for an editorial,
                   museum-wall feel. The gallery looks curated, not stamped. */
                heightStep={i % 4}
                hovered={hoveredKey === i}
                anyHovered={hoveredKey !== null}
                onPointerEnter={() => setHoveredKey(i)}
                onPointerLeave={() => setHoveredKey(null)}
                ariaHidden={i >= N /* second copy is decorative */}
              />
            ))}
          </div>

          {/* Edge fades — strip dissolves into the section bg at the edges. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-[12vw] max-w-[260px] z-10"
            style={{
              background:
                'linear-gradient(to right, rgba(248,248,248,1) 0%, rgba(248,248,248,0.85) 55%, rgba(248,248,248,0) 100%)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-[12vw] max-w-[260px] z-10"
            style={{
              background:
                'linear-gradient(to left, rgba(248,248,248,1) 0%, rgba(248,248,248,0.85) 55%, rgba(248,248,248,0) 100%)',
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
            <div className="flex gap-4 pb-2">
              {images.map((img, i) => (
                <PhotoCard
                  key={i}
                  img={img}
                  heightStep={i % 4}
                  mobile
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <motion.div
          className="flex justify-center mt-16 md:mt-20"
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

// ── Card heights cycle (in vw / px clamps) — gives an editorial wall feel.
const HEIGHT_BY_STEP: Record<number, string> = {
  0: 'clamp(360px, 36vw, 560px)',
  1: 'clamp(420px, 42vw, 620px)',
  2: 'clamp(380px, 38vw, 580px)',
  3: 'clamp(440px, 44vw, 660px)',
}

// ── Single photo card ─────────────────────────────────────────────────
interface PhotoCardProps {
  img: PortfolioImage
  heightStep: number
  hovered?: boolean
  anyHovered?: boolean
  onPointerEnter?: () => void
  onPointerLeave?: () => void
  mobile?: boolean
  ariaHidden?: boolean
}

function PhotoCard({
  img,
  heightStep,
  hovered = false,
  anyHovered = false,
  onPointerEnter,
  onPointerLeave,
  mobile,
  ariaHidden,
}: PhotoCardProps) {
  const sizeStyle = mobile
    ? { width: 'min(78vw, 360px)', height: 'min(102vw, 470px)' }
    : {
        width: 'clamp(280px, 28vw, 440px)',
        height: HEIGHT_BY_STEP[heightStep] ?? HEIGHT_BY_STEP[0],
      }

  // When ANY card in the row is hovered, dim the others so the focused
  // photograph reads as the centre of attention.
  const dimmed = anyHovered && !hovered

  return (
    <div
      aria-hidden={ariaHidden || undefined}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      className={[
        'group relative flex-none overflow-hidden rounded-[--radius-md]',
        'transition-[transform,opacity,filter] duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
        mobile ? 'snap-center' : '',
        hovered ? '-translate-y-2' : '',
      ].join(' ')}
      style={{
        ...sizeStyle,
        opacity: dimmed ? 0.45 : 1,
        filter: dimmed ? 'saturate(0.85)' : 'saturate(1)',
        boxShadow: hovered
          ? '0 50px 80px -30px rgba(20,20,20,0.55), 0 22px 36px -20px rgba(20,20,20,0.30)'
          : '0 28px 48px -24px rgba(20,20,20,0.42), 0 12px 22px -14px rgba(20,20,20,0.20)',
      }}
    >
      {/* Image — slow Ken-Burns zoom on hover */}
      <img
        src={img.src}
        alt={img.alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        style={{ objectPosition: img.objectPosition ?? 'center' }}
        draggable={false}
        loading="lazy"
      />

      {/* Bottom gradient — fades in for caption legibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(to top, rgba(20,20,20,0.72) 0%, rgba(20,20,20,0.20) 55%, rgba(20,20,20,0) 100%)',
        }}
      />

      {/* Editorial reveal — gold hairline draws across, label tracks in,
          then the project title/CTA rises into view. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 px-6 pb-6">
        {/* Gold hairline */}
        <div
          aria-hidden="true"
          className="h-px w-0 bg-[var(--color-accent)] transition-[width] duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-12 mb-4"
        />
        {/* Tracked label */}
        <div
          className="text-white/85 text-[10.5px] font-body font-bold uppercase tracking-[0.22em] opacity-0 translate-y-2 transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[80ms] group-hover:opacity-100 group-hover:translate-y-0"
        >
          {img.caption ?? 'Sure West Roofing'}
        </div>
        {/* Display-font line */}
        <div
          className="mt-1 flex items-baseline gap-2 text-white opacity-0 translate-y-3 transition-[opacity,transform] duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[160ms] group-hover:opacity-100 group-hover:translate-y-0"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          <span className="text-[20px] md:text-[22px] font-medium tracking-[-0.01em]">
            View Project
          </span>
          <span
            aria-hidden="true"
            className="text-[18px] md:text-[20px] translate-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
          >
            →
          </span>
        </div>
      </div>
    </div>
  )
}
