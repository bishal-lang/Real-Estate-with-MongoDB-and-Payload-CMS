'use client'

import { Stack, Text, ScrollArea } from '@mantine/core'
import ConversationItem from './ConversationItem'

export default function ConversationList() {
  return (
    <>
      <Text fw={600} p="md">
        Inboxes
      </Text>

      <ScrollArea h="100%">
        <Stack gap="xs" p="sm">
          <ConversationItem active />
          <ConversationItem />
          <ConversationItem />
        </Stack>
      </ScrollArea>
    </>
  )
}
