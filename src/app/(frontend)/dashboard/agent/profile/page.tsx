'use client'

import { Card, Container, Grid, GridCol, Stack } from '@mantine/core'
import { ProfileHero } from '@/components/Dashboard/Agent/Profile/ProfileHero'
import { BioCard } from '@/components/Dashboard/Agent/Profile/BioCard'
import { SpecializationsCard } from '@/components/Dashboard/Agent/Profile/SpecializationCard'
import { VerificationCard } from '@/components/Dashboard/Agent/Profile/VerificationCard'
import { ContactCard } from '@/components/Dashboard/Agent/Profile/ContactCard'

export default function Page() {
  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <Card p="xl" withBorder>
          <ProfileHero />
        </Card>

        <Grid>
          <GridCol span={{ base: 12, lg: 8 }}>
            <Stack>
              <BioCard />
              <SpecializationsCard />
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, lg: 4 }}>
            <Stack>
              <VerificationCard />
              <ContactCard />
            </Stack>
          </GridCol>
        </Grid>
      </Stack>
    </Container>
  )
}
