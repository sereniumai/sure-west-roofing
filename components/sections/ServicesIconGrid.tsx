'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface ServiceCardItem {
  title: string
  description: string
  href: string
  image: string
  imageAlt: string
}

interface ServicesIconGridProps {
  heading: string
  services: ServiceCardItem[]
}

export function ServicesIconGrid({ heading, services }: ServicesIconGridProps) {
  return (
    <section
      className="bg-[--color-cream] relative pt-[calc((100vw-40px)*0.5625-20px)] md:pt-[550px]"
      style={{
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
        paddingBottom: 'var(--section-pad-bot)',
      }}
    >
      {/* Centered label + heading */}
      <motion.div
        className="flex flex-col items-center text-center mb-16 md:mb-24"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <span className="inline-flex items-center gap-3 text-[11px] font-body font-bold uppercase tracking-[0.18em] text-[--color-near-black] mb-6">
          Our Services
        </span>
        <h2
          className="font-display font-semibold uppercase leading-[0.9] max-w-[1000px]"
          style={{
            fontSize: 'var(--text-section)',
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
      </motion.div>

      {/* Editorial 2-column grid of service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {services.map((service, i) => {
          const num = String(i + 1).padStart(2, '0')
          return (
            <motion.div
              key={service.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <Link
                href={service.href}
                className="group block relative bg-[--color-near-black] overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                    draggable={false}
                  />
                  {/* Dark gradient so the number + arrow read on any image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 pointer-events-none" />
                  {/* Gold index number */}
                  <span
                    className="absolute top-5 left-5 md:top-6 md:left-6 font-display font-semibold text-[#D4AF60] tracking-tight"
                    style={{ fontSize: '14px', letterSpacing: '0.1em' }}
                  >
                    {num}
                  </span>
                  {/* Arrow in corner */}
                  <div className="absolute top-5 right-5 md:top-6 md:right-6 w-11 h-11 md:w-12 md:h-12 bg-[#D4AF60] flex items-center justify-center transition-transform duration-300 ease-out group-hover:rotate-45">
                    <ArrowUpRight
                      className="text-[--color-near-black]"
                      strokeWidth={2.5}
                      size={22}
                    />
                  </div>
                </div>

                {/* Text block on dark bg */}
                <div className="p-6 md:p-8 flex flex-col gap-3 md:gap-4">
                  <h3
                    className="font-display font-semibold uppercase leading-[0.95] text-[--color-warm-white]"
                    style={{
                      fontSize: 'clamp(28px, 3.6vw, 44px)',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="leading-relaxed max-w-[52ch] text-white/70 font-medium"
                    style={{
                      fontSize: '15px',
                      fontFamily: "'Inter', system-ui, sans-serif",
                    }}
                  >
                    {service.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 mt-2 text-[12px] font-body font-bold uppercase tracking-[0.14em] text-[#D4AF60] group-hover:gap-4 transition-all"
                  >
                    Learn more
                    <span className="inline-block w-8 h-px bg-[#D4AF60]" />
                  </span>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
