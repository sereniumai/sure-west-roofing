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
      <span className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white tracking-tight tabular-nums">
        {count}{suffix}
      </span>
    </motion.div>
  )
}

const words = ['Built', 'for', 'Alberta.', 'Trusted', 'in', 'Cochrane.']

export function ImpactSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const mountainY = useTransform(scrollYProgress, [0, 1], [100, -60])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#1B3558] py-32 lg:py-44"
    >
      {/* Parallax background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#1B3558] via-[#1B3558] to-[#0F2240]"
        style={{ y: bgY }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#D6AE60] rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Big word-by-word text reveal */}
        <div className="mb-20">
          <h2 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.95]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className={`inline-block mr-[0.25em] ${
                  i < 3 ? 'text-white' : 'text-[#D6AE60]'
                }`}
                initial={{ y: 80, opacity: 0, rotateX: 40 }}
                whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.div
            className="mt-8 w-24 h-1 bg-[#D6AE60]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
          />

          <motion.p
            className="font-body text-white/60 text-lg md:text-xl max-w-xl mt-6 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Every roof we touch is backed by Red Seal certification, local
            expertise, and a commitment to doing the job right the first time.
          </motion.p>
        </div>

        {/* Animated stats */}
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
                delay: 1 + i * 0.15,
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

      {/* Mountain silhouette at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ y: mountainY }}
      >
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200L48 185C96 170 192 140 288 128C384 116 480 122 576 110C624 104 672 95 720 80C768 65 816 55 864 60C912 65 960 85 1008 95C1056 105 1104 105 1152 98C1200 91 1248 77 1296 72C1344 67 1392 71 1416 73L1440 75V200H1416C1392 200 1344 200 1296 200C1248 200 1200 200 1152 200C1104 200 1056 200 1008 200C960 200 912 200 864 200C816 200 768 200 720 200C672 200 624 200 576 200C528 200 480 200 432 200C384 200 336 200 288 200C240 200 192 200 144 200C96 200 48 200 24 200H0Z"
            fill="#EDEEE8"
            fillOpacity="0.15"
          />
          <path
            d="M0 200L60 180C120 160 240 120 360 105C420 97 480 93 540 85C600 77 660 73 720 75C780 77 840 85 900 90C960 95 1020 97 1080 93C1140 89 1200 79 1260 76C1320 73 1380 77 1410 79L1440 81V200H1410C1380 200 1320 200 1260 200C1200 200 1140 200 1080 200C1020 200 960 200 900 200C840 200 780 200 720 200C660 200 600 200 540 200C480 200 420 200 360 200C300 200 240 200 180 200C120 200 60 200 30 200H0Z"
            fill="#EDEEE8"
          />
        </svg>
      </motion.div>
    </section>
  )
}
