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
        {/* Header */}
        <motion.div
          className="mb-12"
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

        {/* 3×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.href}
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
                className="group relative block rounded-2xl overflow-hidden min-h-[320px] lg:min-h-[360px]"
              >
                {/* Full-bleed image */}
                {service.image && (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}

                {/* Subtle overall darkening */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                {/* Gold number */}
                <div className="absolute top-5 left-6 font-display font-extrabold text-[#D6AE60]/30 text-6xl leading-none select-none group-hover:text-[#D6AE60]/50 transition-colors duration-500">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Frosted glass content panel */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-6 translate-y-[calc(100%-80px)] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {/* Gold accent bar */}
                  <div className="w-10 h-0.5 bg-[#D6AE60] mb-4 group-hover:w-16 transition-all duration-500" />

                  <h3 className="font-display font-bold text-dark text-xl tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-body-text text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-body font-semibold text-sm text-[#D6AE60] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    {service.title}
                    <ArrowRight className="w-4 h-4" />
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
