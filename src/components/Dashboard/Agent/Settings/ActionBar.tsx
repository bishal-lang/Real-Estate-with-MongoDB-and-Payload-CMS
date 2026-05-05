import { Group, Button, Text } from '@mantine/core'

export default function ActionBar() {
  return (
    <Group justify="space-between" mt="md">
      <Text size="sm" c="dimmed">
        Last synced: 2 minutes ago
      </Text>

      <Group>
        <Button variant="default">Cancel</Button>
        <Button color="green">Save Changes</Button>
      </Group>
    </Group>
  )
}
