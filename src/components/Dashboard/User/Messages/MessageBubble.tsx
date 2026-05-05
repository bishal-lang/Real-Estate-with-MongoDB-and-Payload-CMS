'use client'

import { Box, Text } from '@mantine/core'

type Props = {
  type: 'sent' | 'received'
  text: string
  time: string
}

export default function MessageBubble({ type, text, time }: Props) {
  const isSent = type === 'sent'

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: isSent ? 'flex-end' : 'flex-start',
        marginBottom: 16,
      }}
    >
      <Box
        p="sm"
        style={{
          maxWidth: '70%',
          background: isSent ? '#000' : '#e5eeff',
          color: isSent ? '#fff' : '#000',
          borderRadius: 12,
        }}
      >
        <Text size="sm">{text}</Text>
        <Text size="xs" mt={4} c={isSent ? 'gray.3' : 'dimmed'}>
          {time}
        </Text>
      </Box>
    </Box>
  )
}
