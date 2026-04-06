import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const accreditations = [
  'SHINGLEMASTER',
  'WCB ALBERTA',
  'BBB',
  'EMERALD PRO',
  'TOP ROOFERS CANADA',
]

const services = [
  { label: 'Roof Replacement', href: '/roof-replacement/cochrane' },
  { label: 'Roof Repair', href: '/roof-repair/cochrane' },
  { label: 'Hail Damage Repair', href: '/hail-damage-repair/cochrane' },
  { label: 'Roof Maintenance', href: '/roof-maintenance/cochrane' },
  { label: 'Roof Inspection', href: '/roof-inspection/cochrane' },
  { label: 'Skylight Installation', href: '/skylight-installation/cochrane' },
  { label: 'Emergency Roof Repair', href: '/emergency-roof-repair/cochrane' },
]

const locations = [
  { label: 'Roofing Contractor Cochrane', href: '/' },
  { label: 'Roofing Contractor Calgary', href: '/roofing-contractor-calgary' },
  { label: 'Roofing Contractor Canmore', href: '/roofing-contractor-canmore' },
]

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Accreditation Strip */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {accreditations.map((badge, i) => (
              <div key={badge} className="flex items-center gap-6">
                <span className="text-[11px] tracking-widest uppercase text-white/40 font-medium font-body">
                  {badge}
                </span>
                {i < accreditations.length - 1 && (
                  <span className="hidden sm:block w-px h-4 bg-white/15" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="lg:pr-8">
            <Link href="/">
              <Image
                src="/images/logo-white.webp"
                alt="Sure West Roofing"
                width={160}
                height={48}
                className="h-10 w-auto mb-6"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6 font-body">
              In every shingle laid, we&apos;re not just building roofs; we&apos;re elevating trust.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-sm font-body font-medium tracking-wide uppercase mb-6 text-white">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/50 hover:text-white transition-colors font-body"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Locations */}
          <div>
            <h4 className="text-sm font-body font-medium tracking-wide uppercase mb-6 text-white">Locations</h4>
            <ul className="flex flex-col gap-3">
              {locations.map((location) => (
                <li key={location.href}>
                  <Link
                    href={location.href}
                    className="text-sm text-white/50 hover:text-white transition-colors font-body"
                  >
                    {location.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="text-sm font-body font-medium tracking-wide uppercase mb-6 text-white">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:4039907210"
                  className="text-sm text-white/50 hover:text-white transition-colors font-body"
                >
                  (403) 990-7210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@surewestroofing.ca"
                  className="text-sm text-white/50 hover:text-white transition-colors font-body"
                >
                  info@surewestroofing.ca
                </a>
              </li>
              <li className="text-sm text-white/50 font-body">
                Unit 9 – 225 Railway St E<br />
                Cochrane, Alberta T4C 2C3
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40 font-body">
            &copy; 2026 Sure West Roofing Ltd. All Rights Reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="text-sm text-white/40 hover:text-white transition-colors font-body"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
