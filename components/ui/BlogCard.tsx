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
      className="block bg-white rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 group"
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
        <span className="bg-[#D4AF60]/10 text-[#D4AF60] text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full inline-block mb-3">
          {category}
        </span>

        <h3 className="font-display font-semibold text-base text-dark tracking-tight leading-snug mb-2">
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
