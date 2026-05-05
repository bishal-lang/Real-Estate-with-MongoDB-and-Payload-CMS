import { Title, Text, Stack } from '@mantine/core'

export default function PropertyDescription() {
  return (
    <Stack>
      <Title order={2}>Property Overview</Title>

      <Text c="dimmed">An architectural masterpiece that blends indoor and outdoor living...</Text>

      <Text c="dimmed">Featuring steel-beam construction and panoramic views...</Text>
    </Stack>
  )
}
