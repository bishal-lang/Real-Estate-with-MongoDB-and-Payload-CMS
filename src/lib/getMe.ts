import { cookies } from 'next/headers'

export async function getMe() {
  const cookieStore = await cookies()

  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join('; ')

  const res = await fetch('/api/users/me', {
    headers: {
      cookie: cookieHeader,
    },
    cache: 'no-store',
  })

  if (!res.ok) return null

  return res.json()
}
