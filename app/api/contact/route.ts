import { NextRequest, NextResponse } from 'next/server'

const VALID_SERVICES = [
  'Roof Replacement',
  'Roof Repair',
  'Hail Damage Repair',
  'Roof Maintenance',
  'Roof Inspection',
  'Skylight Installation',
  'Emergency Roof Repair',
  'Other',
]

interface ContactPayload {
  name: string
  email: string
  phone: string
  address: string
  service: string
}

function validatePayload(
  body: unknown
): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Invalid request body' }
  }

  const { name, email, phone, address, service } = body as Record<string, unknown>

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return { ok: false, error: 'Name is required (minimum 2 characters)' }
  }

  if (
    !email ||
    typeof email !== 'string' ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return { ok: false, error: 'A valid email address is required' }
  }

  if (!phone || typeof phone !== 'string') {
    return { ok: false, error: 'Phone number is required' }
  }

  const digits = phone.replace(/\D/g, '')
  if (digits.length < 10) {
    return { ok: false, error: 'Please enter a valid 10-digit phone number' }
  }

  if (!address || typeof address !== 'string' || address.trim().length < 5) {
    return { ok: false, error: 'A valid property address is required' }
  }

  if (!service || typeof service !== 'string' || !VALID_SERVICES.includes(service)) {
    return { ok: false, error: 'Please select a valid service' }
  }

  return {
    ok: true,
    data: {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: digits,
      address: address.trim(),
      service,
    },
  }
}

/** Convert a 10- or 11-digit string to E.164 (+1XXXXXXXXXX) */
function toE164(digits: string): string {
  if (digits.length === 10) return `+1${digits}`
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`
  return `+${digits}`
}

async function sendSMS(
  to: string,
  body: string
): Promise<{ delivered: boolean; error?: string }> {
  const sid = process.env.TWILIO_ACCOUNT_SID
  const token = process.env.TWILIO_AUTH_TOKEN
  const from = process.env.TWILIO_PHONE_NUMBER

  if (!sid || !token || !from) {
    console.warn('Twilio credentials not configured — skipping SMS')
    return { delivered: false, error: 'SMS service not configured' }
  }

  try {
    const res = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ To: to, From: from, Body: body }),
      }
    )

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      console.error('Twilio API error:', err)
      return { delivered: false, error: 'SMS delivery failed' }
    }

    return { delivered: true }
  } catch (err) {
    console.error('SMS send error:', err)
    return { delivered: false, error: 'SMS delivery failed' }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const result = validatePayload(body)
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 400 })
    }

    const { data } = result

    // Compose a personal, professional confirmation SMS
    const firstName = data.name.split(' ')[0]
    const smsBody = [
      `Hi ${firstName}, this is Sure West Roofing.`,
      `Thanks for requesting a free ${data.service.toLowerCase()} estimate!`,
      `We've received your details and one of our certified roofers will be in touch within 24 hours to schedule your free consultation.`,
      `If you need us sooner, just reply to this message.`,
      `— Sure West Roofing, Cochrane`,
    ].join(' ')

    const sms = await sendSMS(toE164(data.phone), smsBody)

    // Log the submission for processing
    // In production, persist to a database and/or send notification email
    console.log('Contact form submission:', {
      ...data,
      smsDelivered: sms.delivered,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      smsDelivered: sms.delivered,
      message:
        'Your request has been received. We will be in touch within 24 hours.',
    })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or email us at info@surewestroofing.ca.' },
      { status: 500 }
    )
  }
}
