import { Card, Text, Group } from '@mantine/core'

export default function Schedule() {
  return (
    <Card withBorder radius="md">
      <Text fw={600} mb="md">
        Today’s Schedule
      </Text>

      <Group justify="space-between">
        <div>
          <Text fw={600}>09:00 AM</Text>
          <Text size="sm" c="dimmed">
            Client Viewing
          </Text>
        </div>
      </Group>

      <Group justify="space-between" mt="md">
        <div>
          <Text fw={600}>11:30 AM</Text>
          <Text size="sm" c="dimmed">
            Lead Response
          </Text>
        </div>
      </Group>
    </Card>
  )
}
