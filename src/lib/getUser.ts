import { cookies } from 'next/headers'

export async function getUser() {
  const cookieStore = await cookies()

  const cookieString = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join('; ')

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`, {
    headers: {
      cookie: cookieString,
    },
    cache: 'no-store',
  })

  if (!res.ok) return null

  return res.json()
}
