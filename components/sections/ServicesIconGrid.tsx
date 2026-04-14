'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Home,
  Wrench,
  CloudLightning,
  ClipboardCheck,
  Search,
  Sun,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Wrench,
  CloudLightning,
  ClipboardCheck,
  Search,
  Sun,
}

interface ServiceIconItem {
  icon: string
  title: string
  href: string
}

interface ServicesIconGridProps {
  heading: string
  services: ServiceIconItem[]
}

export function ServicesIconGrid({ heading, services }: ServicesIconGridProps) {
  return (
    <section className="bg-white py-16 lg:py-20 border-b border-[#E5E5E5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="font-display font-extrabold uppercase text-center text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[0.95] text-[#1A1A1A] mb-12 lg:mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          {heading}
        </motion.h2>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={service.href}
                  className="group flex flex-col items-center text-center py-6 px-3 hover:bg-[#F5F5F5] transition-colors duration-300"
                >
                  <div className="w-14 h-14 bg-[#1A1A1A] flex items-center justify-center mb-4 group-hover:bg-[#D4AF60] transition-colors duration-300">
                    {Icon && <Icon className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="font-display font-bold text-xs uppercase tracking-wider text-[#1A1A1A]">
                    {service.title}
                  </h3>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
