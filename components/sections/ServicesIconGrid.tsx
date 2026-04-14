'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface ServiceCardItem {
  title: string
  description: string
  href: string
  image: string
  imageAlt: string
}

interface ServicesIconGridProps {
  heading: string
  services: ServiceCardItem[]
}

export function ServicesIconGrid({ heading, services }: ServicesIconGridProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="section-label text-[#D4AF60] mb-4 inline-flex justify-center">
            Our Services
          </span>
          <h2 className="font-display font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[0.95] text-[#1A1A1A] mt-4">
            {heading}
          </h2>
        </motion.div>

        {/* 3x2 service card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={service.href}
                className="group block bg-[#F5F5F5] hover:bg-[#EBEBEB] transition-colors duration-300 relative overflow-hidden h-full"
              >
                <div className="flex flex-col justify-between h-full min-h-[260px] p-6 lg:p-8">
                  {/* Title */}
                  <h3 className="font-display font-extrabold uppercase text-xl lg:text-2xl tracking-tight text-[#1A1A1A] relative z-10 max-w-[55%]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-[#666] text-sm leading-relaxed relative z-10 max-w-[55%] mt-auto">
                    {service.description}
                  </p>

                  {/* Image — positioned right */}
                  <div className="absolute right-0 top-2 bottom-2 w-[42%]">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      draggable={false}
                    />
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
