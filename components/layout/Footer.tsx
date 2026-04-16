'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'

const services = [
  { label: 'Roof Replacement', href: '/services/roof-replacement/cochrane' },
  { label: 'Roof Repair', href: '/services/roof-repair/cochrane' },
  { label: 'Hail Damage Repair', href: '/services/hail-damage-repair/cochrane' },
  { label: 'Roof Maintenance', href: '/services/roof-maintenance/cochrane' },
  { label: 'Roof Inspection', href: '/services/roof-inspection/cochrane' },
  { label: 'Skylight Installation', href: '/services/skylight-installation/cochrane' },
]

const locations = [
  { label: 'Cochrane', href: '/' },
  { label: 'Calgary', href: '/roofing-contractor-calgary' },
  { label: 'Canmore', href: '/roofing-contractor-canmore' },
]

export function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden isolate">
      {/* Background image, desaturated to gray */}
      <Image
        src="/images/Cochrane Roofers Footer.avif"
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center pointer-events-none select-none"
        style={{ filter: 'grayscale(100%) contrast(0.95)', opacity: 0.18 }}
        aria-hidden="true"
      />
      {/* Soft white gradient overlay for legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.82) 55%, rgba(255,255,255,0.94) 100%)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10"
        style={{
          paddingLeft: 'var(--section-pad-x)',
          paddingRight: 'var(--section-pad-x)',
        }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: '1320px' }}
        >
          {/* Main 4-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pt-16 md:pt-20 pb-6 md:pb-8">
            {/* Column 1 — Brand */}
            <div className="md:col-span-4">
              <Link href="/" className="inline-block" aria-label="Sure West Roofing home">
                <img
                  src="/images/Sure West Dark.png"
                  alt="Sure West Roofing"
                  className="h-12 md:h-14 w-auto"
                />
              </Link>
              <p
                className="mt-6 text-[--color-near-black]/65 leading-[1.6] max-w-[320px]"
                style={{
                  fontSize: '14px',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontStyle: 'italic',
                }}
              >
                &ldquo;In every shingle laid, we&rsquo;re not just building roofs; we&rsquo;re elevating trust.&rdquo;
              </p>
            </div>

            {/* Column 2 — Services */}
            <div className="md:col-span-3">
              <h4
                className="font-display font-semibold text-[--color-near-black] mb-5"
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                }}
              >
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="group inline-flex items-center gap-1.5 text-[--color-near-black]/70 hover:text-[#B8943F] transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: "'Inter', system-ui, sans-serif",
                      }}
                    >
                      <span>{s.label}</span>
                      <span
                        aria-hidden="true"
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#B8943F]"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Locations */}
            <div className="md:col-span-2">
              <h4
                className="font-display font-semibold text-[--color-near-black] mb-5"
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                }}
              >
                Locations
              </h4>
              <ul className="flex flex-col gap-3">
                {locations.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 text-[--color-near-black]/70 hover:text-[#B8943F] transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: "'Inter', system-ui, sans-serif",
                      }}
                    >
                      <span>{l.label}</span>
                      <span
                        aria-hidden="true"
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#B8943F]"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact */}
            <div className="md:col-span-3">
              <h4
                className="font-display font-semibold text-[--color-near-black] mb-5"
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                }}
              >
                Contact
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="mailto:info@surewestroofing.ca"
                    className="group flex items-start gap-3 text-[--color-near-black]/75 hover:text-[#B8943F] transition-colors duration-200"
                  >
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full mt-[1px] transition-colors duration-200"
                      style={{ background: 'rgba(212,175,96,0.14)' }}
                    >
                      <Mail className="w-[13px] h-[13px] text-[#B8943F]" strokeWidth={1.9} />
                    </span>
                    <span
                      style={{
                        fontSize: '14px',
                        fontFamily: "'Inter', system-ui, sans-serif",
                      }}
                    >
                      info@surewestroofing.ca
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-[--color-near-black]/75">
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full mt-[1px]"
                    style={{ background: 'rgba(212,175,96,0.14)' }}
                  >
                    <MapPin className="w-[13px] h-[13px] text-[#B8943F]" strokeWidth={1.9} />
                  </span>
                  <address
                    className="not-italic leading-[1.55]"
                    style={{
                      fontSize: '14px',
                      fontFamily: "'Inter', system-ui, sans-serif",
                    }}
                  >
                    Unit 9 - 225 Railway St E
                    <br />
                    Cochrane AB T4C 2C3
                  </address>
                </li>
              </ul>
            </div>
          </div>

          {/* Giant static text */}
          <div className="pt-6 md:pt-8 pb-4 md:pb-6 text-center">
            <p
              className="font-display font-semibold select-none leading-[0.85] tracking-tighter"
              style={{
                fontSize: 'clamp(36px, 11vw, 180px)',
                color: 'transparent',
                WebkitTextStroke: '1.5px rgba(26,22,18,0.85)',
              }}
            >
              Move the Mountain
            </p>
          </div>

          {/* Bottom bar */}
          <div
            className="border-t border-[--color-near-black]/10 flex flex-col items-center gap-3 py-6 sm:flex-row sm:justify-between"
          >
            <p
              className="text-[--color-near-black]/55 text-center sm:text-left"
              style={{
                fontSize: '11.5px',
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              &copy; 2026 Sure West Roofing. All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <p
                className="text-[--color-near-black]/55"
                style={{
                  fontSize: '11.5px',
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
              >
                Cochrane, Alberta. Red Seal Certified.
              </p>
              <span className="h-3 w-px bg-[--color-near-black]/20 hidden sm:block" aria-hidden="true" />
              <Link href="/privacy" className="text-[--color-near-black]/45 hover:text-[--color-near-black]/75 transition-colors" style={{ fontSize: '11.5px', fontFamily: "'Inter', system-ui, sans-serif" }}>
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[--color-near-black]/45 hover:text-[--color-near-black]/75 transition-colors" style={{ fontSize: '11.5px', fontFamily: "'Inter', system-ui, sans-serif" }}>
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
