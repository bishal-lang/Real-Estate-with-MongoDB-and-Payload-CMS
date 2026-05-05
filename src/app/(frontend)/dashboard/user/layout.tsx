'use client'

import { AppShell } from '@mantine/core'
import Header from '@/components/Header'
import Sidebar from '@/components/Dashboard/User/Sidebar'

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell header={{ height: 70 }} navbar={{ width: 260, breakpoint: 'sm' }} padding="lg">
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
