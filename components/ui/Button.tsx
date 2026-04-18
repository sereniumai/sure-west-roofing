'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  showArrow?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[--color-accent] text-[--color-near-black] hover:bg-[--color-accent-dark] hover:shadow-[0_8px_24px_-8px_rgba(184,148,63,0.55)]',
  secondary:
    'bg-[--color-accent] text-[--color-near-black] hover:bg-[--color-accent-dark] hover:shadow-[0_8px_24px_-8px_rgba(184,148,63,0.55)]',
  ghost:
    'bg-white/10 backdrop-blur-sm text-white border border-white/15 hover:bg-[--color-accent] hover:text-[--color-near-black] hover:border-[--color-accent] hover:shadow-[0_8px_24px_-8px_rgba(184,148,63,0.55)]',
  outline:
    'bg-transparent text-[--color-near-black] border-2 border-[--color-near-black] hover:bg-[--color-near-black] hover:text-white',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-[44px] px-[18px] text-[14px]',
  md: 'h-[50px] px-[22px] text-[15px]',
  lg: 'h-[56px] px-[26px] text-[16px]',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  showArrow = true,
}: ButtonProps) {
  const styles = `group inline-flex items-center justify-center gap-2.5 font-body font-bold uppercase tracking-[0.04em] transition-[background-color,box-shadow,transform,border-color] duration-200 ease-out cursor-pointer border-0 rounded-[--radius-sm] hover:scale-[1.02] active:scale-[0.98] ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span className="btn-arrow" aria-hidden="true">
          <ChevronRight className="btn-chev" strokeWidth={1.5} />
          <ChevronRight className="btn-chev" strokeWidth={1.5} />
          <ChevronRight className="btn-chev" strokeWidth={1.5} />
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={styles} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {content}
    </button>
  )
}
