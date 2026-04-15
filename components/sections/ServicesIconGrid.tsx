'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'
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

export function ServicesIconGrid({ eyebrow = 'Our Services', heading, body, services }: ServicesIconGridProps) {
  const [active, setActive] = useState(0)
  const activeIndex = active < 0 ? 0 : active
  const activeService = services[activeIndex] ?? services[0]
  const featured = services[0]

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
      {/* Kicker + heading */}
      <motion.div
        className="relative flex flex-col items-center text-center mb-12 md:mb-20"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <span
          className="inline-flex items-center h-8 md:h-9 px-3 md:px-4 text-[13px] md:text-[14px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm] mb-6"
          style={{ background: 'rgba(212,175,96,0.12)', color: 'var(--color-accent, #D4AF60)' }}
        >
          {eyebrow}
        </span>
        <h2
          className="font-display font-semibold leading-[1.05] max-w-[1000px] text-[--color-near-black]"
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
      <div className="relative grid grid-cols-1 md:grid-cols-[minmax(0,560px)_1fr] gap-6 md:gap-16 items-stretch max-w-[1320px] mx-auto">
        {/* ── Accordion column ─────────────────────────── */}
        <div className="flex flex-col md:order-2">
          {services.map((service, i) => {
            const isActive = active === i
            return (
              <div
                key={service.title}
                className="relative border-t border-[--color-near-black]/10 first:border-t-0 group/row"
              >
                {/* Soft hover / active background wash */}
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  initial={false}
                  animate={{
                    backgroundColor: isActive
                      ? 'rgba(212,175,96,0.035)'
                      : 'rgba(212,175,96,0)',
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                />

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
                  className="relative w-full flex items-center gap-5 md:gap-7 py-[22px] md:py-[26px] text-left pl-4 md:pl-6 pr-2"
                  aria-expanded={isActive}
                >
                  {/* Title */}
                  <motion.h3
                    className={`flex-1 font-display font-semibold leading-[0.95] transition-colors duration-300 ${
                      isActive
                        ? 'text-[--color-near-black]'
                        : 'text-[--color-near-black]/45 group-hover/row:text-[--color-near-black]/85'
                    }`}
                    style={{
                      fontSize: 'clamp(24px, 2.8vw, 38px)',
                      letterSpacing: '-0.028em',
                    }}
                    initial={false}
                    animate={{ x: isActive ? 4 : 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Minimal stroke toggle */}
                  <span
                    className={`flex-shrink-0 relative w-7 h-7 transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-40 group-hover/row:opacity-90'
                    }`}
                    aria-hidden="true"
                  >
                    <span
                      className={`absolute top-1/2 left-0 right-0 h-px origin-center ${
                        isActive ? 'bg-[#B8943F]' : 'bg-[--color-near-black]/70'
                      }`}
                    />
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
                      className="overflow-hidden relative"
                    >
                      <div className="pb-5 md:pb-6 pl-4 md:pl-6 pr-4 md:pr-6 -mt-1">
                        {/* Mobile image preview */}
                        <div className="md:hidden relative aspect-[16/10] overflow-hidden mb-5 rounded-[--radius-md]">
                          <img
                            src={service.image}
                            alt={service.imageAlt}
                            className="w-full h-full object-cover"
                            draggable={false}
                          />
                        </div>

                        <p
                          className="text-[--color-near-black]/75 leading-[1.75] max-w-[58ch]"
                          style={{
                            fontSize: '15.5px',
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          {service.description}
                        </p>

                        <div className="mt-4">
                          <Button href={service.href} variant="secondary" size="sm">
                            {service.title}
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* ── Editorial image panel (desktop), matches accordion height ───────────── */}
        <div className="hidden md:block relative overflow-hidden bg-black group/img rounded-[--radius-lg] md:order-1">
          <img
            src={featured?.image}
            alt={featured?.imageAlt ?? ''}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* Floating Google review card, syncs to active service */}
          <div className="absolute bottom-6 right-6 left-6 md:left-auto flex justify-end pointer-events-none">
            <AnimatePresence mode="wait">
              {activeService?.review && (
                <motion.div
                  key={activeService.title + '-review'}
                  className="relative w-full md:w-[330px] pointer-events-auto"
                  initial={{ y: -14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                >
                  {/* Card shell with warm cream tint and refined shadow */}
                  <div
                    className="relative overflow-hidden rounded-[--radius-md]"
                    style={{
                      background: 'linear-gradient(180deg, #FDFBF5 0%, #F7F3E8 100%)',
                      boxShadow:
                        '0 30px 60px -20px rgba(0,0,0,0.45), 0 0 0 1px rgba(212,175,96,0.18)',
                    }}
                  >
                    {/* Gold vertical accent bar */}
                    <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#D4AF60] via-[#B8943F] to-[#D4AF60]" />

                    <div className="relative p-6 pl-7">
                      {/* Header: stars + rating + google mark */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="flex items-center gap-[3px]">
                            {[0, 1, 2, 3, 4].map((n) => (
                              <Star
                                key={n}
                                size={14}
                                className="fill-[#E5A94B] text-[#E5A94B]"
                                strokeWidth={0}
                              />
                            ))}
                          </div>
                          <span className="text-[11px] font-body font-bold text-[--color-near-black]/55 tabular-nums">
                            5.0
                          </span>
                        </div>
                        <svg
                          viewBox="0 0 24 24"
                          className="w-[15px] h-[15px] opacity-90"
                          aria-label="Google"
                        >
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z"
                          />
                        </svg>
                      </div>

                      {/* Editorial serif italic quote */}
                      <p
                        className="text-[--color-near-black]/88 relative"
                        style={{
                          fontFamily: "'Cormorant Garamond', 'Georgia', 'Times New Roman', serif",
                          fontSize: '17px',
                          fontWeight: 500,
                          lineHeight: 1.45,
                          fontStyle: 'italic',
                          letterSpacing: '-0.005em',
                        }}
                      >
                        {activeService.review.quote}
                      </p>

                      {/* Author row */}
                      <div className="flex items-center justify-between mt-5">
                        <p className="text-[12px] font-body font-bold uppercase tracking-[0.14em] text-[--color-near-black] truncate">
                          {activeService.review.author}
                        </p>
                        {activeService.review.location && (
                          <p className="text-[10px] font-body font-medium uppercase tracking-[0.2em] text-[--color-near-black]/50 truncate ml-3">
                            {activeService.review.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
