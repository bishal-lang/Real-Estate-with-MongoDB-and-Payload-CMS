import { Container, Stack } from '@mantine/core'
import AgentHero from '@/components/Agency/AgentHero'
import PropertyPortfolio from '@/components/Agency/PropertyPortfolio'
import Testimonials from '@/components/Agency/Testimonials'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AgencyPage() {
  return (
    <Container size="xl" px="md">
      <Header /> <br></br>
      <Stack gap="xl">
        <AgentHero />
        <PropertyPortfolio />
        <Testimonials />
      </Stack>
      <Footer />
    </Container>
  )
}
