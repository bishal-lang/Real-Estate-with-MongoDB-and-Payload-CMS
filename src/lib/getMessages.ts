import { headers } from 'next/headers'

export async function getMessages(conversationId: string) {
  const headersList = await headers()

  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

  const url = new URL(`${baseUrl}/api/messages`)
  url.searchParams.set('depth', '1')
  url.searchParams.set('where[conversation][equals]', conversationId)
  url.searchParams.set('sort', 'createdAt')

  const res = await fetch(url.toString(), {
    headers: {
      cookie: headersList.get('cookie') || '',
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch messages')
  }

  return res.json()
}
