'use client'

import { useEffect, useState } from 'react'
import { Badge, Card, Group, Stack, Text, Title } from '@mantine/core'

export function VerificationCard() {
  const [agent, setAgent] = useState<any>(null)

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch('/api/agents/me')
        if (!res.ok) return
        const data = await res.json()
        setAgent(data)
      } catch (e) {
        console.error('verification fetch failed', e)
      }
    }
    run()
  }, [])

  const items = [
    { label: 'Identity Verified', ok: agent?.verified },
    { label: 'License Active', ok: agent?.licenseActive },
  ]

  const updated = agent?.updatedAt ? new Date(agent.updatedAt).toLocaleDateString() : '—'

  return (
    <Card p="xl" bg="dark" c="white">
      <Title order={3} mb="md">
        Verification Status
      </Title>

      <Stack>
        {items.map((item) => (
          <Group key={item.label} justify="space-between">
            <Text size="sm">{item.label}</Text>
            <Badge color={item.ok ? 'green' : 'gray'}>{item.ok ? 'Active' : '—'}</Badge>
          </Group>
        ))}
      </Stack>

      <Text size="xs" mt="lg" opacity={0.6}>
        Last updated: {updated}
      </Text>
    </Card>
  )
}
