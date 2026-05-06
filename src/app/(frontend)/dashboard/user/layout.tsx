import { AppShell, AppShellHeader, AppShellMain, AppShellNavbar } from '@mantine/core'
import Header from '@/components/Header'
import Sidebar from '@/components/Dashboard/User/Sidebar'
import { getCurrentUser } from '@/lib/getCurrentUser'
import { redirect } from 'next/navigation'

export default async function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell header={{ height: 70 }} navbar={{ width: 260, breakpoint: 'sm' }} padding="lg">
      <AppShellHeader>
        <Header />
      </AppShellHeader>

      <AppShellNavbar p="md">
        <Sidebar />
      </AppShellNavbar>

      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  )
}
