'use client'

import { Flex, Box } from '@mantine/core'
import ConversationList from './ConversationList'
import ChatWindow from './ChatWindow'

export default function MessagesLayout() {
  return (
    <Flex h="calc(100vh - 70px)">
      {/* Left Pane */}
      <Box w={300} style={{ borderRight: '1px solid #e0e0e0' }}>
        <ConversationList />
      </Box>

      {/* Chat */}
      <Box style={{ flex: 1 }}>
        <ChatWindow />
      </Box>
    </Flex>
  )
}
