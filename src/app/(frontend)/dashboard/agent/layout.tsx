'use client'

import { AppShell } from '@mantine/core'
import Sidebar from '@/components/Dashboard/Agent/Sidebar'
import Header from '@/components/Header'

export default function AgentLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell header={{ height: 70 }} navbar={{ width: 260, breakpoint: 'sm' }} padding="lg">
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
