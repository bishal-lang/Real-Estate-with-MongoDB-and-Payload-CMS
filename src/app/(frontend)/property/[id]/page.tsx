import { Grid, Container, GridCol } from '@mantine/core'
import PropertyGallery from '@/components/Property/PropertyGallery'
import PropertyHeader from '@/components/Property/PropertyHeader'
import PropertyStats from '@/components/Property/PropertyStats'
import PropertyDescription from '@/components/Property/PropertyDescription'
import PropertyFeatures from '@/components/Property/PropertyFeatures'
import PropertyMap from '@/components/Property/PropertyMap'
import ScheduleTourCard from '@/components/Property/ScheduleTourCard'
import AgentCard from '@/components/Property/AgentCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PropertyPage() {
  return (
    <Container size="lg">
      <Header />
      <PropertyGallery />

      <Grid>
        <GridCol span={8}>
          <PropertyHeader />
          <PropertyStats />
          <PropertyDescription />
          <PropertyFeatures />
          <PropertyMap />
        </GridCol>

        <GridCol span={4}>
          <ScheduleTourCard />
          <AgentCard />
        </GridCol>
      </Grid>
      <Footer />
    </Container>
  )
}
