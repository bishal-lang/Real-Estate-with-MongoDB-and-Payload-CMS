'use client'

import { Grid } from '@mantine/core'
import LeadsTable from './LeadsTable'
import LeadDetailsCard from './LeadDetailsCard'

export default function LeadsLayout() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, lg: 7 }}>
        <LeadsTable />
      </Grid.Col>

      <Grid.Col span={{ base: 12, lg: 5 }}>
        <LeadDetailsCard />
      </Grid.Col>
    </Grid>
  )
}
