'use client'

import { Container, Stack, Grid, GridCol } from '@mantine/core'
import SettingsHeader from './SettingsHeader'
import AccountPrivacy from './AccountPrivacy'
import ConnectedAccounts from './ConnectedAccounts'
import NotificationPreferences from './NotificationPreferences'
import AccessibilitySettings from './AccessibilitySettings'

export default function SettingsPage() {
  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <SettingsHeader />

        <Grid gap="lg">
          <GridCol span={{ base: 12, lg: 8 }}>
            <AccountPrivacy />
          </GridCol>

          <GridCol span={{ base: 12, lg: 4 }}>
            <ConnectedAccounts />
          </GridCol>

          <GridCol span={12}>
            <NotificationPreferences />
          </GridCol>

          <GridCol span={{ base: 12, lg: 4 }}>
            <AccessibilitySettings />
          </GridCol>
        </Grid>
      </Stack>
    </Container>
  )
}
