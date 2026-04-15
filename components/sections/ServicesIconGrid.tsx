'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  Hammer,
  Wrench,
  CloudHail,
  ClipboardCheck,
  ScanSearch,
  Sun,
  type LucideIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface ServiceReview {
  quote: string
  author: string
  location?: string
}

interface ServiceCardItem {
  title: string
  description: string
  href: string
  image: string
  imageAlt: string
  review?: ServiceReview
}

interface ServicesIconGridProps {
  eyebrow?: string
  heading: string
  body?: string
  services: ServiceCardItem[]
}

const EASE_OUT = [0.16, 1, 0.3, 1] as const

function iconFor(title: string): LucideIcon {
  const key = title.toLowerCase()
  if (key.includes('replacement')) return Hammer
  if (key.includes('hail')) return CloudHail
  if (key.includes('repair')) return Wrench
  if (key.includes('maintenance')) return ClipboardCheck
  if (key.includes('inspection')) return ScanSearch
  if (key.includes('skylight')) return Sun
  return Hammer
}

function ServiceCard({
  service,
  delay,
  onHoverStart,
  onHoverEnd,
}: {
  service: ServiceCardItem
  delay: number
  onHoverStart: (s: ServiceCardItem) => void
  onHoverEnd: () => void
}) {
  const Icon = iconFor(service.title)

  return (
    <motion.article
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: EASE_OUT }}
      onMouseEnter={() => onHoverStart(service)}
      onMouseLeave={onHoverEnd}
      className="group relative flex flex-col h-full rounded-[--radius-md] border border-[--color-near-black]/8 bg-white p-7 md:p-8 shadow-[0_1px_2px_rgba(26,22,18,0.04),0_6px_20px_-10px_rgba(26,22,18,0.08)] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-[3px] hover:border-[#D4AF60]/40 hover:shadow-[0_2px_4px_rgba(26,22,18,0.04),0_24px_48px_-20px_rgba(184,148,63,0.22)]"
    >
      {/* Heading row — icon inline with title */}
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-9 h-9 rounded-[8px] flex-shrink-0 transition-colors duration-500 ease-out group-hover:bg-[rgba(212,175,96,0.18)]"
          style={{ background: 'rgba(212,175,96,0.12)' }}
        >
          <Icon
            className="w-[15px] h-[15px]"
            style={{ color: 'var(--color-accent, #D4AF60)' }}
            strokeWidth={1.75}
          />
        </span>
        <h3
          className="font-display font-semibold leading-[1.15] text-[--color-near-black]"
          style={{
            fontSize: 'clamp(19px, 1.45vw, 22px)',
            letterSpacing: '-0.02em',
          }}
        >
          {service.title}
        </h3>
      </div>

      <p
        className="mt-3 text-[--color-near-black]/65 leading-[1.65] flex-1"
        style={{
          fontSize: '14px',
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 400,
        }}
      >
        {service.description}
      </p>

      {/* Primary gold CTA — uses service keyword */}
      <div className="mt-7">
        <Button variant="primary" size="sm" href={service.href}>
          {service.title}
        </Button>
      </div>
    </motion.article>
  )
}

export function ServicesIconGrid({
  eyebrow = 'Our Services',
  heading,
  body,
  services,
}: ServicesIconGridProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState<ServiceCardItem | null>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.45 })
  const springY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.45 })

  // Approximate polaroid card height used to decide whether the preview
  // should flip above the cursor to avoid overflowing into the next section.
  const PREVIEW_H = 380
  const previewOffsetY = useTransform(springY, (val) => {
    const gridH = sectionRef.current?.clientHeight ?? 0
    // If the cursor is closer to the bottom than a full preview can fit, flip above.
    return gridH && val > gridH - PREVIEW_H - 40 ? -(PREVIEW_H + 16) : 32
  })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <section
      className="bg-white relative overflow-hidden"
      style={{
        paddingTop: 'var(--section-pad-top)',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
        paddingBottom: 'calc(var(--section-pad-bot) + 40px)',
      }}
    >
      {/* ── Header ───────────────────────────────────────────────── */}
      <motion.div
        className="relative flex flex-col items-center text-center mb-12 md:mb-16 max-w-[920px] mx-auto"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        <span
          className="inline-flex items-center h-8 md:h-9 px-3 md:px-4 text-[13px] md:text-[14px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm] mb-6"
          style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--color-accent, #D4AF60)' }}
        >
          {eyebrow}
        </span>
        <h2
          className="font-display font-semibold leading-[1.05] max-w-[1000px] text-[--color-near-black]"
          style={{
            fontSize: 'clamp(30px, 3.8vw, 52px)',
            letterSpacing: '-0.04em',
          }}
        >
          {heading.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h2>
        {body && (
          <p
            className="mt-7 max-w-[680px] text-[--color-near-black]/70 leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            {body}
          </p>
        )}
      </motion.div>

      {/* ── 3 x 2 service card grid with cursor-follow preview ─── */}
      <div
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="relative max-w-[1320px] mx-auto"
      >
        <ul className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-fr">
          {services.map((service, i) => (
            <li key={service.title} className="h-full">
              <ServiceCard
                service={service}
                delay={0.05 + i * 0.06}
                onHoverStart={(s) => setHover(s)}
                onHoverEnd={() => setHover(null)}
              />
            </li>
          ))}
        </ul>

        {/* ── Cursor-follow polaroid preview ──────────────────────── */}
        <AnimatePresence>
          {hover && (
            <motion.div
              key="preview"
              className="pointer-events-none absolute top-0 left-0 hidden md:block z-20"
              style={{ x: springX, y: springY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: EASE_OUT }}
            >
              {/* Flip above cursor when near the bottom to avoid overflow */}
              <motion.div style={{ y: previewOffsetY }}>
                <motion.div
                  className="-translate-x-1/2"
                  initial={{ scale: 0.9, rotate: 0, y: 10 }}
                  animate={{ scale: 1, rotate: -3, y: 0 }}
                  exit={{ scale: 0.95, rotate: -1, y: 6 }}
                  transition={{ duration: 0.32, ease: EASE_OUT }}
                >
                  {/* Polaroid frame: thick white paper, thicker bottom, warm shadow */}
                  <figure
                    className="relative w-[260px] lg:w-[280px] bg-[#FDFBF6]"
                    style={{
                      padding: '12px 12px 46px 12px',
                      borderRadius: '3px',
                      boxShadow:
                        '0 30px 50px -18px rgba(26,22,18,0.45), 0 10px 18px -8px rgba(26,22,18,0.18), inset 0 0 0 1px rgba(0,0,0,0.04)',
                    }}
                  >
                    {/* Subtle inner photo edge */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#1A1612]">
                      <motion.img
                        key={hover.image}
                        src={hover.image}
                        alt={hover.imageAlt}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ scale: 1.08, opacity: 0.85 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: EASE_OUT }}
                        draggable={false}
                      />
                      {/* Subtle film vignette to feel photographic */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                        style={{
                          background:
                            'radial-gradient(120% 90% at 50% 30%, transparent 55%, rgba(0,0,0,0.28) 100%)',
                        }}
                      />
                    </div>

                    {/* Handwritten-style caption */}
                    <figcaption
                      className="absolute left-0 right-0 text-center text-[--color-near-black]/80"
                      style={{
                        bottom: '14px',
                        fontFamily: "'Caveat', 'Brush Script MT', cursive",
                        fontSize: '20px',
                        lineHeight: 1,
                        letterSpacing: '0.01em',
                      }}
                    >
                      {hover.title}
                    </figcaption>
                  </figure>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
