'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  image?: string
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
    <section className="bg-white py-16 lg:py-20 overflow-hidden">
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
          <p className="font-body text-body-text leading-relaxed mt-4 text-lg max-w-2xl">
            {body}
          </p>
        </motion.div>

        {/* Desktop interactive showcase */}
        <div className="hidden lg:block">
          {/* Tab pills */}
          <div className="flex items-center gap-2 mb-8">
            {services.map((service, i) => (
              <button
                key={service.href}
                onClick={() => goTo(i)}
                className={`relative px-5 py-3 rounded-full font-display font-bold text-sm tracking-tight transition-all duration-300 ${
                  active === i
                    ? 'bg-[#D6AE60] text-white shadow-[0_4px_20px_rgba(214,174,96,0.4)]'
                    : 'bg-[#F8F8F8] text-body-text hover:bg-[#EBEBEB] hover:text-dark'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Showcase area */}
          <div className="relative rounded-3xl overflow-hidden bg-[#0A0A0A] min-h-[480px]">
            {/* Background image with parallax feel */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60, scale: 1.05 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction * -40, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                {current?.image && (
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    className="object-cover"
                    sizes="90vw"
                    priority
                  />
                )}
                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Content overlay */}
            <div className="relative z-10 flex flex-col justify-end h-full min-h-[480px] p-10 lg:p-14 max-w-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                  {/* Gold number accent */}
                  <span className="font-display font-extrabold text-7xl text-[#D6AE60]/20 leading-none mb-2 block">
                    {String(active + 1).padStart(2, '0')}
                  </span>

                  <h3 className="font-display font-extrabold text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
                    {current.title}
                  </h3>

                  <p className="font-body text-white/70 text-lg leading-relaxed mb-8 max-w-md">
                    {current.description}
                  </p>

                  <Link
                    href={current.href}
                    className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-[#D6AE60] text-white px-7 py-4 rounded-full font-display font-bold text-sm tracking-tight transition-all duration-300 hover:shadow-[0_8px_30px_rgba(214,174,96,0.3)]"
                  >
                    {current.title}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress indicators */}
            <div className="absolute bottom-6 right-8 z-10 flex items-center gap-2">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-500 ${
                    active === i
                      ? 'w-8 h-2 bg-[#D6AE60]'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Service ${i + 1}`}
                />
              ))}
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
