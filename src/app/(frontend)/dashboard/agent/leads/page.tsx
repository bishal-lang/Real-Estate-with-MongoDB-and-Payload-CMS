'use client'

import { Stack } from '@mantine/core'
import LeadsHeader from '@/components/Dashboard/Agent/Leads/LeadsHeader'
import LeadsFilters from '@/components/Dashboard/Agent/Leads/LeadsFilters'
import LeadsLayout from '@/components/Dashboard/Agent/Leads/LeadsLayout'

export default function LeadsPage() {
  return (
    <Stack gap="lg">
      <LeadsHeader />
      <LeadsFilters />
      <LeadsLayout />
    </Stack>
  )
}
