'use client'

import { Card, Text, Stack, Group } from '@mantine/core'
import { ConversationProvider, useConversations } from './ConversationContext'

function InnerList() {
  const { conversations, selected, setSelected } = useConversations()

  return (
    <Card withBorder p="md" h="100%">
      <Stack gap="md">
        <Group justify="space-between">
          <Text fw={600}>Inbox</Text>
        </Group>

        <Stack gap="xs">
          {conversations.map((c) => (
            <Card
              key={c.id}
              withBorder
              p="sm"
              bg={selected?.id === c.id ? 'blue.0' : undefined}
              style={{ cursor: 'pointer' }}
              onClick={() => setSelected(c)}
            >
              <Group justify="space-between">
                <Text fw={600}>{c.name}</Text>
                <Text size="xs">{c.time}</Text>
              </Group>

              <Text size="sm" c={selected?.id === c.id ? 'blue' : 'dimmed'}>
                {c.listingTitle || 'No listing'}
              </Text>

              <Text size="sm" c="dimmed" lineClamp={1}>
                {c.lastMessage}
              </Text>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Card>
  )
}

export default function ConversationsList() {
  return (
    <ConversationProvider>
      <InnerList />
    </ConversationProvider>
  )
}
