'use client'

import { useState } from 'react'
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

  return (
    <section className="bg-white py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="mb-10 lg:mb-14"
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

        {/* Desktop: Interactive split */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left — service list */}
          <div className="col-span-5 flex flex-col">
            {services.map((service, i) => (
              <Link
                key={service.href}
                href={service.href}
                className={`group flex items-center gap-5 py-5 border-b border-[#EBEBEB] transition-all duration-300 ${
                  active === i ? 'pl-4 border-l-2 border-l-[#D6AE60]' : 'pl-4 border-l-2 border-l-transparent hover:pl-6'
                }`}
                onMouseEnter={() => setActive(i)}
              >
                {/* Number */}
                <span
                  className={`font-display font-extrabold text-2xl tabular-nums transition-colors duration-300 w-10 flex-shrink-0 ${
                    active === i ? 'text-[#D6AE60]' : 'text-[#EBEBEB]'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${
                      active === i ? 'text-dark' : 'text-body-text'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      active === i ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
                    <p className="font-body text-body-text text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    active === i
                      ? 'bg-[#D6AE60] text-white'
                      : 'bg-transparent text-[#EBEBEB] group-hover:text-body-text'
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          {/* Right — showcase image */}
          <div className="col-span-7 relative rounded-2xl overflow-hidden min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                {services[active]?.image && (
                  <Image
                    src={services[active].image!}
                    alt={services[active].title}
                    fill
                    className="object-cover"
                    sizes="60vw"
                    priority
                  />
                )}
                {/* Bottom gradient + label */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-12 h-1 bg-[#D6AE60] rounded-full mb-4" />
                  <h4 className="font-display font-bold text-white text-3xl tracking-tight">
                    {services[active].title}
                  </h4>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: Compact cards */}
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
