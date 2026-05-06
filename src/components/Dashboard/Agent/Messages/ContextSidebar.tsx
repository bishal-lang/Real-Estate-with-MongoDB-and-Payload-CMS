'use client'

import { Card, Text, Stack, Image, Badge } from '@mantine/core'
import { useConversations } from './ConversationContext'

export default function ContextSidebar() {
  const { selected } = useConversations()

  if (!selected) return null

  const listing = selected.listing
  const lead = selected.lead

  const image = listing?.images?.[0]?.image?.url || 'https://via.placeholder.com/300'

  const location = listing?.property?.location
    ? [listing.property.location.district, listing.property.location.province]
        .filter(Boolean)
        .join(', ')
    : 'Unknown'

  return (
    <>
      <Text fw={600}>Contextual Listing</Text>
      <br />

      <Stack>
        <Card withBorder>
          <Image src={image} height={140} />

          <Stack mt="sm">
            <Text fw={600}>{listing?.property?.title}</Text>

            <Text size="sm" c="dimmed">
              {location} • ${listing?.price?.toLocaleString?.() || '—'}
            </Text>

            <Badge color="green">{listing?.status || 'Active'}</Badge>
          </Stack>
        </Card>

        <Card withBorder>
          <Text fw={600} mb="sm">
            Lead Info
          </Text>

          <Stack gap="xs">
            <Text size="sm">Status: {lead?.status || 'Unknown'}</Text>
            <Text size="sm">Source: {lead?.source || '—'}</Text>
          </Stack>
        </Card>
      </Stack>
    </>
  )
}
