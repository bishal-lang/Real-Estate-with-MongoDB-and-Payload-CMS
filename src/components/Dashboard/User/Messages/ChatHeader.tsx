'use client'

import { Group, Avatar, Text, ActionIcon } from '@mantine/core'
import { IconPhone, IconVideo } from '@tabler/icons-react'

export default function ChatHeader() {
  return (
    <Group justify="space-between" p="md" style={{ borderBottom: '1px solid #e0e0e0' }}>
      <Group>
        <Avatar radius="xl" />
        <div>
          <Text fw={600}>Julian Vance</Text>
          <Text size="xs" c="dimmed">
            The Obsidian Penthouse
          </Text>
        </div>
      </Group>

      <Group>
        <ActionIcon variant="outline">
          <IconVideo size={18} />
        </ActionIcon>
        <ActionIcon variant="outline">
          <IconPhone size={18} />
        </ActionIcon>
      </Group>
    </Group>
  )
}
