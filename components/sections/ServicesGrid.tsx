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

export function ServicesGrid({
  heading,
  body,
  cta,
  services,
}: ServicesGridProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="max-w-2xl"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-extrabold text-3xl lg:text-[52px] text-dark tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="font-body text-body-text leading-relaxed mt-5">
            {body}
          </p>
        </motion.div>

        {/* 3×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, i) => (
            <motion.div
              key={service.href}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={service.href}
                className="group block bg-[#F8F8F8] border border-[#EBEBEB] rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 h-full hover:-translate-y-1"
              >
                {/* Image */}
                <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-[#1B3558] to-[#2a4a7a]">
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-dark tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-body-text leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-body font-semibold text-sm text-dark group-hover:text-[#D6AE60] transition-colors duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA below grid */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="primary" href={cta.href}>
            {cta.label}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
