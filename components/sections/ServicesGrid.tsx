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
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [checkScroll])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector<HTMLElement>('[data-card]')?.offsetWidth ?? 300
    const gap = 20
    const distance = cardWidth + gap
    el.scrollBy({ left: direction === 'left' ? -distance : distance, behavior: 'smooth' })
  }

  return (
    <section className="bg-[#EDEEE8] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header row */}
        <div className="flex items-end justify-between mb-5">
          <motion.div
            className="max-w-2xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#D6AE60] mb-3 block">
              {label}
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-[52px] text-dark tracking-tight leading-tight">
              {heading}
            </h2>
            <p className="font-body text-body-text leading-relaxed mt-4">
              {body}
            </p>
          </motion.div>

          {/* Nav arrows */}
          <motion.div
            className="hidden md:flex items-center gap-3 flex-shrink-0 ml-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border border-dark/15 flex items-center justify-center hover:border-[#D6AE60] hover:text-[#D6AE60] transition-colors duration-200 disabled:opacity-30 disabled:cursor-default"
              aria-label="Previous services"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full border border-dark/15 flex items-center justify-center hover:border-[#D6AE60] hover:text-[#D6AE60] transition-colors duration-200 disabled:opacity-30 disabled:cursor-default"
              aria-label="Next services"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.href}
              data-card
              className="flex-shrink-0 w-[280px] sm:w-[300px] lg:w-[calc((100%-60px)/4)] snap-start"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={service.href}
                className="group block bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full"
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
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-dark tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-body-text leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-body font-semibold text-sm text-dark group-hover:text-[#D6AE60] transition-colors duration-200">
                    {service.title}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - centered */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button variant="primary" href={cta.href}>
            {cta.label}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
