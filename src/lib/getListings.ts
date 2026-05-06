import { headers } from 'next/headers'

type GetListingsParams = {
  page?: number
  limit?: number
}

export async function getListings({ page = 1, limit = 10 }: GetListingsParams = {}) {
  const headersList = await headers()

  const protocol = headersList.get('x-forwarded-proto') || 'http'
  const host = headersList.get('host')

  const url = new URL(`${protocol}://${host}/api/listings`)

  url.searchParams.set('depth', '2')
  url.searchParams.set('page', String(page))
  url.searchParams.set('limit', String(limit))

  const res = await fetch(url.toString(), {
    cache: 'no-store',
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('❌ Listings fetch failed:', res.status, text)
    throw new Error(`Failed to fetch listings: ${res.status}`)
  }

  return res.json()
}
