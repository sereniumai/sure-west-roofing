'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, MessageSquare, ClipboardList, Instagram, Play, ArrowUpRight } from 'lucide-react'

const INSTAGRAM_URL = 'https://www.instagram.com/surewestroofing/'

// TODO: Swap this static grid for a live Instagram Graph API feed once Meta Business
// Manager access is granted and the long-lived access token is generated. Filter
// `media_product_type === 'REELS'` server-side to show only reels.
const INSTAGRAM_TILES = [
  '/images/Cochrane Roofing Contractor Gallery 1.webp',
  '/images/Cochrane Roofing Contractor Gallery 5.webp',
  '/images/Cochrane Roofing Contractor Gallery 7.webp',
  '/images/Cochrane Roofing Contractor Gallery 13.webp',
  '/images/Cochrane Roofing Contractor Gallery 16.webp',
  '/images/Cochrane Roofing Contractor Gallery 22.webp',
]

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
          {/* ── Instagram section ──────────────────────────────────── */}
          <div className="pt-12 md:pt-14 pb-10 md:pb-12 border-b border-brand-border">
            {/* Inline header — matches footer column heading style */}
            <div className="flex items-end justify-between flex-wrap gap-3 mb-5">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-[7px]"
                  style={{ background: 'rgba(212,175,96,0.12)' }}
                >
                  <Instagram className="w-3.5 h-3.5 text-brand-gold" strokeWidth={2} />
                </span>
                <span
                  className="text-brand-slate uppercase tracking-[0.1em]"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 500,
                  }}
                >
                  Follow Us
                </span>
                <span aria-hidden="true" className="text-brand-border">·</span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-navy hover:text-brand-gold transition-colors duration-200"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  @surewestroofing
                </a>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-brand-gold hover:text-[#B8943F] transition-colors duration-200"
                style={{
                  fontSize: '13px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 600,
                }}
              >
                View profile
                <ArrowUpRight
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </a>
            </div>

            {/* Reel tiles, portrait 9:16 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
              {INSTAGRAM_TILES.map((src, i) => (
                <a
                  key={src}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch Sure West Roofing reel ${i + 1} on Instagram`}
                  className="group relative block overflow-hidden rounded-[10px] aspect-square"
                  style={{
                    boxShadow:
                      '0 1px 2px rgba(44,71,102,0.04), 0 12px 28px -10px rgba(44,71,102,0.18)',
                  }}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    loading="lazy"
                  />

                  {/* Subtle gold inner border */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[inherit]"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(212,175,96,0.22)' }}
                  />

                  {/* Bottom gradient for legibility of reel indicator */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)',
                    }}
                  />

                  {/* Reel play badge, bottom-left */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 left-2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/95 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
                    style={{
                      boxShadow:
                        '0 2px 6px rgba(0,0,0,0.18), 0 0 0 1px rgba(212,175,96,0.30)',
                    }}
                  >
                    <Play className="w-3 h-3 text-brand-navy fill-brand-navy ml-0.5" strokeWidth={1.5} />
                  </span>

                  {/* Hover overlay with Instagram icon, top-right */}
                  <span
                    aria-hidden="true"
                    className="absolute top-2 right-2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow:
                        '0 2px 6px rgba(0,0,0,0.18), 0 0 0 1px rgba(212,175,96,0.30)',
                    }}
                  >
                    <Instagram className="w-3.5 h-3.5 text-brand-navy" strokeWidth={1.75} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ── 4-column grid ───────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-12 pt-16 md:pt-20 pb-8 md:pb-10">
            {/* Column 1, Brand */}
            <div className="col-span-2 lg:col-span-4">
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
                className="mt-6 text-brand-slate leading-[1.6] max-w-[320px]"
                style={{
                  fontSize: '18px',
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontStyle: 'italic',
                }}
              >
                In every shingle laid, we&rsquo;re not just building roofs, we&rsquo;re elevating trust.
              </p>
            </div>

            {/* Column 2, Services */}
            <div className="col-span-1 lg:col-span-3">
              <Link
                href="/services"
                className="block text-brand-slate mb-5 uppercase tracking-[0.1em]"
                style={{
                  fontSize: '12px',
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontWeight: 500,
                }}
              >
                Services
              </Link>
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

            {/* Column 3, Locations + Company stacked */}
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

              <h3
                className="text-brand-slate mt-8 mb-5 uppercase tracking-[0.1em]"
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

            {/* Column 4, Contact */}
            <div className="col-span-2 lg:col-span-3">
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
