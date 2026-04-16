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
      url: 'https://surewestroofing.ca/about',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://surewestroofing.ca/gallery',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://surewestroofing.ca/contact',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://surewestroofing.ca/services/roof-replacement/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/services/roof-repair/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/services/hail-damage-repair/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/services/roof-maintenance/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/services/roof-inspection/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://surewestroofing.ca/services/skylight-installation/cochrane',
      changeFrequency: 'monthly',
      priority: 0.9,
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
  ]
}
