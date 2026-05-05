import { Card, Text, Group, Image } from '@mantine/core'

export default function TopListings() {
  return (
    <Card withBorder radius="md" mb="lg">
      <Text fw={600} mb="md">
        Top Listings
      </Text>

      <Group>
        <Image src="https://via.placeholder.com/80" w={60} h={60} radius="md" />
        <div>
          <Text fw={500}>The Zenith Penthouse</Text>
          <Text size="xs" c="dimmed">
            $12,450,000
          </Text>
        </div>
      </Group>
    </Card>
  )
}
