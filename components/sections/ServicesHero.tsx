'use client'

import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

interface ServicesHeroProps {
  h1: string
  subhead: string
  primaryCTA: { label: string; href: string }
  secondaryCTA: { label: string; href: string }
}

export function ServicesHero({
  h1,
  subhead,
  primaryCTA,
  secondaryCTA,
}: ServicesHeroProps) {
  return (
    <section
      className="relative overflow-x-clip bg-brand-cream pt-28 md:pt-36 pb-20 md:pb-28"
      style={{
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: text content ──────────────────────────────────── */}
          <div>
            <Reveal delay={80}>
            <span
              className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{
                background: '#FFFFFF',
                fontSize: '12px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              Top-Rated Roofing Company in Cochrane
            </span>
            </Reveal>

            <Reveal delay={180}>
            <h1
              className="font-display font-semibold text-brand-navy"
              style={{
                fontSize: 'clamp(36px, 4.5vw, 56px)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
              }}
            >
              {h1.split('\n').map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h1>
            </Reveal>

            <Reveal delay={300}>
            <p
              className="mt-5 text-brand-slate leading-[1.65] max-w-[480px]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              {subhead}
            </p>
            </Reveal>

            <Reveal delay={420}>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Button variant="primary" size="lg" href={primaryCTA.href}>
                {primaryCTA.label}
              </Button>
              <Button variant="outline" size="lg" href={secondaryCTA.href}>
                {secondaryCTA.label}
              </Button>
            </div>
            </Reveal>

          </div>

          {/* ── Right: image ────────────────────────────────────────── */}
          <Reveal delay={250} noBlur className="relative mt-8 lg:mt-0">
            {/* Soft gold radial halo behind the image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rounded-[28px]"
              style={{
                background:
                  'radial-gradient(ellipse 80% 80% at 60% 50%, rgba(212,175,96,0.14) 0%, transparent 70%)',
                filter: 'blur(8px)',
              }}
            />

            <div
              className="relative overflow-hidden rounded-[20px]"
              style={{
                boxShadow:
                  '0 2px 4px rgba(44,71,102,0.06), 0 12px 40px -8px rgba(44,71,102,0.18), 0 40px 100px -20px rgba(44,71,102,0.22)',
                aspectRatio: '4 / 3',
                zIndex: 1,
              }}
            >
              <Image
                src="/images/Cochrane Roofing Contractor Gallery 5.webp"
                alt="Sure West Roofing completed roof replacement in Cochrane Alberta"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: '56% center' }}
                priority
              />
              {/* Subtle vignette */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(44,71,102,0.12) 0%, transparent 40%)',
                }}
              />
            </div>

            {/* Floating trust badge, overhangs the image bottom-right */}
            <div
              className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-5 lg:-bottom-7 lg:-right-7 bg-white rounded-[14px] flex items-center gap-3.5 px-4 py-3 sm:px-5 sm:py-3.5 max-w-[260px]"
              style={{
                boxShadow:
                  '0 2px 4px rgba(44,71,102,0.08), 0 14px 32px -10px rgba(44,71,102,0.22), 0 28px 60px -18px rgba(44,71,102,0.18)',
                zIndex: 2,
              }}
            >
              <span
                className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full"
                style={{
                  background: 'rgba(212,175,96,0.14)',
                  border: '1px solid rgba(212,175,96,0.35)',
                }}
              >
                <ShieldCheck className="w-5 h-5 text-brand-gold" strokeWidth={1.75} />
              </span>
              <div>
                <div
                  className="font-display text-brand-navy leading-none"
                  style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.01em' }}
                >
                  Red Seal Certified
                </div>
                <div
                  className="text-brand-slate mt-1.5"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    lineHeight: 1.3,
                  }}
                >
                  On every roof, every job
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
