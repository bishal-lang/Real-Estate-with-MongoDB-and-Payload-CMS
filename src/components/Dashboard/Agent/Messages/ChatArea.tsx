import { Card, Text, Group, Stack, Avatar, Button, Box } from '@mantine/core'
import MessageBubble from './MessageBubble'
import MessageInput from './MessageInput'

export default function ChatArea() {
  return (
    <Card withBorder p={0} h="100%">
      {/* Header */}
      <Box>
        <Group justify="space-between">
          <Group>
            <Avatar src="https://i.pravatar.cc/100" />
            <div>
              <Text fw={600}>Sarah Mitchell</Text>
              <Text size="xs" c="dimmed">
                Active now • Interested in "The Glass Pavilion"
              </Text>
            </div>
          </Group>

          <Button variant="light">Schedule Viewing</Button>
        </Group>
      </Box>

      {/* Messages */}
      <Stack p="md" style={{ flex: 1, overflowY: 'auto' }}>
        <MessageBubble
          incoming
          text="Good morning! I've been reviewing the details..."
          time="10:30 AM"
        />

        <MessageBubble text="Hello Sarah, absolutely. The property features..." time="10:35 AM" />

        <MessageBubble
          incoming
          text="That sounds impressive. Could we schedule a viewing?"
          time="10:42 AM"
        />
      </Stack>

      {/* Input */}
      <MessageInput />
    </Card>
  )
}
