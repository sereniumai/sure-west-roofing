'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
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
      {/* Icon tile — soft cream square with pale gold glyph */}
      <div className="mb-6">
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-9 h-9 rounded-[8px] transition-colors duration-500 ease-out group-hover:bg-[rgba(212,175,96,0.18)]"
          style={{ background: 'rgba(212,175,96,0.12)' }}
        >
          <Icon
            className="w-[15px] h-[15px]"
            style={{ color: 'var(--color-accent, #D4AF60)' }}
            strokeWidth={1.75}
          />
        </span>
      </div>

      <h3
        className="font-display font-semibold leading-[1.15] text-[--color-near-black]"
        style={{
          fontSize: 'clamp(19px, 1.45vw, 22px)',
          letterSpacing: '-0.02em',
        }}
      >
        {service.title}
      </h3>

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

        {/* ── Cursor-follow image preview ─────────────────────────── */}
        <AnimatePresence>
          {hover && (
            <motion.div
              key="preview"
              className="pointer-events-none absolute top-0 left-0 hidden md:block z-20"
              style={{ x: springX, y: springY }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22, ease: EASE_OUT }}
            >
              <div className="-translate-x-1/2 translate-y-8">
                <figure className="relative w-[300px] lg:w-[340px] overflow-hidden rounded-[14px] bg-white p-2 shadow-[0_30px_60px_-20px_rgba(26,22,18,0.35),0_8px_16px_-8px_rgba(26,22,18,0.15)] ring-1 ring-black/5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-[#1A1612]">
                    <motion.img
                      key={hover.image}
                      src={hover.image}
                      alt={hover.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ scale: 1.06, opacity: 0.9 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, ease: EASE_OUT }}
                      draggable={false}
                    />
                  </div>

                  {/* Caption strip below image */}
                  <figcaption className="flex items-center justify-between px-3 pt-3 pb-2">
                    <span
                      className="font-display font-semibold text-[--color-near-black] leading-none"
                      style={{
                        fontSize: '14px',
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {hover.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-display font-semibold uppercase tabular-nums"
                      style={{
                        fontSize: '9.5px',
                        color: '#B8943F',
                        letterSpacing: '0.22em',
                      }}
                    >
                      View →
                    </span>
                  </figcaption>
                </figure>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
