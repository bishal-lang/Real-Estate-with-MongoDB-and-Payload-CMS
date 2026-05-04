'use client'

import { Card, Image, Text, Group, Badge, Button, Stack } from '@mantine/core'

type Props = {
  title: string
  location: string
  price: string
  beds: number
  baths: number
  area: number
  image: string
  tag?: string
}

export default function PropertyCard({
  title,
  location,
  price,
  beds,
  baths,
  area,
  image,
  tag,
}: Props) {
  return (
    <Card shadow="sm" radius="lg" withBorder>
      <Card.Section>
        <Image src={image} height={220} alt={title} />
      </Card.Section>

      <Stack mt="md" gap="xs">
        {tag && <Badge color="green">{tag}</Badge>}

        <Group justify="space-between">
          <Stack gap={0}>
            <Text fw={600}>{title}</Text>
            <Text size="sm" c="dimmed">
              {location}
            </Text>
          </Stack>

          <Text fw={700} c="green">
            {price}
          </Text>
        </Group>

        <Group mt="sm" c="dimmed" gap="lg">
          <Text size="sm">🛏 {beds}</Text>
          <Text size="sm">🛁 {baths}</Text>
          <Text size="sm">📐 {area} sqft</Text>
        </Group>

        <Button variant="light" mt="sm">
          Details
        </Button>
      </Stack>
    </Card>
  )
}
