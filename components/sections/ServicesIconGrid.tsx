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
      className="bg-[--color-cream]"
      style={{
        padding: 'var(--section-pad-top) var(--section-pad-x) var(--section-pad-bot)',
      }}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left column: label + heading */}
        <motion.div
          className="lg:w-[400px] flex-shrink-0 lg:sticky lg:top-28"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="section-label text-[#D4AF60] mb-4 block">
            Our Services
          </span>
          <h2
            className="font-display font-semibold uppercase leading-none mt-1"
            style={{
              fontSize: 'var(--text-section)',
              letterSpacing: '-0.04em',
            }}
          >
            {heading}
          </h2>
        </motion.div>

        {/* Right column: service cards list */}
        <div className="flex-1 flex flex-col">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={service.href}
                className="group relative flex items-center gap-6 lg:gap-8 p-5 bg-[--color-gray] border-b overflow-hidden"
                style={{ borderColor: 'var(--color-border)' }}
              >
                {/* Blue hover reveal overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'var(--color-blue-hover)' }}
                />

                {/* Thumbnail */}
                <div className="w-[140px] h-[150px] lg:w-[180px] lg:h-[184px] flex-shrink-0 relative z-[1] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    draggable={false}
                  />
                </div>

                {/* Text */}
                <div className="flex-1 relative z-[1]">
                  <h3
                    className="font-display font-bold uppercase tracking-tight group-hover:mix-blend-multiply"
                    style={{
                      fontSize: 'var(--text-card)',
                      letterSpacing: '-0.005em',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="font-body text-[--color-near-black]/65 font-semibold leading-snug mt-2 group-hover:mix-blend-multiply">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="relative z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
