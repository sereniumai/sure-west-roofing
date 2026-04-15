'use client'

import { motion } from 'framer-motion'
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

      {/* ── 3 x 2 service card grid ──────────────────────────────── */}
      <ul className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-[1320px] mx-auto">
        {services.map((service, i) => (
          <motion.li
            key={service.title}
            className="group relative flex flex-col rounded-[--radius-lg] bg-white border border-[--color-near-black]/10 shadow-[0_10px_30px_-16px_rgba(26,22,18,0.18)] transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-[0_30px_60px_-24px_rgba(26,22,18,0.28)] hover:border-[#D4AF60]/40 overflow-hidden"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.05 + i * 0.06, ease: EASE_OUT }}
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-black">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                draggable={false}
              />
              {/* Soft bottom vignette into card body */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent, rgba(0,0,0,0.25))',
                }}
              />
              {/* Gold top rule that lights up on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                style={{ background: 'var(--color-accent, #D4AF60)' }}
              />
            </div>

            {/* Body */}
            <div className="relative flex flex-col flex-1 p-5 md:p-6">
              <h3
                className="font-display font-semibold leading-[1.1] text-[--color-near-black] transition-colors duration-300 group-hover:text-[#B8943F]"
                style={{
                  fontSize: 'clamp(20px, 1.7vw, 24px)',
                  letterSpacing: '-0.02em',
                }}
              >
                {service.title}
              </h3>

              <p
                className="mt-2.5 text-[--color-near-black]/70 leading-[1.65] flex-1"
                style={{
                  fontSize: '14px',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 400,
                }}
              >
                {service.description}
              </p>

              <div className="mt-5 md:mt-6">
                <Button
                  variant="primary"
                  size="sm"
                  href={service.href}
                  className="w-full sm:w-auto"
                >
                  {service.title}
                </Button>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
