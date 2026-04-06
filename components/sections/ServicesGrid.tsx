'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  image?: string
}

interface ServicesGridProps {
  label: string
  heading: string
  body: string
  cta: { label: string; href: string }
  services: ServiceItem[]
}

export function ServicesGrid({
  label,
  heading,
  body,
  cta,
  services,
}: ServicesGridProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)

    // Block wheel-driven horizontal scrolling completely
    const blockWheel = (e: WheelEvent) => {
      // Let the page scroll vertically — never let the carousel consume the event
      e.preventDefault()
      // Re-dispatch as a window scroll so the page still scrolls
      window.scrollBy({ top: e.deltaY, left: 0 })
    }
    el.addEventListener('wheel', blockWheel, { passive: false })

    return () => {
      el.removeEventListener('scroll', checkScroll)
      el.removeEventListener('wheel', blockWheel)
      window.removeEventListener('resize', checkScroll)
    }
  }, [checkScroll])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    // Temporarily enable overflow-x for smooth scrollBy, then re-hide
    el.style.overflowX = 'scroll'
    const cardWidth = el.querySelector<HTMLElement>('[data-card]')?.offsetWidth ?? 300
    const gap = 24
    const distance = cardWidth + gap
    el.scrollBy({ left: direction === 'left' ? -distance : distance, behavior: 'smooth' })
    setTimeout(() => {
      if (el) el.style.overflowX = 'hidden'
    }, 500)
  }

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="w-full"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-extrabold text-3xl lg:text-[52px] text-dark tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="font-body text-body-text leading-relaxed mt-5">
            {body}
          </p>
        </motion.div>

        {/* Arrows row — right above cards */}
        <motion.div
          className="hidden md:flex items-center justify-end gap-3 mt-8 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="w-12 h-12 rounded-full border-2 border-[#D6AE60] flex items-center justify-center text-[#D6AE60] hover:bg-[#D6AE60] hover:text-white hover:shadow-md transition-all duration-200 disabled:opacity-25 disabled:cursor-default disabled:hover:bg-transparent disabled:hover:text-[#D6AE60] disabled:hover:shadow-none"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="w-12 h-12 rounded-full border-2 border-[#D6AE60] flex items-center justify-center text-[#D6AE60] hover:bg-[#D6AE60] hover:text-white hover:shadow-md transition-all duration-200 disabled:opacity-25 disabled:cursor-default disabled:hover:bg-transparent disabled:hover:text-[#D6AE60] disabled:hover:shadow-none"
            aria-label="Next services"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth pb-2"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.href}
              data-card
              className="flex-shrink-0 w-[300px] sm:w-[340px] lg:w-[calc((100%-48px)/3)] snap-start"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={service.href}
                className="group block bg-[#F8F8F8] border border-[#EBEBEB] rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 h-full hover:-translate-y-1"
              >
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-[#1B3558] to-[#2a4a7a]">
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 25vw"
                    />
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-dark tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-body-text leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-body font-semibold text-sm text-dark group-hover:text-[#D6AE60] transition-colors duration-300">
                    {service.title}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA below cards */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="primary" href={cta.href}>
            {cta.label}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
