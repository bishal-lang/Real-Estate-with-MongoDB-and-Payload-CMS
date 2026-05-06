import { headers } from 'next/headers'

export async function getInquiries() {
  const headersList = await headers()

  const protocol = headersList.get('x-forwarded-proto') || 'http'
  const host = headersList.get('host')

  const url = new URL(`${protocol}://${host}/api/inquiries`)
  url.searchParams.set('depth', '2')

  const res = await fetch(url.toString(), {
    headers: {
      cookie: headersList.get('cookie') || '',
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('❌ Inquiries fetch failed:', res.status, text)
    throw new Error(`Failed to fetch inquiries: ${res.status}`)
  }

  return res.json()
}
