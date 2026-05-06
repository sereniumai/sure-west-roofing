'use client'

import { FoundersVideo } from '@/components/ui/FoundersVideo'
import { Reveal } from '@/components/ui/Reveal'

interface Pillar {
  num: string
  title: string
  body: string
}

const PILLARS: Pillar[] = [
  {
    num: '01',
    title: 'Character',
    body: "Who we are when no one's watching. In-house crew on every roof, honest quotes from day one, and we'll tell you if you don't need a replacement, even if it costs us the work.",
  },
  {
    num: '02',
    title: 'Competency',
    body: "Mastering the craft, not just doing the job. Red Seal Journeyman certified, Canada's highest trade credential, on every roof. The parts you never see done well are the parts we get right.",
  },
  {
    num: '03',
    title: 'Proven Processes',
    body: 'Same playbook on every job. Same Red Seal crew, same documentation, same magnetic nail sweep, same warranty in writing. Discipline turned into habit.',
  },
]

interface WhySureWestProps {
  eyebrow?: string
  heading?: React.ReactNode
  body?: string
  cityName?: string
  videoThumbnail?: string
  subheadMaxWidth?: string
}

export function WhySureWest({
  eyebrow = 'Why Sure West',
  heading = 'What Actually Sets Sure West Apart',
  body,
  cityName = 'Cochrane',
  videoThumbnail,
  subheadMaxWidth = '725px',
}: WhySureWestProps = {}) {
  const pillars = PILLARS
  const subhead =
    body ??
    `Every ${cityName} roofing contractor claims to be the best. Here's how we earn that on every roof.`

  return (
    <section
      id="why-sure-west"
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
      aria-labelledby="why-sure-west-heading"
    >
      {/* Paper-grain warm wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'radial-gradient(1200px 600px at 15% 20%, rgba(212,175,96,0.09), transparent 60%), radial-gradient(900px 500px at 85% 80%, rgba(26,22,18,0.04), transparent 60%)',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center max-w-[920px] mx-auto">
            <span
              className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] text-brand-gold"
              style={{
                background: '#F0EEE8',
                fontSize: '12px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              {eyebrow}
            </span>

            <h2
              id="why-sure-west-heading"
              className="font-display font-medium text-brand-navy mt-6 md:mt-7"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                lineHeight: 1.15,
                letterSpacing: '-0.005em',
              }}
            >
              {heading}
            </h2>

            <p
              className="mt-6 md:mt-7 text-brand-slate leading-[1.7]"
              style={{
                maxWidth: subheadMaxWidth,
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              {subhead}
            </p>
          </div>
        </Reveal>

        {/* Two-column split: editorial pillar panel left, video right */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* LEFT: 3 pillars, each animates in with a staggered delay */}
            <div className="flex flex-col">
              {pillars.map((p, i) => (
                <Reveal
                  key={p.num}
                  delay={150 + i * 140}
                  className="flex gap-5 md:gap-6 py-3 md:py-4"
                >
                  {/* Numeral column */}
                  <span
                    className="shrink-0 font-display text-brand-gold"
                    style={{
                      fontSize: 'clamp(36px, 3.5vw, 48px)',
                      fontWeight: 500,
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                      minWidth: '64px',
                    }}
                  >
                    {p.num}
                  </span>

                  {/* Title + body */}
                  <div className="flex-1">
                    <h3
                      className="font-display font-semibold text-brand-navy"
                      style={{
                        fontSize: 'clamp(20px, 1.8vw, 24px)',
                        lineHeight: 1.2,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="mt-2 text-brand-slate leading-[1.65]"
                      style={{
                        fontSize: '15px',
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* RIGHT: video */}
            <Reveal delay={300}>
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
                <FoundersVideo thumbnail={videoThumbnail} />
              </div>
            </Reveal>
          </div>
      </div>
    </section>
  )
}
