'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
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
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header — full width */}
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
          <p className="font-body text-body-text leading-relaxed mt-5 text-lg">
            {body}
          </p>
        </motion.div>

        {/* Bento-style grid: featured large card + smaller cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {services.map((service, i) => {
            // First card is large (spans 7 cols), second spans 5
            // Then 3 equal cards below
            const isFirstRow = i < 2
            const isLarge = i === 0
            const colSpan = isFirstRow
              ? isLarge
                ? 'lg:col-span-7'
                : 'lg:col-span-5'
              : 'lg:col-span-3'

            return (
              <motion.div
                key={service.href}
                className={colSpan}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={service.href}
                  className={`group relative block rounded-2xl overflow-hidden h-full ${
                    isFirstRow ? 'min-h-[280px] lg:min-h-[320px]' : 'min-h-[220px] lg:min-h-[260px]'
                  }`}
                >
                  {/* Full-bleed image */}
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out"
                      sizes={
                        isLarge
                          ? '(max-width: 1024px) 100vw, 58vw'
                          : '(max-width: 1024px) 100vw, 33vw'
                      }
                    />
                  )}

                  {/* Gradient overlay — always visible, stronger on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                  {/* Gold top-left accent line */}
                  <div className="absolute top-6 left-6 w-8 h-1 bg-[#D6AE60] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-12" />

                  {/* Content overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <h3
                      className={`font-display font-bold text-white tracking-tight leading-snug mb-2 ${
                        isLarge ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
                      }`}
                    >
                      {service.title}
                    </h3>
                    {isFirstRow && (
                      <p className="font-body text-white/75 leading-relaxed mb-3 text-sm max-w-md">
                        {service.description}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-2 font-body font-semibold text-sm text-[#D6AE60] group-hover:gap-3 transition-all duration-300">
                      {service.title}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
