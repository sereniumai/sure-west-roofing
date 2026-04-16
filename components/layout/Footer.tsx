'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

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
    <footer className="bg-brand-cream">
      <div
        style={{
          paddingLeft: 'var(--section-pad-x)',
          paddingRight: 'var(--section-pad-x)',
        }}
      >
        <div className="mx-auto" style={{ maxWidth: '1320px' }}>
          {/* ── 4-column grid ───────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pt-16 md:pt-20 pb-8 md:pb-10">
            {/* Column 1 — Brand */}
            <div className="sm:col-span-2 lg:col-span-4">
              <Link href="/" className="inline-block" aria-label="Sure West Roofing home">
                <img
                  src="/images/Sure West Dark Logo.webp"
                  alt="Sure West Roofing"
                  className="h-12 md:h-14 w-auto"
                />
              </Link>
              <p
                className="mt-6 text-brand-slate leading-[1.6] max-w-[240px]"
                style={{
                  fontSize: '14px',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontStyle: 'italic',
                }}
              >
                In every shingle laid, we&rsquo;re not just building roofs,we&rsquo;re elevating trust.
              </p>
            </div>

            {/* Column 2 — Services */}
            <div className="lg:col-span-3">
              <h4
                className="text-brand-slate mb-5 uppercase tracking-[0.1em]"
                style={{
                  fontSize: '12px',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 500,
                }}
              >
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-brand-navy hover:text-brand-gold transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: "'Inter', system-ui, sans-serif",
                      }}
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Locations */}
            <div className="lg:col-span-2">
              <h4
                className="text-brand-slate mb-5 uppercase tracking-[0.1em]"
                style={{
                  fontSize: '12px',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 500,
                }}
              >
                Locations
              </h4>
              <ul className="flex flex-col gap-3">
                {locations.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-brand-navy hover:text-brand-gold transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: "'Inter', system-ui, sans-serif",
                      }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact */}
            <div className="lg:col-span-3">
              <h4
                className="text-brand-slate mb-5 uppercase tracking-[0.1em]"
                style={{
                  fontSize: '12px',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 500,
                }}
              >
                Contact
              </h4>
              <ul className="flex flex-col gap-4">
                {/* Phone */}
                <li>
                  <a
                    href="tel:+14039907210"
                    className="inline-flex items-center gap-3 text-brand-navy hover:text-brand-gold transition-colors duration-200"
                    style={{
                      fontSize: '14px',
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={1.75} />
                    (403) 990-7210
                  </a>
                </li>
                {/* Email */}
                <li>
                  <a
                    href="mailto:info@surewestroofing.ca"
                    className="inline-flex items-center gap-3 text-brand-navy hover:text-brand-gold transition-colors duration-200"
                    style={{
                      fontSize: '14px',
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" strokeWidth={1.75} />
                    info@surewestroofing.ca
                  </a>
                </li>
                {/* Address */}
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-slate" strokeWidth={1.75} />
                  <address
                    className="not-italic text-brand-slate leading-[1.55]"
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

          {/* ── Move the Mountain ────────────────────────────────────── */}
          <div className="pt-20 pb-10 text-center">
            <p
              className="font-display font-semibold select-none uppercase tracking-[0.05em]"
              style={{
                fontSize: 'clamp(56px, 10vw, 120px)',
                color: 'transparent',
                WebkitTextStroke: '2px #2C4766',
                lineHeight: 0.9,
              }}
            >
              Move the Mountain
            </p>
          </div>

          {/* ── Bottom copyright bar ─────────────────────────────────── */}
          <div className="border-t border-brand-border py-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <p
              className="text-brand-slate text-center sm:text-left"
              style={{ fontSize: '12px', fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              &copy; 2026 Sure West Roofing. All Rights Reserved.
            </p>
            <p
              className="text-brand-slate"
              style={{ fontSize: '12px', fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              Cochrane, Alberta. Red Seal Certified.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/privacy"
                className="text-brand-navy hover:text-brand-gold transition-colors"
                style={{ fontSize: '12px', fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                Privacy Policy
              </Link>
              <span className="text-brand-slate" aria-hidden="true">|</span>
              <Link
                href="/terms"
                className="text-brand-navy hover:text-brand-gold transition-colors"
                style={{ fontSize: '12px', fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
