'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Wrench,
  CloudLightning,
  ClipboardCheck,
  Search,
  Sun,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

const serviceLinks = [
  {
    label: 'Roof Replacement',
    description: 'Complete tear-off and replacement',
    href: '/roof-replacement/cochrane',
    icon: Home,
    image: '',
  },
  {
    label: 'Roof Repair',
    description: 'Fast, lasting leak and shingle repair',
    href: '/roof-repair/cochrane',
    icon: Wrench,
    image: '',
  },
  {
    label: 'Hail Damage Repair',
    description: 'Insurance claims and restoration',
    href: '/hail-damage-repair/cochrane',
    icon: CloudLightning,
    image: '',
  },
  {
    label: 'Roof Maintenance',
    description: 'Annual care to extend roof life',
    href: '/roof-maintenance/cochrane',
    icon: ClipboardCheck,
    image: '',
  },
  {
    label: 'Roof Inspection',
    description: 'Detailed condition reports',
    href: '/roof-inspection/cochrane',
    icon: Search,
    image: '',
  },
  {
    label: 'Skylight Installation',
    description: 'Code-compliant skylight installs',
    href: '/skylight-installation/cochrane',
    icon: Sun,
    image: '',
  },
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
  const [hoveredService, setHoveredService] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-8 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex-shrink-0 py-2">
          <img
            src="/images/logo-light.svg"
            alt="Cochrane Roofing Pro"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => {
                  setServicesOpen(true)
                  setHoveredService(0)
                }}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 text-[15px] font-medium tracking-wide transition-colors ${
                    scrolled
                      ? 'text-dark hover:text-[#D6AE60]'
                      : 'text-white hover:text-[#D6AE60]'
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </Link>

                {/* Mega dropdown */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-5 transition-all duration-200 ${
                    servicesOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden flex w-[720px]">
                    {/* Left - service list */}
                    <div className="flex-1 py-3">
                      {serviceLinks.map((service, i) => {
                        const Icon = service.icon
                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={`flex items-center gap-4 px-5 py-3.5 transition-colors ${
                              hoveredService === i
                                ? 'bg-[#EDEEE8]/60'
                                : 'hover:bg-[#EDEEE8]/40'
                            }`}
                            onMouseEnter={() => setHoveredService(i)}
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                              hoveredService === i
                                ? 'bg-[#D6AE60]/15 text-[#D6AE60]'
                                : 'bg-gray-100 text-gray-400'
                            }`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-display font-bold text-sm text-dark tracking-tight">
                                {service.label}
                              </p>
                              <p className="text-xs text-body-text mt-0.5">
                                {service.description}
                              </p>
                            </div>
                            {hoveredService === i && (
                              <ArrowRight className="w-4 h-4 text-[#D6AE60] flex-shrink-0" />
                            )}
                          </Link>
                        )
                      })}

                      {/* Bottom CTA */}
                      <div className="mx-5 mt-2 pt-3 border-t border-gray-100 flex items-center justify-between">
                        <p className="text-xs text-body-text">Not sure what you need?</p>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D6AE60] hover:text-[#B8943F] transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          Contact us
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                    {/* Right - image preview */}
                    <div className="w-[280px] p-3 flex-shrink-0">
                      <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-[#1B3558] to-[#2a4a7a] min-h-[320px]">
                        {serviceLinks.map((service, i) => (
                          service.image ? (
                            <Image
                              key={service.href}
                              src={service.image}
                              alt={service.label}
                              fill
                              className={`object-cover transition-opacity duration-300 ${
                                hoveredService === i ? 'opacity-100' : 'opacity-0'
                              }`}
                              sizes="280px"
                            />
                          ) : null
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[15px] font-medium tracking-wide transition-colors ${
                  scrolled
                    ? 'text-dark hover:text-[#D6AE60]'
                    : 'text-white hover:text-[#D6AE60]'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop Right — CTA */}
        <div className="hidden lg:flex items-center">
          <Button href="/contact" className="px-5 py-2.5 text-sm">
            Get a Free Estimate
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden relative z-10 p-2 ${scrolled ? 'text-dark' : 'text-white'}`}
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
                    mobileServicesOpen ? 'max-h-[500px]' : 'max-h-0'
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
            <Button href="/contact" className="text-center" onClick={() => setMobileOpen(false)}>
              Get a Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
