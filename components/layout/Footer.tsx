import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'

const services = [
  { label: 'Roof Replacement', href: '/roof-replacement/cochrane' },
  { label: 'Roof Repair', href: '/roof-repair/cochrane' },
  { label: 'Hail Damage Repair', href: '/hail-damage-repair/cochrane' },
  { label: 'Roof Maintenance', href: '/roof-maintenance/cochrane' },
  { label: 'Roof Inspection', href: '/roof-inspection/cochrane' },
  { label: 'Skylight Installation', href: '/skylight-installation/cochrane' },
  { label: 'Emergency Roof Repair', href: '/emergency-roof-repair/cochrane' },
]

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

const serviceAreas = [
  'Cochrane',
  'Calgary',
  'Canmore',
  'Springbank',
  'Bragg Creek',
]

export function Footer() {
  return (
    <footer className="bg-[#1B3558] text-white">
      {/* Row 1 — Gold accent bar */}
      <div className="h-1 bg-[#D6AE60]" />

      {/* Row 2 — Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Brand */}
          <div>
            <img
              src="/images/logo-light.svg"
              alt="Cochrane Roofing Pro"
              className="h-14 w-auto"
            />

            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs mt-6">
              Red Seal Journeyman certified roofing contractor proudly serving
              Cochrane, Calgary, and Canmore. Quality craftsmanship on every
              project.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:info@cochraneroofingpro.ca"
                className="flex items-center gap-2 group"
              >
                <Mail className="text-[#D6AE60] w-4 h-4" />
                <span className="font-body text-sm text-white/80 group-hover:text-[#D6AE60] transition-colors duration-200">
                  info@cochraneroofingpro.ca
                </span>
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <MapPin className="text-[#D6AE60] w-4 h-4 flex-shrink-0" />
              <span className="font-body text-sm text-white/80">
                Unit 9 – 225 Railway St E, Cochrane AB
              </span>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-[#D6AE60] mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="font-body text-sm text-white/70 hover:text-[#D6AE60] transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-[#D6AE60] mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-[#D6AE60] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Service Area */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-[#D6AE60] mb-6">
              Service Area
            </h4>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-4">
              Proudly serving residential roofing clients across the Bow Valley
              and surrounding communities.
            </p>
            <ul className="flex flex-col gap-2">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="font-body text-sm text-white/70"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Row 3 — Divider */}
      <div className="border-t border-white/10" />

      {/* Row 4 — Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center flex-wrap gap-4">
        <p className="font-body text-xs text-white/50">
          © 2026 Cochrane Roofing Pro. All Rights Reserved.
        </p>
        <p className="font-body text-xs text-white/50">
          Cochrane, Alberta{' '}
          <span className="text-[#D6AE60]">·</span>{' '}
          Red Seal Certified
        </p>
      </div>
    </footer>
  )
}
