'use client'

import { useState, type ReactNode } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface AccordianItem {
  id: string
  title: string
  content: ReactNode
  /** Optional leading element — e.g. a gold "01" numeral or an icon. */
  leading?: ReactNode
}

interface AccordianProps {
  items: AccordianItem[]
  /** id of the item that should be open on mount. Null keeps all closed. */
  defaultOpen?: string | null
  className?: string
}

/**
 * Compact single-open accordion. Small title, plus-to-minus indicator,
 * thin hairline rules between items.
 * Designed to sit inline inside a section (no card wrapper).
 */
export function Accordian({ items, defaultOpen = null, className }: AccordianProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpen)

  return (
    <div
      className={cn(
        'border-y border-[--color-near-black]/10 divide-y divide-[--color-near-black]/10',
        className,
      )}
    >
      {items.map(({ id, title, content, leading }) => {
        const isOpen = openId === id

        return (
          <div key={id} className="relative">
            {/* Gold rail when open */}
            {isOpen && (
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 bottom-0 w-[2px] pointer-events-none"
                style={{ background: 'var(--color-accent, #D4AF60)' }}
              />
            )}

            <button
              type="button"
              onClick={() => setOpenId((curr) => (curr === id ? null : id))}
              aria-expanded={isOpen}
              aria-controls={`accordian-panel-${id}`}
              className="group w-full flex items-center gap-3 text-left px-4 md:px-5 py-4 transition-colors duration-300 hover:bg-[rgba(26,22,18,0.02)] focus:outline-none focus-visible:bg-[rgba(26,22,18,0.03)] select-none cursor-pointer"
            >
              {leading && (
                <span className="flex-shrink-0 flex items-center">{leading}</span>
              )}
              <span
                className={cn(
                  'flex-1 text-[15px] md:text-[16px] font-semibold tracking-[-0.005em] transition-colors duration-300',
                  isOpen
                    ? 'text-[--color-near-black]'
                    : 'text-[--color-near-black]/75 group-hover:text-[--color-near-black]',
                )}
                style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
              >
                {title}
              </span>

              {/* Plus / minus indicator */}
              <span className="relative w-4 h-4 flex-shrink-0">
                <Plus
                  className={cn(
                    'absolute inset-0 text-[--color-near-black] transition-opacity duration-300',
                    isOpen ? 'opacity-0' : 'opacity-100',
                  )}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <Minus
                  className={cn(
                    'absolute inset-0 transition-opacity duration-300',
                    isOpen ? 'opacity-100' : 'opacity-0',
                  )}
                  style={{ color: 'var(--color-accent, #D4AF60)' }}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>
            </button>

            {isOpen && (
              <div
                id={`accordian-panel-${id}`}
                role="region"
                style={{ overflow: 'hidden' }}
              >
                <div
                  className="px-4 md:px-5 pb-5 pt-0 text-[14.5px] leading-[1.7] text-[--color-near-black]/70"
                  style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                >
                  {content}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
