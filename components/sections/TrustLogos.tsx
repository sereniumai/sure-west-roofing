'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const logos = [
  {
    src: '/images/logos/AARA Roofing Association.webp',
    alt: 'AARA Roofing Association member - Sure West Roofing Cochrane',
  },
  {
    src: '/images/logos/BBB Accredited Business.webp',
    alt: 'BBB Accredited Business - Sure West Roofing Cochrane Alberta',
  },
  {
    src: '/images/logos/Canada Roofing Standards.webp',
    alt: 'Canada Roofing Standards certified - Sure West Roofing',
  },
  {
    src: '/images/logos/Certified Residential Contractor.webp',
    alt: 'Certified Residential Contractor - Sure West Roofing Cochrane',
  },
  {
    src: '/images/logos/Emerald Pro Contractor.webp',
    alt: 'Emerald Pro Contractor - Sure West Roofing Cochrane Alberta',
  },
  {
    src: '/images/logos/Interprovincial Roofing Standard.webp',
    alt: 'Interprovincial Roofing Standard - Sure West Roofing Red Seal certified',
  },
  {
    src: '/images/logos/Roofing Contractor Shingle Master.webp',
    alt: 'ShingleMaster certified roofing contractor - Sure West Roofing Cochrane',
  },
]

const EASE_OUT = [0.16, 1, 0.3, 1] as const

export function TrustLogos() {
  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
      aria-label="Certifications and industry accreditations"
    >
      {/* Paper-grain warm wash — same recipe used in the Hero and Portfolio.
          Anchors the logo row so it doesn't read as a floating island. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'radial-gradient(1100px 500px at 50% 30%, rgba(212,175,96,0.10), transparent 65%), radial-gradient(800px 400px at 80% 80%, rgba(26,22,18,0.04), transparent 60%)',
        }}
      />

      <div className="relative max-w-[1320px] mx-auto">
        {/* ── Header: eyebrow + one-line support ─────────────────────── */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <span
            className="inline-flex items-center h-8 md:h-9 px-3 md:px-4 text-[13px] md:text-[14px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm]"
            style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--color-near-black)' }}
          >
            Our Associations
          </span>

          <p
            className="mt-5 md:mt-6 max-w-[620px] text-[--color-near-black]/70 leading-[1.65]"
            style={{
              fontSize: '15px',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            Credentialed, accredited and accountable to every major
            roofing standard in Canada.
          </p>
        </motion.div>

        {/* ── Logo row, framed by editorial hairlines ──────────────── */}
        <motion.div
          className="relative mt-10 md:mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE_OUT }}
        >
          {/* Top hairline with a gold accent tick at centre */}
          <div className="relative">
            <div className="h-px w-full bg-[--color-near-black]/10" />
            <span
              aria-hidden="true"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 block w-6 h-[2px]"
              style={{ background: 'var(--color-accent, #D4AF60)' }}
            />
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-10 md:gap-x-14 py-10 md:py-14">
            {logos.map((logo) => (
              <li
                key={logo.src}
                className="flex items-center justify-center h-14 md:h-16 lg:h-20"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={260}
                  height={80}
                  className="h-full w-auto object-contain grayscale opacity-70 transition-all duration-500 ease-out hover:grayscale-0 hover:opacity-100 hover:-translate-y-0.5 hover:scale-[1.04]"
                />
              </li>
            ))}
          </ul>

          {/* Bottom hairline */}
          <div className="h-px w-full bg-[--color-near-black]/10" />
        </motion.div>
      </div>
    </section>
  )
}
