import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/getCurrentUser'
import { MantineProvider } from '@mantine/core'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MantineProvider>{children}</MantineProvider>
    </>
  )
}
