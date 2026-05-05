import { Group, Title, Text, Button, Badge } from '@mantine/core'
import { IconBolt } from '@tabler/icons-react'

export default function PerformanceHeader() {
  return (
    <Group justify="space-between" mb="xl">
      <div>
        <Title order={2}>Performance Overview</Title>

        <Group mt={8}>
          <Badge color="green" variant="light">
            RE-LICENSE: #4829-001
          </Badge>

          <Text size="sm" c="dimmed">
            Updated 2 minutes ago
          </Text>
        </Group>
      </div>

      <Group>
        <Button variant="outline">Monthly Report</Button>

        <Button leftSection={<IconBolt size={16} />}>Quick Actions</Button>
      </Group>
    </Group>
  )
}
