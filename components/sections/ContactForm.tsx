'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react'

const services = [
  'Roof Replacement',
  'Roof Repair',
  'Hail Damage Repair',
  'Roof Maintenance',
  'Roof Inspection',
  'Skylight Installation',
  'Emergency Roof Repair',
  'Other',
]

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  service: string
  consent: boolean
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  address?: string
  service?: string
  consent?: string
}

const SERVICE_AREAS = ['cochrane', 'calgary', 'canmore']

function isInServiceArea(address: string): boolean {
  const lower = address.toLowerCase()
  return SERVICE_AREAS.some((city) => lower.includes(city))
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.firstName.trim() || data.firstName.trim().length < 2) {
    errors.firstName = 'Please enter your first name'
  }

  if (!data.lastName.trim() || data.lastName.trim().length < 2) {
    errors.lastName = 'Please enter your last name'
  }

  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  const digits = data.phone.replace(/\D/g, '')
  if (digits.length < 10) {
    errors.phone = 'Please enter a valid phone number'
  }

  if (!data.address.trim() || data.address.trim().length < 5) {
    errors.address = 'Please enter your property address'
  } else if (!isInServiceArea(data.address)) {
    errors.address =
      'Sorry, we currently only serve Cochrane, Calgary, and Canmore.'
  }

  if (!data.service) {
    errors.service = 'Please select a service'
  }

  if (!data.consent) {
    errors.consent = 'You must consent to receive communications to submit'
  }

  return errors
}

const inputBase =
  'w-full px-4 py-3.5 border bg-white font-body text-sm text-[#2C4766] placeholder:text-[#5A7A9A] focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 rounded-[--radius-sm]'
