'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
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
  },
  {
    label: 'Roof Repair',
    description: 'Fast, lasting leak and shingle repair',
    href: '/roof-repair/cochrane',
    icon: Wrench,
  },
  {
    label: 'Hail Damage Repair',
    description: 'Insurance claims and restoration',
    href: '/hail-damage-repair/cochrane',
    icon: CloudLightning,
  },
  {
    label: 'Roof Maintenance',
    description: 'Annual care to extend roof life',
    href: '/roof-maintenance/cochrane',
    icon: ClipboardCheck,
  },
  {
    label: 'Roof Inspection',
    description: 'Detailed condition reports',
    href: '/roof-inspection/cochrane',
    icon: Search,
  },
  {
    label: 'Skylight Installation',
    description: 'Code-compliant skylight installs',
    href: '/skylight-installation/cochrane',
    icon: Sun,
  },
]

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', dropdown: true },
  { label: 'Contact', href: '/contact' },
]

export function Nav() {
  const pathname = usePathname()
  const isLightPage = pathname === '/contact' || pathname === '/about' || pathname === '/services'
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
  const hoverColor = 'hover:text-[#F97316]'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex-shrink-0 py-2">
          <img
            src={
              scrolled || isLightPage
                ? '/images/Sure West Dark.png'
                : '/images/Sure West Roofing - Cochrane Roofing Contractor.webp'
            }
            alt="Sure West Roofing"
            className="h-12 w-auto"
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
                  href={link.href}
                  className={`flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider transition-colors ${textColor} ${hoverColor}`}
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
                  <div className="bg-white border border-gray-100 shadow-2xl w-[320px] overflow-hidden">
                    {serviceLinks.map((service) => {
                      const Icon = service.icon
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-3 px-5 py-3.5 hover:bg-[#FFF7ED] transition-colors group"
                          onClick={() => setServicesOpen(false)}
                        >
                          <div className="w-9 h-9 bg-gray-100 group-hover:bg-[#F97316]/10 flex items-center justify-center flex-shrink-0 transition-colors">
                            <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#F97316] transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-display font-bold text-sm text-[#1A1A1A] tracking-tight">
                              {service.label}
                            </p>
                            <p className="text-xs text-[#666] mt-0.5">
                              {service.description}
                            </p>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      )
                    })}
                    <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
                      <p className="text-xs text-[#666]">Not sure what you need?</p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#F97316] hover:text-[#EA580C] transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        Contact us
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors ${textColor} ${hoverColor}`}
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
                      className="block py-3 pl-4 text-base text-white/60 hover:text-[#F97316] transition-colors"
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
