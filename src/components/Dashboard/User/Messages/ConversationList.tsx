import { Stack, Text, ScrollArea } from '@mantine/core'
import ConversationItem from './ConversationItem'

export default function ConversationList({
  conversations,
  activeId,
}: {
  conversations: any[]
  activeId: string
}) {
  return (
    <>
      <Text fw={600} p="md">
        Inboxes
      </Text>

      <ScrollArea h="100%">
        <Stack gap="xs" p="sm">
          {conversations.map((conv) => (
            <ConversationItem key={conv.id} active={conv.id === activeId} conversation={conv} />
          ))}
        </Stack>
      </ScrollArea>
    </>
  )
}
