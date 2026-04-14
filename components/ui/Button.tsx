'use client'

import Link from 'next/link'

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
    'bg-[--color-accent] text-[--color-near-black] hover:opacity-85',
  secondary:
    'bg-[--color-accent] text-[--color-near-black] hover:opacity-85',
  ghost:
    'bg-transparent text-white border border-white/40 hover:bg-white hover:text-[--color-near-black]',
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
  const styles = `inline-flex items-center justify-center gap-2.5 font-body font-bold uppercase tracking-[0.04em] transition-opacity duration-200 cursor-pointer border-0 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <span className="text-sm">&rsaquo;</span>}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={styles}>
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
