import { Card, Stack, Text, Group, Button } from '@mantine/core'

export default function ConnectedAccounts() {
  return (
    <Card padding="xl" radius="lg" withBorder>
      <Stack gap="lg">
        <Text fw={600} size="lg">
          Connected Accounts
        </Text>

        <Group justify="space-between">
          <Text>Google Calendar</Text>
          <Text c="green">Linked</Text>
        </Group>

        <Group justify="space-between">
          <Text>Microsoft 365</Text>
          <Button variant="subtle">Connect</Button>
        </Group>

        <Group justify="space-between">
          <Text>LinkedIn</Text>
          <Button variant="subtle">Connect</Button>
        </Group>

        <Text size="xs" c="dimmed">
          Sync your calendar for automated scheduling.
        </Text>
      </Stack>
    </Card>
  )
}
