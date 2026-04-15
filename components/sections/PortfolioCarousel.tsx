'use client'

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'

interface PortfolioImage {
  src: string
  alt: string
  /** Optional caption shown on the active card (e.g. neighbourhood). */
  caption?: string
  /** CSS object-position for the <img> — use to nudge a specific photo's crop. */
  objectPosition?: string
}

interface PortfolioCarouselProps {
  heading?: string
  images: PortfolioImage[]
}

// ── Layout knobs (desktop pinned-scroll mode) ────────────────────────
const CARD_W_VW = 26          // each card width in vw
const CARD_GAP_VW = 1.4       // gap between cards in vw
const SIDE_PAD_VW = 12        // empty space at start/end so first/last card can centre
const PARALLAX_SHIFT_PCT = 14 // % of the track distance the image counter-moves

// Easing — matches the rest of the site
const EASE_OUT = [0.16, 1, 0.3, 1] as const

export function PortfolioCarousel({ images }: PortfolioCarouselProps) {
  const N = images.length

  // Track width and how far we need to translate to bring the last card to the
  // centre of the viewport. All in vw so it's responsive without measuring.
  const trackWidthVw = N * CARD_W_VW + (N - 1) * CARD_GAP_VW + SIDE_PAD_VW * 2
  const translateRangeVw = trackWidthVw - 100 // viewport is 100vw

  // Section height controls how much vertical scroll the pin consumes.
  // Pinned distance = sectionHeight - 100vh. We aim for ~1:1 vh-to-vw so the
  // gallery glides at a comfortable cinematic pace.
  const sectionHeightVh = Math.round(translateRangeVw + 130)

  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Small head/tail dead-zones so the header settles before the strip moves
  // and the last card lingers at the end before the section unpins.
  const TRAVEL_START = 0.06
  const TRAVEL_END = 0.94

  const trackX = useTransform(
    scrollYProgress,
    [TRAVEL_START, TRAVEL_END],
    [`0vw`, `-${translateRangeVw.toFixed(2)}vw`],
  )
  // Counter-translate the images inside their cards to give a parallax depth.
  const imageX = useTransform(
    scrollYProgress,
    [TRAVEL_START, TRAVEL_END],
    [`0vw`, `${(translateRangeVw * (PARALLAX_SHIFT_PCT / 100)).toFixed(2)}vw`],
  )
  const progressScale = useTransform(scrollYProgress, [TRAVEL_START, TRAVEL_END], [0, 1])

  // Active card index drives the counter and the per-card highlight.
  const [activeIdx, setActiveIdx] = useState(0)
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const t = Math.max(0, Math.min(1, (v - TRAVEL_START) / (TRAVEL_END - TRAVEL_START)))
    // Map progress 0..1 → card index 0..N-1, biased so each card is "active"
    // for an equal slice of the journey.
    const idx = Math.min(N - 1, Math.floor(t * N + 0.0001))
    setActiveIdx(idx)
  })

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F8F8F8]"
      style={{ height: `${sectionHeightVh}vh` }}
      aria-label="Portfolio gallery"
    >
      {/* Subtle gold/charcoal paper-grain — matches Hero & other sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% 10%, rgba(212,175,96,0.08), transparent 60%), radial-gradient(900px 500px at 85% 85%, rgba(26,22,18,0.05), transparent 60%)',
        }}
      />

      {/* ── Desktop / tablet: pinned horizontal scroll ──────────────── */}
      <div className="hidden md:block sticky top-0 h-screen w-full overflow-hidden">
        {/* Header */}
        <motion.div
          className="absolute inset-x-0 top-0 z-10 flex flex-col items-center text-center"
          style={{
            paddingLeft: 'var(--section-pad-x)',
            paddingRight: 'var(--section-pad-x)',
            paddingTop: 'clamp(64px, 10vh, 120px)',
          }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <span
            className="inline-flex items-center h-9 px-4 text-[14px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm] mb-5"
            style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--color-near-black)' }}
          >
            Our Work
          </span>
          <h2
            className="font-display font-semibold leading-[1.05] text-[--color-near-black] max-w-[980px]"
            style={{ fontSize: 'clamp(28px, 3.6vw, 54px)', letterSpacing: '-0.035em' }}
          >
            Roofing Projects Completed Across Cochrane, Calgary &amp; Canmore
          </h2>
        </motion.div>

        {/* Horizontal photo track — vertically centred in the viewport */}
        <div className="absolute inset-0 flex items-center">
          <motion.div
            className="flex items-center will-change-transform"
            style={{
              x: trackX,
              gap: `${CARD_GAP_VW}vw`,
              paddingLeft: `${SIDE_PAD_VW}vw`,
              paddingRight: `${SIDE_PAD_VW}vw`,
            }}
          >
            {images.map((img, i) => (
              <PhotoCard
                key={i}
                img={img}
                index={i}
                total={N}
                active={i === activeIdx}
                imageX={imageX}
              />
            ))}
          </motion.div>
        </div>

        {/* Footer: counter + progress bar + CTA */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 flex items-center gap-6"
          style={{
            paddingLeft: 'var(--section-pad-x)',
            paddingRight: 'var(--section-pad-x)',
            paddingBottom: 'clamp(28px, 4.5vh, 56px)',
          }}
        >
          <span
            className="font-display font-semibold tabular-nums text-[--color-near-black] text-[15px] tracking-[0.05em]"
            aria-live="polite"
          >
            {String(activeIdx + 1).padStart(2, '0')}
            <span className="text-[--color-near-black]/35"> / {String(N).padStart(2, '0')}</span>
          </span>

          <div className="flex-1 h-[2px] bg-black/10 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 right-0 origin-left rounded-full"
              style={{ scaleX: progressScale, background: 'var(--color-accent)' }}
            />
          </div>

          <Button variant="primary" size="md" href="/gallery">
            View Gallery
          </Button>
        </div>
      </div>

      {/* ── Mobile: snap-scroll fallback (no pin, no scroll-jack) ───── */}
      <div className="md:hidden relative">
        <motion.div
          className="flex flex-col items-center text-center"
          style={{
            paddingLeft: 'var(--section-pad-x)',
            paddingRight: 'var(--section-pad-x)',
            paddingTop: 'var(--section-pad-top)',
          }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <span
            className="inline-flex items-center h-8 px-3 text-[13px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm] mb-5"
            style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--color-near-black)' }}
          >
            Our Work
          </span>
          <h2
            className="font-display font-semibold leading-[1.05] text-[--color-near-black]"
            style={{ fontSize: 'clamp(28px, 7.5vw, 40px)', letterSpacing: '-0.035em' }}
          >
            Roofing Projects Completed Across Cochrane, Calgary &amp; Canmore
          </h2>
        </motion.div>

        <div
          className="mt-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{
            paddingLeft: 'var(--section-pad-x)',
            paddingRight: 'var(--section-pad-x)',
          }}
        >
          <div className="flex gap-3 pb-2">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative flex-none w-[78vw] h-[58vw] rounded-[--radius-md] overflow-hidden snap-center"
                style={{
                  boxShadow:
                    '0 24px 40px -22px rgba(20,20,20,0.35), 0 10px 18px -12px rgba(20,20,20,0.18)',
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: img.objectPosition ?? 'center' }}
                  draggable={false}
                />
                <span
                  className="absolute top-3 left-3 inline-flex items-center h-6 px-2 text-[10px] font-bold uppercase tracking-[0.12em] rounded-[--radius-sm] bg-white/95 text-[--color-near-black] tabular-nums"
                >
                  {String(i + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-8 flex justify-center"
          style={{
            paddingLeft: 'var(--section-pad-x)',
            paddingRight: 'var(--section-pad-x)',
            paddingBottom: 'var(--section-pad-bot)',
          }}
        >
          <Button variant="primary" size="md" href="/gallery">
            View Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}

// ── Single card on the pinned strip ─────────────────────────────────
interface PhotoCardProps {
  img: PortfolioImage
  index: number
  total: number
  active: boolean
  imageX: MotionValue<string>
}

function PhotoCard({ img, index, total, active, imageX }: PhotoCardProps) {
  return (
    <motion.div
      className="relative flex-none rounded-[--radius-md] overflow-hidden"
      style={{
        width: `${CARD_W_VW}vw`,
        height: 'clamp(380px, 62vh, 640px)',
        boxShadow:
          '0 38px 60px -28px rgba(20,20,20,0.45), 0 14px 26px -16px rgba(20,20,20,0.22)',
      }}
      animate={{
        scale: active ? 1 : 0.92,
        filter: active ? 'brightness(1)' : 'brightness(0.78)',
      }}
      transition={{ duration: 0.55, ease: EASE_OUT }}
    >
      {/* Image with horizontal parallax — over-sized so the counter-motion
          never shows a gap at the card edges. */}
      <motion.img
        src={img.src}
        alt={img.alt}
        className="absolute top-0 h-full w-[130%] -left-[15%] object-cover pointer-events-none select-none"
        style={{ x: imageX, objectPosition: img.objectPosition ?? 'center' }}
        draggable={false}
      />

      {/* Subtle bottom-gradient so caption pills always have contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(20,20,20,0.55) 0%, rgba(20,20,20,0) 100%)',
        }}
      />

      {/* Top-left index chip — matches header chip styling */}
      <span
        className="absolute top-4 left-4 inline-flex items-center h-7 px-2.5 text-[11px] font-body font-bold uppercase tracking-[0.14em] rounded-[--radius-sm] bg-white/95 text-[--color-near-black] tabular-nums"
      >
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>

      {/* Bottom-left caption — only on the active card, fades in/out */}
      <motion.span
        className="absolute bottom-4 left-4 inline-flex items-center h-8 px-3 text-[12px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm]"
        style={{ background: 'var(--color-accent)', color: 'var(--color-near-black)' }}
        animate={{ opacity: active ? 1 : 0, y: active ? 0 : 8 }}
        transition={{ duration: 0.45, ease: EASE_OUT }}
      >
        {img.caption ?? `Project ${String(index + 1).padStart(2, '0')}`}
      </motion.span>
    </motion.div>
  )
}
