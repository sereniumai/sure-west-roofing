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
          className="mb-10"
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
          {/* Full-bleed showcase container */}
          <div className="relative rounded-2xl overflow-hidden min-h-[580px] shadow-[0_12px_50px_rgba(0,0,0,0.15)]">
            {/* Full background image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
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

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B2540]/80 via-[#1B2540]/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B2540]/60 via-transparent to-transparent pointer-events-none" />

            {/* Tabs — floating top-left */}
            <div className="absolute top-6 left-6 right-6 z-20 flex items-center gap-1 flex-wrap">
              {services.map((service, i) => (
                <button
                  key={service.href}
                  onClick={() => goTo(i)}
                  className={`relative px-4 py-2 rounded-full font-display font-semibold text-sm tracking-tight transition-all duration-300 ${
                    active === i
                      ? 'text-[#1B2540]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {active === i && (
                    <motion.div
                      layoutId="activeServiceTab"
                      className="absolute inset-0 bg-[#D6AE60] rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{service.title}</span>
                </button>
              ))}
            </div>

            {/* Content — floating bottom-left */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-8 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-xl"
                >
                  {/* Service number */}
                  <span className="font-display font-extrabold text-[80px] leading-none text-white/10 absolute -top-14 left-0 select-none pointer-events-none">
                    {String(active + 1).padStart(2, '0')}
                  </span>

                  <h3 className="font-display font-extrabold text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-3">
                    {current.title}
                  </h3>
                  <p className="font-body text-white/80 text-base leading-relaxed mb-5">
                    {current.description}
                  </p>

                  {/* Feature bullets — inline row */}
                  {current.features && current.features.length > 0 && (
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                      {current.features.map((feature) => (
                        <span key={feature} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#D6AE60] flex-shrink-0" />
                          <span className="font-body text-sm text-white/70">{feature}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  <Button variant="primary" href={current.href}>
                    {current.title} <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
              <motion.div
                className="h-full bg-[#D6AE60]"
                initial={{ width: 0 }}
                animate={{ width: `${((active + 1) / services.length) * 100}%` }}
                transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              />
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
