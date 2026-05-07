import { cookies } from 'next/headers'
import payload from 'payload'

export async function getCurrentUser() {
  const cookieStore = await cookies()
  const token = cookieStore.get('payload-token')?.value

  if (!token) return null

  const headers = new Headers()
  headers.set('Authorization', `JWT ${token}`)

  try {
    const { user } = await payload.auth({ headers })
    return user
  } catch {
    return null
  }
}
