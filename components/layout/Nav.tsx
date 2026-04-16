'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Home,
  Wrench,
  CloudHail,
  Shield,
  Search,
  Sun,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

const serviceLinks = [
  {
    label: 'Roof Replacement',
    description: 'Premium materials built for Alberta weather',
    href: '/services/roof-replacement/cochrane',
    Icon: Home,
  },
  {
    label: 'Roof Repair',
    description: 'Back to normal, fast',
    href: '/services/roof-repair/cochrane',
    Icon: Wrench,
  },
  {
    label: 'Hail Damage Repair',
    description: 'We handle your insurance claim',
    href: '/services/hail-damage-repair/cochrane',
    Icon: CloudHail,
  },
  {
    label: 'Roof Maintenance',
    description: "Extend your roof's lifespan",
    href: '/services/roof-maintenance/cochrane',
    Icon: Shield,
  },
  {
    label: 'Roof Inspection',
    description: 'Catch problems before they get expensive',
    href: '/services/roof-inspection/cochrane',
    Icon: Search,
  },
  {
    label: 'Skylight Installation',
    description: 'Brighten your home with natural light',
    href: '/services/skylight-installation/cochrane',
    Icon: Sun,
  },
]

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', dropdown: true },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/free-roof-estimate-cochrane' },
]

export function Nav() {
  const pathname = usePathname()
  const isLightPage = pathname !== '/'
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isLight = scrolled || isLightPage
  const textColor = isLight ? 'text-brand-navy' : 'text-white'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${
        scrolled
          ? 'bg-[rgba(255,255,255,0.95)] backdrop-blur-[12px] border-brand-border'
          : 'bg-transparent border-transparent'
      }`}
      style={{ height: 'var(--nav-height)' }}
    >
      <div className="w-full flex items-center justify-between h-full" style={{ padding: '0 var(--section-pad-x)' }}>
        {/* Logo */}
        <Link href="/" className="relative z-10 flex-shrink-0 py-2">
          <img
            src={isLight ? '/images/Sure West Dark Logo.webp' : '/images/Sure West Roofing - Cochrane Roofing Contractor.webp'}
            alt="Sure West Roofing"
            className="h-12 lg:h-[56px] w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href ?? '/services'}
                  className={`flex items-center gap-1.5 text-[16px] font-bold uppercase tracking-wider transition-colors duration-200 hover:text-brand-gold ${textColor}`}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </Link>

                {/* Dropdown */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                    servicesOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="bg-white rounded-[12px] shadow-[0_10px_30px_rgba(44,71,102,0.12)] w-[720px] p-6">
                    <div className="grid grid-cols-2 gap-2">
                      {serviceLinks.map((service) => {
                        const { Icon } = service
                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="group relative p-4 rounded-[8px] transition-all duration-200 hover:bg-brand-cream"
                            onClick={() => setServicesOpen(false)}
                          >
                            <Icon
                              className="w-6 h-6 text-brand-gold mb-4"
                              strokeWidth={1.5}
                            />
                            <p className="font-display font-semibold text-brand-navy text-[20px] leading-tight tracking-tight">
                              {service.label}
                            </p>
                            <p
                              className="text-brand-slate mt-1 truncate"
                              style={{ fontSize: '14px', fontFamily: "'Inter', system-ui, sans-serif" }}
                            >
                              {service.description}
                            </p>
                            <ArrowRight className="w-4 h-4 text-brand-gold absolute right-4 top-1/2 -translate-y-1/2 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                          </Link>
                        )
                      })}
                    </div>

                    {/* Bottom row */}
                    <div className="mt-4 pt-4 border-t border-brand-border flex items-center justify-between">
                      <p
                        className="text-brand-navy uppercase tracking-[0.1em]"
                        style={{ fontSize: '12px', fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 500 }}
                      >
                        Not sure what you need?
                      </p>
                      <Link
                        href="/free-roof-estimate-cochrane"
                        onClick={() => setServicesOpen(false)}
                        className="inline-flex items-center gap-1.5 text-brand-gold uppercase tracking-[0.1em] hover:underline hover:underline-offset-2 transition-all duration-200"
                        style={{ fontSize: '12px', fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 500 }}
                      >
                        Contact us
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href ?? '#'}
                className={`text-[16px] font-bold uppercase tracking-wider transition-colors duration-200 hover:text-brand-gold ${textColor}`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA — phone + button */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+14039907210"
            className={`inline-flex items-center gap-2 transition-colors duration-200 hover:text-brand-gold ${textColor}`}
            style={{ fontSize: '15px', fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 500 }}
          >
            <Phone className="w-4 h-4" strokeWidth={1.5} />
            <span>(403) 990-7210</span>
          </a>
          <Button href="/free-roof-estimate-cochrane" variant="secondary" size="sm">
            Get a Free Estimate
          </Button>
        </div>

        {/* Mobile right side — phone icon + hamburger */}
        <div className="lg:hidden flex items-center gap-1 relative z-10">
          <a
            href="tel:+14039907210"
            className={`inline-flex items-center gap-2 p-2 transition-colors duration-200 hover:text-brand-gold ${
              mobileOpen || isLight ? 'text-brand-navy' : 'text-white'
            }`}
            aria-label="Call Sure West Roofing"
          >
            <Phone className="w-5 h-5" strokeWidth={1.5} />
            <span
              className="hidden md:inline"
              style={{ fontSize: '14px', fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 500 }}
            >
              (403) 990-7210
            </span>
          </a>
          <button
            className={`p-2 ${mobileOpen || isLight ? 'text-brand-navy' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-white transition-all duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="pt-24 px-6 pb-8 flex flex-col gap-2 h-full overflow-y-auto">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  className="flex items-center justify-between w-full py-4 text-lg text-brand-navy font-semibold uppercase tracking-wider border-b border-brand-border"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  {link.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileServicesOpen ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block py-3 pl-4 text-base text-brand-slate hover:text-brand-gold transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href ?? '#'}
                className="py-4 text-lg text-brand-navy font-semibold uppercase tracking-wider border-b border-brand-border"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}

          {/* Mobile phone link */}
          <a
            href="tel:+14039907210"
            className="py-4 text-lg text-brand-navy font-semibold tracking-wider border-b border-brand-border inline-flex items-center gap-2.5"
          >
            <Phone className="w-5 h-5" strokeWidth={1.5} />
            (403) 990-7210
          </a>

          <div className="mt-6 flex flex-col gap-4">
            <Button
              href="/free-roof-estimate-cochrane"
              variant="secondary"
              className="text-center w-full"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
