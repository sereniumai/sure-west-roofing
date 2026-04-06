'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
  href: string
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT — intro */}
          <div>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl xl:text-6xl text-dark tracking-tight leading-tight">
              {heading}
            </h2>

            <p className="font-body text-body-text leading-relaxed mt-6 mb-8">
              {body}
            </p>

            <Button variant="primary" href={cta.href}>
              {cta.label}
            </Button>
          </div>

          {/* RIGHT — service items */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {services.map((service) => (
              <motion.div key={service.href} variants={cardVariants}>
                <Link href={service.href} className="group block">
                  <div className="text-[#D6AE60] w-8 h-8 mb-3 [&>svg]:w-8 [&>svg]:h-8">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-dark tracking-tight mb-1 group-hover:text-[#D6AE60] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-body-text leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
