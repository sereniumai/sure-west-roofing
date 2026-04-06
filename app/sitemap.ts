import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cochraneroofingpro.ca',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://cochraneroofingpro.ca/about',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://cochraneroofingpro.ca/services',
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://cochraneroofingpro.ca/gallery',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://cochraneroofingpro.ca/contact',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://cochraneroofingpro.ca/roof-replacement/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://cochraneroofingpro.ca/roof-repair/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://cochraneroofingpro.ca/hail-damage-repair/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://cochraneroofingpro.ca/roof-maintenance/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://cochraneroofingpro.ca/roof-inspection/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://cochraneroofingpro.ca/skylight-installation/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://cochraneroofingpro.ca/roofing-contractor-calgary',
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: 'https://cochraneroofingpro.ca/roofing-contractor-canmore',
      changeFrequency: 'weekly',
      priority: 0.95,
    },
  ]
}
