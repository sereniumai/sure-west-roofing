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
  index,
  delay,
  onHoverStart,
  onHoverEnd,
}: {
  service: ServiceCardItem
  index: number
  delay: number
  onHoverStart: (s: ServiceCardItem) => void
  onHoverEnd: () => void
}) {
  const Icon = iconFor(service.title)

  return (
    <motion.article
      className="group relative flex flex-col rounded-[--radius-md] border border-[--color-near-black]/10 bg-white p-5 md:p-6 shadow-[0_10px_30px_-16px_rgba(26,22,18,0.18)] transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-[0_30px_60px_-24px_rgba(26,22,18,0.28)] hover:border-[#D4AF60]/40"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: EASE_OUT }}
      onMouseEnter={() => onHoverStart(service)}
      onMouseLeave={onHoverEnd}
    >
      {/* Gold top-rule accent animates in on hover */}
      <span
        aria-hidden="true"
        className="absolute left-5 md:left-6 top-0 h-[2px] w-10 origin-left scale-x-75 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: 'var(--color-accent, #D4AF60)' }}
      />

      {/* Gold index top-right */}
      <span
        aria-hidden="true"
        className="absolute top-4 md:top-5 right-5 md:right-6 font-display font-semibold tabular-nums"
        style={{
          fontSize: '11px',
          color: 'var(--color-accent, #D4AF60)',
          letterSpacing: '0.12em',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Icon tile */}
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-12 h-12 rounded-[--radius-sm] transition-all duration-400 ease-out group-hover:bg-[rgba(212,175,96,0.22)] group-hover:scale-105"
        style={{ background: 'rgba(212,175,96,0.12)' }}
      >
        <Icon
          className="w-6 h-6"
          style={{ color: 'var(--color-accent, #D4AF60)' }}
          strokeWidth={1.65}
        />
      </span>

      <h3
        className="mt-5 font-display font-semibold leading-[1.1] text-[--color-near-black]"
        style={{
          fontSize: 'clamp(20px, 1.55vw, 24px)',
          letterSpacing: '-0.02em',
        }}
      >
        {service.title}
      </h3>

      <p
        className="mt-2.5 text-[--color-near-black]/70 leading-[1.6] flex-1"
        style={{
          fontSize: '14px',
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 400,
        }}
      >
        {service.description}
      </p>

      <div className="mt-5">
        <Button variant="primary" size="sm" href={service.href}>
          Learn More
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
  const springX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.5 })
  // A softer, slower spring for the gold "shadow" clone behind the preview
  const shadowX = useSpring(x, { stiffness: 140, damping: 24, mass: 0.7 })
  const shadowY = useSpring(y, { stiffness: 140, damping: 24, mass: 0.7 })

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
                index={i}
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
            <>
              {/* Gold shadow clone — slower spring, gives the preview a soft tail */}
              <motion.div
                key="shadow"
                className="pointer-events-none absolute top-0 left-0 hidden md:block z-10"
                style={{ x: shadowX, y: shadowY }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
              >
                <div className="-translate-x-1/2 translate-y-6 translate-x-2 translate-y-8">
                  <div
                    className="w-[320px] lg:w-[360px] aspect-[4/3] rounded-[--radius-md] blur-[2px]"
                    style={{
                      background:
                        'radial-gradient(closest-side, rgba(212,175,96,0.45), rgba(212,175,96,0.1) 70%, transparent 85%)',
                    }}
                  />
                </div>
              </motion.div>

              {/* Main preview */}
              <motion.div
                key="preview"
                className="pointer-events-none absolute top-0 left-0 hidden md:block z-20"
                style={{ x: springX, y: springY }}
                initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.96, rotate: 1 }}
                transition={{ duration: 0.28, ease: EASE_OUT }}
              >
                <div className="-translate-x-1/2 translate-y-6">
                  <div className="relative w-[320px] lg:w-[360px] aspect-[4/3] overflow-hidden rounded-[--radius-md] ring-1 ring-black/10 shadow-[0_40px_80px_-24px_rgba(26,22,18,0.6),0_12px_24px_-12px_rgba(26,22,18,0.4)] bg-black">
                    <motion.img
                      key={hover.image}
                      src={hover.image}
                      alt={hover.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ scale: 1.08, opacity: 0.85 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, ease: EASE_OUT }}
                      draggable={false}
                    />
                    {/* Bottom gradient for caption legibility */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-24"
                      style={{
                        background:
                          'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))',
                      }}
                    />
                    {/* Caption */}
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <span
                        aria-hidden="true"
                        className="block font-display font-semibold uppercase tabular-nums mb-1"
                        style={{
                          fontSize: '10px',
                          color: 'var(--color-accent, #D4AF60)',
                          letterSpacing: '0.22em',
                        }}
                      >
                        View Service
                      </span>
                      <span
                        className="block font-display font-semibold text-white leading-[1.1]"
                        style={{
                          fontSize: '18px',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {hover.title}
                      </span>
                    </div>
                    {/* Gold rim bottom */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-[3px]"
                      style={{ background: 'var(--color-accent, #D4AF60)' }}
                    />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
