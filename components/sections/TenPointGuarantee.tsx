import { Reveal } from '@/components/ui/Reveal'

interface Point {
  number: string
  heading: string
  body: string
}

const POINTS: Point[] = [
  {
    number: '01',
    heading: 'We knock before we start',
    body: 'No surprises. You know when we arrive, and you know who is on your property.',
  },
  {
    number: '02',
    heading: 'We respect your neighbours',
    body: 'Immediate neighbours get our contact info, so any concerns come straight to us.',
  },
  {
    number: '03',
    heading: 'In-person assessments',
    body: 'Every project evaluated on-site. No satellite shortcuts, no missed details that matter.',
  },
  {
    number: '04',
    heading: 'Estimates within 2 days',
    body: 'Your time is valuable. Accurate written estimates back within two business days.',
  },
  {
    number: '05',
    heading: 'Stellar communication',
    body: 'Notified before every site activity. Material drop, bin delivery, roof labour. No guessing.',
  },
  {
    number: '06',
    heading: 'Licensed, bonded, insured',
    body: 'Full credentials and coverage that protect you. Safety and accountability are non-negotiable.',
  },
  {
    number: '07',
    heading: 'Respect for your home',
    body: 'Your home is left in the same or better condition than when we arrived.',
  },
  {
    number: '08',
    heading: 'Weather-aware scheduling',
    body: 'We do not gamble with your roof. If weather threatens it, we pause and secure the site.',
  },
  {
    number: '09',
    heading: 'Workmanship warranty',
    body: 'Workmanship guarantee in writing on every roof, separate from manufacturer warranty.',
  },
  {
    number: '10',
    heading: 'Final walkthrough',
    body: "We don't leave until you've seen the finished work and confirmed it meets your expectations.",
  },
]

export function TenPointGuarantee() {
  return (
    <section
      id="ten-point-guarantee"
      className="relative bg-white py-20 md:py-28 overflow-hidden"
      style={{
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      {/* Paper-grain warm wash, matches WhySureWest section */}
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
          <div className="text-center max-w-[820px] mx-auto mb-12 md:mb-14">
            <span
              className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{
                background: '#F7F5F0',
                fontSize: '12px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              Our Promise
            </span>
            <h2
              className="font-display font-medium text-brand-navy"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1.1,
                letterSpacing: '-0.015em',
              }}
            >
              Our 10-Point Guarantee
            </h2>
            <p
              className="mt-6 max-w-[560px] mx-auto text-brand-slate leading-[1.7]"
              style={{
                fontSize: '17px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              These guarantees define what it means to work with Sure West Roofing. They are the standard you can hold us to.
            </p>
          </div>
        </Reveal>

        {/* Split: portrait video on the LEFT, card grid on the RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-start">
          {/* LEFT - Portrait hero video (sticky on desktop so it stays in view while scrolling cards) */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="relative lg:sticky lg:top-24">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-8 -inset-y-6 -z-10"
                style={{
                  background:
                    'radial-gradient(500px 280px at 50% 50%, rgba(212,175,96,0.22), transparent 70%)',
                  filter: 'blur(6px)',
                }}
              />
              <div
                className="relative mx-auto aspect-[9/16] w-full max-w-[400px] lg:max-w-[436px] overflow-hidden rounded-[20px] bg-brand-navy"
                style={{
                  boxShadow:
                    '0 4px 8px rgba(44,71,102,0.10), 0 20px 50px -12px rgba(44,71,102,0.28), 0 50px 120px -24px rgba(44,71,102,0.32)',
                  border: '1px solid rgba(212,175,96,0.40)',
                }}
              >
                <video
                  src="/Sure West Roofing - 10 Point Guarantee.mp4"
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label="Sure West Roofing 10-Point Guarantee video"
                />
              </div>
            </div>
          </Reveal>

          {/* RIGHT - 10-point premium card grid (2 cols on md+, 1 col on mobile) */}
          <Reveal delay={180} className="lg:col-span-7">
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {POINTS.map((point) => (
                <li
                  key={point.number}
                  className="group relative bg-brand-cream rounded-[14px] border border-[#E5E2D9] p-5 md:p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-gold/55 hover:shadow-[0_24px_44px_-22px_rgba(212,175,96,0.50),0_10px_22px_-10px_rgba(44,71,102,0.18)]"
                >
                  {/* Top gold ribbon, subtle resting state */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] rounded-t-[14px]"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent 0%, rgba(212,175,96,0.85) 50%, transparent 100%)',
                      opacity: 0.45,
                    }}
                  />

                  <div className="flex items-start gap-4">
                    {/* Big gold numbered badge */}
                    <span
                      className="flex-shrink-0 inline-flex items-center justify-center font-display font-bold text-brand-gold transition-transform duration-500 group-hover:scale-[1.06]"
                      style={{
                        fontSize: 'clamp(24px, 2.2vw, 32px)',
                        lineHeight: 0.9,
                        letterSpacing: '-0.03em',
                        minWidth: '38px',
                      }}
                    >
                      {point.number}
                    </span>

                    <div className="flex-1 min-w-0">
                      <h3
                        className="font-display font-semibold text-brand-navy"
                        style={{
                          fontSize: 'clamp(16px, 1.4vw, 18px)',
                          lineHeight: 1.25,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {point.heading}
                      </h3>
                      <p
                        className="mt-2 text-brand-slate leading-[1.55]"
                        style={{
                          fontSize: '13.5px',
                          fontFamily: 'var(--font-inter), system-ui, sans-serif',
                          fontWeight: 400,
                        }}
                      >
                        {point.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
