'use client'

import { AppShell } from '@mantine/core'
import SavedListings from '@/components/Dashboard/User/SavedListings'
import InquiriesTable from '@/components/Dashboard/User/InquiriesTable'
import Header from '@/components/Header'
import Sidebar from '@/components/Dashboard/Agent/Sidebar'

export default function DashboardPage() {
  return (
    <AppShell header={{ height: 70 }} navbar={{ width: 260, breakpoint: 'sm' }} padding="lg">
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>
        <SavedListings />

        <div style={{ marginTop: 60, display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
          <InquiriesTable />
        </div>
      </AppShell.Main>
    </AppShell>
  )
}
