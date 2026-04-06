'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { BlogCard } from '@/components/ui/BlogCard'
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
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
}

export function BlogPreview({
  label,
  heading,
  body,
  posts,
  cta,
}: BlogPreviewProps) {
  return (
    <section className="bg-[#F9F8F5] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel text={label} className="justify-center" />

          <h2 className="font-display font-bold text-3xl lg:text-4xl text-dark tracking-wide mt-3">
            {heading}
          </h2>

          <p className="font-body text-body-text leading-relaxed mt-4">
            {body}
          </p>
        </div>

        {/* Posts grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={cardVariants}>
              <BlogCard
                category={post.category}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                image={post.image}
                slug={post.slug}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" href={cta.href}>
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
