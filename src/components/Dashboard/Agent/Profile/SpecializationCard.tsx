'use client'

import { useEffect, useState } from 'react'
import { Card, Grid, GridCol, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import { IconBuilding } from '@tabler/icons-react'

export function SpecializationsCard() {
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch('/api/agents/me')
        if (!res.ok) return
        const data = await res.json()
        setItems(data?.specializations || [])
      } catch (e) {
        console.error('specializations fetch failed', e)
      }
    }
    run()
  }, [])

  return (
    <Card p="xl" withBorder>
      <Title order={3} mb="lg">
        Core Specializations
      </Title>

      <Grid>
        {items.map((item: any, i: number) => (
          <GridCol key={i} span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Stack gap="xs">
                <ThemeIcon variant="light">
                  <IconBuilding size={18} />
                </ThemeIcon>

                <Text fw={600}>{item.title || item}</Text>

                {item.desc && (
                  <Text size="sm" c="dimmed">
                    {item.desc}
                  </Text>
                )}
              </Stack>
            </Card>
          </GridCol>
        ))}
      </Grid>
    </Card>
  )
}
