'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play } from 'lucide-react'

interface StatItem {
  number: string
  suffix: string
  label: string
  description: string
}

interface StatsVideoRevealProps {
  stats: StatItem[]
  videoEmbed: string
  videoPoster?: string
}

function Counter({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const target = parseInt(stat.number.replace(/,/g, ''))

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return
    let start = 0
    const duration = 2000
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [hasStarted, target])

  return (
    <div ref={ref}>
      <div className="flex items-baseline gap-0">
        <span className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-[#D4AF60] tracking-tight tabular-nums">
          {count.toLocaleString()}
        </span>
        <span className="font-display font-extrabold text-2xl md:text-3xl text-[#D4AF60]/70">
          {stat.suffix}
        </span>
      </div>
      <h3 className="font-display font-extrabold text-white uppercase text-lg md:text-xl tracking-wider mt-1">
        {stat.label}
      </h3>
      <p className="font-body text-white/50 text-sm mt-1 leading-relaxed max-w-xs">
        {stat.description}
      </p>
    </div>
  )
}

export function StatsVideoReveal({
  stats,
  videoEmbed,
}: StatsVideoRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [videoPlaying, setVideoPlaying] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Split animation: as user scrolls, left panel goes left, right goes right
  const leftX = useTransform(scrollYProgress, [0.15, 0.5], ['0%', '-110%'])
  const rightX = useTransform(scrollYProgress, [0.15, 0.5], ['0%', '110%'])
  const videoScale = useTransform(scrollYProgress, [0.2, 0.5], [0.9, 1])
  const videoOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1])

  return (
    <section ref={sectionRef} className="relative bg-[#1A1A1A] overflow-hidden">
      {/* Stats grid — always visible */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <Counter stat={stat} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Split-reveal video section */}
      <div className="relative h-[80vh] md:h-[90vh]">
        {/* Video layer (behind) */}
        <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-12">
          <motion.div
            className="w-full max-w-4xl aspect-video relative"
            style={{ scale: videoScale, opacity: videoOpacity }}
          >
            {videoPlaying ? (
              <iframe
                src={`${videoEmbed}${videoEmbed.includes('?') ? '&' : '?'}autoplay=1`}
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Sure West Roofing"
              />
            ) : (
              <button
                onClick={() => setVideoPlaying(true)}
                className="absolute inset-0 w-full h-full cursor-pointer group bg-[#111]"
                aria-label="Play video"
              >
                {/* Video thumbnail placeholder */}
                <img
                  src="/images/Cochrane Roofing Contractors.jpg"
                  alt="Play video"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#D4AF60] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 lg:w-8 lg:h-8 text-white fill-white ml-1" />
                  </div>
                </div>
              </button>
            )}
          </motion.div>
        </div>

        {/* Split overlay panels */}
        <div className="absolute inset-0 flex pointer-events-none">
          {/* Left panel */}
          <motion.div
            className="w-1/2 h-full bg-[#1A1A1A] origin-left"
            style={{ x: leftX }}
          />
          {/* Right panel */}
          <motion.div
            className="w-1/2 h-full bg-[#1A1A1A] origin-right"
            style={{ x: rightX }}
          />
        </div>
      </div>
    </section>
  )
}
