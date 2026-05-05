import { Container, Grid, GridCol } from '@mantine/core'
import NewHeader from '@/components/Dashboard/Agent/new/NewHeader'
import NewStepper from '@/components/Dashboard/Agent/new/NewStepper'
import BasicDetailsForm from '@/components/Dashboard/Agent/new/BasicDetailsForm'
import LocationForm from '@/components/Dashboard/Agent/new/LocationForm'
import MediaUpload from '@/components/Dashboard/Agent/new/MediaUpload'
import FeaturesForm from '@/components/Dashboard/Agent/new/FeaturesForm'
import ListingSidebar from '@/components/Dashboard/Agent/new/ListingSidebar'

export default function NewListingPage() {
  return (
    <Container size="lg" py="xl">
      <NewHeader />
      <NewStepper />

      <Grid mt="xl">
        <GridCol span={{ base: 12, lg: 8 }}>
          <BasicDetailsForm />
          <LocationForm />
          <MediaUpload />
          <FeaturesForm />
        </GridCol>

        <GridCol span={{ base: 12, lg: 4 }}>
          <ListingSidebar />
        </GridCol>
      </Grid>
    </Container>
  )
}
