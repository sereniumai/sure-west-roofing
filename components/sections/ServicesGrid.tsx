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

        {/* Services list */}
        <div className="space-y-0 border-t border-[#EBEBEB]">
          {services.map((service, i) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={service.href}
                className="group grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-10 py-8 lg:py-10 border-b border-[#EBEBEB] hover:bg-[#FAFAFA] transition-colors duration-300 px-2 lg:px-6 -mx-2 lg:-mx-6 rounded-lg"
              >
                {/* Number */}
                <div className="hidden lg:block lg:col-span-1">
                  <span className="font-display font-extrabold text-3xl text-[#EBEBEB] group-hover:text-[#D6AE60] transition-colors duration-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Image thumbnail */}
                <div className="lg:col-span-3 relative w-full aspect-[16/10] lg:aspect-[3/2] rounded-xl overflow-hidden">
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="lg:col-span-6">
                  <h3 className="font-display font-bold text-2xl lg:text-3xl text-dark tracking-tight group-hover:text-[#D6AE60] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-body-text text-base leading-relaxed mt-3 max-w-lg">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex lg:col-span-2 justify-end">
                  <div className="w-14 h-14 rounded-full border-2 border-[#EBEBEB] group-hover:border-[#D6AE60] group-hover:bg-[#D6AE60] flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-[#EBEBEB] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
