import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
  category: string
  title: string
  date: string
  excerpt: string
  image: string
  slug: string
}

export function BlogCard({
  category,
  title,
  date,
  excerpt,
  image,
  slug,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block bg-white border border-[#E5E2D9] rounded-2xl overflow-hidden hover:shadow-md hover:border-[#C49A2C] transition-all duration-300 group"
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-5">
        <span className="bg-[#C49A2C]/10 text-[#C49A2C] text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full inline-block mb-3">
          {category}
        </span>

        <h3 className="font-display font-semibold text-base text-dark tracking-wide leading-snug mb-2">
          {title}
        </h3>

        <p className="font-body text-xs text-muted mb-3">{date}</p>

        <p className="font-body text-sm text-body-text leading-relaxed line-clamp-2">
          {excerpt}
        </p>
      </div>
    </Link>
  )
}
