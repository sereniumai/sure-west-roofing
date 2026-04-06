'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const serviceLinks = [
  { label: 'Roof Replacement', href: '/roof-replacement/cochrane' },
  { label: 'Roof Repair', href: '/roof-repair/cochrane' },
  { label: 'Hail Damage Repair', href: '/hail-damage-repair/cochrane' },
  { label: 'Roof Maintenance', href: '/roof-maintenance/cochrane' },
  { label: 'Roof Inspection', href: '/roof-inspection/cochrane' },
  { label: 'Skylight Installation', href: '/skylight-installation/cochrane' },
  { label: 'Emergency Roof Repair', href: '/emergency-roof-repair/cochrane' },
]

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', dropdown: true },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export function Nav() {
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-navy shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Sure West Roofing"
            width={160}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Links — center */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm text-white font-medium tracking-wide hover:text-gold transition-colors"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
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
                  <div className="bg-navy border border-white/10 shadow-xl min-w-[260px]">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-6 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white font-medium tracking-wide hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop Right — phone + CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:4039907210"
            className="flex items-center gap-2 text-sm text-white font-medium hover:text-gold transition-colors"
          >
            <Phone size={16} />
            (403) 990-7210
          </a>
          <Button href="/contact" className="px-5 py-2.5">
            Get a Free Estimate
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden relative z-10 text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-navy transition-all duration-300 ${
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
                  className="flex items-center justify-between w-full py-4 text-lg text-white font-medium border-b border-white/10"
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
                    mobileServicesOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block py-3 pl-4 text-base text-white/70 hover:text-white transition-colors"
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
                href={link.href}
                className="py-4 text-lg text-white font-medium border-b border-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}

          <div className="mt-8 flex flex-col gap-4">
            <a
              href="tel:4039907210"
              className="flex items-center gap-2 text-white font-medium"
            >
              <Phone size={18} />
              (403) 990-7210
            </a>
            <Button href="/contact" className="text-center" onClick={() => setMobileOpen(false)}>
              Get a Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
