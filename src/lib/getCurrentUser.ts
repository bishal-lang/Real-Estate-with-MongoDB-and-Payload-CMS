import { headers } from 'next/headers'

export async function getCurrentUser() {
  const headersList = await headers()

  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

  const res = await fetch(`${baseUrl}/api/users/me`, {
    headers: {
      cookie: headersList.get('cookie') || '',
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    const text = await res.text()
    console.error(' user fetch failed:', res.status, text)
    return null
  }

  return res.json()
}
