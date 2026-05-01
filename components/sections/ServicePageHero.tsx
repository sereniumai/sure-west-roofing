import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export interface ServicePageHeroProps {
  /** Last breadcrumb item, e.g. "Roof Replacement" */
  breadcrumbLabel: string
  /** Eyebrow above h1, e.g. "Cochrane's Trusted Roof Replacement Contractor" */
  eyebrow: string
  /** Headline. Use \n for an explicit line break inside the heading. */
  h1: string
  /** Body paragraph below h1. */
  body: string
  /** Three short caps strings shown under the CTAs. */
  trustItems: [string, string, string]
  image: {
    src: string
    alt: string
    /** Optional CSS object-position, e.g. "70% center" */
    objectPosition?: string
  }
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}

export function ServicePageHero({
  breadcrumbLabel,
  eyebrow,
  h1,
  body,
  trustItems,
  image,
  primaryCTA = { label: 'Get a Free Estimate', href: '/free-roof-estimate-cochrane' },
  secondaryCTA = { label: 'Call 403-990-7210', href: 'tel:4039907210' },
}: ServicePageHeroProps) {
  return (
    <section
      className="relative overflow-x-clip bg-brand-cream pt-36 md:pt-44 pb-16 md:pb-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT: text content (content-first on mobile too) */}
          <div className="order-1">
            <Reveal delay={80}>
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
                {eyebrow}
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
                {body}
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

            <Reveal delay={540}>
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
                <span>{trustItems[0]}</span>
                <span aria-hidden="true" className="hidden md:inline" style={{ color: '#D4AF60' }}>·</span>
                <span className="hidden md:inline">{trustItems[1]}</span>
                <span aria-hidden="true" style={{ color: '#D4AF60' }}>·</span>
                <span>{trustItems[2]}</span>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: image with floating review card */}
          <Reveal delay={250} noBlur className="relative mt-8 lg:mt-0 order-2">
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
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: image.objectPosition ?? 'center' }}
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(44,71,102,0.18) 0%, transparent 40%)',
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
