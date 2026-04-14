'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface ServiceCardItem {
  title: string
  description: string
  href: string
  image: string
  imageAlt: string
}

interface ServicesIconGridProps {
  eyebrow?: string
  heading: string
  body?: string
  services: ServiceCardItem[]
}

export function ServicesIconGrid({ eyebrow = 'Our Services', heading, body, services }: ServicesIconGridProps) {
  const [active, setActive] = useState(0)
  const featured = services[0]

  return (
    <section
      className="bg-white relative pt-[calc((100vw-40px)*0.5625-20px)] md:pt-[550px] overflow-hidden"
      style={{
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
        paddingBottom: 'calc(var(--section-pad-bot) + 40px)',
      }}
    >
      {/* Kicker + heading */}
      <motion.div
        className="relative flex flex-col items-center text-center mb-12 md:mb-20"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <span className="inline-flex items-center gap-3 text-[11px] font-body font-bold uppercase tracking-[0.22em] text-[#B8943F] mb-6">
          <span className="inline-block w-8 h-px bg-[#D4AF60]/70" />
          {eyebrow}
          <span className="inline-block w-8 h-px bg-[#D4AF60]/70" />
        </span>
        <h2
          className="font-display font-semibold uppercase leading-[1.05] max-w-[1000px] text-[--color-near-black]"
          style={{
            fontSize: 'clamp(34px, 4.4vw, 64px)',
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

      {/* Editorial accordion layout */}
      <div className="relative grid grid-cols-1 md:grid-cols-[1fr_minmax(0,520px)] gap-6 md:gap-12 items-stretch max-w-[1280px] mx-auto">
        {/* ── Accordion column ─────────────────────────── */}
        <div className="flex flex-col">
          {services.map((service, i) => {
            const isActive = active === i
            return (
              <div
                key={service.title}
                className="relative border-t border-[--color-near-black]/10 first:border-t-0"
              >
                {/* Left gold rail, slides in when active */}
                <motion.span
                  aria-hidden="true"
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#D4AF60] origin-top"
                  initial={false}
                  animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
                />

                <button
                  type="button"
                  onClick={() => setActive(isActive ? -1 : i)}
                  onMouseEnter={() => setActive(i)}
                  className="w-full flex items-center gap-4 md:gap-6 py-5 md:py-6 text-left group pl-3 md:pl-5 pr-1"
                  aria-expanded={isActive}
                >
                  {/* Title */}
                  <h3
                    className={`flex-1 font-display font-semibold uppercase leading-[0.95] transition-colors duration-300 ${
                      isActive
                        ? 'text-[--color-near-black]'
                        : 'text-[--color-near-black]/50 group-hover:text-[--color-near-black]/85'
                    }`}
                    style={{
                      fontSize: 'clamp(22px, 2.6vw, 34px)',
                      letterSpacing: '-0.025em',
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Minimal stroke toggle */}
                  <span
                    className={`flex-shrink-0 relative w-6 h-6 transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'
                    }`}
                    aria-hidden="true"
                  >
                    {/* Horizontal stroke */}
                    <span
                      className={`absolute top-1/2 left-0 right-0 h-px origin-center ${
                        isActive ? 'bg-[#B8943F]' : 'bg-[--color-near-black]/70'
                      }`}
                    />
                    {/* Vertical stroke, retracts on active */}
                    <motion.span
                      className={`absolute top-0 bottom-0 left-1/2 w-px origin-center ${
                        isActive ? 'bg-[#B8943F]' : 'bg-[--color-near-black]/70'
                      }`}
                      initial={false}
                      animate={{ scaleY: isActive ? 0 : 1 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                    />
                  </span>
                </button>

                {/* Expanding body */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 md:pb-7 pl-3 md:pl-5 pr-4 md:pr-6">
                        {/* Mobile image preview */}
                        <div className="md:hidden relative aspect-[16/10] overflow-hidden mb-5">
                          <img
                            src={service.image}
                            alt={service.imageAlt}
                            className="w-full h-full object-cover"
                            draggable={false}
                          />
                        </div>

                        <p
                          className="text-[--color-near-black]/75 leading-[1.65] max-w-[56ch]"
                          style={{
                            fontSize: '14.5px',
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          {service.description}
                        </p>

                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2.5 mt-5 text-[11px] font-body font-bold uppercase tracking-[0.22em] text-[#B8943F] relative group/cta"
                        >
                          <span className="relative">
                            {service.title}
                            <span className="absolute left-0 -bottom-1 h-px w-full bg-[#B8943F]/60 origin-left scale-x-100 group-hover/cta:scale-x-0 transition-transform duration-500 ease-out" />
                            <span className="absolute left-0 -bottom-1 h-px w-full bg-[#B8943F] origin-right scale-x-0 group-hover/cta:scale-x-100 transition-transform duration-500 ease-out delay-100" />
                          </span>
                          <ArrowUpRight
                            strokeWidth={2.5}
                            size={14}
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

        {/* ── Static image panel (desktop), matches accordion height ───────────── */}
        <div className="hidden md:block relative overflow-hidden bg-black">
          <img
            src={featured?.image}
            alt={featured?.imageAlt ?? ''}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>
      </div>
    </section>
  )
}
