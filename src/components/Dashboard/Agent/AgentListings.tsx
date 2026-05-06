'use client'

import { Title, Text, Group, Card, Image, SimpleGrid, Badge } from '@mantine/core'

type Listing = {
  title: string
  location: string
  price: string
  image: string
  tag?: string
}

export default function AgentListings({ data }: { data: Listing[] }) {
  return (
    <>
      <Group justify="space-between" mb="md">
        <div>
          <Title order={2}>Agent Listings</Title>
          <Text c="dimmed">
            Manage your premium property portfolio and track realtime engagement across luxury
            districts.
          </Text>
        </div>
      </Group>

      <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }}>
        {data.map((item, i) => (
          <Card key={i} shadow="sm" radius="lg" withBorder>
            <Card.Section>
              <Image src={item.image} height={200} />
            </Card.Section>

            <Text fw={600} mt="sm">
              {item.title}
            </Text>

            <Text size="sm" c="dimmed">
              {item.location}
            </Text>

            <Group justify="space-between" mt="sm">
              <Text fw={700}>{item.price}</Text>

              {item.tag && <Badge color="green">{item.tag}</Badge>}
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </>
  )
}
