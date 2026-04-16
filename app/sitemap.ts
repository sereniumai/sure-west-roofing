import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: 'https://surewestroofing.ca',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://surewestroofing.ca/about',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://surewestroofing.ca/services',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/services/roof-replacement/cochrane',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/services/roof-repair/cochrane',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/services/hail-damage-repair/cochrane',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/services/roof-maintenance/cochrane',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/services/roof-inspection/cochrane',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/services/skylight-installation/cochrane',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/gallery',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://surewestroofing.ca/free-roof-estimate-cochrane',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://surewestroofing.ca/roofing-cost-calculator',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://surewestroofing.ca/roofing-contractor-calgary',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://surewestroofing.ca/roofing-contractor-canmore',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
