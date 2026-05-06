'use client'

import { useEffect, useState } from 'react'
import { Card, Text, Title } from '@mantine/core'

export function BioCard() {
  const [bio, setBio] = useState<string>('')

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch('/api/agents/me')
        if (!res.ok) return
        const data = await res.json()
        setBio(data?.bio || '')
      } catch (e) {
        console.error('bio fetch failed', e)
      }
    }
    run()
  }, [])

  return (
    <Card p="xl" withBorder>
      <Title order={3} mb="md">
        Professional Narrative
      </Title>

      <Text c="dimmed">{bio || '—'}</Text>
    </Card>
  )
}
