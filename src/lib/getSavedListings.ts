import { headers } from 'next/headers'

export async function getSavedListings() {
  const headersList = await headers()

  const protocol = headersList.get('x-forwarded-proto') || 'http'
  const host = headersList.get('host')

  const url = new URL(`${protocol}://${host}/api/users/me`)
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
