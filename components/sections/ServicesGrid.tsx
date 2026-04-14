'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  image?: string
  imageAlt?: string
  features?: string[]
}

interface ServicesGridProps {
  label: string
  heading: string
  headingAccent?: string
  body: string
  cta: { label: string; href: string }
  services: ServiceItem[]
}

export function ServicesGrid({
  label,
  heading,
  headingAccent,
  body,
  services,
}: ServicesGridProps) {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback(
    (i: number) => {
      setDirection(i > active ? 1 : -1)
      setActive(i)
    },
    [active]
  )

  const current = services[active]

  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#D6AE60] mb-3 block">
            {label}
          </span>
          <h2 className="font-display font-extrabold text-4xl lg:text-[56px] text-dark tracking-tight leading-tight">
            {heading}
            {headingAccent && (
              <>
                <br className="hidden lg:block" />{' '}
                <span className="text-[#D6AE60]">{headingAccent}</span>
              </>
            )}
          </h2>
          <p className="font-body text-body-text leading-relaxed mt-4 text-lg max-w-3xl">
            {body}
          </p>
        </motion.div>

        {/* Desktop interactive showcase */}
        <div className="hidden lg:block">
          {/* Tabs — clean underline style */}
          <div className="relative flex items-center gap-8 mb-10 border-b border-[#EBEBEB]">
            {services.map((service, i) => (
              <button
                key={service.href}
                onClick={() => goTo(i)}
                className={`relative pb-4 font-display font-semibold text-sm tracking-tight transition-colors duration-300 ${
                  active === i
                    ? 'text-dark'
                    : 'text-body-text/50 hover:text-body-text'
                }`}
              >
                {service.title}
                {active === i && (
                  <motion.div
                    layoutId="activeServiceUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#D6AE60] rounded-t-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Showcase — image with floating glass card */}
          <div className="relative">
            {/* Image container */}
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  {current?.image && (
                    <Image
                      src={current.image}
                      alt={current.imageAlt || current.title}
                      fill
                      className="object-cover"
                      sizes="90vw"
                      priority
                    />
                  )}
                </motion.div>
              </AnimatePresence>
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating glass card — anchored bottom-right, overlapping the image */}
            <div className="absolute bottom-8 right-8 w-[440px] z-10">
              <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-white/60">
                {/* Gold accent bar */}
                <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-[#D6AE60] to-[#C49B4A] rounded-b-full" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Counter */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-display font-bold text-xs text-[#D6AE60] tracking-widest">
                        {String(active + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                      </span>
                      <div className="flex-1 h-px bg-[#EBEBEB]" />
                    </div>

                    <h3 className="font-display font-extrabold text-2xl text-dark tracking-tight leading-tight mb-3">
                      {current.title}
                    </h3>
                    <p className="font-body text-body-text text-[15px] leading-relaxed mb-5">
                      {current.description}
                    </p>

                    {/* Features */}
                    {current.features && current.features.length > 0 && (
                      <ul className="space-y-2.5 mb-6">
                        {current.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2.5">
                            <div className="w-5 h-5 rounded-full bg-[#D6AE60]/10 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-[#D6AE60]" />
                            </div>
                            <span className="font-body text-sm text-body-text">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <Button variant="primary" href={current.href}>
                      {current.title} <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </Button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Stacked cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {services.map((service, i) => (
            <motion.div
              key={service.href}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={service.href}
                className="group relative block rounded-xl overflow-hidden min-h-[200px]"
              >
                {service.image && (
                  <Image
                    src={service.image}
                    alt={service.imageAlt || service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display font-bold text-white text-lg tracking-tight">
                    {service.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 font-body font-semibold text-xs text-[#D6AE60] mt-2">
                    {service.title}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
