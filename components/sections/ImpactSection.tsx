'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function ImpactSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Mountain parallax layers - each moves at different speed
  const mountain1Y = useTransform(scrollYProgress, [0, 1], [200, -100])
  const mountain2Y = useTransform(scrollYProgress, [0, 1], [150, -60])
  const mountain3Y = useTransform(scrollYProgress, [0, 1], [100, -30])
  const textY = useTransform(scrollYProgress, [0, 0.5], [100, -50])
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.6, 0.8], [0, 1, 1, 0])
  const textScale = useTransform(scrollYProgress, [0.1, 0.35], [0.8, 1])
  const mountainScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1])

  return (
    <section
      ref={containerRef}
      className="relative h-[120vh] overflow-hidden bg-[#1B3558]"
    >
      {/* Star field background */}
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

      {/* Text - fixed center with parallax */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
        style={{ y: textY, opacity: textOpacity, scale: textScale }}
      >
        <div className="text-center px-6">
          <motion.h2
            className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl xl:text-[160px] tracking-tight leading-[0.9] text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Move the
            <br />
            <span className="text-[#D6AE60]">Mountain</span>
          </motion.h2>
        </div>
      </motion.div>

      {/* Mountain layers - back to front with parallax */}
      {/* Far mountains */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ y: mountain1Y, scale: mountainScale }}
      >
        <svg
          viewBox="0 0 1440 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 500 L200 180 L320 250 L480 100 L580 200 L720 50 L860 200 L960 120 L1100 220 L1200 150 L1320 230 L1440 160 L1440 500 Z"
            fill="#243F6B"
            fillOpacity="0.6"
          />
        </svg>
      </motion.div>

      {/* Mid mountains */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ y: mountain2Y }}
      >
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 400 L100 250 L250 300 L400 150 L500 220 L650 80 L800 230 L900 170 L1050 260 L1150 180 L1300 270 L1440 200 L1440 400 Z"
            fill="#1B3558"
          />
        </svg>
      </motion.div>

      {/* Front mountains - darkest, with snow caps via gold accent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-30"
        style={{ y: mountain3Y }}
      >
        <svg
          viewBox="0 0 1440 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          {/* Mountain peaks with gold tips */}
          <path
            d="M-50 350 L150 200 L280 260 L450 120 L550 190 L700 60 L850 200 L950 140 L1100 230 L1250 160 L1400 240 L1490 180 L1490 350 Z"
            fill="#0F2240"
          />
          {/* Gold accent line along peaks */}
          <path
            d="M450 120 L470 128 L500 118 L530 130 L550 190"
            stroke="#D6AE60"
            strokeWidth="2"
            strokeOpacity="0.4"
            fill="none"
          />
          <path
            d="M700 60 L720 70 L740 65 L760 75 L780 68"
            stroke="#D6AE60"
            strokeWidth="2"
            strokeOpacity="0.6"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Foreground with transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 z-40 h-32 bg-gradient-to-t from-[#EDEEE8] to-transparent" />
      <div className="absolute -bottom-1 left-0 right-0 z-40 h-4 bg-[#EDEEE8]" />
    </section>
  )
}
