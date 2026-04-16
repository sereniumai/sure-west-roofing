'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

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
    <div className="flex items-center gap-[3px]" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-[15px] h-[15px]"
          style={{
            color: i < count ? 'var(--color-accent, #D4AF60)' : 'rgba(0,0,0,0.12)',
            fill: i < count ? 'var(--color-accent, #D4AF60)' : 'transparent',
          }}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article
      className="flex-shrink-0 w-[360px] md:w-[400px] bg-white rounded-[--radius-md] border border-[--color-near-black]/8 p-7 md:p-8 relative"
      style={{
        boxShadow:
          '0 1px 2px rgba(26,22,18,0.04), 0 8px 24px -12px rgba(26,22,18,0.1)',
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
        className="mt-5 text-[--color-near-black]/80 leading-[1.65]"
        style={{
          fontSize: '14.5px',
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 400,
        }}
      >
        {review.quote}
      </p>

      <div className="mt-6 pt-5 border-t border-[--color-near-black]/8">
        <div
          className="font-display font-semibold text-[--color-near-black]"
          style={{ fontSize: '15px', letterSpacing: '-0.01em' }}
        >
          {review.author}
        </div>
        <div
          className="mt-0.5 text-[--color-near-black]/55"
          style={{
            fontSize: '12.5px',
            fontFamily: "'Inter', system-ui, sans-serif",
            letterSpacing: '0.02em',
          }}
        >
          {review.location}
        </div>
      </div>
    </article>
  )
}

export function Reviews() {
  // Duplicate the list so the marquee can scroll seamlessly
  const rowA = REVIEWS
  const rowB = [...REVIEWS].reverse()

  return (
    <section
      id="reviews"
      className="relative bg-white overflow-hidden"
      style={{
        paddingTop: 'var(--section-pad-top)',
        paddingBottom: 'var(--section-pad-bot)',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '1320px' }}>
      {/* Header */}
      <motion.div
        className="relative flex flex-col items-center text-center mb-12 md:mb-16 max-w-[920px] mx-auto"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        <span
          className="inline-flex items-center h-8 md:h-9 px-3 md:px-4 text-[13px] md:text-[14px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm] mb-6"
          style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--color-accent, #D4AF60)' }}
        >
          Client Reviews
        </span>
        <h2
          className="font-display font-semibold leading-[1.05] max-w-[960px] text-[--color-near-black]"
          style={{
            fontSize: 'clamp(30px, 3.8vw, 52px)',
            letterSpacing: '-0.04em',
          }}
        >
          What Cochrane and Calgary Homeowners
          <br className="hidden md:block" /> Say About Sure West Roofing
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
            className="text-[--color-near-black]/65"
            style={{
              fontSize: '14px',
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            88 Google reviews
          </span>
        </div>

        <p
          className="mt-5 max-w-[620px] text-[--color-near-black]/70 leading-[1.7]"
          style={{
            fontSize: '16px',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 400,
          }}
        >
          Here is what homeowners across Cochrane, Calgary and Canmore say.
        </p>
      </motion.div>

      {/* Two auto-looping marquee rows moving in opposite directions */}
      <div className="relative rounded-[--radius-md] overflow-hidden">
        {/* Edge fade masks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 z-10"
          style={{ background: 'linear-gradient(to right, #ffffff, rgba(255,255,255,0))' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 z-10"
          style={{ background: 'linear-gradient(to left, #ffffff, rgba(255,255,255,0))' }}
        />

        {/* Row A — scroll left */}
        <div className="marquee group" style={{ ['--duration' as string]: '64s' }}>
          <div className="marquee__track">
            {[...rowA, ...rowA].map((review, i) => (
              <ReviewCard key={`a-${i}`} review={review} />
            ))}
          </div>
        </div>

        {/* Row B — scroll right, slightly slower */}
        <div
          className="marquee group mt-5"
          style={{ ['--duration' as string]: '78s', ['--direction' as string]: 'reverse' }}
        >
          <div className="marquee__track">
            {[...rowB, ...rowB].map((review, i) => (
              <ReviewCard key={`b-${i}`} review={review} />
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Inline marquee styles */}
      <style jsx>{`
        .marquee {
          display: flex;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent 0,
            black 6%,
            black 94%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            black 6%,
            black 94%,
            transparent 100%
          );
        }
        .marquee__track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: marquee-scroll var(--duration, 60s) linear infinite;
          animation-direction: var(--direction, normal);
          will-change: transform;
          padding: 10px 10px; /* room for shadows */
        }
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 10px));
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee__track {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
