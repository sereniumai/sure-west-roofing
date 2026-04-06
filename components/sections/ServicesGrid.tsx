'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  image?: string
  featured?: boolean
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
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
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

        {/* Top row - 3 large cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.slice(0, 3).map((service) => (
            <motion.div key={service.href} variants={cardVariants}>
              <Link href={service.href} className="group block bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-[#1B3558] to-[#2a4a7a]">
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                </div>
                <div className="p-5">
                  <div className="text-[#D6AE60] w-6 h-6 mb-2 [&>svg]:w-6 [&>svg]:h-6">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-dark tracking-tight mb-1">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-body-text leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row - 4 smaller cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.slice(3).map((service) => (
            <motion.div key={service.href} variants={cardVariants}>
              <Link href={service.href} className="group block bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[3/2] relative overflow-hidden bg-gradient-to-br from-[#1B3558] to-[#2a4a7a]">
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  )}
                </div>
                <div className="p-4">
                  <div className="text-[#D6AE60] w-5 h-5 mb-2 [&>svg]:w-5 [&>svg]:h-5">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-base text-dark tracking-tight mb-1">
                    {service.title}
                  </h3>
                  <p className="font-body text-xs text-body-text leading-relaxed">
                    {service.description}
                  </p>
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
