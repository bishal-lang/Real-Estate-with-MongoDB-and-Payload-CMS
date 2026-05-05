import { Card, Stack, Group, Text, Checkbox } from '@mantine/core'

function Row({ title, desc }: { title: string; desc: string }) {
  return (
    <Group justify="space-between" align="flex-start">
      <div>
        <Text fw={500}>{title}</Text>
        <Text size="sm" c="dimmed">
          {desc}
        </Text>
      </div>

      <Group>
        <Checkbox label="Email" defaultChecked />
        <Checkbox label="Push" defaultChecked />
      </Group>
    </Group>
  )
}

export default function NotificationsCard() {
  return (
    <Card withBorder p="lg">
      <Stack>
        <div>
          <Text fw={600}>Notification Alerts</Text>
          <Text size="sm" c="dimmed">
            Control how and when you receive updates.
          </Text>
        </div>

        <Row
          title="New Lead Assignments"
          desc="Instant notification when a high-intent buyer is assigned."
        />

        <Row title="Market Performance Reports" desc="Weekly summaries of territory trends." />
      </Stack>
    </Card>
  )
}
