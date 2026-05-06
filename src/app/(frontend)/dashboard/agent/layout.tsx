import { AppShell, AppShellHeader, AppShellMain, AppShellNavbar } from '@mantine/core'
import Sidebar from '@/components/Dashboard/Agent/Sidebar'
import Header from '@/components/Header'
import { getCurrentUser } from '@/lib/getCurrentUser'
import { redirect } from 'next/navigation'

export default async function AgentLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell header={{ height: 70 }} navbar={{ width: 260, breakpoint: 'sm' }} padding="lg">
      <AppShellHeader>
        <Header />
      </AppShellHeader>

      <AppShellNavbar>
        <Sidebar />
      </AppShellNavbar>

      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  )
}
