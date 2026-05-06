'use client'

import { useEffect, useState } from 'react'
import { Card, Text, Group } from '@mantine/core'

export default function VolumeChart() {
  const [data, setData] = useState<number[]>([])

  useEffect(() => {
    const fetchVolume = async () => {
      try {
        const agentRes = await fetch('/api/agents/me')
        if (!agentRes.ok) return
        const agent = await agentRes.json()

        const url = new URL('/api/listings', window.location.origin)
        url.searchParams.set('where[agent][equals]', agent.id)

        const res = await fetch(url.toString())
        if (!res.ok) return

        const result = await res.json()

        // simple mock aggregation → distribute counts
        const counts = new Array(6).fill(0)
        result.docs.forEach((_: any, i: number) => {
          counts[i % 6] += 1
        })

        const max = Math.max(...counts, 1)
        const normalized = counts.map((c) => (c / max) * 100)

        setData(normalized)
      } catch (err) {
        console.error('❌ volume fetch failed', err)
      }
    }

    fetchVolume()
  }, [])

  return (
    <Card withBorder radius="md" mb="lg">
      <Group justify="space-between" mb="md">
        <Text fw={600} size="sm">
          Monthly Volume
        </Text>
        <Text size="xs" c="green">
          Quarterly Forecast
        </Text>
      </Group>

      <Group align="flex-end" gap="xs" h={120}>
        {data.map((value, i) => (
          <div
            key={i}
            style={{
              height: `${value}%`,
              flex: 1,
              background: i === 3 ? '#2f9e44' : '#e9ecef',
              borderRadius: 4,
            }}
          />
        ))}
      </Group>
    </Card>
  )
}
