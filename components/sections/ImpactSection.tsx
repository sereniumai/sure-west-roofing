'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

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
    <section className="bg-[#EDEEE8] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
            >
              <Counter value={stat.number} suffix={stat.suffix} />
              <p className="font-body text-body-text text-sm mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
