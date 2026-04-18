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
} from 'lucide-react'

const ALL_SERVICES = [
  {
    Icon: Hammer,
    title: 'Roof Replacement',
    href: '/roof-replacement',
    image: '/images/Roof Replacement Cochrane.avif',
    imageAlt: 'Roof replacement in Cochrane Alberta by Sure West Roofing',
    description:
      'Full tear-off and re-roof using IKO shingles and premium underlayment built for Alberta climate. Most jobs finished in one to three days, property left clean.',
  },
  {
    Icon: Wrench,
    title: 'Roof Repair',
    href: '/roof-repair',
    image: '/images/Roof Repair Cochrane.avif',
    imageAlt: 'Roof repair in Cochrane Alberta by Sure West Roofing',
    description:
      'Missing shingles, active leaks, flashing failures, and ice dam damage — fixed by Red Seal certified trades with a written warranty on every repair.',
  },
  {
    Icon: CloudHail,
    title: 'Hail Damage Repair',
    href: '/hail-damage-repair',
    image: '/images/Roof Repair Cochrane.avif',
    imageAlt: 'Hail damage roof repair in Cochrane Alberta by Sure West Roofing',
    description:
      'Free post-storm assessment, full damage documentation, and end-to-end insurance claim support. No out-of-pocket cost for the assessment.',
  },
  {
    Icon: ClipboardCheck,
    title: 'Roof Maintenance',
    href: '/roof-maintenance',
    image: '/images/Roof Replacement Cochrane.avif',
    imageAlt: 'Roof maintenance in Cochrane Alberta by Sure West Roofing',
    description:
      'Annual inspections, flashing checks, debris clearing, and minor repairs caught before they escalate. The lowest-cost way to protect your roof.',
  },
  {
    Icon: ScanSearch,
    title: 'Roof Inspection',
    href: '/roof-inspection',
    image: '/images/Roof Inspection Cochrane.avif',
    imageAlt: 'Roof inspection in Cochrane Alberta by Sure West Roofing',
    description:
      'Full inspection of shingles, flashing, vents, gutters, and attic. You get a written photo report so you know exactly where you stand.',
  },
  {
    Icon: Sun,
    title: 'Skylight Installation',
    href: '/skylight-installation',
    image: '/images/Roof Installation Cochrane.avif',
    imageAlt: 'Skylight installation in Cochrane Alberta by Sure West Roofing',
    description:
      'New installs and replacements with proper flashing and waterproofing to manufacturer spec. Most skylight jobs are completed in a single day.',
  },
]

interface Props {
  /** href of the current page's service — excluded from the carousel */
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
            <div className="flex flex-col h-full rounded-[12px] bg-white border border-brand-border overflow-hidden shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[6px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out">
              {/* Image */}
              <div className="relative h-[180px] sm:h-[200px] overflow-hidden flex-shrink-0">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon
                    className="w-[18px] h-[18px] flex-shrink-0 text-brand-gold"
                    strokeWidth={1.5}
                  />
                  <h3
                    className="font-display font-semibold text-brand-navy leading-[1.25] flex-1"
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

                <div className="mt-4 pt-4 border-t border-brand-border">
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 font-semibold text-brand-gold hover:text-[#B8943F] transition-colors duration-200"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      textDecoration: 'none',
                    }}
                  >
                    {title}
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>
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
