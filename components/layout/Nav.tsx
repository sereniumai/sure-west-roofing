'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
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
  Layers,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

const serviceLinks = [
  {
    label: 'Roof Replacement',
    description: 'Premium materials built for Alberta',
    href: '/roof-replacement',
    Icon: Home,
  },
  {
    label: 'Roof Repair',
    description: 'Back to normal, fast',
    href: '/roof-repair',
    Icon: Wrench,
  },
  {
    label: 'Hail Damage Repair',
    description: 'Storm and hail roof repair done right',
    href: '/hail-damage-repair',
    Icon: CloudHail,
  },
  {
    label: 'Roof Inspection',
    description: 'Catch problems before they get expensive',
    href: '/roof-inspection',
    Icon: Search,
  },
  {
    label: 'Roof Maintenance',
    description: "Extend your roof's lifespan",
    href: '/roof-maintenance',
    Icon: Shield,
  },
  {
    label: 'Siding & Soft Metals',
    description: 'Siding, eavestroughs, fascia, and soffits',
    href: '/siding-soft-metals',
    Icon: Layers,
  },
  {
    label: 'Skylight Installation',
    description: 'Brighten your home with natural light',
    href: '/skylight-installation',
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
  // Pages that render the same dark video Hero as the homepage. The nav
  // should stay in its dark-hero styling (white logo + white menu text) on
  // these routes until the user scrolls past the hero.
  const DARK_HERO_ROUTES = new Set([
    '/',
    '/calgary-roofing-contractor',
    '/canmore-roofing-contractor',
  ])
  const isLightPage = !DARK_HERO_ROUTES.has(pathname)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    let lastScrolled = window.scrollY > 80
    setScrolled(lastScrolled)

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        const next = window.scrollY > 80
        if (next !== lastScrolled) {
          lastScrolled = next
          setScrolled(next)
        }
        ticking = false
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

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
          <Image
            src={mobileOpen || isLight ? '/images/Sure West Dark Logo.webp' : '/images/Sure West Roofing - Cochrane Roofing Contractor.webp'}
            alt="Sure West Roofing"
            width={200}
            height={56}
            className="h-12 lg:h-[56px] w-auto"
            priority
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
                  <div className="bg-brand-cream rounded-[14px] shadow-[0_2px_4px_rgba(44,71,102,0.06),0_12px_40px_-8px_rgba(44,71,102,0.18),0_40px_100px_-20px_rgba(44,71,102,0.22)] w-[940px] p-6">
                    <div className="flex items-center justify-between mb-4 px-1">
                      <span
                        className="uppercase tracking-[0.1em] text-brand-slate"
                        style={{ fontSize: '11px', fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 600 }}
                      >
                        Our Services
                      </span>
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="group/all inline-flex items-center gap-1 uppercase tracking-[0.1em] text-brand-gold hover:text-[#B8943F] transition-colors duration-200"
                        style={{ fontSize: '11px', fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 600 }}
                      >
                        View All Services
                        <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover/all:translate-x-0.5" strokeWidth={2.25} />
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {serviceLinks.map((service) => {
                        const { Icon } = service
                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="group relative p-4 rounded-[10px] transition-all duration-300 hover:bg-white hover:shadow-[0_2px_8px_rgba(44,71,102,0.06),0_8px_22px_-10px_rgba(44,71,102,0.14)]"
                            onClick={() => setServicesOpen(false)}
                          >
                            <Icon
                              className="w-5 h-5 text-brand-gold mb-3 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-6deg]"
                              strokeWidth={1.75}
                            />
                            <p className="font-display font-semibold text-brand-navy text-[17px] leading-[1.2] tracking-tight transition-colors duration-200 group-hover:text-brand-gold">
                              {service.label}
                            </p>
                            <p
                              className="text-brand-slate mt-1 leading-[1.45]"
                              style={{ fontSize: '12.5px', fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                            >
                              {service.description}
                            </p>
                            <ArrowRight className="w-3.5 h-3.5 text-brand-gold absolute right-3 top-4 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                          </Link>
                        )
                      })}

                      {/* 8th cell, spans 2 cols. Soft CTA, weighted to match a service card. */}
                      <Link
                        href="/free-roof-estimate-cochrane"
                        onClick={() => setServicesOpen(false)}
                        className="group relative col-span-2 p-4 rounded-[10px] flex items-center justify-between gap-4 bg-white transition-all duration-300 hover:shadow-[0_2px_8px_rgba(44,71,102,0.06),0_8px_22px_-10px_rgba(44,71,102,0.14)]"
                        style={{
                          border: '1px solid rgba(212,175,96,0.30)',
                        }}
                      >
                        <div>
                          <p className="font-display font-semibold text-brand-navy text-[17px] leading-[1.2] tracking-tight transition-colors duration-200 group-hover:text-brand-gold">
                            Not sure what you need?
                          </p>
                          <p
                            className="text-brand-slate mt-1 leading-[1.45]"
                            style={{ fontSize: '12.5px', fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                          >
                            Talk to a Red Seal roofer. Free written quote, no pressure.
                          </p>
                        </div>
                        <span
                          className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-cream transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-brand-gold"
                          style={{
                            boxShadow: '0 1px 3px rgba(44,71,102,0.08), 0 8px 18px -8px rgba(212,175,96,0.40)',
                            border: '1px solid rgba(212,175,96,0.30)',
                          }}
                        >
                          <ArrowRight className="w-4 h-4 text-brand-gold transition-colors duration-300 group-hover:text-white" strokeWidth={2} />
                        </span>
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

        {/* Desktop CTA, phone + button */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+14039907210"
            className={`inline-flex items-center gap-2 transition-colors duration-200 hover:text-brand-gold ${textColor}`}
            style={{ fontSize: '15px', fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 500 }}
          >
            <Phone className="w-4 h-4" strokeWidth={1.75} />
            <span>(403) 990-7210</span>
          </a>
          <Button href="/free-roof-estimate-cochrane" variant="secondary" size="sm">
            Get a Free Estimate
          </Button>
        </div>

        {/* Mobile right side, phone icon + hamburger */}
        <div className="lg:hidden flex items-center gap-1 relative z-10">
          <a
            href="tel:+14039907210"
            className={`inline-flex items-center gap-2 p-3 transition-colors duration-200 hover:text-brand-gold ${
              mobileOpen || isLight ? 'text-brand-navy' : 'text-white'
            }`}
            aria-label="Call Sure West Roofing"
          >
            <Phone className="w-5 h-5" strokeWidth={1.75} />
            <span
              className="hidden md:inline"
              style={{ fontSize: '14px', fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 500 }}
            >
              (403) 990-7210
            </span>
          </a>
          <button
            className={`p-3 ${mobileOpen || isLight ? 'text-brand-navy' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        aria-hidden={!mobileOpen}
        className={`lg:hidden fixed left-0 right-0 top-0 bg-white transition-[opacity,visibility] duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ height: '100dvh' }}
      >
        <div className="pt-24 px-6 pb-10 flex flex-col gap-2 h-full overflow-y-auto overscroll-contain">
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
                    mobileServicesOpen ? 'max-h-[720px]' : 'max-h-0'
                  }`}
                >
                  <Link
                    href={link.href ?? '/services'}
                    className="flex items-center justify-between py-3 pl-4 pr-2 text-base font-semibold text-brand-navy hover:text-brand-gold transition-colors border-b border-brand-border/60"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="inline-flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="w-5 h-5 flex-shrink-0 flex items-center justify-center"
                      >
                        <span className="w-2 h-2 rounded-full bg-brand-gold" />
                      </span>
                      All Services
                    </span>
                    <ArrowRight className="w-4 h-4 text-brand-gold" strokeWidth={2} />
                  </Link>
                  {serviceLinks.map((service) => {
                    const { Icon } = service
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center gap-3 py-3 pl-4 text-base text-brand-slate hover:text-brand-gold transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <Icon className="w-5 h-5 text-brand-gold flex-shrink-0" strokeWidth={1.75} />
                        {service.label}
                      </Link>
                    )
                  })}
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
            <Phone className="w-5 h-5" strokeWidth={1.75} />
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
