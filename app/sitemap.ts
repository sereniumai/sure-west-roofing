import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://surewestroofing.ca',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://surewestroofing.ca/roofing-contractor-calgary',
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: 'https://surewestroofing.ca/roofing-contractor-canmore',
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: 'https://surewestroofing.ca/roof-replacement/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/roof-repair/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/hail-damage-repair/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/roof-maintenance/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/roof-inspection/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/skylight-installation/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/emergency-roof-repair/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/services',
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://surewestroofing.ca/about',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://surewestroofing.ca/contact',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://surewestroofing.ca/gallery',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]
}
