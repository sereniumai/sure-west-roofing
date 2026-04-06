'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import type { BlogPost } from '@/lib/types'

interface BlogPreviewProps {
  label: string
  heading: string
  body: string
  posts: BlogPost[]
  cta: { label: string; href: string }
}

export function BlogPreview({
  heading,
  body,
  posts,
  cta,
}: BlogPreviewProps) {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-extrabold text-3xl lg:text-[44px] text-dark tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="font-body text-body-text leading-relaxed mt-4 max-w-2xl">
            {body}
          </p>
        </motion.div>

        {/* Magazine layout: featured large + 2 stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {/* Featured post — large */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden border border-[#EBEBEB] bg-[#F8F8F8] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 h-full"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-[#1B3558] to-[#2a4a7a]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#D6AE60]/10 text-[#D6AE60] text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                    {featured.category}
                  </span>
                  <span className="font-body text-xs text-body-text">{featured.date}</span>
                </div>
                <h3 className="font-display font-bold text-xl lg:text-2xl text-dark tracking-tight leading-snug mb-3">
                  {featured.title}
                </h3>
                <p className="font-body text-sm text-body-text leading-relaxed mb-5">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 font-body font-semibold text-sm text-dark group-hover:text-[#D6AE60] transition-colors duration-300">
                  Read article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Smaller posts — stacked */}
          <div className="flex flex-col gap-7">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden border border-[#EBEBEB] bg-[#F8F8F8] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-500"
                >
                  <div className="sm:w-48 lg:w-56 flex-shrink-0 aspect-[16/10] sm:aspect-auto relative overflow-hidden bg-gradient-to-br from-[#1B3558] to-[#2a4a7a]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, 224px"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-[#D6AE60]/10 text-[#D6AE60] text-xs font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <span className="font-body text-xs text-body-text">{post.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-base text-dark tracking-tight leading-snug mb-2">
                      {post.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 font-body font-semibold text-sm text-dark group-hover:text-[#D6AE60] transition-colors duration-300">
                      Read article
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="outline" href={cta.href}>
            {cta.label}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
