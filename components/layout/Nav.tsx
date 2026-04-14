'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const serviceLinks = [
  {
    label: 'Roof Replacement',
    description: 'Complete tear-off and replacement',
    href: '/roof-replacement-cochrane',
  },
  {
    label: 'Roof Repair',
    description: 'Fast, lasting leak and shingle repair',
    href: '/roof-repair-cochrane',
  },
  {
    label: 'Hail Damage Repair',
    description: 'Insurance claims and restoration',
    href: '/hail-damage-repair-cochrane',
  },
  {
    label: 'Roof Maintenance',
    description: 'Annual care to extend roof life',
    href: '/roof-maintenance-cochrane',
  },
  {
    label: 'Roof Inspection',
    description: 'Detailed condition reports',
    href: '/roof-inspection-cochrane',
  },
  {
    label: 'Skylight Installation',
    description: 'Code-compliant skylight installs',
    href: '/skylight-installation-cochrane',
  },
]

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', dropdown: true },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export function Nav() {
  // Every page now uses a light hero, so treat the top nav as light everywhere.
  const isLightPage = true
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

  const textColor = scrolled || isLightPage ? 'text-[#1A1A1A]' : 'text-white'
  const hoverColor = 'hover:text-[#D4AF60]'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-[rgba(248,248,248,0.9)] backdrop-blur-[12px] border-b'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{ height: 'var(--nav-height)', borderColor: scrolled ? 'var(--color-border)' : 'transparent' }}
    >
      <div className="w-full flex items-center justify-between h-full" style={{ padding: '0 var(--section-pad-x)' }}>
        {/* Logo */}
        <Link href="/" className="relative z-10 flex-shrink-0 py-2">
          <img
            src={
              scrolled || isLightPage
                ? '/images/Sure West Dark.png'
                : '/images/Sure West Roofing - Cochrane Roofing Contractor.webp'
            }
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
                <button
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  className={`flex items-center gap-1.5 text-[16px] font-bold uppercase tracking-wider transition-opacity hover:opacity-50 ${textColor}`}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                    servicesOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div
                    className="bg-[--color-cream] shadow-2xl w-[560px] overflow-hidden"
                    style={{ border: '1px solid var(--color-border)' }}
                  >
                    <div className="grid grid-cols-2">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors border-b [&:nth-last-child(-n+2)]:border-b-0 [&:nth-child(odd)]:border-r hover:bg-white"
                          style={{
                            borderColor: 'var(--color-border)',
                          }}
                          onClick={() => setServicesOpen(false)}
                        >
                          <div className="flex-1 min-w-0">
                            <p
                              className="font-display font-semibold uppercase tracking-tight text-[--color-near-black] group-hover:text-[#B8943F] transition-colors"
                              style={{ fontSize: '16px', letterSpacing: '-0.02em' }}
                            >
                              {service.label}
                            </p>
                            <p className="text-[11px] text-[--color-near-black]/60 mt-1 font-medium truncate">
                              {service.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#D4AF60] -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between px-6 py-4 bg-white group hover:bg-[#FBF8F1] transition-colors"
                      style={{ borderTop: '1px solid var(--color-border)' }}
                    >
                      <p className="text-[11px] text-[--color-near-black]/70 uppercase tracking-[0.18em] font-bold">
                        Not sure what you need?
                      </p>
                      <span className="inline-flex items-center gap-2 text-[12px] font-bold text-[#B8943F] uppercase tracking-[0.14em] group-hover:gap-3 transition-all">
                        Contact us
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href ?? '#'}
                className={`text-[16px] font-bold uppercase tracking-wider transition-opacity hover:opacity-50 ${textColor}`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Button href="/contact" variant="secondary" size="sm">
            Get a Free Estimate
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden relative z-10 p-2 ${
            scrolled || isLightPage ? 'text-[#1A1A1A]' : 'text-white'
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-[#1A1A1A] transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="pt-24 px-6 pb-8 flex flex-col gap-2 h-full overflow-y-auto">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  className="flex items-center justify-between w-full py-4 text-lg text-white font-semibold uppercase tracking-wider border-b border-white/10"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  {link.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      mobileServicesOpen ? 'rotate-180' : ''
                    }`}
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
                      className="block py-3 pl-4 text-base text-white/60 hover:text-[#D4AF60] transition-colors"
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
                className="py-4 text-lg text-white font-semibold uppercase tracking-wider border-b border-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}

          <div className="mt-8 flex flex-col gap-4">
            <Button
              href="/contact"
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
