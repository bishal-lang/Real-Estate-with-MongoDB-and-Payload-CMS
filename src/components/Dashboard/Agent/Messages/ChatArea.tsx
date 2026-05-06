'use client'

import { Card, Text, Group, Stack, Avatar, Button, Box } from '@mantine/core'
import MessageBubble from './MessageBubble'
import MessageInput from './MessageInput'
import { useConversations } from './ConversationContext'

export default function ChatArea() {
  const { selected } = useConversations()

  if (!selected) return null

  return (
    <Card withBorder p={0} h="100%">
      <Box>
        <Group justify="space-between">
          <Group>
            <Avatar src={selected.avatar} />
            <div>
              <Text fw={600}>{selected.name}</Text>
              <Text size="xs" c="dimmed">
                Active now • Interested in "{selected.listingTitle}"
              </Text>
            </div>
          </Group>

          <Button variant="light">Schedule Viewing</Button>
        </Group>
      </Box>

      <Stack p="md" style={{ flex: 1, overflowY: 'auto' }}>
        {selected.messages.map((m: any, i: number) => (
          <MessageBubble
            key={i}
            incoming={m.sender === 'client'}
            text={m.text}
            time={new Date(m.createdAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          />
        ))}
      </Stack>

      <MessageInput />
    </Card>
  )
}
