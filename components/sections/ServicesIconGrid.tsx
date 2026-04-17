'use client'

import Link from 'next/link'
import Image from 'next/image'
import { m } from 'framer-motion'
import { EASE_OUT, VIEWPORT } from '@/lib/animations'
import {
  Hammer,
  Wrench,
  CloudHail,
  ClipboardCheck,
  ScanSearch,
  Sun,
  type LucideIcon,
} from 'lucide-react'

interface ServiceReview {
  quote: string
  author: string
  location?: string
}

interface ServiceCardItem {
  title: string
  description: string
  href: string
  image: string
  imageAlt: string
  review?: ServiceReview
}

interface ServicesIconGridProps {
  eyebrow?: string
  heading: string
  body?: string
  services: ServiceCardItem[]
}


function iconFor(title: string): LucideIcon {
  const key = title.toLowerCase()
  if (key.includes('replacement')) return Hammer
  if (key.includes('hail')) return CloudHail
  if (key.includes('repair')) return Wrench
  if (key.includes('maintenance')) return ClipboardCheck
  if (key.includes('inspection')) return ScanSearch
  if (key.includes('skylight')) return Sun
  return Hammer
}

function ServiceCard({
  service,
  delay,
}: {
  service: ServiceCardItem
  delay: number
}) {
  const Icon = iconFor(service.title)

  return (
    <m.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.55, delay, ease: EASE_OUT }}
      className="h-full"
    >
      <Link
        href={service.href}
        className="group relative flex flex-col h-full rounded-[12px] bg-white overflow-hidden shadow-[0_2px_8px_rgba(44,71,102,0.06)] transition-all duration-300 ease-out hover:-translate-y-[6px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)]"
      >
        {/* Image at top - fixed 200px */}
        <div className="relative h-[200px] overflow-hidden">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          {/* Heading row — icon + title */}
          <div className="flex items-center gap-3">
            <Icon
              className="w-[18px] h-[18px] flex-shrink-0 text-brand-gold"
              strokeWidth={1.5}
            />
            <h3
              className="font-display font-semibold leading-[1.25] flex-1 text-brand-navy transition-colors duration-300 group-hover:text-brand-gold"
              style={{
                fontSize: '22px',
                letterSpacing: '-0.02em',
              }}
            >
              {service.title}
            </h3>
          </div>

          <p
            className="mt-2 text-brand-slate leading-[1.5] flex-1"
            style={{
              fontSize: '14px',
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            {service.description}
          </p>
        </div>
      </Link>
    </m.div>
  )
}

export function ServicesIconGrid({
  eyebrow = 'Our Services',
  heading,
  body,
  services,
}: ServicesIconGridProps) {
  return (
    <section
      className="bg-brand-cream relative overflow-hidden py-20 md:py-24"
      style={{
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      {/* ── Header ───────────────────────────────────────────────── */}
      <m.div
        className="relative flex flex-col items-center text-center mb-12 md:mb-16 max-w-[920px] mx-auto"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        <span
          className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
          style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 600, lineHeight: 1 }}
        >
          {eyebrow}
        </span>
        <h2
          className="font-display font-medium max-w-[1000px] text-brand-navy"
          style={{
            fontSize: 'clamp(32px, 4.5vw, 48px)',
            lineHeight: 1.15,
            letterSpacing: '-0.005em',
          }}
        >
          {heading.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h2>
        {body && (
          <p
            className="mt-7 max-w-[680px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            {body}
          </p>
        )}
      </m.div>

      {/* ── 3 x 2 service card grid ──────────────────────────────── */}
      <div className="max-w-[1320px] mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-fr">
          {services.map((service, i) => (
            <li key={service.title} className="h-full">
              <ServiceCard
                service={service}
                delay={0.05 + i * 0.06}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
