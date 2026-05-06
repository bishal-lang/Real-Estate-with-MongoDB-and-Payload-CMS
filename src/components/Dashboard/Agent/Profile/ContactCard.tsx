'use client'

import { useEffect, useState } from 'react'
import { Box, Card, Group, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import { IconBuilding, IconMail, IconPhone, IconWorld } from '@tabler/icons-react'

export function ContactCard() {
  const [agent, setAgent] = useState<any>(null)

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch('/api/agents/me')
        if (!res.ok) return
        const data = await res.json()
        setAgent(data)
      } catch (e) {
        console.error('❌ contact fetch failed', e)
      }
    }
    run()
  }, [])

  return (
    <Card p="xl" withBorder>
      <Title order={3} mb="md">
        Inquiries
      </Title>

      <Stack>
        <Group>
          <ThemeIcon variant="light">
            <IconMail size={16} />
          </ThemeIcon>
          <Box>
            <Text size="xs" c="dimmed">
              Work Email
            </Text>
            <Text>{agent?.email || '—'}</Text>
          </Box>
        </Group>

        <Group>
          <ThemeIcon variant="light">
            <IconPhone size={16} />
          </ThemeIcon>
          <Box>
            <Text size="xs" c="dimmed">
              Mobile
            </Text>
            <Text>{agent?.phone || '—'}</Text>
          </Box>
        </Group>

        <Group>
          <ThemeIcon variant="light">
            <IconBuilding size={16} />
          </ThemeIcon>
          <Box>
            <Text size="xs" c="dimmed">
              Office
            </Text>
            <Text>{agent?.officeAddress || '—'}</Text>
          </Box>
        </Group>

        <Group>
          <ThemeIcon variant="light">
            <IconWorld size={16} />
          </ThemeIcon>
          <Box>
            <Text size="xs" c="dimmed">
              Website
            </Text>
            <Text>{agent?.website || '—'}</Text>
          </Box>
        </Group>
      </Stack>
    </Card>
  )
}
