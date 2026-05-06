import { headers } from 'next/headers'

export async function getConversations() {
  const headersList = await headers()

  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

  const url = new URL(`${baseUrl}/api/conversations`)
  url.searchParams.set('depth', '2')

  const res = await fetch(url.toString(), {
    headers: {
      cookie: headersList.get('cookie') || '',
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('❌ conversations:', res.status, text)
    throw new Error('Failed to fetch conversations')
  }

  return res.json()
}
