import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function SkylightInstallationHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Skylight Installation"
      eyebrow="Cochrane's Skylight Installation Specialists"
      h1={'Skylight Installation\nin Cochrane, Alberta'}
      body="Red Seal Journeyman skylight installation for Cochrane, Calgary, and Canmore. Sealed, flashed, and finished to manufacturer spec by the same in-house crew that does our roofs."
      image={{
        src: '/images/skylight-installation-cochrane.webp',
        alt: 'Skylight installation by Sure West Roofing on a Cochrane Alberta home',
      }}
      badge={{
        heading: 'Sealed and Flashed',
        subtext: 'Same crew as our roofs',
      }}
    />
  )
}
