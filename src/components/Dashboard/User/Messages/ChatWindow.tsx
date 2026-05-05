'use client'

import { Flex, Box } from '@mantine/core'
import ChatHeader from './ChatHeader'
import MessageBubble from './MessageBubble'
import MessageInput from './MessageInput'

export default function ChatWindow() {
  return (
    <Flex direction="column" h="100%">
      <ChatHeader />

      {/* Messages */}
      <Box
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: 24,
          background: '#f8f9ff',
        }}
      >
        <MessageBubble
          type="received"
          text="Good morning! I've just received the updated structural reports."
          time="10:14 AM"
        />

        <MessageBubble
          type="sent"
          text="Does this impact the estimated completion timeline?"
          time="10:16 AM"
        />

        <MessageBubble
          type="received"
          text="It should bring it forward by about two weeks."
          time="10:20 AM"
        />
      </Box>

      <MessageInput />
    </Flex>
  )
}
