import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/getCurrentUser'

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  switch (user.role) {
    case 'agent':
      redirect('/dashboard/agent')

    case 'admin':
      redirect('/admin')

    default:
      redirect('/dashboard/user')
  }
}
