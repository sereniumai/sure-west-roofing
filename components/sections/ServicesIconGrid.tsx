'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import {
  ArrowUpRight,
  Hammer,
  Wrench,
  CloudHail,
  ClipboardCheck,
  ScanSearch,
  Sun,
  type LucideIcon,
} from 'lucide-react'

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

type CardSize = 'feature' | 'secondary' | 'tertiary'

// Map the service title to a Lucide icon. Falls back to Hammer for anything
// new that isn't in this map.
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

function ServiceTile({
  service,
  index,
  total,
  size,
  delay,
  onHoverStart,
  onHoverEnd,
}: {
  service: ServiceCardItem
  index: number
  total: number
  size: CardSize
  delay: number
  onHoverStart: (src: string, alt: string) => void
  onHoverEnd: () => void
}) {
  const isFeature = size === 'feature'
  const Icon = iconFor(service.title)

  return (
    <motion.li
      className={
        size === 'feature'
          ? 'md:col-span-3 md:row-span-2'
          : size === 'secondary'
            ? 'md:col-span-3 md:row-span-1'
            : 'md:col-span-2 md:row-span-1'
      }
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: EASE_OUT }}
      onMouseEnter={() => onHoverStart(service.image, service.imageAlt)}
      onMouseLeave={onHoverEnd}
    >
      <Link
        href={service.href}
        aria-label={service.title}
        className="group relative block h-full w-full overflow-hidden rounded-[--radius-md] ring-1 ring-black/5 shadow-[0_10px_30px_-16px_rgba(26,22,18,0.25)] transition-all duration-500 ease-out hover:shadow-[0_30px_60px_-24px_rgba(26,22,18,0.38)]"
        style={{
          background:
            'radial-gradient(120% 120% at 0% 0%, rgba(255,255,255,0.05), transparent 55%), linear-gradient(145deg, #1a1612 0%, #0f0d0a 100%)',
        }}
      >
        {/* Subtle warm grain */}
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            background:
              'radial-gradient(450px 200px at 20% 10%, rgba(212,175,96,0.12), transparent 60%), radial-gradient(350px 180px at 100% 100%, rgba(212,175,96,0.06), transparent 60%)',
          }}
        />

        {/* Gold index top-left */}
        <span
          aria-hidden="true"
          className="absolute top-4 md:top-5 left-4 md:left-5 font-display font-semibold tabular-nums z-10"
          style={{
            fontSize: isFeature ? '13px' : '12px',
            color: 'var(--color-accent, #D4AF60)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>

        {/* Arrow chip top-right */}
        <span
          aria-hidden="true"
          className="absolute top-4 md:top-5 right-4 md:right-5 inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full backdrop-blur-[6px] bg-white/10 text-white transition-all duration-400 ease-out group-hover:bg-[--color-accent] group-hover:text-[--color-near-black] z-10"
        >
          <ArrowUpRight
            className="w-4 h-4 md:w-[18px] md:h-[18px] transition-transform duration-400 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        </span>

        {/* Icon (big, centered, offset up so title can sit below) */}
        <span
          aria-hidden="true"
          className={
            isFeature
              ? 'absolute left-6 md:left-9 top-1/2 -translate-y-[70%] transition-transform duration-500 ease-out group-hover:-translate-y-[80%]'
              : 'absolute left-4 md:left-5 top-1/2 -translate-y-[80%] transition-transform duration-500 ease-out group-hover:-translate-y-[90%]'
          }
          style={{ color: 'var(--color-accent, #D4AF60)' }}
        >
          <Icon
            className={
              isFeature
                ? 'w-14 h-14 md:w-[68px] md:h-[68px]'
                : size === 'secondary'
                  ? 'w-9 h-9 md:w-11 md:h-11'
                  : 'w-8 h-8 md:w-10 md:h-10'
            }
            strokeWidth={1.5}
          />
        </span>

        {/* Content bottom-left */}
        <div
          className={
            isFeature
              ? 'absolute inset-x-0 bottom-0 p-6 md:p-9 text-white'
              : 'absolute inset-x-0 bottom-0 p-4 md:p-5 text-white'
          }
        >
          <h3
            className="font-display font-semibold leading-[1.02]"
            style={{
              fontSize: isFeature
                ? 'clamp(30px, 3.2vw, 48px)'
                : size === 'secondary'
                  ? 'clamp(22px, 1.8vw, 28px)'
                  : 'clamp(19px, 1.5vw, 24px)',
              letterSpacing: '-0.028em',
            }}
          >
            {service.title}
          </h3>

          {/* Gold underline */}
          <span
            aria-hidden="true"
            className="block h-[2px] mt-2 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
            style={{
              background: 'var(--color-accent, #D4AF60)',
              width: isFeature ? '56px' : '36px',
            }}
          />

          {isFeature && (
            <p
              className="mt-4 max-w-[540px] text-white/75 leading-[1.65]"
              style={{
                fontSize: '15px',
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 400,
              }}
            >
              {service.description}
            </p>
          )}
        </div>
      </Link>
    </motion.li>
  )
}

export function ServicesIconGrid({
  eyebrow = 'Our Services',
  heading,
  body,
  services,
}: ServicesIconGridProps) {
  const sized: CardSize[] = services.map((_, i) => {
    if (i === 0) return 'feature'
    if (i <= 2) return 'secondary'
    return 'tertiary'
  })

  // Cursor-following image preview
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState<{ src: string; alt: string } | null>(null)

  // Raw mouse coords, relative to the section
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  // Slightly lagged / eased so the preview floats instead of snapping
  const springX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.5 })

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

      {/* ── Bento-grid services with cursor-follow image reveal ─── */}
      <div
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="relative max-w-[1320px] mx-auto"
      >
        <ul className="relative grid grid-cols-1 md:grid-cols-6 md:auto-rows-[180px] lg:auto-rows-[220px] gap-4 md:gap-5">
          {services.map((service, i) => (
            <ServiceTile
              key={service.title}
              service={service}
              index={i}
              total={services.length}
              size={sized[i]}
              delay={0.05 + i * 0.06}
              onHoverStart={(src, alt) => setHover({ src, alt })}
              onHoverEnd={() => setHover(null)}
            />
          ))}
        </ul>

        {/* Cursor-follow image preview */}
        <AnimatePresence>
          {hover && (
            <motion.div
              className="pointer-events-none absolute top-0 left-0 hidden md:block z-20"
              style={{ x: springX, y: springY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
            >
              {/* translate so the image sits just below + right of the cursor */}
              <div className="-translate-x-1/2 translate-y-6">
                <div className="relative w-[300px] lg:w-[340px] aspect-[4/3] overflow-hidden rounded-[--radius-md] ring-1 ring-black/10 shadow-[0_30px_60px_-20px_rgba(26,22,18,0.55)]">
                  <motion.img
                    key={hover.src}
                    src={hover.src}
                    alt={hover.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ scale: 1.06, opacity: 0.85 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: EASE_OUT }}
                    draggable={false}
                  />
                  {/* Gold rim */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1"
                    style={{ background: 'var(--color-accent, #D4AF60)' }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
