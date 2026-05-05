'use client'

import { Container, Grid, GridCol, Stack } from '@mantine/core'
import ProfileHeader from '@/components/Dashboard/User/Profile/ProfileHeader'
import PersonalInfoForm from '@/components/Dashboard/User/Profile/PersonalInfoForm'
import SecurityCard from '@/components/Dashboard/User/Profile/SecurityCard'
import CommunicationCard from '@/components/Dashboard/User/Profile/CommunicationCard'
import DangerZone from '@/components/Dashboard/User/Profile/DangerZone'

export default function ProfilePage() {
  return (
    <Container size="xl" py="xl">
      <Stack>
        <ProfileHeader />

        <Grid>
          <GridCol span={{ base: 12, lg: 7 }}>
            <PersonalInfoForm />
          </GridCol>

          <GridCol span={{ base: 12, lg: 5 }}>
            <Stack>
              <SecurityCard />
              <CommunicationCard />
            </Stack>
          </GridCol>
        </Grid>

        <DangerZone />
      </Stack>
    </Container>
  )
}
