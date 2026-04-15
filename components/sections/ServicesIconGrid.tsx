'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

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

function ServiceTile({
  service,
  index,
  total,
  size,
  delay,
}: {
  service: ServiceCardItem
  index: number
  total: number
  size: CardSize
  delay: number
}) {
  const isFeature = size === 'feature'

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
    >
      <Link
        href={service.href}
        aria-label={service.title}
        className="group relative block h-full w-full overflow-hidden rounded-[--radius-md] bg-black ring-1 ring-black/5 shadow-[0_10px_30px_-16px_rgba(26,22,18,0.25)] transition-all duration-500 ease-out hover:shadow-[0_30px_60px_-24px_rgba(26,22,18,0.38)]"
      >
        {/* Image */}
        <img
          src={service.image}
          alt={service.imageAlt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
          draggable={false}
        />

        {/* Cinematic gradient */}
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isFeature
              ? 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.85) 100%)'
              : 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.65) 100%)',
          }}
        />

        {/* Gold index top-left */}
        <span
          aria-hidden="true"
          className="absolute top-4 md:top-5 left-4 md:left-5 font-display font-semibold tabular-nums"
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
          className="absolute top-4 md:top-5 right-4 md:right-5 inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full backdrop-blur-[6px] bg-white/15 text-white transition-all duration-400 ease-out group-hover:bg-[--color-accent] group-hover:text-[--color-near-black]"
        >
          <ArrowUpRight
            className="w-4 h-4 md:w-[18px] md:h-[18px] transition-transform duration-400 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        </span>

        {/* Content */}
        <div
          className={
            isFeature
              ? 'absolute inset-x-0 bottom-0 p-6 md:p-9 text-white'
              : 'absolute inset-x-0 bottom-0 p-4 md:p-5 text-white'
          }
        >
          <h3
            className="font-display font-semibold leading-[1.02] transition-transform duration-500 ease-out"
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

          {/* Gold underline slides in under the title on hover */}
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
              className="mt-4 max-w-[540px] text-white/80 leading-[1.65]"
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
  // First service is the feature; next two are secondary; rest are tertiary.
  const sized: CardSize[] = services.map((_, i) => {
    if (i === 0) return 'feature'
    if (i <= 2) return 'secondary'
    return 'tertiary'
  })

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

      {/* ── Bento-grid services ──────────────────────────────────── */}
      <ul className="relative grid grid-cols-1 md:grid-cols-6 md:auto-rows-[180px] lg:auto-rows-[220px] gap-4 md:gap-5 max-w-[1320px] mx-auto">
        {services.map((service, i) => (
          <ServiceTile
            key={service.title}
            service={service}
            index={i}
            total={services.length}
            size={sized[i]}
            delay={0.05 + i * 0.06}
          />
        ))}
      </ul>
    </section>
  )
}
