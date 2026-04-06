'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

interface StatItem {
  number: number
  suffix: string
  label: string
}

const stats: StatItem[] = [
  { number: 500, suffix: '+', label: 'Roofs Completed' },
  { number: 15, suffix: '+', label: 'Years Experience' },
  { number: 100, suffix: '%', label: 'Insured & Bonded' },
  { number: 50, suffix: '+', label: '5-Star Reviews' },
]

const logos = [
  { src: '/images/Emerald Pro Contractor.webp', alt: 'Emerald Pro Contractor' },
  { src: '/images/Certified Residential Contractor.webp', alt: 'Certified Residential Contractor' },
  { src: '/images/AARA Roofing.webp', alt: 'Alberta Allied Roofing Association' },
  { src: '/images/Roofing Contractor Shingle Master.webp', alt: 'CertainTeed ShingleMaster Roofing Contractor' },
  { src: '/images/Workers Compensation Board.webp', alt: 'Workers Compensation Board Alberta' },
  { src: '/images/Interprovincial Roofing Standard.webp', alt: 'Interprovincial Roofing Standard' },
  { src: '/images/BBB Accredited Business.webp', alt: 'BBB Accredited Business' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const step = Math.ceil(value / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-[#D6AE60] tracking-tight tabular-nums">
        {count}{suffix}
      </span>
    </motion.div>
  )
}

export function ImpactSection() {
  return (
    <section className="bg-[#F8F8F8] py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 place-items-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center"
            >
              <Counter value={stat.number} suffix={stat.suffix} />
              <p className="font-body text-body-text text-sm mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 lg:my-14 border-t border-[#EBEBEB]" />

        {/* Trust logos */}
        <motion.p
          className="text-center text-xs font-body font-medium text-body-text/50 uppercase tracking-widest mb-7"
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
              className="relative h-14 lg:h-16 w-auto flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                height={64}
                width={140}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
