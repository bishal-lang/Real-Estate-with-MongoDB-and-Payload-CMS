import { headers } from 'next/headers'

export async function getSavedListings() {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : API_BASE

  const headersList = await headers()

  const protocol = headersList.get('x-forwarded-proto') || 'http'
  const host = headersList.get('host')

  const url = new URL(`/api/users/me`, baseUrl)
  url.searchParams.set('depth', '2')

  const res = await fetch(url.toString(), {
    headers: {
      cookie: headersList.get('cookie') || '',
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    return null
  }

  return res.json()
}
