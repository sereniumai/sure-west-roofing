'use client'

import { useRef, useEffect, useState } from 'react'
import { m, useInView } from 'framer-motion'
import Image from 'next/image'

interface StatItem {
  number: number
  suffix: string
  label: string
}

const stats: StatItem[] = [
  { number: 150, suffix: '+', label: 'Roofs Completed' },
  { number: 5, suffix: '.0', label: 'Google Rating' },
  { number: 10, suffix: '+', label: 'Years Experience' },
  { number: 100, suffix: '%', label: 'Free Estimates' },
]

const logos = [
  { src: '', alt: 'Emerald Pro Contractor' },
  { src: '', alt: 'Certified Residential Contractor' },
  { src: '', alt: 'Alberta Allied Roofing Association' },
  { src: '', alt: 'CertainTeed ShingleMaster Roofing Contractor' },
  { src: '', alt: 'Workers Compensation Board Alberta' },
  { src: '', alt: 'Interprovincial Roofing Standard' },
  { src: '', alt: 'BBB Accredited Business' },
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
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl text-[#D4AF60] tracking-tight tabular-nums">
        {count}{suffix}
      </span>
    </m.div>
  )
}

export function ImpactSection() {
  return (
    <section className="bg-white py-12 lg:py-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 place-items-center">
          {stats.map((stat, i) => (
            <m.div
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
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
