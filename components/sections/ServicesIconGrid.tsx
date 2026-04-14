'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Plus } from 'lucide-react'

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
  const [active, setActive] = useState(0)
  const activeService = services[active]

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
        className="flex flex-col items-center text-center mb-10 md:mb-16"
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

      {/* Premium accordion with synchronised image panel */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(0,480px)] gap-6 md:gap-12 items-start max-w-[1280px] mx-auto">
        {/* Accordion column */}
        <div className="flex flex-col">
          {services.map((service, i) => {
            const num = String(i + 1).padStart(2, '0')
            const isActive = active === i
            return (
              <div
                key={service.title}
                className="border-t border-[--color-border] last:border-b"
              >
                <button
                  type="button"
                  onClick={() => setActive(isActive ? -1 : i)}
                  onMouseEnter={() => setActive(i)}
                  className="w-full flex items-center gap-4 md:gap-6 py-5 md:py-6 text-left group"
                  aria-expanded={isActive}
                >
                  {/* Index */}
                  <span
                    className={`font-display font-semibold tabular-nums transition-colors duration-300 ${
                      isActive
                        ? 'text-[#D4AF60]'
                        : 'text-[--color-near-black]/35'
                    }`}
                    style={{
                      fontSize: '14px',
                      letterSpacing: '0.14em',
                      minWidth: '28px',
                    }}
                  >
                    {num}
                  </span>

                  {/* Title */}
                  <h3
                    className={`flex-1 font-display font-semibold uppercase leading-[0.95] transition-colors duration-300 ${
                      isActive
                        ? 'text-[--color-near-black]'
                        : 'text-[--color-near-black]/55 group-hover:text-[--color-near-black]'
                    }`}
                    style={{
                      fontSize: 'clamp(24px, 3vw, 40px)',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Plus / toggle icon */}
                  <span
                    className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-[#D4AF60] text-[--color-near-black] rotate-45'
                        : 'bg-transparent border border-[--color-near-black]/20 text-[--color-near-black]/60 group-hover:border-[#D4AF60] group-hover:text-[#D4AF60]'
                    }`}
                  >
                    <Plus strokeWidth={2} size={18} />
                  </span>
                </button>

                {/* Expanding body */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 md:pb-8 md:pl-[52px]">
                        {/* Mobile image preview — only visible on mobile since the
                            desktop layout has a persistent image panel */}
                        <div className="md:hidden relative aspect-[16/10] overflow-hidden mb-5">
                          <img
                            src={service.image}
                            alt={service.imageAlt}
                            className="w-full h-full object-cover"
                            draggable={false}
                          />
                        </div>
                        <p
                          className="text-[--color-near-black]/75 font-medium leading-relaxed max-w-[54ch]"
                          style={{
                            fontSize: '15px',
                            fontFamily: "'Inter', system-ui, sans-serif",
                          }}
                        >
                          {service.description}
                        </p>
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 mt-5 text-[12px] font-body font-bold uppercase tracking-[0.14em] text-[--color-near-black] hover:text-[#B8943F] transition-all group/cta"
                        >
                          Explore {service.title}
                          <ArrowUpRight
                            strokeWidth={2.5}
                            size={16}
                            className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                          />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Persistent synchronised image panel — desktop only */}
        <div className="hidden md:block sticky top-[120px]">
          <div className="relative aspect-[4/5] overflow-hidden bg-[--color-near-black]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeService?.image ?? 'fallback'}
                src={activeService?.image}
                alt={activeService?.imageAlt ?? ''}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                draggable={false}
              />
            </AnimatePresence>
            {/* Bottom gradient + title overlay for identity */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <AnimatePresence mode="wait">
              {activeService && (
                <motion.div
                  key={`title-${activeService.title}`}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 12, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
                  className="absolute left-0 right-0 bottom-0 p-6 md:p-8 flex items-end justify-between gap-4"
                >
                  <h4
                    className="font-display font-semibold uppercase text-white leading-[0.95]"
                    style={{
                      fontSize: 'clamp(22px, 2.2vw, 30px)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {activeService.title}
                  </h4>
                  <Link
                    href={activeService.href}
                    aria-label={`Explore ${activeService.title}`}
                    className="flex-shrink-0 w-11 h-11 bg-[#D4AF60] flex items-center justify-center transition-transform duration-300 ease-out hover:rotate-45"
                  >
                    <ArrowUpRight
                      className="text-[--color-near-black]"
                      strokeWidth={2.5}
                      size={20}
                    />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
