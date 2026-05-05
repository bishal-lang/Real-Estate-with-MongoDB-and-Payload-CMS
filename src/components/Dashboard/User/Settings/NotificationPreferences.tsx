import { Card, Grid, Stack, Text, Checkbox } from '@mantine/core'

export default function NotificationPreferences() {
  return (
    <Card padding="xl" radius="lg" withBorder>
      <Stack gap="lg">
        <Text fw={600} size="lg">
          Notification Preferences
        </Text>

        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack>
              <Text fw={500}>Market Updates</Text>
              <Checkbox label="New Listing Alerts" defaultChecked />
              <Checkbox label="Weekly Reports" defaultChecked />
              <Checkbox label="Price Drops" />
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack>
              <Text fw={500}>Communication</Text>
              <Checkbox label="Push Messages" defaultChecked />
              <Checkbox label="Email Reminders" defaultChecked />
              <Checkbox label="SMS Alerts" />
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack>
              <Text fw={500}>Quiet Hours</Text>
              <Text size="sm" c="dimmed">
                Mute notifications
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Card>
  )
}
