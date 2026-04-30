'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, MessageSquare, ClipboardList } from 'lucide-react'

const services = [
  { label: 'Roof Replacement', href: '/roof-replacement' },
  { label: 'Roof Repair', href: '/roof-repair' },
  { label: 'Hail Damage Repair', href: '/hail-damage-repair' },
  { label: 'Roof Maintenance', href: '/roof-maintenance' },
  { label: 'Roof Inspection', href: '/roof-inspection' },
  { label: 'Siding & Soft Metals', href: '/siding-soft-metals' },
  { label: 'Skylight Installation', href: '/skylight-installation' },
]

const locations = [
  { label: 'Cochrane', href: '/' },
  { label: 'Calgary', href: '/calgary-roofing-contractor' },
  { label: 'Canmore', href: '/canmore-roofing-contractor' },
]

const company = [
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
]

export function Footer() {
  return (
    <footer className="bg-white">
      <div
        style={{
          paddingLeft: 'var(--section-pad-x)',
          paddingRight: 'var(--section-pad-x)',
        }}
      >
        <div className="mx-auto" style={{ maxWidth: '1320px' }}>
          {/* ── 5-column grid ───────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-12 pt-16 md:pt-20 pb-8 md:pb-10">
            {/* Column 1, Brand */}
            <div className="col-span-2 lg:col-span-3">
              <Link href="/" className="inline-block" aria-label="Sure West Roofing home">
                <Image
                  src="/images/Sure West Dark Logo.webp"
                  alt="Sure West Roofing"
                  width={200}
                  height={72}
                  className="h-14 md:h-18 w-auto"
                />
              </Link>
              <p
                className="mt-6 text-brand-slate leading-[1.6] max-w-[280px]"
                style={{
                  fontSize: '16px',
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontStyle: 'italic',
                }}
              >
                In every shingle laid, we&rsquo;re not just building roofs, we&rsquo;re elevating trust.
              </p>
            </div>

            {/* Column 2, Services */}
            <div className="col-span-1 lg:col-span-3">
              <h3
                className="text-brand-slate mb-5 uppercase tracking-[0.1em]"
                style={{
                  fontSize: '12px',
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontWeight: 500,
                }}
              >
                Services
              </h3>
              <ul className="flex flex-col gap-3">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-brand-navy hover:text-brand-gold transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                      }}
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3, Locations */}
            <div className="col-span-1 lg:col-span-2">
              <h3
                className="text-brand-slate mb-5 uppercase tracking-[0.1em]"
                style={{
                  fontSize: '12px',
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontWeight: 500,
                }}
              >
                Locations
              </h3>
              <ul className="flex flex-col gap-3">
                {locations.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-brand-navy hover:text-brand-gold transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                      }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4, Company */}
            <div className="col-span-1 lg:col-span-2">
              <h3
                className="text-brand-slate mb-5 uppercase tracking-[0.1em]"
                style={{
                  fontSize: '12px',
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontWeight: 500,
                }}
              >
                Company
              </h3>
              <ul className="flex flex-col gap-3">
                {company.map((c) => (
                  <li key={c.label}>
                    <Link
                      href={c.href}
                      className="text-brand-navy hover:text-brand-gold transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                      }}
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5, Contact */}
            <div className="col-span-2 lg:col-span-2">
              <h3
                className="text-brand-slate mb-5 uppercase tracking-[0.1em]"
                style={{
                  fontSize: '12px',
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontWeight: 500,
                }}
              >
                Contact
              </h3>
              <ul className="flex flex-col gap-4">
                {/* Phone */}
                <li>
                  <a
                    href="tel:+14039907210"
                    className="inline-flex items-center gap-3 text-brand-navy hover:text-brand-gold transition-colors duration-200"
                    style={{
                      fontSize: '14px',
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={1.75} />
                    (403) 990-7210
                  </a>
                </li>
                {/* Contact */}
                <li>
                  <Link
                    href="/free-roof-estimate-cochrane"
                    className="inline-flex items-center gap-3 text-brand-navy hover:text-brand-gold transition-colors duration-200"
                    style={{
                      fontSize: '14px',
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    <MessageSquare className="w-4 h-4 flex-shrink-0" strokeWidth={1.75} />
                    Contact
                  </Link>
                </li>
                {/* Free Estimate */}
                <li>
                  <Link
                    href="/free-roof-estimate-cochrane"
                    className="inline-flex items-center gap-3 text-brand-navy hover:text-brand-gold transition-colors duration-200"
                    style={{
                      fontSize: '14px',
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    <ClipboardList className="w-4 h-4 flex-shrink-0" strokeWidth={1.75} />
                    Free Estimate
                  </Link>
                </li>
                {/* Address */}
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-slate" strokeWidth={1.75} />
                  <address
                    className="not-italic text-brand-slate leading-[1.55]"
                    style={{
                      fontSize: '14px',
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
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

          {/* ── Bottom copyright bar ─────────────────────────────────── */}
          <div className="border-t border-brand-border py-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <p
              className="text-brand-slate text-center sm:text-left"
              style={{ fontSize: '12px', fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              &copy; 2026 Sure West Roofing. All Rights Reserved.
            </p>
            <p
              className="text-brand-slate"
              style={{ fontSize: '12px', fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Cochrane, Alberta. Red Seal Certified.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/privacy"
                className="text-brand-navy hover:text-brand-gold transition-colors"
                style={{ fontSize: '12px', fontFamily: "var(--font-inter), system-ui, sans-serif" }}
              >
                Privacy Policy
              </Link>
              <span className="text-brand-slate" aria-hidden="true">|</span>
              <Link
                href="/terms"
                className="text-brand-navy hover:text-brand-gold transition-colors"
                style={{ fontSize: '12px', fontFamily: "var(--font-inter), system-ui, sans-serif" }}
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
