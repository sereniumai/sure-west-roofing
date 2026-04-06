import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

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
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

const serviceAreas = [
  { label: 'Cochrane', href: '/services' },
  { label: 'Calgary', href: '/roofing-contractor-calgary' },
  { label: 'Canmore', href: '/roofing-contractor-canmore' },
  { label: 'Springbank', href: '/services' },
  { label: 'Bragg Creek', href: '/services' },
]

export function Footer() {
  return (
    <footer className="bg-[#F8F8F8]">
      {/* Top border */}
      <div className="h-px bg-[#EBEBEB]" />

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Brand */}
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

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:info@cochraneroofingpro.ca"
                className="flex items-center gap-2 group"
              >
                <Mail className="text-[#D6AE60] w-4 h-4" />
                <span className="font-body text-sm text-body-text group-hover:text-[#D6AE60] transition-colors duration-200">
                  info@cochraneroofingpro.ca
                </span>
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <MapPin className="text-[#D6AE60] w-4 h-4 flex-shrink-0" />
              <span className="font-body text-sm text-body-text">
                Cochrane, AB
              </span>
            </div>
          </div>

          {/* Column 2 — Services */}
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

          {/* Column 3 — Company */}
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

          {/* Column 4 — Service Areas */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-dark mb-6">
              Service Areas
            </h4>
            <p className="font-body text-sm text-body-text leading-relaxed mb-4">
              Proudly serving residential roofing clients across the Bow Valley
              and surrounding communities.
            </p>
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

      {/* Divider */}
      <div className="border-t border-[#EBEBEB]" />

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center flex-wrap gap-4">
        <p className="font-body text-xs text-body-text/60">
          &copy; {new Date().getFullYear()} Cochrane Roofing Pro. All Rights Reserved.
        </p>
        <p className="font-body text-xs text-body-text/60">
          Cochrane, Alberta{' '}
          <span className="text-[#D6AE60]">&middot;</span>{' '}
          Red Seal Certified
        </p>
      </div>
    </footer>
  )
}
