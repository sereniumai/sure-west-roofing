'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
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

function AnimatedCounter({ stat, started }: { stat: StatItem; started: boolean }) {
  const [count, setCount] = useState(0)
  const target = parseInt(stat.number.replace(/,/g, ''))

  useEffect(() => {
    if (!started) return
    const startTime = performance.now()
    const duration = 2000

    function update(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * ease))
      if (progress < 1) requestAnimationFrame(update)
    }
    requestAnimationFrame(update)
  }, [started, target])

  return (
    <div className="mb-8 last:mb-0">
      <div className="flex items-baseline gap-1">
        <span
          className="font-display font-bold leading-none tabular-nums"
          style={{ fontSize: '80px', color: 'var(--color-warm-white)' }}
        >
          {count.toLocaleString()}
        </span>
        <span
          className="font-display font-medium leading-none"
          style={{ fontSize: '41px', color: 'var(--color-accent)' }}
        >
          {stat.suffix}
        </span>
      </div>
      <h3
        className="font-display font-semibold mt-2"
        style={{ fontSize: '28px', color: 'var(--color-warm-white)' }}
      >
        {stat.label}
      </h3>
      <p
        className="font-body font-semibold leading-snug mt-1.5 max-w-[260px]"
        style={{ fontSize: 'var(--text-body)', color: 'rgba(255,251,245,0.7)' }}
      >
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
  const stickyRef = useRef<HTMLDivElement>(null)
  const statsLeftRef = useRef<HTMLDivElement>(null)
  const statsRightRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [countersStarted, setCountersStarted] = useState(false)

  const updateOnScroll = useCallback(() => {
    const section = sectionRef.current
    if (!section || !statsLeftRef.current || !statsRightRef.current || !videoRef.current) return

    const rect = section.getBoundingClientRect()
    const sectionProgress = -rect.top / (section.offsetHeight - window.innerHeight)
    const p = Math.max(0, Math.min(1, sectionProgress))

    // Stats slide in during first 40% of scroll through section
    if (p < 0.4) {
      const inP = p / 0.4
      const offset = (1 - inP) * 2500
      statsLeftRef.current.style.transform = `translateX(${-offset}px)`
      statsRightRef.current.style.transform = `translateX(${offset}px)`
      videoRef.current.style.transform = 'translateY(170px)'

      // Start counters when stats are mostly visible
      if (inP > 0.5 && !countersStarted) {
        setCountersStarted(true)
      }
    }
    // Video reveals + stats slide out during next 40%
    else if (p < 0.8) {
      const vidP = (p - 0.4) / 0.4
      statsLeftRef.current.style.transform = `translateX(${-vidP * 2500}px)`
      statsRightRef.current.style.transform = `translateX(${vidP * 2500}px)`
      videoRef.current.style.transform = `translateY(${170 - vidP * 170}px)`
    }
    // Fully revealed
    else {
      statsLeftRef.current.style.transform = 'translateX(-2500px)'
      statsRightRef.current.style.transform = 'translateX(2500px)'
      videoRef.current.style.transform = 'translateY(0)'
    }
  }, [countersStarted])

  useEffect(() => {
    window.addEventListener('scroll', updateOnScroll, { passive: true })
    updateOnScroll()
    return () => window.removeEventListener('scroll', updateOnScroll)
  }, [updateOnScroll])

  return (
    <section ref={sectionRef} className="relative bg-[--color-gray]" style={{ height: '250vh' }}>
      {/* Scroll runway, the sticky element sits inside this */}
      <div className="relative" style={{ height: '200vh' }}>
        <div
          ref={stickyRef}
          className="sticky top-0 h-screen w-full overflow-hidden flex items-stretch"
        >
          {/* Left stats panel */}
          <div
            ref={statsLeftRef}
            className="absolute top-0 left-0 w-1/2 h-full z-[2] flex flex-col justify-between"
            style={{
              background: 'var(--color-gray)',
              padding: '114px 60px 50px',
              willChange: 'transform',
              transition: 'none',
              transform: 'translateX(-2500px)',
            }}
          >
            {stats[0] && <AnimatedCounter stat={stats[0]} started={countersStarted} />}
            {stats[2] && <AnimatedCounter stat={stats[2]} started={countersStarted} />}
          </div>

          {/* Right stats panel */}
          <div
            ref={statsRightRef}
            className="absolute top-0 right-0 w-1/2 h-full z-[2] flex flex-col justify-between items-end text-right"
            style={{
              background: 'var(--color-gray)',
              padding: '114px 60px 50px',
              willChange: 'transform',
              transition: 'none',
              transform: 'translateX(2500px)',
            }}
          >
            {stats[1] && <AnimatedCounter stat={stats[1]} started={countersStarted} />}
            {stats[3] && <AnimatedCounter stat={stats[3]} started={countersStarted} />}
          </div>

          {/* Video container, slides up from translateY(170px) */}
          <div
            ref={videoRef}
            className="absolute inset-0 z-[1]"
            style={{
              willChange: 'transform',
              transition: 'none',
              transform: 'translateY(170px)',
            }}
          >
            <div
              className="w-full h-full relative"
              style={{ filter: videoPlaying ? 'none' : 'contrast(1.05) grayscale(1)' }}
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
                    src={backgroundImage}
                    alt="Play video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  {/* Gold play button */}
                  <div
                    className="absolute flex items-center justify-center group-hover:scale-110 transition-transform duration-300 rounded-full"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'var(--color-accent)',
                      bottom: '240px',
                      right: '30%',
                    }}
                  >
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* About content below the sticky panel */}
      <div
        className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start"
        style={{ padding: '100px var(--section-pad-x)' }}
      >
        <div className="lg:w-[400px] flex-shrink-0">
          <span className="section-label text-[#D4AF60] mb-4 block">
            About Us
          </span>
          <h2
            className="font-display font-semibold leading-none mt-1"
            style={{
              fontSize: 'var(--text-section)',
              letterSpacing: '-0.04em',
            }}
          >
            Serving Roofs<br />Since Day One
          </h2>
        </div>
        <div className="flex-1">
          <p className="font-body font-semibold leading-relaxed" style={{ color: 'rgba(20,20,20,0.65)' }}>
            Sure West Roofing is a Red Seal certified roofing contractor proudly serving Cochrane, Calgary, and Canmore. We&apos;re not the biggest roofing company, we&apos;re the one that shows up, does it right, and stands behind every job. Alberta&apos;s weather doesn&apos;t take days off, and neither do we. From hailstorms to heavy snow loads, we build roofs that hold up when it matters most.
          </p>
          <div className="mt-6 pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <span className="font-display font-semibold text-[#D4AF60] text-sm uppercase tracking-wider">
              Proudly serving since 2014
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
