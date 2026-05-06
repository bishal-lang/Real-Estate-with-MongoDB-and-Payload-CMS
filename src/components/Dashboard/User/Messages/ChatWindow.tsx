import { Flex, Box } from '@mantine/core'
import ChatHeader from './ChatHeader'
import MessageBubble from './MessageBubble'
import MessageInput from './MessageInput'

export default function ChatWindow({ messages }: { messages: any[] }) {
  return (
    <Flex direction="column" h="100%">
      <ChatHeader conversation={undefined} currentUserId={''} />

      <Box
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: 24,
          background: '#f8f9ff',
        }}
      >
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            type={msg.isMine ? 'sent' : 'received'}
            text={msg.text}
            time={new Date(msg.createdAt).toLocaleTimeString()}
          />
        ))}
      </Box>

      <MessageInput />
    </Flex>
  )
}
