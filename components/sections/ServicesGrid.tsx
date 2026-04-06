'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export function ServicesGrid({
  heading,
  body,
  cta,
  services,
}: ServicesGridProps) {
  return (
    <section className="bg-[#EDEEE8] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="font-display font-extrabold text-3xl lg:text-[52px] text-dark tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="font-body text-body-text leading-relaxed mt-5">
            {body}
          </p>
        </div>

        {/* 4-card grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((service) => (
            <motion.div key={service.href} variants={cardVariants}>
              <Link
                href={service.href}
                className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-[#1B3558] to-[#2a4a7a]">
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  )}
                  {/* Subtle gradient overlay at bottom for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[#D6AE60] w-6 h-6 mb-3 [&>svg]:w-6 [&>svg]:h-6">
                        {service.icon}
                      </div>
                      <h3 className="font-display font-bold text-xl text-dark tracking-tight mb-2">
                        {service.title}
                      </h3>
                      <p className="font-body text-sm text-body-text leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-[#EDEEE8] flex items-center justify-center group-hover:bg-[#D6AE60] transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 text-dark/40 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-12">
          <Button variant="primary" href={cta.href}>
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
