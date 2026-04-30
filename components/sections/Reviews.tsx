'use client'

import { Star, Quote, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

interface Review {
  stars: number
  quote: string
  author: string
  location: string
}

const REVIEWS: Review[] = [
  {
    stars: 5,
    quote:
      'Sure West Roofing is a serious and professional company. They are 100% reliable. The crew\u2019s professionalism, courtesy, punctuality, and efficiency made a positive difference. We are very happy with the job they did and fully recommend them.',
    author: 'Elizabeth Montes Garces',
    location: 'Cochrane, AB',
  },
  {
    stars: 5,
    quote:
      'My roof had a major leak and they repaired the valley that was leaking and informed me the other two would fail soon as well. They gave me a fair price to repair all three and it has been over a year with no issues!',
    author: 'Norbert Stark',
    location: 'Cochrane, AB',
  },
  {
    stars: 5,
    quote:
      'Sure West did an outstanding job replacing my roof from start to finish. Professional, punctual, and incredibly thorough. The quality of their work is top-notch and they left my property spotless after the job was done.',
    author: 'Steve LeNeveu',
    location: 'Cochrane, AB',
  },
  {
    stars: 5,
    quote:
      'Sure West Roofing was efficient and professional from start to finish. Thorough, knowledgeable, and provided a transparent quote. I would highly recommend this company to anyone in Cochrane and the surrounding area.',
    author: 'Stacey Barefoot',
    location: 'Cochrane, AB',
  },
  {
    stars: 5,
    quote:
      'Found a serious roof leak a few days before heading on vacation. Sure West returned my call within an hour and came out almost immediately when 5 other companies declined or did not respond. Done right, done fast and at a good price.',
    author: 'Kelsey Davis',
    location: 'Cochrane, AB',
  },
  {
    stars: 5,
    quote:
      'Very professional and responsive team. From the time I called for a quote to when the last shingle was installed I was impressed by the quality of the team and the service provided. The site was left clean every day and the end product looks great.',
    author: 'Greg Barsi',
    location: 'Cochrane, AB',
  },
  {
    stars: 5,
    quote:
      'I sincerely recommend Sure West Roofing. The team were very professional and approachable. I was impressed by how well they worked together and how carefully they treated my property. The cleanup was thorough and meticulous.',
    author: 'Virginia Campana',
    location: 'Cochrane, AB',
  },
  {
    stars: 5,
    quote:
      'No pushy sales job, very professional. The site was well respected, left clean and appreciated a thorough cleanup job. No hesitation in recommending them.',
    author: 'Stephen Annand',
    location: 'Cochrane, AB',
  },
  {
    stars: 5,
    quote:
      'They came out fast, the quote was clear and included pictures, and they showed up right on time. The work was done well and they even shared photos of the finished job. No surprises with the price either.',
    author: 'Florian',
    location: 'Calgary Region',
  },
  {
    stars: 5,
    quote:
      'Communication with the company has been extraordinary. They cleaned up after themselves as they worked and by the end of the day there was no garbage left laying around. I would highly recommend this company.',
    author: 'Forest Dunsmore',
    location: 'Cochrane, AB',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-[3px]" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-[15px] h-[15px]"
          style={{
            color: i < count ? 'var(--color-accent, #D4AF60)' : '#5A7A9A',
            fill: i < count ? 'var(--color-accent, #D4AF60)' : 'transparent',
          }}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

function ReviewCard({ review, cardBg }: { review: Review; cardBg: string }) {
  return (
    <article
      className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px] rounded-[12px] border border-brand-border p-5 sm:p-6 md:p-8 relative"
      style={{
        background: cardBg,
        boxShadow:
          '0 1px 3px rgba(0,0,0,0.06)',
      }}
    >
      {/* Soft gold quote mark, top-right */}
      <Quote
        aria-hidden="true"
        className="absolute top-6 right-6 w-7 h-7 opacity-20"
        style={{ color: 'var(--color-accent, #D4AF60)' }}
        strokeWidth={1.5}
      />

      <Stars count={review.stars} />

      <p
        className="mt-5 text-brand-navy leading-[1.6]"
        style={{
          fontSize: '14px',
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontWeight: 400,
        }}
      >
        {review.quote}
      </p>

      <div className="mt-6 pt-5 border-t border-brand-border">
        <div
          className="text-brand-navy"
          style={{ fontSize: '14px', fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 600 }}
        >
          {review.author}
        </div>
        <div
          className="mt-0.5 text-brand-slate"
          style={{
            fontSize: '12px',
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}
        >
          {review.location}
        </div>
      </div>
    </article>
  )
}

interface ReviewsProps {
  sectionBg?: string
  cardBg?: string
  heading?: React.ReactNode
}

function hexToRgb(hex: string): string {
  const h = hex.replace('#', '')
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h
  const r = parseInt(full.slice(0, 2), 16)
  const g = parseInt(full.slice(2, 4), 16)
  const b = parseInt(full.slice(4, 6), 16)
  return `${r}, ${g}, ${b}`
}

export function Reviews({
  sectionBg = '#FFFFFF',
  cardBg = '#F7F5F0',
  heading = (
    <>
      What Cochrane Homeowners
      <br className="hidden md:block" /> Say About Sure West Roofing
    </>
  ),
}: ReviewsProps = {}) {
  // Duplicate the list so the marquee can scroll seamlessly
  const rowA = REVIEWS
  const rowB = [...REVIEWS].reverse()
  const fadeRgb = hexToRgb(sectionBg)

  return (
    <section
      id="reviews"
      className="relative overflow-hidden py-20 md:py-24"
      style={{
        background: sectionBg,
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '1320px' }}>
      {/* Header */}
      <Reveal>
      <div className="relative flex flex-col items-center text-center mb-12 md:mb-16 max-w-[920px] mx-auto">
        <span
          className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
          style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 600, lineHeight: 1 }}
        >
          Client Reviews
        </span>
        <h2
          className="font-display font-medium max-w-[960px] text-brand-navy"
          style={{
            fontSize: 'clamp(32px, 4.5vw, 48px)',
            lineHeight: 1.15,
            letterSpacing: '-0.005em',
          }}
        >
          {heading}
        </h2>

        {/* Rating summary */}
        <div className="mt-7 inline-flex items-center gap-3">
          <Stars count={5} />
          <span
            className="font-display font-semibold text-[--color-near-black]"
            style={{ fontSize: '15px', letterSpacing: '-0.01em' }}
          >
            5.0
          </span>
          <span
            aria-hidden="true"
            className="inline-block w-1 h-1 rounded-full bg-[--color-near-black]/30"
          />
          <span
            className="text-brand-slate"
            style={{
              fontSize: '14px',
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            80+ Google reviews
          </span>
        </div>

        <p
          className="mt-5 max-w-[620px] text-brand-slate leading-[1.7]"
          style={{
            fontSize: '16px',
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontWeight: 400,
          }}
        >
          Here is what homeowners across Cochrane, Calgary and Canmore say.
        </p>
      </div>
      </Reveal>

      {/* Mobile-only hint, informs users they can pause the scroll */}
      <p
        className="md:hidden text-center text-brand-slate uppercase tracking-[0.1em] mb-4"
        style={{
          fontSize: '11px',
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontWeight: 500,
        }}
      >
        Tap and hold to pause
      </p>

      {/* Two auto-looping marquee rows moving in opposite directions */}
      <Reveal delay={150} noBlur>
      <div className="relative rounded-[--radius-md] overflow-hidden">
        {/* Edge fade masks tinted to match section bg */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-12 md:w-24 z-10"
          style={{
            background: `linear-gradient(to right, rgba(${fadeRgb}, 1), rgba(${fadeRgb}, 0))`,
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-[60px] sm:w-[80px] md:w-[100px] z-[2]"
          style={{
            background: `linear-gradient(to right, rgba(${fadeRgb}, 0) 0%, rgba(${fadeRgb}, 1) 80%, rgba(${fadeRgb}, 1) 100%)`,
          }}
        />

        {/* Row A, scroll left */}
        <div className="marquee group" style={{ ['--duration' as string]: '64s' }}>
          <div className="marquee__track">
            {[...rowA, ...rowA].map((review, i) => (
              <ReviewCard key={`a-${i}`} review={review} cardBg={cardBg} />
            ))}
          </div>
        </div>

        {/* Row B, scroll right, slightly slower */}
        <div
          className="marquee group mt-5"
          style={{ ['--duration' as string]: '78s', ['--direction' as string]: 'reverse' }}
        >
          <div className="marquee__track">
            {[...rowB, ...rowB].map((review, i) => (
              <ReviewCard key={`b-${i}`} review={review} cardBg={cardBg} />
            ))}
          </div>
        </div>
      </div>
      </Reveal>
      </div>

    </section>
  )
}
