import { Stack, Title, Text } from '@mantine/core'

export default function SettingsHeader() {
  return (
    <Stack gap={4}>
      <Title order={1}>Settings</Title>
      <Text c="dimmed">
        Manage your investment portal preferences, security protocols, and subscription details.
      </Text>
    </Stack>
  )
}
