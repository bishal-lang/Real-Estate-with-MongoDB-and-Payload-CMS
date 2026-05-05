'use client'

import { Group, TextInput, ActionIcon } from '@mantine/core'
import { IconSend } from '@tabler/icons-react'

export default function MessageInput() {
  return (
    <Group p="md" style={{ borderTop: '1px solid #e0e0e0' }}>
      <TextInput placeholder="Type your message..." style={{ flex: 1 }} />

      <ActionIcon color="dark">
        <IconSend size={18} />
      </ActionIcon>
    </Group>
  )
}
