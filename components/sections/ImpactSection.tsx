'use client'

import { useRef, useEffect, useState } from 'react'

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

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
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
      },
      { rootMargin: '-50px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref}>
      <span className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl text-[#D4AF60] tracking-tight tabular-nums">
        {count}{suffix}
      </span>
    </div>
  )
}

export function ImpactSection() {
  return (
    <section className="bg-white py-12 lg:py-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 place-items-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <Counter value={stat.number} suffix={stat.suffix} />
              <p className="font-body text-body-text text-sm mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
