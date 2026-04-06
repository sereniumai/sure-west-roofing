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
    <div className="bg-white border border-[#E5E2D9] rounded-2xl p-6">
      <span className="font-display text-6xl text-[#D6AE60] leading-none block mb-2" aria-hidden="true">
        &ldquo;
      </span>

      <p className="font-body text-sm text-body-text leading-relaxed mb-6">
        {text}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1B3558] flex items-center justify-center">
            <span className="text-white font-body font-semibold text-sm">
              {initials}
            </span>
          </div>
          <div>
            <p className="font-body font-semibold text-dark text-sm">{name}</p>
            <p className="font-body text-muted text-xs">{location}</p>
          </div>
        </div>

        <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`text-sm ${i < rating ? 'text-[#D6AE60]' : 'text-[#E5E2D9]'}`}
              aria-hidden="true"
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
