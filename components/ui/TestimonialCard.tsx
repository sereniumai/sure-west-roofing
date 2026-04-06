interface TestimonialCardProps {
  name: string
  location: string
  text: string
  initials: string
  rating: number
}

export function TestimonialCard({
  name,
  location,
  text,
  initials,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="bg-[#F8F8F8] border border-[#EBEBEB] rounded-2xl p-7 h-full flex flex-col">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-base ${i < rating ? 'text-[#D6AE60]' : 'text-[#E5E2D9]'}`}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>

      <p className="font-body text-sm text-body-text leading-relaxed flex-1 mb-6">
        &ldquo;{text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-[#1B3558] flex items-center justify-center flex-shrink-0">
          <span className="text-white font-body font-semibold text-sm">
            {initials}
          </span>
        </div>
        <div>
          <p className="font-display font-bold text-dark text-sm tracking-tight">{name}</p>
          <p className="font-body text-body-text text-xs">{location}</p>
        </div>
      </div>
    </div>
  )
}
