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
  backgroundImage: string
}

function AnimatedCounter({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const target = parseInt(stat.number.replace(/,/g, ''))

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) setStarted(true) },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let cur = 0
    const step = Math.ceil(target / 120)
    const timer = setInterval(() => {
      cur += step
      if (cur >= target) { setCount(target); clearInterval(timer) }
      else setCount(cur)
    }, 16)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <div ref={ref} className="text-center lg:text-left">
      <div className="flex items-baseline justify-center lg:justify-start gap-0">
        <span className="font-display font-black text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white tabular-nums leading-none">
          {count.toLocaleString()}
        </span>
        <span className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-[#D4AF60] leading-none">
          {stat.suffix}
        </span>
      </div>
      <h3 className="font-display font-extrabold text-white uppercase text-sm md:text-base tracking-wider mt-2">
        {stat.label}
      </h3>
      <p className="font-body text-white/50 text-xs md:text-sm mt-1 leading-relaxed max-w-[240px] mx-auto lg:mx-0">
        {stat.description}
      </p>
    </div>
  )
}

export function StatsVideoReveal({
  stats,
  videoEmbed,
  backgroundImage,
}: StatsVideoRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [videoPlaying, setVideoPlaying] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Phase 1 (0-0.3): overlay visible, image starts to peek through center
  // Phase 2 (0.3-0.6): overlay splits left/right
  // Phase 3 (0.6-1.0): video/image fully revealed, scales up
  const leftX = useTransform(scrollYProgress, [0.2, 0.55], ['0%', '-105%'])
  const rightX = useTransform(scrollYProgress, [0.2, 0.55], ['0%', '105%'])
  const videoScale = useTransform(scrollYProgress, [0.3, 0.6], [0.85, 1])
  const videoOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1])
  const gapWidth = useTransform(scrollYProgress, [0.1, 0.25], ['0px', '4px'])

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      {/* Sticky container that stays in viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video/image layer (BEHIND the overlay) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-full max-w-4xl mx-auto aspect-video relative"
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
                className="absolute inset-0 w-full h-full cursor-pointer group"
                aria-label="Play video"
              >
                <img
                  src="/images/Cochrane Roofing Contractors.jpg"
                  alt="Play video"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#D4AF60] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 lg:w-8 lg:h-8 text-white fill-white ml-1" />
                  </div>
                </div>
              </button>
            )}
          </motion.div>
        </div>

        {/* Split overlay — two halves that slide apart on scroll */}
        <div className="absolute inset-0 flex pointer-events-none">
          {/* Left half */}
          <motion.div
            className="w-1/2 h-full relative overflow-hidden"
            style={{ x: leftX }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-black/60" />

            {/* Stats — top-left and bottom-left */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-16">
              {stats[0] && (
                <div className="self-start">
                  <AnimatedCounter stat={stats[0]} />
                </div>
              )}
              {stats[2] && (
                <div className="self-start">
                  <AnimatedCounter stat={stats[2]} />
                </div>
              )}
            </div>
          </motion.div>

          {/* Right half */}
          <motion.div
            className="w-1/2 h-full relative overflow-hidden"
            style={{ x: rightX }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'right center',
              }}
            />
            <div className="absolute inset-0 bg-black/60" />

            {/* Stats — top-right and bottom-right */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-16">
              {stats[1] && (
                <div className="self-end text-right">
                  <AnimatedCounter stat={stats[1]} />
                </div>
              )}
              {stats[3] && (
                <div className="self-end text-right">
                  <AnimatedCounter stat={stats[3]} />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
