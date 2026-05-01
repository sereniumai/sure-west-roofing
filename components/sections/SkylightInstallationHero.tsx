import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function SkylightInstallationHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Skylight Installation"
      eyebrow="Cochrane's Skylight Installation Specialists"
      h1={'Skylight Installation\nin Cochrane, Alberta'}
      body="Red Seal certified skylight installation for Cochrane, Calgary, and Canmore. Velux and Fakro brands, leak-free flashing systems, written 5-year leak warranty. Permit handling included."
      trustItems={['Red Seal Certified', '10-Year Workmanship Warranty', 'IKO Certified']}
      image={{
        src: '/images/skylight-installation-cochrane.webp',
        alt: 'Velux skylight installation by Sure West Roofing on a Cochrane Alberta home',
      }}
    />
  )
}
