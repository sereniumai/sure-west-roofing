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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export function BlogPreview({
  heading,
  body,
  posts,
  cta,
}: BlogPreviewProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header — left aligned like services */}
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

        {/* Posts grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={cardVariants}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 h-full"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-[#1B3558] to-[#2a4a7a]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#D6AE60]/10 text-[#D6AE60] text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="font-body text-xs text-body-text">{post.date}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-dark tracking-tight leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="font-body text-sm text-body-text leading-relaxed mb-5 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 font-body font-semibold text-sm text-dark group-hover:text-[#D6AE60] transition-colors duration-300">
                    Read article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

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
