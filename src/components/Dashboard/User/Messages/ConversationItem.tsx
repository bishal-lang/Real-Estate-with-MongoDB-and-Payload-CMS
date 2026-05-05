'use client'

import { Box, Text } from '@mantine/core'

export default function ConversationItem({ active }: { active?: boolean }) {
  return (
    <Box
      p="md"
      style={{
        borderRadius: 8,
        background: active ? '#e5eeff' : 'transparent',
        cursor: 'pointer',
      }}
    >
      <Text fw={600} size="sm">
        Julian Vance
      </Text>

      <Text size="xs" fw={700}>
        The Obsidian Penthouse
      </Text>

      <Text size="xs" c="dimmed" lineClamp={1}>
        I've attached the latest structural reports...
      </Text>
    </Box>
  )
}
