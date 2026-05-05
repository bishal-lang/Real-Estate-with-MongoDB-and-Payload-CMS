import { getUser } from '@/lib/getUser'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const user = await getUser() // from Payload / auth

  if (!user) redirect('/login')

  if (user.role === 'agent') {
    redirect('/dashboard/agent')
  }

  if (user.role === 'user') {
    redirect('/dashboard/user')
  }

  return null
}
