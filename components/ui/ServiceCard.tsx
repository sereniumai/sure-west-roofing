import Link from 'next/link'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  featured?: boolean
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
  featured = false,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={`block rounded-2xl p-6 transition-all duration-300 group ${
        featured
          ? 'border-2 border-[#D6AE60] bg-[#D6AE60]/5 hover:shadow-lg'
          : 'bg-white border border-[#E5E2D9] hover:border-[#D6AE60] hover:shadow-md'
      }`}
    >
      <div className="w-12 h-12 rounded-xl bg-[#D6AE60]/10 flex items-center justify-center mb-4 group-hover:bg-[#D6AE60]/20 transition-colors duration-300">
        <div className="text-[#D6AE60] w-6 h-6 group-hover:text-[#B8943F] transition-colors duration-300 [&>svg]:w-6 [&>svg]:h-6">
          {icon}
        </div>
      </div>

      <h3 className="font-display font-semibold text-lg text-dark tracking-tight mb-2">
        {title}
      </h3>

      <p className="font-body text-sm text-body-text leading-relaxed mb-4">
        {description}
      </p>

      <span className="inline-flex items-center gap-1 font-body text-sm font-semibold text-[#D6AE60] group-hover:gap-2 transition-all duration-300">
        Learn more <span aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  )
}
