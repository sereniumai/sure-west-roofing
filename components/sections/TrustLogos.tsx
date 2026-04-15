'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const logos = [
  {
    src: '/images/logos/AARA Roofing Association.webp',
    alt: 'AARA Roofing Association member - Sure West Roofing Cochrane',
  },
  {
    src: '/images/logos/BBB Accredited Business.webp',
    alt: 'BBB Accredited Business - Sure West Roofing Cochrane Alberta',
  },
  {
    src: '/images/logos/Canada Roofing Standards.webp',
    alt: 'Canada Roofing Standards certified - Sure West Roofing',
  },
  {
    src: '/images/logos/Certified Residential Contractor.webp',
    alt: 'Certified Residential Contractor - Sure West Roofing Cochrane',
  },
  {
    src: '/images/logos/Emerald Pro Contractor.webp',
    alt: 'Emerald Pro Contractor - Sure West Roofing Cochrane Alberta',
  },
  {
    src: '/images/logos/Interprovincial Roofing Standard.webp',
    alt: 'Interprovincial Roofing Standard - Sure West Roofing Red Seal certified',
  },
  {
    src: '/images/logos/Roofing Contractor Shingle Master.webp',
    alt: 'ShingleMaster certified roofing contractor - Sure West Roofing Cochrane',
  },
]

const EASE_OUT = [0.16, 1, 0.3, 1] as const

export function TrustLogos() {
  return (
    <section
      className="bg-[#F8F8F8] border-b"
      style={{
        borderColor: 'var(--color-border)',
        paddingTop: '56px',
        paddingBottom: '56px',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
      aria-label="Certifications and industry accreditations"
    >
      <motion.ul
        className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-14 lg:gap-x-12 max-w-[1320px] mx-auto"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        {logos.map((logo) => (
          <li
            key={logo.src}
            className="flex items-center justify-center h-12 md:h-14 lg:h-16"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={220}
              height={64}
              className="h-full w-auto object-contain grayscale opacity-55 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
            />
          </li>
        ))}
      </motion.ul>
    </section>
  )
}
