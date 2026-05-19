import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function SkylightInstallationHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Skylight Replacement & Installation"
      eyebrow="Cochrane's Skylight Replacement Specialists"
      eyebrowMobile="Skylight Replacement"
      h1={'Skylight Replacement\nin Cochrane, Alberta'}
      body="Red Seal Journeyman skylight replacement for Cochrane, Calgary, and Canmore. Old units swapped for new, sealed and flashed to manufacturer spec, plus new tubular installs for small spaces."
      image={{
        src: '/images/skylight-installation-cochrane.webp',
        alt: 'Skylight replacement by Sure West Roofing on a Cochrane Alberta home',
      }}
      badge={{
        heading: 'Replace, Seal, Flash',
        subtext: 'Same crew as our roofs',
      }}
    />
  )
}
