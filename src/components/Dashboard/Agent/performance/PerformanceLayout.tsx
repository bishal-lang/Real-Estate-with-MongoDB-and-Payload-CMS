import { Grid, GridCol } from '@mantine/core'
import PerformanceHeader from './PerformanceHeader'
import StatsGrid from './StatsGrid'
import IncomingLeadsTable from './IncomingLeadsTable'
import VolumeChart from './VolumeChart'
import TopListings from './TopListings'
import Schedule from './Schedule'

export default function PerformanceLayout() {
  return (
    <>
      <PerformanceHeader />
      <StatsGrid />

      <Grid gap="lg">
        <GridCol span={{ base: 12, md: 8 }}>
          <IncomingLeadsTable />
        </GridCol>

        <GridCol span={{ base: 12, md: 4 }}>
          <VolumeChart />
          {/* <TopListings /> */}
          {/* <Schedule /> */}
        </GridCol>
      </Grid>
    </>
  )
}
