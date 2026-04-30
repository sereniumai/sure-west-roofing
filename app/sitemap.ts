import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://surewestroofing.ca'
  const lastModified = new Date()

  return [
    { url: baseUrl,                                  lastModified, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/about`,                       lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/gallery`,                     lastModified, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${baseUrl}/services`,                    lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/free-roof-estimate-cochrane`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/roof-replacement`,            lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/roof-repair`,                 lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/hail-damage-repair`,          lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/roof-maintenance`,            lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/roof-inspection`,             lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/siding-soft-metals`,          lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/skylight-installation`,       lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/roofing-contractor-calgary`,  lastModified, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${baseUrl}/roofing-contractor-canmore`,  lastModified, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${baseUrl}/roofing-cost-calculator`,     lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacy`,                     lastModified, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${baseUrl}/terms`,                       lastModified, changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
