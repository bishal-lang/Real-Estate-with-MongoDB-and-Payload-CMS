'use client'

import { Title, Text, Group, Card, Image, SimpleGrid, Badge } from '@mantine/core'

export default function AgentListings() {
  const data = [
    {
      title: 'Glass Pavilion',
      location: 'California',
      price: '$12.4M',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      tag: 'New',
    },
    {
      title: 'Azure Sanctuary',
      location: 'Greece',
      price: '$8.9M',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
    },
    {
      title: 'Big Smokes Mansion',
      location: 'Los Santos',
      price: '$2.5M',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
    },
  ]

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
