'use client'

import { useEffect, useState } from 'react'
import { Group, Title, Text, Button, Badge } from '@mantine/core'
import { IconBolt } from '@tabler/icons-react'

export default function PerformanceHeader() {
  const [agent, setAgent] = useState<any>(null)

  useEffect(() => {
    const fetchAgent = async () => {
      try {
        const res = await fetch('/api/agents/me')
        if (!res.ok) return
        const data = await res.json()
        setAgent(data)
      } catch (err) {
        console.error('❌ agent fetch failed', err)
      }
    }

    fetchAgent()
  }, [])

  const updatedText = agent?.updatedAt
    ? `${Math.floor((Date.now() - new Date(agent.updatedAt).getTime()) / 60000)} minutes ago`
    : '—'

  return (
    <Group justify="space-between" mb="xl">
      <div>
        <Title order={2}>Performance Overview</Title>

        <Group mt={8}>
          <Badge color="green" variant="light">
            RE-LICENSE: {agent?.licenseNumber || '—'}
          </Badge>

          <Text size="sm" c="dimmed">
            Updated {updatedText}
          </Text>
        </Group>
      </div>

      <Group>
        <Button variant="outline">Monthly Report</Button>
        <Button leftSection={<IconBolt size={16} />}>Quick Actions</Button>
      </Group>
    </Group>
  )
}
