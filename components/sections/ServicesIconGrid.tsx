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
      className="bg-white relative pt-[calc((100vw-40px)*0.5625-20px)] md:pt-[550px]"
      style={{
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
        paddingBottom: 'var(--section-pad-bot)',
      }}
    >
      {/* Centered label + heading */}
      <motion.div
        className="flex flex-col items-center text-center mb-8 md:mb-12"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <span className="inline-flex items-center gap-3 text-[11px] font-body font-bold uppercase tracking-[0.18em] text-[--color-near-black] mb-4">
          Our Services
        </span>
        <h2
          className="font-display font-semibold uppercase leading-[0.9] max-w-[900px]"
          style={{
            fontSize: 'clamp(32px, 4.2vw, 56px)',
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

      {/* Compact 3-column grid — all 6 services visible on-screen */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {services.map((service, i) => {
          const num = String(i + 1).padStart(2, '0')
          return (
            <motion.div
              key={service.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <Link
                href={service.href}
                className="group block relative overflow-hidden aspect-[4/5]"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                  draggable={false}
                />
                {/* Bottom-weighted gradient so title reads */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/25 pointer-events-none" />

                {/* Gold index number */}
                <span
                  className="absolute top-3 left-3 md:top-4 md:left-4 font-display font-semibold text-[#D4AF60]"
                  style={{ fontSize: '12px', letterSpacing: '0.14em' }}
                >
                  {num}
                </span>

                {/* Arrow chip */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 w-9 h-9 md:w-10 md:h-10 bg-[#D4AF60] flex items-center justify-center transition-transform duration-300 ease-out group-hover:rotate-45">
                  <ArrowUpRight
                    className="text-[--color-near-black]"
                    strokeWidth={2.5}
                    size={18}
                  />
                </div>

                {/* Title + Learn more anchored to bottom */}
                <div className="absolute left-0 right-0 bottom-0 p-4 md:p-5 flex flex-col gap-1.5">
                  <h3
                    className="font-display font-semibold uppercase leading-[0.95] text-white"
                    style={{
                      fontSize: 'clamp(18px, 1.9vw, 26px)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {service.title}
                  </h3>
                  <span
                    className="inline-flex items-center gap-2 text-[10px] md:text-[11px] font-body font-bold uppercase tracking-[0.16em] text-[#D4AF60] group-hover:gap-3 transition-all"
                  >
                    Learn more
                    <span className="inline-block w-6 h-px bg-[#D4AF60]" />
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
