'use client'

import { FoundersVideo } from '@/components/ui/FoundersVideo'
import { Reveal } from '@/components/ui/Reveal'

const SERIF = "Georgia, 'Times New Roman', serif"

export function BrandStrip() {
  return (
    <section
      className="bg-white relative overflow-hidden py-20 md:py-24"
      style={{
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <Reveal>
        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* LEFT - Brand video (Move the Mountain) */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-x-6 -inset-y-4 -z-10"
                  style={{
                    background:
                      'radial-gradient(500px 220px at 50% 50%, rgba(212,175,96,0.14), transparent 70%)',
                    filter: 'blur(4px)',
                  }}
                />
                <FoundersVideo />
              </div>
            </div>

            {/* RIGHT - Heading + Body + Closing + Signature + CTA */}
            <div className="lg:col-span-6">
              {/* Pre-title pill */}
              <span
                className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] text-brand-gold"
                style={{
                  background: '#F7F5F0',
                  fontSize: '12px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                Our Philosophy
              </span>

              {/* Heading */}
              <h2
                className="mt-6 font-display font-medium text-brand-navy"
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 48px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.005em',
                }}
              >
                Move the Mountain
              </h2>

              {/* Body copy - site standard (Inter, 16px, slate, 1.65 leading) */}
              <div
                className="mt-8 text-brand-slate leading-[1.65] max-w-[560px] space-y-5"
                style={{
                  fontSize: '16px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                <p>
                  Rooted in the foothills of the Canadian Rockies, we carry the spirit of the
                  mountains into everything we do. They demand respect, preparation, skill, and
                  humility. They test character and reveal it. They remind us that the summit is
                  earned, one deliberate step at a time.
                </p>
                <p>
                  We&rsquo;re not just roofers. We&rsquo;ve chosen roofing as our mountain. A
                  responsibility, climbed with integrity, competency, and care. Every obstacle,
                  whether it&rsquo;s a failing roof, a stressful process, or the skepticism
                  homeowners feel about contractors, is a mountain.
                </p>
              </div>

              {/* Closing line - softened so it whispers, not shouts */}
              <p
                className="mt-6 font-display text-brand-gold"
                style={{
                  fontWeight: 400,
                  fontSize: 'clamp(18px, 1.5vw, 22px)',
                  lineHeight: 1.4,
                  letterSpacing: '0.01em',
                }}
              >
                We exist to help you climb it.
              </p>

              {/* Founders signature */}
              <p
                className="mt-3 text-brand-navy/70"
                style={{
                  fontFamily: SERIF,
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: '17px',
                  letterSpacing: '0.01em',
                }}
              >
                Craig &amp; Mike, Founders
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
