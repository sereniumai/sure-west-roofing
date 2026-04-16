'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Hammer,
  Wrench,
  CloudHail,
  ClipboardCheck,
  ScanSearch,
  Sun,
  ArrowRight,
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

const EASE_OUT = [0.16, 1, 0.3, 1] as const

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
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: EASE_OUT }}
      className="h-full"
    >
      <Link
        href={service.href}
        className="group relative flex flex-col h-full rounded-[12px] bg-white overflow-hidden shadow-[0_2px_8px_rgba(44,71,102,0.06)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(44,71,102,0.1)]"
      >
        {/* Image at top */}
        <div className="relative h-[180px] md:h-[200px] overflow-hidden">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 md:p-7">
          {/* Heading row — icon + title + arrow */}
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-9 h-9 rounded-[8px] flex-shrink-0 transition-colors duration-500 ease-out group-hover:bg-[rgba(212,175,96,0.18)]"
              style={{ background: 'rgba(212,175,96,0.12)' }}
            >
              <Icon
                className="w-[18px] h-[18px]"
                style={{ color: 'var(--color-accent, #D4AF60)' }}
                strokeWidth={1.5}
              />
            </span>
            <h3
              className="font-display font-semibold leading-[1.15] text-[--color-near-black] flex-1"
              style={{
                fontSize: 'clamp(19px, 1.45vw, 22px)',
                letterSpacing: '-0.02em',
              }}
            >
              {service.title}
            </h3>
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 ease-out flex-shrink-0"
            >
              <ArrowRight className="w-[18px] h-[18px] text-brand-gold transition-colors duration-200" strokeWidth={1.5} />
            </span>
          </div>

          <p
            className="mt-3 text-brand-slate leading-[1.65] flex-1"
            style={{
              fontSize: '14px',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            {service.description}
          </p>
        </div>
      </Link>
    </motion.div>
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
      className="bg-brand-cream relative overflow-hidden"
      style={{
        paddingTop: 'var(--section-pad-top)',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
        paddingBottom: 'calc(var(--section-pad-bot) + 40px)',
      }}
    >
      {/* ── Header ───────────────────────────────────────────────── */}
      <motion.div
        className="relative flex flex-col items-center text-center mb-12 md:mb-16 max-w-[920px] mx-auto"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        <span
          className="inline-flex items-center h-8 md:h-9 px-3 md:px-4 text-[13px] md:text-[14px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm] mb-6"
          style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--color-accent, #D4AF60)' }}
        >
          {eyebrow}
        </span>
        <h2
          className="font-display font-semibold leading-[1.05] max-w-[1000px] text-[--color-near-black]"
          style={{
            fontSize: 'clamp(30px, 3.8vw, 52px)',
            letterSpacing: '-0.04em',
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
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            {body}
          </p>
        )}
      </motion.div>

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
