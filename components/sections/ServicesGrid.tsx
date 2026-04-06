'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ServiceCard } from '@/components/ui/ServiceCard'
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
  label,
  heading,
  body,
  cta,
  services,
}: ServicesGridProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* LEFT — intro */}
          <div className="lg:col-span-2">
            <SectionLabel text={label} />

            <h2 className="font-display font-bold text-3xl lg:text-4xl text-dark tracking-wide leading-tight mt-3">
              {heading}
            </h2>

            <p className="font-body text-body-text leading-relaxed mt-4 mb-8">
              {body}
            </p>

            <Button variant="primary" href={cta.href}>
              {cta.label}
            </Button>
          </div>

          {/* RIGHT — cards */}
          <motion.div
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {services.map((service) => (
              <motion.div key={service.href} variants={cardVariants}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  featured={service.featured}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
