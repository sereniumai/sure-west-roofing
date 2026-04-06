'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const serviceLinks = [
  { label: 'Roof Replacement', href: '/roof-replacement' },
  { label: 'Roof Repair', href: '/roof-repair' },
  { label: 'Hail Damage Repair', href: '/hail-damage-repair' },
  { label: 'Roof Maintenance', href: '/roof-maintenance' },
  { label: 'Roof & Attic Inspections', href: '/roof-inspection' },
  { label: 'Skylight Installation', href: '/skylight-installation' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-navy shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Sure West Roofing"
            width={160}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="/about"
            className="text-white text-sm font-medium tracking-wide hover:text-gold transition-colors"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="text-white text-sm font-medium tracking-wide hover:text-gold transition-colors flex items-center gap-1"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-navy border border-white/10 shadow-xl">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            className="text-white text-sm font-medium tracking-wide hover:text-gold transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-white text-sm font-medium tracking-wide hover:text-gold transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:4039907210"
            className="text-white text-sm font-medium tracking-wide hover:text-gold transition-colors"
          >
            (403) 990-7210
          </a>
          <Link
            href="/contact"
            className="bg-gold text-navy font-medium px-5 py-2.5 text-sm tracking-wide hover:brightness-90 transition-all"
          >
            Get a Free Estimate
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="text-white text-base font-medium py-2"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="text-white text-base font-medium py-2"
            >
              Services
            </Link>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/70 text-sm font-medium pl-4 py-1.5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/gallery"
              onClick={() => setMobileOpen(false)}
              className="text-white text-base font-medium py-2"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-white text-base font-medium py-2"
            >
              Contact
            </Link>

            <div className="border-t border-white/10 pt-4 mt-2 flex flex-col gap-3">
              <a
                href="tel:4039907210"
                className="text-white text-sm font-medium"
              >
                (403) 990-7210
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-gold text-navy font-medium px-5 py-2.5 text-sm tracking-wide text-center hover:brightness-90 transition-all"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
