import { Group, Textarea, ActionIcon } from '@mantine/core'
import { IconSend } from '@tabler/icons-react'

export default function MessageInput() {
  return (
    <Group p="md" align="flex-end">
      <Textarea placeholder="Type your message..." autosize minRows={1} style={{ flex: 1 }} />
      <ActionIcon size="lg" variant="filled">
        <IconSend size={18} />
      </ActionIcon>
    </Group>
  )
}
