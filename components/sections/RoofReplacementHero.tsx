import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function RoofReplacementHero() {
  return (
    <section
      className="relative bg-brand-cream pt-28 md:pt-36 pb-16 md:pb-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol
            className="flex items-center gap-2"
            style={{
              fontSize: '13px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              color: 'var(--brand-slate, #4D6A87)',
            }}
          >
            <li>
              <Link href="/" className="hover:text-brand-gold transition-colors duration-200">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-brand-border select-none">/</li>
            <li>
              <Link href="/services" className="hover:text-brand-gold transition-colors duration-200">
                Services
              </Link>
            </li>
            <li aria-hidden="true" className="text-brand-border select-none">/</li>
            <li className="text-brand-navy font-medium" aria-current="page">
              Roof Replacement
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: text content */}
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
              Cochrane&apos;s Most Trusted Roof Replacement Contractor
            </span>

            <h1
              className="font-display font-semibold text-brand-navy"
              style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.08, letterSpacing: '-0.03em' }}
            >
              Roof Replacement in
              <br />
              Cochrane, Alberta
            </h1>

            <p
              className="mt-5 text-brand-slate leading-[1.65] max-w-[480px]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Red Seal certified roofers for Cochrane, Calgary, and Canmore. Fixed written
              quotes, real warranties, no subcontractors. We pride ourselves on getting back to
              you quickly.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
                Get a Free Estimate
              </Button>
              <Button variant="outline" size="lg" href="tel:4039907210">
                Call 403-990-7210
              </Button>
            </div>

            {/* Trust strip */}
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
              <span aria-hidden="true" style={{ color: '#D4AF60' }}>·</span>
              <span>10-Year Workmanship Warranty</span>
              <span aria-hidden="true" style={{ color: '#D4AF60' }}>·</span>
              <span>IKO Certified</span>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="relative mt-8 lg:mt-0">
            {/* Offset gold frame */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[22px]"
              style={{
                border: '1px solid rgba(212,175,96,0.4)',
                transform: 'translate(10px, 12px)',
                zIndex: -1,
              }}
            />

            {/* Main image */}
            <div
              className="relative overflow-hidden rounded-[18px]"
              style={{
                boxShadow:
                  '0 2px 4px rgba(44,71,102,0.06), 0 12px 40px -8px rgba(44,71,102,0.18), 0 40px 100px -20px rgba(44,71,102,0.22)',
              }}
            >
              <div className="relative" style={{ height: '440px' }}>
                <Image
                  src="/images/Cochrane Roofing Contractor Gallery 3.webp"
                  alt="Completed IKO shingle roof replacement by Sure West Roofing in Cochrane Alberta"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />

                {/* Subtle bottom fade */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(44,71,102,0.28) 0%, transparent 40%)',
                  }}
                />

              </div>
            </div>

            {/* Stat strip below image */}
            <div
              className="mt-7 flex items-center justify-around"
              style={{ paddingRight: '8px' }}
            >
              {[
                { value: '250+', label: 'Roofs Completed' },
                { value: '5.0 ★', label: 'Google Rating' },
                { value: '10 yr', label: 'Workmanship Warranty' },
              ].map(({ value, label }, i) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <span
                    className="font-display font-semibold text-brand-gold"
                    style={{ fontSize: '22px', letterSpacing: '-0.02em', lineHeight: 1 }}
                  >
                    {value}
                  </span>
                  <span
                    className="mt-1 text-brand-slate"
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
