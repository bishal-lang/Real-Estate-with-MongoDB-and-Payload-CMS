import { Stack, Container } from '@mantine/core'
import AgencyHero from '@/components/Agency/AgencyHero'
import AgencyMission from '@/components/Agency/AgencyMission'
import AgencyAgents from '@/components/Agency/AgencyAgents'
import AgencyLocations from '@/components/Agency/AgencyLocations'
import AgencyCTA from '@/components/Agency/AgencyCTA'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AgencyPage() {
  return (
    <Stack gap={0}>
      <Header />
      <AgencyHero />

      <Container size="xl">
        <AgencyMission />
        <AgencyAgents />
        <AgencyLocations />
      </Container>

      <AgencyCTA />
      <Footer />
    </Stack>
  )
}
