'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  photo: string
}

const TEAM: TeamMember[] = [
  { name: 'Mike',    role: 'Sure West Crew',            photo: '/images/Team/Mike - Sure West Roofing.jpg' },
  { name: 'Craig',   role: 'Owner, Red Seal Journeyman', photo: '/images/Team/Craig - Sure West Roofing.jpg' },
  { name: 'Mark',    role: 'Lead Installer',             photo: '/images/Team/Mark - Sure West Roofing.jpg' },
  { name: 'Kyle',    role: 'Installer',                  photo: '/images/Team/Kyle - Sure West Roofing.jpg' },
  { name: 'Jaron',   role: 'Installer',                  photo: '/images/Team/Jaron - Sure West Roofing.jpg' },
  { name: 'James D', role: 'Installer',                  photo: '/images/Team/James D - Sure West Roofing.jpg' },
  { name: 'James B', role: 'Installer',                  photo: '/images/Team/James B - Sure West Roofing.jpg' },
  { name: 'Adam',    role: 'Installer',                  photo: '/images/Team/Adam - Sure West Roofing.jpg' },
  { name: 'Carter',  role: 'Installer',                  photo: '/images/Team/Carter - Sure West Roofing.webp' },
  { name: 'Wyatt',   role: 'Installer',                  photo: '/images/Team/Wyatt - Sure West Roofing.jpg' },
]

export function TeamCarousel() {
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
    window.addEventListener('resize', updateArrows)
    return () => window.removeEventListener('resize', updateArrows)
  }, [])

  function scrollBy(dir: 1 | -1) {
    const t = trackRef.current
    if (!t) return
    const card = t.children[0] as HTMLElement | null
    const amount = (card?.offsetWidth ?? 280) + 20
    t.scrollBy({ left: dir * amount, behavior: 'smooth' })
    setTimeout(updateArrows, 350)
  }

  return (
    <section
      id="team"
      className="bg-brand-cream py-20 md:py-28"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-[680px]">
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
              The Team
            </span>
            <h2
              className="font-display font-semibold text-brand-navy"
              style={{
                fontSize: 'clamp(30px, 4vw, 46px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Meet the Sure West Crew
            </h2>
            <p
              className="mt-5 text-brand-slate leading-[1.65]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Every Sure West roof is installed by our in-house crew. No subcontractors, ever.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              aria-label="Previous team members"
              className="w-11 h-11 rounded-full border border-[#E5E2D9] bg-white flex items-center justify-center text-brand-navy hover:border-brand-gold hover:text-brand-gold transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[#E5E2D9] disabled:hover:text-brand-navy"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              aria-label="Next team members"
              className="w-11 h-11 rounded-full border border-[#E5E2D9] bg-white flex items-center justify-center text-brand-navy hover:border-brand-gold hover:text-brand-gold transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[#E5E2D9] disabled:hover:text-brand-navy"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={updateArrows}
          className="flex gap-5 overflow-x-auto scrollbar-hide -mx-[var(--section-pad-x)] px-[var(--section-pad-x)] pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="flex-shrink-0 w-[72%] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] xl:w-[calc(20%-16px)]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="group bg-white rounded-[14px] border border-[#E5E2D9] overflow-hidden shadow-sm hover:shadow-md hover:border-brand-gold/40 transition-all duration-300">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={`${member.name}, Sure West Roofing crew member in Cochrane, Alberta`}
                    fill
                    sizes="(max-width: 640px) 75vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, (max-width: 1280px) 24vw, 19vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3
                    className="font-display font-semibold text-brand-navy"
                    style={{ fontSize: '20px', letterSpacing: '-0.01em', lineHeight: 1.2 }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="uppercase tracking-[0.1em] text-brand-gold mt-2"
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
