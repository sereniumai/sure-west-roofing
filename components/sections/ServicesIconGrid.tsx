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

export function ServicesIconGrid({
  eyebrow = 'Our Services',
  heading,
  body,
  services,
}: ServicesIconGridProps) {
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
        className="relative flex flex-col items-center text-center mb-14 md:mb-20 max-w-[920px] mx-auto"
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

      {/* ── Editorial service grid (no card chrome) ─────────────── */}
      <ul className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-14 max-w-[1320px] mx-auto">
        {services.map((service, i) => (
          <motion.li
            key={service.title}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.05 + i * 0.06, ease: EASE_OUT }}
          >
            <Link
              href={service.href}
              className="group block relative"
              aria-label={service.title}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[--radius-md] bg-black">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  draggable={false}
                />
                {/* Soft warm vignette */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 80%, rgba(0,0,0,0.35) 100%)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative mt-5">
                {/* Tiny gold index + arrow row */}
                <div className="flex items-center justify-between text-[--color-near-black]/50">
                  <span
                    className="font-display font-semibold tabular-nums"
                    style={{
                      fontSize: '12px',
                      color: 'var(--color-accent, #D4AF60)',
                      letterSpacing: '0.08em',
                    }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                  </span>
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-400 ease-out translate-x-0 group-hover:translate-x-0 group-hover:bg-[--color-near-black] group-hover:text-white"
                    style={{ background: 'rgba(26,22,18,0.06)' }}
                  >
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-0"
                      strokeWidth={2}
                    />
                  </span>
                </div>

                {/* Title with gold underline on hover */}
                <h3
                  className="relative mt-3 font-display font-semibold leading-[1.05] text-[--color-near-black] inline-block"
                  style={{
                    fontSize: 'clamp(22px, 1.8vw, 28px)',
                    letterSpacing: '-0.028em',
                  }}
                >
                  <span>{service.title}</span>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                    style={{ background: 'var(--color-accent, #D4AF60)' }}
                  />
                </h3>

                <p
                  className="mt-3 text-[--color-near-black]/65 leading-[1.65] max-w-[46ch]"
                  style={{
                    fontSize: '14px',
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
