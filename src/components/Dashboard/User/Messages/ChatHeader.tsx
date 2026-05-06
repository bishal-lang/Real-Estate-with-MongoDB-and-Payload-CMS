import { Group, Avatar, Text, ActionIcon } from '@mantine/core'
import { IconPhone, IconVideo } from '@tabler/icons-react'

export default function ChatHeader({
  conversation,
  currentUserId,
}: {
  conversation: any
  currentUserId: string
}) {
  const otherUser = conversation?.participants?.find((user: any) => user.id !== currentUserId)

  const listing = conversation?.listing

  return (
    <Group justify="space-between" p="md" style={{ borderBottom: '1px solid #e0e0e0' }}>
      <Group>
        <Avatar radius="xl" src={otherUser?.avatar?.url} />

        <div>
          <Text fw={600}>{otherUser?.name || 'User'}</Text>

          <Text size="xs" c="dimmed">
            {listing?.title || 'Listing'}
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
