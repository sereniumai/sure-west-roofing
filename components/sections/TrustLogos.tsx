'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const logos = [
  { src: '', alt: 'Emerald Pro Contractor' },
  { src: '', alt: 'Certified Residential Contractor' },
  { src: '', alt: 'Alberta Allied Roofing Association' },
  { src: '', alt: 'CertainTeed ShingleMaster Roofing Contractor' },
  { src: '', alt: 'Workers Compensation Board Alberta' },
  { src: '', alt: 'Interprovincial Roofing Standard' },
  { src: '', alt: 'BBB Accredited Business' },
]

export function TrustLogos() {
  return (
    <section className="bg-white py-12 lg:py-16 border-t border-[#EBEBEB]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          className="text-center text-sm font-body font-medium text-body-text/60 uppercase tracking-widest mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted certifications &amp; associations
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="relative h-16 lg:h-20 w-auto flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  height={80}
                  width={160}
                  className="h-full w-auto object-contain"
                />
              ) : (
                <div className="h-full w-[120px] bg-[#1B2540] rounded" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
