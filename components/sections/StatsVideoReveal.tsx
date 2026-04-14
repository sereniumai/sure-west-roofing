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
        <span className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tabular-nums leading-none">
          {count.toLocaleString()}
        </span>
        <span className="font-display font-semibold text-2xl md:text-3xl lg:text-4xl text-[#D4AF60] leading-none">
          {stat.suffix}
        </span>
      </div>
      <h3 className="font-display font-semibold text-white uppercase text-xs md:text-sm tracking-wider mt-2">
        {stat.label}
      </h3>
      <p className="font-body text-white/40 text-xs font-normal mt-1 leading-relaxed max-w-[200px] mx-auto lg:mx-0">
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

  // Phase A (0-0.25): Stats panels slide in from sides
  // Phase B (0.25-0.55): Overlay splits and reveals video
  // Phase C (0.55-0.75): Video scales up and becomes prominent

  // Stats panels slide in from ±100% to 0
  const leftStatsX = useTransform(scrollYProgress, [0, 0.2], ['-100%', '0%'])
  const rightStatsX = useTransform(scrollYProgress, [0, 0.2], ['100%', '0%'])
  const statsOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1])

  // Overlay halves split apart
  const leftX = useTransform(scrollYProgress, [0.3, 0.6], ['0%', '-105%'])
  const rightX = useTransform(scrollYProgress, [0.3, 0.6], ['0%', '105%'])

  // Video fades in and scales up behind the split
  const videoOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1])
  const videoScale = useTransform(scrollYProgress, [0.35, 0.65], [0.8, 1])
  const videoY = useTransform(scrollYProgress, [0.3, 0.6], ['80px', '0px'])

  return (
    <section ref={sectionRef} className="relative h-[350vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Video/image layer (behind overlay) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-full max-w-5xl mx-auto aspect-video relative"
            style={{ scale: videoScale, opacity: videoOpacity, y: videoY }}
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
                  className="w-full h-full object-cover grayscale contrast-[1.05]"
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

        {/* Split overlay — two halves with stats */}
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
            <div className="absolute inset-0 bg-black/70" />

            {/* Stats — slide in from left */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-between p-6 lg:p-12"
              style={{ x: leftStatsX, opacity: statsOpacity }}
            >
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
            </motion.div>
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
            <div className="absolute inset-0 bg-black/70" />

            {/* Stats — slide in from right */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-between p-6 lg:p-12"
              style={{ x: rightStatsX, opacity: statsOpacity }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
