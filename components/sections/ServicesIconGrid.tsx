'use client'

import Link from 'next/link'
import Image from 'next/image'
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
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

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
  cta?: { label: string; href: string }
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

function ServiceCard({ service }: { service: ServiceCardItem }) {
  const Icon = iconFor(service.title)

  return (
    <Link
      href={service.href}
      className="group flex flex-col h-full rounded-[12px] bg-white border border-brand-gold/50 overflow-hidden shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[6px] hover:border-brand-gold hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out"
    >
      {/* Image */}
      <div className="relative aspect-[3/2] overflow-hidden flex-shrink-0">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        {/* Heading row */}
        <div className="flex items-center gap-3 mb-3">
          <Icon className="w-[18px] h-[18px] flex-shrink-0 text-brand-gold" strokeWidth={1.75} />
          <h3
            className="font-display font-semibold text-brand-navy leading-[1.25] flex-1"
            style={{ fontSize: '22px', letterSpacing: '-0.02em' }}
          >
            {service.title}
          </h3>
        </div>

        <p
          className="text-brand-slate leading-[1.6]"
          style={{
            fontSize: '14px',
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontWeight: 400,
          }}
        >
          {service.description}
        </p>

        {/* CTA, visual only; outer Link handles navigation */}
        <div className="mt-3">
          <span
            className="inline-flex items-center gap-1.5 font-bold text-brand-gold group-hover:text-[#B8943F] transition-colors duration-200"
            style={{
              fontSize: '15px',
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            {service.title}
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.25} />
          </span>
        </div>
      </div>
    </Link>
  )
}

export function ServicesIconGrid({
  eyebrow = 'Our Services',
  heading,
  body,
  cta,
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
      <Reveal>
      <div className="relative flex flex-col items-center text-center mb-12 md:mb-16 max-w-[920px] mx-auto">
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
            className="mt-7 max-w-[800px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            {body}
          </p>
        )}
      </div>
      </Reveal>

      {/* ── 3 x 2 service card grid ──────────────────────────────── */}
      <Reveal delay={150}>
      <div className="max-w-[1320px] mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service) => (
            <li key={service.title}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>

        {cta && (
          <div className="mt-12 md:mt-14 flex justify-center">
            <Button variant="primary" size="lg" href={cta.href}>
              {cta.label}
            </Button>
          </div>
        )}
      </div>
      </Reveal>
    </section>
  )
}
