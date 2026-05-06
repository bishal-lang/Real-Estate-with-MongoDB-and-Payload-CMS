import { cookies } from 'next/headers'

export async function getCurrentUser() {
  const cookieStore = await cookies()

  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

  // ✅ manually build cookie header
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join('; ')

  const res = await fetch(`${baseUrl}/api/users/me`, {
    headers: {
      Cookie: cookieHeader,
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    console.error('ME FAILED:', res.status)
    return null
  }

  const data = await res.json()

  return data.user || null
}
