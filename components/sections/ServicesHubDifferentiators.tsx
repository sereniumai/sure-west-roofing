import type { ComponentType, ReactNode, SVGProps } from 'react'
import { Award, Users, Handshake, ShieldCheck, ListChecks } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export interface DifferentiatorItem {
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  heading: string
  subtitle: string
  body: string
}

interface Props {
  /** 5-card item list. Defaults to the canonical Services Hub copy. */
  items?: DifferentiatorItem[]
  eyebrow?: string
  heading?: ReactNode
  subhead?: string
  ctaLabel?: string
  ctaHref?: string
  /** Section background. Default cream. Pass white to invert. */
  sectionBg?: string
  /** Card background. Default white. Pass cream to invert. */
  cardBg?: string
}

const DEFAULT_ITEMS: DifferentiatorItem[] = [
  {
    Icon: Award,
    heading: 'Legacy',
    subtitle: 'The Reputation We Leave',
    body: 'Legacy is bigger than the roof. It is the reputation we leave in Cochrane, as roofers and as community builders. A company the community knows by name and is proud to call its own.',
  },
  {
    Icon: Users,
    heading: 'Brotherhood',
    subtitle: 'A Tight-Knit Crew',
    body: 'A team that has each other’s backs on the roof and off. Tight-knit, cohesive, aligned in purpose, because the work is too hard to do alongside people you cannot respect. In-house on every Cochrane roof.',
  },
  {
    Icon: Handshake,
    heading: 'Character',
    subtitle: 'Hired for Character',
    body: 'We hire for character first. Skills and knowledge can be taught, alignment of values cannot. If something unexpected comes up on the roof, you hear about it early and decide before any extra work happens.',
  },
  {
    Icon: ShieldCheck,
    heading: 'Competency',
    subtitle: 'Red Seal Journeyman Standard',
    body: 'Red Seal Journeyman is the highest trade credential in Canadian roofing. Our processes are built off that standard to keep quality consistent across every roof. New crew train to the same standard as they grow.',
  },
  {
    Icon: ListChecks,
    heading: 'Proven Processes',
    subtitle: 'Predictability in Roofing',
    body: 'Same checklists, same standard, same experience time after time. Predictability in roofing is rare. Our processes are how we deliver it on every roof, no matter who is on site.',
  },
]

export function ServicesHubDifferentiators({
  items = DEFAULT_ITEMS,
  eyebrow = 'Why Sure West',
  heading = (
    <>
      What Sets a Sure West
      <br className="hidden lg:block" /> Roof Apart
    </>
  ),
  subhead = "Five responsibilities we've taken on, five things every Sure West roof gets that the average Cochrane crew can't match.",
  ctaLabel = 'Get a Free Estimate',
  ctaHref = '/free-roof-estimate-cochrane',
  sectionBg = '#F7F5F0',
  cardBg = '#FFFFFF',
}: Props = {}) {
  const isCream = sectionBg.toUpperCase() === '#F7F5F0'
  const pillBg = isCream ? '#FFFFFF' : '#F7F5F0'
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
        {/* Header */}
        <Reveal>
        <div className="text-center mb-12 md:mb-16 max-w-[720px] mx-auto">
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{
              background: pillBg,
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
            {heading}
          </h2>
          <p
            className="mt-5 max-w-[560px] mx-auto text-brand-slate leading-[1.65]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            {subhead}
          </p>
        </div>
        </Reveal>

        {/* 3 + 2 grid: 6-col on lg, last 2 cards offset to center the bottom row */}
        <Reveal delay={150}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
          {items.map(({ Icon, heading: cardHeading, subtitle, body }, idx) => (
            <article
              key={cardHeading}
              className={`group relative rounded-[16px] p-6 md:p-7 overflow-hidden cursor-default transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-[0_22px_44px_-22px_rgba(212,175,96,0.45),0_10px_22px_-10px_rgba(44,71,102,0.18)] lg:col-span-2 ${
                idx === 3 ? 'lg:col-start-2' : ''
              }`}
              style={{
                background: cardBg,
                border: '1px solid #E5E2D9',
                boxShadow:
                  '0 1px 2px rgba(44,71,102,0.04), 0 8px 22px -10px rgba(44,71,102,0.10)',
              }}
            >
              {/* Top gold ribbon */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, rgba(212,175,96,0.85) 50%, transparent 100%)',
                  opacity: 0.55,
                }}
              />

              {/* Soft gold halo behind icon on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-6 md:left-7 top-5 md:top-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'radial-gradient(closest-side, rgba(212,175,96,0.32), transparent 70%)',
                  filter: 'blur(8px)',
                }}
              />

              {/* Icon tile */}
              <div
                className="relative inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-white mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-3deg]"
                style={{
                  boxShadow:
                    '0 1px 3px rgba(44,71,102,0.08), 0 10px 22px -10px rgba(212,175,96,0.45), 0 4px 10px -4px rgba(44,71,102,0.10)',
                  border: '1px solid rgba(212,175,96,0.20)',
                }}
              >
                <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.75} />
              </div>

              <h3
                className="relative font-display font-semibold text-brand-navy"
                style={{ fontSize: '22px', letterSpacing: '-0.01em', lineHeight: 1.2 }}
              >
                {cardHeading}
              </h3>

              <p
                className="relative mt-1 mb-3 text-brand-gold"
                style={{
                  fontSize: '13px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                }}
              >
                {subtitle}
              </p>

              <p
                className="relative text-brand-slate leading-[1.65]"
                style={{
                  fontSize: '14px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                {body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 md:mt-14 flex justify-center">
          <Button variant="primary" size="lg" href={ctaHref}>
            {ctaLabel}
          </Button>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
