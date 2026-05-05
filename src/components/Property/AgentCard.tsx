import { Card, Avatar, Text, Button, Stack, Group } from '@mantine/core'

export default function AgentCard() {
  return (
    <Card mt="md" radius="md">
      <Group>
        <Avatar size="lg" />
        <div>
          <Text fw={600}>Marcus Sterling</Text>
          <Text size="sm" c="dimmed">
            Senior Portfolio Director
          </Text>
        </div>
      </Group>

      <Stack mt="md">
        <Button variant="outline">Call</Button>
        <Button variant="subtle">Message</Button>
      </Stack>
    </Card>
  )
}
