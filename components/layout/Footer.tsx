import Link from 'next/link'

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
    <footer className="bg-[#111111]">
      {/* Contact info bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="font-body text-[#D4AF60] text-xs font-semibold uppercase tracking-wider mb-2">
                Phone
              </h4>
              <p className="font-body text-white/70 text-sm">Call for a free estimate</p>
            </div>
            <div>
              <h4 className="font-body text-[#D4AF60] text-xs font-semibold uppercase tracking-wider mb-2">
                Email
              </h4>
              <p className="font-body text-white/70 text-sm">info@surewestroofing.ca</p>
            </div>
            <div>
              <h4 className="font-body text-[#D4AF60] text-xs font-semibold uppercase tracking-wider mb-2">
                Address
              </h4>
              <p className="font-body text-white/70 text-sm">Cochrane, AB, Canada</p>
            </div>
            <div>
              <h4 className="font-body text-[#D4AF60] text-xs font-semibold uppercase tracking-wider mb-2">
                Opening Hours
              </h4>
              <p className="font-body text-white/70 text-sm">Mon to Sat: 8:00am - 6:00pm</p>
              <p className="font-body text-white/40 text-sm">Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Large brand name + tagline */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          {/* Big brand name */}
          <h2 className="font-display font-extrabold uppercase text-6xl md:text-8xl lg:text-[120px] xl:text-[160px] text-white leading-[0.85] tracking-tighter">
            Sure West
          </h2>

          {/* Tagline */}
          <div className="lg:max-w-xs lg:text-right">
            <p className="font-body text-white/50 text-sm leading-relaxed">
              Roofs built to last.
              <br />
              Service built on trust.
              <br />
              Proudly serving Cochrane, Calgary, and
              Canmore with real people, real tools,
              and real results.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="font-body text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/about"
              className="font-body text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Terms
            </Link>
          </div>
          <p className="font-body text-xs text-white/30">
            &copy; 2026 Sure West Roofing. All Rights Reserved. Red Seal Certified.
          </p>
        </div>
      </div>
    </footer>
  )
}
