export interface ServicePage {
  slug: string
  city: string
  serviceName: string
  primaryKeyword: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  whatIsIncluded: string[]
  whyItMattersCochrane: string
  whyRedSeal: string
  process: { step: number; title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  ctaHeadline: string
}

export interface NavLink {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
  initials: string
}

export interface BlogPost {
  slug: string
  category: string
  title: string
  date: string
  excerpt: string
  image: string
}

export interface FAQItem {
  question: string
  answer: string
}
