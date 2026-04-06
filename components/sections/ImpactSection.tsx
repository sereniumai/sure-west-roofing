'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

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
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const mountain1Y = useTransform(scrollYProgress, [0, 1], [200, -100])
  const mountain2Y = useTransform(scrollYProgress, [0, 1], [150, -60])
  const mountain3Y = useTransform(scrollYProgress, [0, 1], [100, -30])
  const mountainScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#1B3558] pt-32 pb-64 lg:pt-44 lg:pb-80"
    >
      {/* Star field */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${(i * 37 + 13) % 100}%`,
              top: `${(i * 23 + 7) % 60}%`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2240] via-[#1B3558] to-[#1B3558]" />

      {/* Stats content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="border-t border-white/10 pt-6">
                <Counter value={stat.number} suffix={stat.suffix} />
                <p className="font-body text-white/50 text-sm mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mountain layers */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ y: mountain1Y, scale: mountainScale }}
      >
        <svg viewBox="0 0 1440 500" fill="none" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0 500 L200 180 L320 250 L480 100 L580 200 L720 50 L860 200 L960 120 L1100 220 L1200 150 L1320 230 L1440 160 L1440 500 Z"
            fill="#243F6B"
            fillOpacity="0.6"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ y: mountain2Y }}
      >
        <svg viewBox="0 0 1440 400" fill="none" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0 400 L100 250 L250 300 L400 150 L500 220 L650 80 L800 230 L900 170 L1050 260 L1150 180 L1300 270 L1440 200 L1440 400 Z"
            fill="#1B3558"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-30"
        style={{ y: mountain3Y }}
      >
        <svg viewBox="0 0 1440 350" fill="none" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M-50 350 L150 200 L280 260 L450 120 L550 190 L700 60 L850 200 L950 140 L1100 230 L1250 160 L1400 240 L1490 180 L1490 350 Z"
            fill="#0F2240"
          />
          <path d="M450 120 L470 128 L500 118 L530 130 L550 190" stroke="#D6AE60" strokeWidth="2" strokeOpacity="0.4" fill="none" />
          <path d="M700 60 L720 70 L740 65 L760 75 L780 68" stroke="#D6AE60" strokeWidth="2" strokeOpacity="0.6" fill="none" />
        </svg>
      </motion.div>

      {/* Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 z-40 h-32 bg-gradient-to-t from-[#EDEEE8] to-transparent" />
      <div className="absolute -bottom-1 left-0 right-0 z-40 h-4 bg-[#EDEEE8]" />
    </section>
  )
}
