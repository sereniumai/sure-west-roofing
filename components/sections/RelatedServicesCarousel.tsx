'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Hammer,
  Wrench,
  CloudHail,
  ClipboardCheck,
  ScanSearch,
  Sun,
  Layers,
} from 'lucide-react'

const ALL_SERVICES = [
  {
    Icon: Hammer,
    title: 'Roof Replacement',
    href: '/roof-replacement',
    image: '/images/roof-replacement-cochrane.webp',
    imageAlt: 'Roof replacement in Cochrane Alberta by Sure West Roofing',
    description:
      'Full tear-off and re-roof using IKO shingles and premium underlayment built for Alberta climate. Most jobs finished in one to three days, property left clean.',
  },
  {
    Icon: Wrench,
    title: 'Roof Repair',
    href: '/roof-repair',
    image: '/images/roof-repairs-cochrane.webp',
    imageAlt: 'Roof repair in Cochrane Alberta by Sure West Roofing',
    description:
      'Missing shingles, active leaks, flashing failures, and ice dam damage. All fixed by Red Seal certified trades with a written warranty on every repair.',
  },
  {
    Icon: CloudHail,
    title: 'Hail Damage Repair',
    href: '/hail-damage-repair',
    image: '/images/hail-damage-repair.webp',
    imageAlt: 'Hail damage roof repair in Cochrane Alberta by Sure West Roofing',
    description:
      'Free post-storm assessment with full damage documentation, so you have what you need to file with your insurer. No out-of-pocket cost for the assessment.',
  },
  {
    Icon: ScanSearch,
    title: 'Roof Inspection',
    href: '/roof-inspection',
    image: '/images/roof-inspection-cochrane.webp',
    imageAlt: 'Roof inspection in Cochrane Alberta by Sure West Roofing',
    description:
      'Full inspection of shingles, flashing, vents, gutters, and attic. You get a written photo report so you know exactly where you stand.',
  },
  {
    Icon: ClipboardCheck,
    title: 'Roof Maintenance',
    href: '/roof-maintenance',
    image: '/images/roof-maintenance-cochrane.webp',
    imageAlt: 'Roof maintenance in Cochrane Alberta by Sure West Roofing',
    description:
      'Annual inspections, flashing checks, debris clearing, and minor repairs caught before they escalate. The lowest-cost way to protect your roof.',
  },
  {
    Icon: Layers,
    title: 'Siding & Soft Metals',
    href: '/siding-soft-metals',
    image: '/images/Cochrane Roofing Contractor Gallery 7.webp',
    imageAlt: 'Siding and soft metals project in Cochrane Alberta by Sure West Roofing',
    description:
      'Siding installation, eavestroughs, fascia, soffit, and metal flashing. Premium materials matched to Alberta weather, finished by the same Red Seal crew that does our roofs.',
  },
  {
    Icon: Sun,
    title: 'Skylight Installation',
    href: '/skylight-installation',
    image: '/images/skylight-installation-cochrane.webp',
    imageAlt: 'Skylight installation in Cochrane Alberta by Sure West Roofing',
    description:
      'New installs and replacements with proper flashing and waterproofing to manufacturer spec. Most skylight jobs are completed in a single day.',
  },
]

interface Props {
  /** href of the current page's service, excluded from the carousel */
  exclude?: string
}

export function RelatedServicesCarousel({ exclude }: Props) {
  const services = exclude ? ALL_SERVICES.filter((s) => s.href !== exclude) : ALL_SERVICES
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  function updateArrows() {
    const t = trackRef.current
    if (!t) return
    setCanPrev(t.scrollLeft > 1)
    setCanNext(t.scrollLeft < t.scrollWidth - t.clientWidth - 1)
  }

  useEffect(() => {
    updateArrows()
    // re-check on resize
    window.addEventListener('resize', updateArrows)
    return () => window.removeEventListener('resize', updateArrows)
  }, [])

  function scrollBy(dir: 1 | -1) {
    const t = trackRef.current
    if (!t) return
    const card = t.children[0] as HTMLElement | null
    const amount = (card?.offsetWidth ?? 300) + 20
    t.scrollBy({ left: dir * amount, behavior: 'smooth' })
    setTimeout(updateArrows, 350)
  }

  return (
    <div>
      {/* Card track */}
      <div
        ref={trackRef}
        onScroll={updateArrows}
        className="flex gap-5 overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {services.map(({ Icon, title, href, image, imageAlt, description }) => (
          <div
            key={title}
            className="flex-shrink-0 w-[88%] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.5px)]"
            style={{ scrollSnapAlign: 'start' }}
          >
            <Link
              href={href}
              className="group flex flex-col h-full rounded-[14px] bg-brand-cream border border-[#E5E2D9] overflow-hidden shadow-[0_2px_8px_rgba(44,71,102,0.06)] transition-all duration-500 ease-out hover:-translate-y-[6px] hover:border-brand-gold/60 hover:shadow-[0_22px_44px_-22px_rgba(212,175,96,0.45),0_10px_22px_-10px_rgba(44,71,102,0.18)]"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden flex-shrink-0">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 md:p-7">
                <div className="flex items-center gap-3 mb-3">
                  <Icon
                    className="w-[18px] h-[18px] flex-shrink-0 text-brand-gold transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[-6deg]"
                    strokeWidth={1.75}
                  />
                  <h3
                    className="font-display font-semibold text-brand-navy leading-[1.25] flex-1 transition-colors duration-300 group-hover:text-brand-gold"
                    style={{ fontSize: '22px', letterSpacing: '-0.02em' }}
                  >
                    {title}
                  </h3>
                </div>

                <p
                  className="text-brand-slate leading-[1.6] flex-1"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {description}
                </p>

                <div className="mt-3">
                  <span
                    className="inline-flex items-center gap-1.5 font-semibold text-brand-gold transition-colors duration-200 group-hover:text-[#B8943F]"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    }}
                  >
                    {title}
                    <ArrowRight
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={2}
                    />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex items-center gap-3 mt-8">
        <button
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
          aria-label="Previous services"
          className={[
            'flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200',
            canPrev
              ? 'bg-brand-gold text-brand-navy hover:bg-[#B8943F] hover:text-white shadow-md hover:shadow-lg'
              : 'bg-brand-border/40 text-brand-border/60 cursor-not-allowed',
          ].join(' ')}
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2} />
        </button>
        <button
          onClick={() => scrollBy(1)}
          disabled={!canNext}
          aria-label="Next services"
          className={[
            'flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200',
            canNext
              ? 'bg-brand-gold text-brand-navy hover:bg-[#B8943F] hover:text-white shadow-md hover:shadow-lg'
              : 'bg-brand-border/40 text-brand-border/60 cursor-not-allowed',
          ].join(' ')}
        >
          <ChevronRight className="w-5 h-5" strokeWidth={2} />
        </button>
        {canNext && (
          <span
            className="ml-2 text-brand-slate"
            style={{
              fontSize: '13px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 500,
            }}
          >
            Scroll to see more services
          </span>
        )}
      </div>
    </div>
  )
}
