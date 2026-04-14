'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

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
      className="bg-[--color-cream] relative"
      style={{
        padding: '380px var(--section-pad-x) var(--section-pad-bot)',
      }}
    >
      {/* Centered label + heading */}
      <motion.div
        className="flex flex-col items-center text-center mb-16"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <span className="inline-flex items-center gap-3 text-[11px] font-body font-bold uppercase tracking-[0.18em] text-[--color-near-black] mb-6">
          <span className="w-[10px] h-[10px] bg-[#D4AF60] inline-block" />
          Our Services
          <span className="w-[10px] h-[10px] bg-[#D4AF60] inline-block" />
        </span>
        <h2
          className="font-display font-semibold uppercase leading-[0.9] max-w-[900px]"
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

      {/* 3-column grid of service cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l"
        style={{ borderColor: 'var(--color-border)' }}
      >
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          >
            <Link
              href={service.href}
              className="group relative flex items-stretch border-r border-b overflow-hidden h-[280px]"
              style={{ borderColor: 'var(--color-border)' }}
            >
              {/* Blue hover reveal overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]"
                style={{ background: 'var(--color-blue-hover)', mixBlendMode: 'multiply' }}
              />

              {/* Left: title top, description bottom */}
              <div className="flex flex-col justify-between flex-1 min-w-0 p-6 relative z-[2]">
                <h3
                  className="font-display font-bold uppercase tracking-tight"
                  style={{
                    fontSize: 'var(--text-card)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {service.title}
                </h3>
                <p className="font-body text-[--color-near-black]/70 font-semibold leading-snug text-sm">
                  {service.description}
                </p>
              </div>

              {/* Right: image fills */}
              <div className="w-[55%] flex-shrink-0 relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  draggable={false}
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
