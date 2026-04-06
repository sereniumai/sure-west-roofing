'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  image?: string
  features?: string[]
}

interface ServicesGridProps {
  label: string
  heading: string
  body: string
  cta: { label: string; href: string }
  services: ServiceItem[]
}

export function ServicesGrid({
  heading,
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
    <section className="bg-[#F8F8F8] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-extrabold text-3xl lg:text-[48px] text-dark tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="font-body text-body-text leading-relaxed mt-4 text-lg">
            {body}
          </p>
        </motion.div>

        {/* Desktop interactive showcase */}
        <div className="hidden lg:block">
          {/* Tabs */}
          <div className="relative flex items-center gap-1 mb-8 bg-white rounded-2xl p-1.5 w-fit shadow-sm">
            {services.map((service, i) => (
              <button
                key={service.href}
                onClick={() => goTo(i)}
                className={`relative z-10 px-5 py-2.5 rounded-xl font-display font-semibold text-sm tracking-tight transition-colors duration-300 ${
                  active === i
                    ? 'text-[#D6AE60]'
                    : 'text-body-text hover:text-dark'
                }`}
              >
                {active === i && (
                  <motion.div
                    layoutId="activeServiceTab"
                    className="absolute inset-0 bg-[#F8F8F8] rounded-xl shadow-sm ring-1 ring-[#EBEBEB]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Showcase area */}
          <div className="grid grid-cols-12 gap-5 items-stretch min-h-[460px]">
            {/* Image side */}
            <div className="col-span-7 relative rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  {current?.image && (
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      className="object-cover"
                      sizes="60vw"
                      priority
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content side */}
            <div className="col-span-5 bg-white rounded-2xl p-8 lg:p-10 flex flex-col justify-center shadow-sm ring-1 ring-[#EBEBEB]/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-dark tracking-tight leading-tight mb-3">
                    {current.title}
                  </h3>
                  <p className="font-body text-body-text text-base leading-relaxed mb-6">
                    {current.description}
                  </p>

                  {/* Feature bullets */}
                  {current.features && current.features.length > 0 && (
                    <ul className="space-y-3 mb-8">
                      {current.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#D6AE60]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#D6AE60]" />
                          </div>
                          <span className="font-body text-sm text-body-text leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href={current.href}
                    className="group inline-flex items-center gap-3 bg-[#D6AE60] hover:bg-[#B8943F] text-white px-6 py-3.5 rounded-xl font-display font-bold text-sm tracking-tight transition-all duration-300 hover:shadow-[0_8px_24px_rgba(214,174,96,0.3)] w-fit"
                  >
                    {current.title}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </AnimatePresence>
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
                    alt={service.title}
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
