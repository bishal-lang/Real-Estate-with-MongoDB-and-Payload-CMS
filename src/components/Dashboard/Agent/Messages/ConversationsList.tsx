import { Card, Text, Stack, Group, Badge } from '@mantine/core'
import Link from 'next/link'

export default function ConversationsList() {
  return (
    <Card withBorder p="md" h="100%">
      <Stack gap="md">
        <Group justify="space-between">
          <Text fw={600}>Inbox</Text>
        </Group>

        <Stack gap="xs">
          <Card withBorder p="sm" bg="blue.0">
            <Group justify="space-between">
              <Text fw={600}>Sarah Mitchell</Text>
              <Text size="xs">10:42 AM</Text>
            </Group>
            <Text size="sm" c="blue">
              The Glass Pavilion, Aspen
            </Text>
            <Text size="sm" c="dimmed" lineClamp={1}>
              Could we schedule a private viewing...
            </Text>
          </Card>

          <Card withBorder p="sm">
            <Group justify="space-between">
              <Text fw={600}>Marcus Sterling</Text>
              <Text size="xs">Yesterday</Text>
            </Group>
            <Text size="sm" c="dimmed">
              Park Avenue Luxury Suite
            </Text>
          </Card>
        </Stack>
      </Stack>
    </Card>
  )
}
