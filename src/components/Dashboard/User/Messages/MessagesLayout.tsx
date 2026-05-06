import { Flex, Box } from '@mantine/core'
import ConversationList from './ConversationList'
import ChatWindow from './ChatWindow'
import { getConversations } from '@/lib/getConversations'
import { getMessages } from '@/lib/getMessages'

export default async function MessagesLayout({
  searchParams,
}: {
  searchParams: { conversation?: string }
}) {
  const conversationsData = await getConversations()

  const conversations = conversationsData.docs

  const activeId = searchParams.conversation || conversations[0]?.id

  const messagesData = activeId ? await getMessages(activeId) : { docs: [] }

  return (
    <Flex h="calc(100vh - 70px)">
      <Box w={300} style={{ borderRight: '1px solid #e0e0e0' }}>
        <ConversationList conversations={conversations} activeId={activeId} />
      </Box>

      <Box style={{ flex: 1 }}>
        <ChatWindow messages={messagesData.docs} />
      </Box>
    </Flex>
  )
}
