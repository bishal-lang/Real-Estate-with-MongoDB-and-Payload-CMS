'use client'

import { Box, Text } from '@mantine/core'
import { useRouter, useSearchParams } from 'next/navigation'

export default function ConversationItem({
  active,
  conversation,
}: {
  active?: boolean
  conversation: any
}) {
  const router = useRouter()
  const params = useSearchParams()

  const listing = conversation.listing
  const otherUser = conversation.participants?.[0]

  const handleClick = () => {
    const search = new URLSearchParams(params.toString())
    search.set('conversation', conversation.id)
    router.push(`?${search.toString()}`)
  }

  return (
    <Box
      onClick={handleClick}
      p="md"
      style={{
        borderRadius: 8,
        background: active ? '#e5eeff' : 'transparent',
        cursor: 'pointer',
      }}
    >
      <Text fw={600} size="sm">
        {otherUser?.name || 'User'}
      </Text>

      <Text size="xs" fw={700}>
        {listing?.title || 'Listing'}
      </Text>

      <Text size="xs" c="dimmed" lineClamp={1}>
        {conversation?.lastMessage?.text || 'No messages yet'}
      </Text>
    </Box>
  )
}
