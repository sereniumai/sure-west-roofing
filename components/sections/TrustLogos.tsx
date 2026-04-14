'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const logos = [
  { src: '/images/Emerald Pro Contractor.webp', alt: 'Emerald Pro Contractor' },
  {
    src: '/images/Certified Residential Contractor.webp',
    alt: 'Certified Residential Contractor',
  },
  {
    src: '/images/AARA Roofing Association.webp',
    alt: 'Alberta Allied Roofing Association',
  },
  {
    src: '/images/Roofing Contractor Shingle Master.webp',
    alt: 'CertainTeed ShingleMaster Roofing Contractor',
  },
  {
    src: '/images/Canada Roofing Standards.webp',
    alt: 'Canada Roofing Standards',
  },
  { src: '/images/BBB Accredited Business.webp', alt: 'BBB Accredited Business' },
]

// Double the array for seamless infinite scroll
const marqueeLogos = [...logos, ...logos]

export function TrustLogos() {
  return (
    <section className="bg-[#F8F8F8] py-10 lg:py-14 border-b overflow-hidden" style={{ borderColor: 'var(--color-border)' }}>
      <motion.p
        className="text-center text-xs font-body font-semibold text-[#999] uppercase tracking-widest mb-8 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Trusted certifications &amp; associations
      </motion.p>

      {/* Infinite marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8F8F8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8F8F8] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-16 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
        >
          {marqueeLogos.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="relative h-12 lg:h-14 w-auto flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                height={56}
                width={120}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
