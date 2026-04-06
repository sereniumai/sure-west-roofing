import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gold text-navy font-medium px-8 py-4 text-sm tracking-wide hover:brightness-90 transition-all active:scale-95',
  secondary:
    'bg-transparent text-white font-medium px-8 py-4 text-sm tracking-wide border border-white/35 hover:bg-white/10 transition-all active:scale-95',
  ghost:
    'bg-transparent text-navy font-medium px-8 py-4 text-sm tracking-wide border border-navy hover:bg-navy hover:text-white transition-all active:scale-95',
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const styles = `${variantStyles[variant]} ${className}`.trim()

  if (href) {
    return (
      <Link href={href} className={`inline-block ${styles}`}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  )
}
