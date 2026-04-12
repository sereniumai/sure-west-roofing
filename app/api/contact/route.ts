import { NextRequest, NextResponse } from 'next/server'

const WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/TjHzWgaPLrjgr7iKEvaP/webhook-trigger/aea2b8d3-1a0e-4925-902e-0ec85a887b5c'

/** Capitalise first letter of each word, lowercase the rest */
function titleCase(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

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
  firstName: string
  lastName: string
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

  const { firstName, lastName, email, phone, address, service } = body as Record<
    string,
    unknown
  >

  if (!firstName || typeof firstName !== 'string' || firstName.trim().length < 2) {
    return { ok: false, error: 'First name is required' }
  }

  if (!lastName || typeof lastName !== 'string' || lastName.trim().length < 2) {
    return { ok: false, error: 'Last name is required' }
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

  const addressLower = (address as string).toLowerCase()
  if (
    !['cochrane', 'calgary', 'canmore'].some((city) =>
      addressLower.includes(city)
    )
  ) {
    return {
      ok: false,
      error: 'Sorry, we currently only serve Cochrane, Calgary, and Canmore.',
    }
  }

  if (!service || typeof service !== 'string' || !VALID_SERVICES.includes(service)) {
    return { ok: false, error: 'Please select a valid service' }
  }

  return {
    ok: true,
    data: {
      firstName: titleCase(firstName),
      lastName: titleCase(lastName),
      email: email.trim().toLowerCase(),
      phone: digits,
      address: titleCase(address),
      service,
    },
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

    const webhookPayload = {
      first_name: data.firstName,
      last_name: data.lastName,
      full_name: `${data.firstName} ${data.lastName}`,
      phone: data.phone,
      email: data.email,
      address: data.address,
      service_interest: data.service,
      tags: ['sure-west-website-form'],
      source: 'Sure West Roofing Website',
    }

    const webhookRes = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(webhookPayload),
    })

    if (!webhookRes.ok) {
      console.error(
        'GoHighLevel webhook error:',
        webhookRes.status,
        await webhookRes.text().catch(() => '')
      )
      return NextResponse.json(
        {
          error:
            'Something went wrong. Please try again or email us at info@surewestroofing.ca.',
        },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      message:
        'Your request has been received. We will be in touch within 24 hours.',
    })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      {
        error:
          'Something went wrong. Please try again or email us at info@surewestroofing.ca.',
      },
      { status: 500 }
    )
  }
}
