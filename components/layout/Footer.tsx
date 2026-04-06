import Link from 'next/link'
import { MapPin } from 'lucide-react'

const accreditations = [
  'SHINGLEMASTER',
  'WCB ALBERTA',
  'BBB ACCREDITED',
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
]

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

const serviceAreas = [
  { label: 'Cochrane', href: '/' },
  { label: 'Calgary', href: '/roofing-contractor-calgary' },
  { label: 'Canmore', href: '/roofing-contractor-canmore' },
]

export function Footer() {
  return (
    <footer className="bg-[#F8F8F8]">
      {/* Accreditation strip */}
      <div className="border-t border-[#EBEBEB]" />
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {accreditations.map((name, i) => (
            <span key={name} className="flex items-center gap-6">
              <span className="font-body text-xs font-semibold tracking-widest uppercase text-body-text/40">
                {name}
              </span>
              {i < accreditations.length - 1 && (
                <span className="text-[#D6AE60] text-xs">|</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#EBEBEB]" />

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div>
            <img
              src="/images/logo.svg"
              alt="Cochrane Roofing Pro"
              className="h-14 w-auto"
            />

            <p className="font-body text-sm text-body-text leading-relaxed max-w-xs mt-6">
              Red Seal Journeyman certified roofing contractor proudly serving
              Cochrane, Calgary, and Canmore. Quality craftsmanship on every
              project.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <MapPin className="text-[#D6AE60] w-4 h-4 flex-shrink-0" />
              <span className="font-body text-sm text-body-text">
                Cochrane, AB
              </span>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-dark mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="font-body text-sm text-body-text hover:text-[#D6AE60] transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-dark mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-body-text hover:text-[#D6AE60] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-dark mb-6">
              Service Areas
            </h4>
            <ul className="flex flex-col gap-2">
              {serviceAreas.map((area) => (
                <li key={area.label}>
                  <Link
                    href={area.href}
                    className="font-body text-sm text-body-text hover:text-[#D6AE60] transition-colors duration-200"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#EBEBEB]" />
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center flex-wrap gap-4">
        <p className="font-body text-xs text-body-text/60">
          &copy; 2026 Cochrane Roofing Pro. All Rights Reserved.
        </p>
        <p className="font-body text-xs text-body-text/60">
          Cochrane, Alberta. Red Seal Certified.
        </p>
      </div>
    </footer>
  )
}
