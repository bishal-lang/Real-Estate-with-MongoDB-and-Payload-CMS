import { headers } from 'next/headers'

type GetListingsParams = {
  page?: number
  limit?: number
}

export async function getListings({ page = 1, limit = 10 }: GetListingsParams = {}) {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : API_BASE
  const headersList = await headers()

  const protocol = headersList.get('x-forwarded-proto') || 'http'
  const host = headersList.get('host')

  const url = new URL(`/api/listings`, baseUrl)

  url.searchParams.set('depth', '2')
  url.searchParams.set('page', String(page))
  url.searchParams.set('limit', String(limit))

  const res = await fetch(url.toString(), {
    cache: 'no-store',
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('Listings fetch failed:', res.status, text)
    throw new Error(`Failed to fetch listings: ${res.status}`)
  }

  return res.json()
}
