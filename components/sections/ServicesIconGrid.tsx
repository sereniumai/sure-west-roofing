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
  const totalNum = String(services.length).padStart(2, '0')
  const activeNum = String(activeIndex + 1).padStart(2, '0')

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
      <div className="relative grid grid-cols-1 md:grid-cols-[1fr_minmax(0,560px)] gap-6 md:gap-16 items-stretch max-w-[1320px] mx-auto">
        {/* ── Accordion column ─────────────────────────── */}
        <div className="flex flex-col">
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
                  className="relative w-full flex items-center gap-5 md:gap-7 py-4 md:py-5 text-left pl-4 md:pl-6 pr-2"
                  aria-expanded={isActive}
                >
                  {/* Title */}
                  <motion.h3
                    className={`flex-1 font-display font-semibold uppercase leading-[0.95] transition-colors duration-300 ${
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
                        <div className="md:hidden relative aspect-[16/10] overflow-hidden mb-5">
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
        <div className="hidden md:block relative overflow-hidden bg-black group/img">
          <img
            src={featured?.image}
            alt={featured?.imageAlt ?? ''}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* Subtle editorial gradient for caption legibility */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 28%, rgba(0,0,0,0) 55%)',
            }}
          />

          {/* Floating Google review card, syncs to active service */}
          <div className="absolute top-5 right-5 left-5 md:left-auto flex justify-end pointer-events-none">
            <AnimatePresence mode="wait">
              {activeService?.review && (
                <motion.div
                  key={activeService.title + '-review'}
                  className="relative w-full md:w-[290px] bg-white shadow-[0_18px_40px_-12px_rgba(0,0,0,0.35)] pointer-events-auto"
                  initial={{ y: -12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
                >
                  {/* Thin gold top edge */}
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#D4AF60]" />

                  <div className="p-5">
                    {/* Stars + Google mark */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-0.5">
                        {[0, 1, 2, 3, 4].map((n) => (
                          <Star
                            key={n}
                            size={13}
                            className="fill-[#F4B400] text-[#F4B400]"
                            strokeWidth={0}
                          />
                        ))}
                      </div>
                      {/* Google G mark */}
                      <svg
                        viewBox="0 0 24 24"
                        className="w-[14px] h-[14px]"
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

                    {/* Quote */}
                    <p
                      className="text-[--color-near-black]/85 leading-[1.55]"
                      style={{
                        fontSize: '13px',
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      “{activeService.review.quote}”
                    </p>

                    {/* Divider */}
                    <span className="block w-8 h-px bg-[--color-near-black]/15 my-3" />

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-body font-bold uppercase tracking-[0.14em] text-[--color-near-black]">
                          {activeService.review.author}
                        </p>
                        {activeService.review.location && (
                          <p className="text-[10px] font-body font-medium uppercase tracking-[0.18em] text-[--color-near-black]/45 mt-0.5">
                            {activeService.review.location}
                          </p>
                        )}
                      </div>
                      <span className="text-[9px] font-body font-bold uppercase tracking-[0.2em] text-[--color-near-black]/40">
                        Verified
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom-left editorial caption, syncs title text to active row */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block w-8 h-px bg-[#D4AF60]" />
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.26em] text-white/70">
                Now exploring
              </span>
            </div>
            <AnimatePresence mode="wait">
              <motion.h4
                key={activeService?.title ?? 'title'}
                className="font-display font-semibold uppercase text-white leading-[1] max-w-[320px]"
                style={{
                  fontSize: 'clamp(22px, 2vw, 32px)',
                  letterSpacing: '-0.025em',
                }}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
              >
                {activeService?.title}
              </motion.h4>
            </AnimatePresence>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[11px] font-body font-medium uppercase tracking-[0.2em] text-white/60">
                Cochrane · Calgary · Canmore
              </span>
              <span
                className="font-display font-semibold tabular-nums text-white/80"
                style={{ fontSize: '13px', letterSpacing: '0.18em' }}
              >
                <span className="text-[#D4AF60]">{activeNum}</span>
                <span className="mx-1.5 text-white/40">/</span>
                {totalNum}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
