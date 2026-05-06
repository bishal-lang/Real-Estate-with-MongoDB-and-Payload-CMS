import { headers } from 'next/headers'

export async function getAgentListings() {
  const headersList = await headers()

  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

  const url = new URL(`${baseUrl}/api/listings`)
  url.searchParams.set('depth', '2')

  const res = await fetch(url.toString(), {
    headers: {
      cookie: headersList.get('cookie') || '',
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('❌ listings fetch failed:', res.status, text)
    throw new Error('Failed to fetch listings')
  }

  return res.json()
}
