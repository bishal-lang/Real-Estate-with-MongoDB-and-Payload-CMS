import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/getCurrentUser'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
