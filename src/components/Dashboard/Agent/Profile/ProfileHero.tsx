'use client'

import { useEffect, useState } from 'react'
import { Avatar, Box, Button, Flex, Group, Stack, Text, Title, ThemeIcon } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

export function ProfileHero() {
  const [agent, setAgent] = useState<any>(null)

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch('/api/agents/me?depth=1')
        if (!res.ok) return
        const data = await res.json()
        setAgent(data)
      } catch (e) {
        console.error('agent fetch failed', e)
      }
    }
    run()
  }, [])

  const avatar = agent?.avatar?.url || 'https://via.placeholder.com/300x300?text=Avatar'

  return (
    <Flex gap="xl" direction={{ base: 'column', md: 'row' }}>
      <Box pos="relative">
        <Avatar src={avatar} size={180} radius="md" />

        <ThemeIcon color="green" radius="xl" size="lg" pos="absolute" bottom={-10} right={-10}>
          <IconCheck size={18} />
        </ThemeIcon>
      </Box>

      <Stack justify="center">
        <Title order={2}>{agent?.name || '—'}</Title>

        <Group>
          <Text c="dimmed">License #{agent?.licenseNumber || '—'}</Text>
          <Text c="dimmed">{agent?.position || '—'}</Text>
        </Group>

        <Group mt="md">
          <Button>Edit Profile</Button>
          <Button variant="outline">Share Portfolio</Button>
        </Group>
      </Stack>
    </Flex>
  )
}
