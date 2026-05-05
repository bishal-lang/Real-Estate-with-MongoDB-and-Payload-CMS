import { Grid, Stack, Title, Text, GridCol } from '@mantine/core'
import SecurityCard from './SecurityCard'
import PreferencesCard from './PreferencesCard'
import ActionBar from './ActionBar'
import NotificationsCard from './NotificationCard'

export default function SettingsLayout() {
  return (
    <Stack gap="xl">
      {/* Header */}
      <div>
        <Title order={2}>Portal Settings</Title>
        <Text c="dimmed">Configure your professional preferences and security protocols.</Text>
      </div>

      <Grid>
        <GridCol span={{ base: 12, md: 9 }}>
          <Stack gap="lg">
            <SecurityCard />
            <NotificationsCard />
            <PreferencesCard />
            <ActionBar />
          </Stack>
        </GridCol>
      </Grid>
    </Stack>
  )
}
