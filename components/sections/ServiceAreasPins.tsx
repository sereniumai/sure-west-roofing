import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

/**
 * Canonical 3-city block used in every Service Areas section site-wide.
 * Description + linkText + href are identical across pages, by design.
 * Source of truth.
 */
const AREAS = [
  {
    name: 'Cochrane',
    description: 'Sunset Ridge to Heritage Hills, every neighbourhood we know by heart.',
    href: '/',
    linkText: 'Cochrane Roofing Contractor',
  },
  {
    name: 'Calgary',
    description: 'Calgary-wide, every job handled by the same in-house Red Seal crew.',
    href: '/calgary-roofing-contractor',
    linkText: 'Calgary Roofing Contractor',
  },
  {
    name: 'Canmore',
    description: 'Built for mountain weather, heavy snow loads, and Chinook winds.',
    href: '/canmore-roofing-contractor',
    linkText: 'Canmore Roofing Contractor',
  },
] as const

interface ServiceAreasPinsProps {
  /** Eyebrow text above heading. Defaults to "Service Areas". */
  eyebrow?: string
  /** Heading. Use \n for an explicit line break. Page-specific. */
  heading: string
  /** Optional sub-heading paragraph. Page-specific. */
  subhead?: string
  /** Section background. Defaults to white. */
  sectionBg?: string
}

export function ServiceAreasPins({
  eyebrow = 'Service Areas',
  heading,
  subhead,
  sectionBg = '#FFFFFF',
}: ServiceAreasPinsProps) {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-24"
      style={{
        background: sectionBg,
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
          <div className="text-center mb-12 md:mb-16 max-w-[720px] mx-auto">
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
              {eyebrow}
            </span>
            <h2
              className="font-display font-medium text-brand-navy"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                lineHeight: 1.15,
                letterSpacing: '-0.005em',
              }}
            >
              {heading.split('\n').map((line, i) => (
                <span key={i}>
                  {i > 0 && <br className="hidden lg:block" />}
                  {line}
                </span>
              ))}
            </h2>
            {subhead && (
              <p
                className="mt-5 max-w-[580px] mx-auto text-brand-slate leading-[1.7]"
                style={{
                  fontSize: '16px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                {subhead}
              </p>
            )}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-[1100px] mx-auto relative">
            {/* Dashed gold connector across pin centres on desktop */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute z-0 border-t-2 border-dashed border-brand-gold/30"
              style={{ top: '52px', left: '20%', right: '20%' }}
            />

            {AREAS.map((area) => (
              <div
                key={area.name}
                className="group relative z-[1] flex flex-col items-center text-center"
              >
                {/* Multi-layer pin */}
                <div className="relative mb-6 w-[104px] h-[104px] flex items-center justify-center">
                  {/* Soft outer halo */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full transition-opacity duration-500 group-hover:opacity-100 opacity-70"
                    style={{
                      background:
                        'radial-gradient(closest-side, rgba(212,175,96,0.22), transparent 70%)',
                      filter: 'blur(6px)',
                    }}
                  />
                  {/* Outer ring */}
                  <span
                    aria-hidden="true"
                    className="absolute w-[96px] h-[96px] rounded-full"
                    style={{
                      background: 'rgba(212,175,96,0.05)',
                      border: '1px solid rgba(212,175,96,0.20)',
                    }}
                  />
                  {/* Mid ring */}
                  <span
                    aria-hidden="true"
                    className="absolute w-[78px] h-[78px] rounded-full"
                    style={{
                      background: 'rgba(212,175,96,0.10)',
                      border: '1px solid rgba(212,175,96,0.32)',
                    }}
                  />
                  {/* Inner pin */}
                  <span
                    className="relative w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-[1.08] group-hover:shadow-[0_14px_30px_-10px_rgba(212,175,96,0.55)]"
                    style={{
                      boxShadow: '0 6px 18px -8px rgba(212,175,96,0.40)',
                    }}
                  >
                    <MapPin className="w-7 h-7 text-brand-gold" strokeWidth={1.75} />
                  </span>
                </div>

                <h3
                  className="font-display font-semibold text-brand-navy mb-3 transition-colors duration-300 group-hover:text-brand-gold"
                  style={{ fontSize: '28px', letterSpacing: '-0.015em', lineHeight: 1.15 }}
                >
                  {area.name}
                </h3>

                <p
                  className="text-brand-slate leading-[1.65] mb-5 max-w-[280px]"
                  style={{
                    fontSize: '14.5px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {area.description}
                </p>

                <Link
                  href={area.href}
                  className="inline-flex items-center gap-1.5 font-semibold text-brand-gold hover:text-[#B8943F] transition-colors duration-200"
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    letterSpacing: '0.02em',
                  }}
                >
                  {area.linkText}
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
