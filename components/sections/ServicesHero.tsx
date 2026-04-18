'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'

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
      className="relative overflow-hidden bg-brand-cream pt-28 md:pt-36 pb-16 md:pb-24"
      style={{
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: text content ──────────────────────────────────── */}
          <div>
            <span
              className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{
                background: '#F0EEE8',
                fontSize: '12px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              Top-Rated Roofing Company in Cochrane, AB
            </span>

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

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Button variant="primary" size="lg" href={primaryCTA.href}>
                {primaryCTA.label}
              </Button>
              <Button variant="outline" size="lg" href={secondaryCTA.href}>
                {secondaryCTA.label}
              </Button>
            </div>

            {/* Trust micro-strip */}
            <div
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2"
              style={{
                fontSize: '12px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 500,
                color: 'var(--brand-slate, #4D6A87)',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
              }}
            >
              <span>Red Seal Certified</span>
              <span aria-hidden="true" className="text-brand-border">·</span>
              <span>Licensed &amp; Insured</span>
              <span aria-hidden="true" className="text-brand-border">·</span>
              <span>5-Star Rated</span>
            </div>
          </div>

          {/* ── Right: image + floating review card ─────────────────── */}
          <div className="relative mt-8 lg:mt-0">
            {/* Outer gold glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rounded-[28px]"
              style={{
                background:
                  'radial-gradient(ellipse 80% 80% at 60% 50%, rgba(212,175,96,0.14) 0%, transparent 70%)',
                filter: 'blur(8px)',
              }}
            />

            {/* Main image */}
            <div
              className="relative overflow-hidden rounded-[20px]"
              style={{
                boxShadow:
                  '0 0 0 1px rgba(212,175,96,0.15), 0 8px 24px -4px rgba(44,71,102,0.14), 0 32px 80px -16px rgba(44,71,102,0.28)',
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
                style={{ objectPosition: '10% center' }}
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

            {/* Floating review card */}
            <div
              className="absolute -bottom-5 -left-4 md:-left-6 z-10 bg-white rounded-[12px] p-4 md:p-5"
              style={{
                maxWidth: '264px',
                boxShadow:
                  '0 0 0 1px rgba(44,71,102,0.08), 0 8px 32px rgba(44,71,102,0.12)',
              }}
            >
              {/* Stars */}
              <div className="flex items-center gap-[3px] mb-3" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-[14px] h-[14px]"
                    style={{ color: '#D4AF60', fill: '#D4AF60' }}
                    strokeWidth={0}
                  />
                ))}
              </div>

              <p
                className="text-brand-navy leading-[1.55]"
                style={{
                  fontSize: '13px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                &ldquo;Professional, punctual, and incredibly thorough. The quality of their
                work is top-notch and they left my property spotless.&rdquo;
              </p>

              <div className="mt-3 pt-3 border-t border-brand-border">
                <span
                  className="text-brand-navy font-semibold block"
                  style={{ fontSize: '13px', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  Steve LeNeveu
                </span>
                <span
                  className="text-brand-slate"
                  style={{ fontSize: '11px', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  Cochrane, AB
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