const inputNormal = `${inputBase} border-[#E8E8E8] focus:ring-[#D4AF60]/50 focus:border-[#D4AF60]`
const inputError = `${inputBase} border-red-400 focus:ring-red-400/50 focus:border-red-400`
const labelClass = 'block font-body text-sm font-medium text-[#2C4766] mb-1.5'

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    consent: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState('')

  const addressInputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<ReturnType<typeof Object> | null>(null)

  // Google Places autocomplete, progressive enhancement
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    if (!apiKey) return

    function initAutocomplete() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const google = (window as any).google
      if (!addressInputRef.current || !google?.maps?.places) return

      autocompleteRef.current = new google.maps.places.Autocomplete(
        addressInputRef.current,
        {
          types: ['address'],
          componentRestrictions: { country: 'ca' },
          fields: ['formatted_address'],
        }
      )

      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current?.getPlace()
        if (place?.formatted_address) {
          const addr = place.formatted_address as string
          setFormData((prev) => ({ ...prev, address: addr }))
          if (!isInServiceArea(addr)) {
            setErrors((prev) => ({
              ...prev,
              address:
                'Sorry, we currently only serve Cochrane, Calgary, and Canmore.',
            }))
          } else {
            setErrors((prev) => ({ ...prev, address: undefined }))
          }
        }
      })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).google?.maps?.places) {
      initAutocomplete()
      return
    }

    if (document.getElementById('google-maps-places')) return

    const script = document.createElement('script')
    script.id = 'google-maps-places'
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
    script.async = true
    script.defer = true
    script.onload = initAutocomplete
    document.head.appendChild(script)
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10)
    let formatted = digits
    if (digits.length > 6) {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`
    } else if (digits.length > 3) {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`
    }
    setFormData((prev) => ({ ...prev, phone: formatted }))
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')
    setServerError('')

    try {
      const { consent: _, ...payload } = formData
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setServerError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        className="bg-white rounded-[--radius-md] border border-[#E8E8E8] p-8 lg:p-12 text-center shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="font-display font-bold text-2xl text-dark tracking-tight mb-2">
          Thank You!
        </h3>
        <p className="font-body text-body-text leading-relaxed max-w-md mx-auto">
          We&apos;ve received your request and sent a confirmation to your
          phone. One of our certified roofers will be in touch within
          24&nbsp;hours to schedule your free consultation.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="bg-white rounded-[--radius-md] border border-[#E8E8E8] p-6 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="font-display font-bold text-xl lg:text-2xl text-dark tracking-tight mb-6">
        Request Your Free Estimate
      </h2>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        {/* First + Last name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? inputError : inputNormal}
            />
            {errors.firstName && (
              <p className="font-body text-xs text-red-500 mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Smith"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? inputError : inputNormal}
            />
            {errors.lastName && (
              <p className="font-body text-xs text-red-500 mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? inputError : inputNormal}
          />
          {errors.email && (
            <p className="font-body text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="403-555-1234"
            value={formData.phone}
            onChange={handlePhoneChange}
            className={errors.phone ? inputError : inputNormal}
          />
          {errors.phone && (
            <p className="font-body text-xs text-red-500 mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Address, Google Places autocomplete when API key is set */}
        <div>
          <label htmlFor="address" className={labelClass}>
            Property Address
          </label>
          <input
            ref={addressInputRef}
            id="address"
            name="address"
            type="text"
            placeholder="Start typing your address..."
            value={formData.address}
            onChange={handleChange}
            onBlur={() => {
              if (formData.address.trim().length >= 5 && !isInServiceArea(formData.address)) {
                setErrors((prev) => ({
                  ...prev,
                  address:
                    'Sorry, we currently only serve Cochrane, Calgary, and Canmore.',
                }))
              }
            }}
            className={errors.address ? inputError : inputNormal}
          />
          {errors.address && (
            <p className="font-body text-xs text-red-500 mt-1">{errors.address}</p>
          )}
        </div>

        {/* Service Interest */}
        <div>
          <label htmlFor="service" className={labelClass}>
            Service Interest
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`${errors.service ? inputError : inputNormal} appearance-none pr-10 ${
                !formData.service ? 'text-muted' : ''
              }`}
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
          </div>
          {errors.service && (
            <p className="font-body text-xs text-red-500 mt-1">{errors.service}</p>
          )}
        </div>

        {/* CASL consent */}
        <div className="mt-1">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, consent: e.target.checked }))
                if (errors.consent) {
                  setErrors((prev) => ({ ...prev, consent: undefined }))
                }
              }}
              className="mt-0.5 h-4 w-4 rounded border-[#E8E8E8] accent-[#D4AF60] flex-shrink-0 cursor-pointer"
            />
            <span className="font-body text-xs text-body-text leading-relaxed">
              I consent to receive automated SMS messages and email
              communications from Sure West Roofing regarding my roofing inquiry
              and related services. Message and data rates may apply. I can
              withdraw my consent at any time by replying STOP.
            </span>
          </label>
          {errors.consent && (
            <p className="font-body text-xs text-red-500 mt-1.5 ml-7">
              {errors.consent}
            </p>
          )}
        </div>

        {/* Server error */}
        {status === 'error' && serverError && (
          <motion.div
            className="flex items-start gap-2.5 bg-red-50 text-red-700 rounded-[--radius-sm] px-4 py-3"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p className="font-body text-sm">{serverError}</p>
          </motion.div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`group w-full px-7 py-4 rounded-[--radius-sm] font-body font-semibold text-base text-white bg-[#D4AF60] shadow-[0_4px_0_rgba(0,0,0,0.15)] overflow-hidden relative flex items-center justify-center gap-2 mt-1 transition-all duration-200 ${
            status === 'submitting'
              ? 'opacity-70 cursor-not-allowed'
              : 'hover:bg-[#B8943F] hover:shadow-[0_6px_20px_rgba(214,174,96,0.4)] active:scale-[0.98]'
          }`}
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full pointer-events-none" />
          <span className="relative z-10 flex items-center gap-2">
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Get My Free Estimate
                <Send className="w-4 h-4" />
              </>
            )}
          </span>
        </button>

        <p className="font-body text-xs text-muted text-center">
          By submitting you agree to our{' '}
          <a
            href="/privacy"
            className="underline hover:text-[#D4AF60] transition-colors"
          >
            Privacy Policy
          </a>
          . You can unsubscribe at any time by replying STOP.
        </p>
      </form>
    </motion.div>
  )
}
