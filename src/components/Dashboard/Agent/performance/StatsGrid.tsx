'use client'

import { useEffect, useState } from 'react'
import { Card, Grid, Text, Group, GridCol } from '@mantine/core'

export default function StatsGrid() {
  const [stats, setStats] = useState<any[]>([])

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const agentRes = await fetch('/api/agents/me')
        if (!agentRes.ok) return
        const agent = await agentRes.json()

        const listingsUrl = new URL('/api/listings', window.location.origin)
        listingsUrl.searchParams.set('where[agent][equals]', agent.id)

        const leadsUrl = new URL('/api/leads', window.location.origin)
        leadsUrl.searchParams.set('where[agent][equals]', agent.id)

        const [listingsRes, leadsRes] = await Promise.all([
          fetch(listingsUrl.toString()),
          fetch(leadsUrl.toString()),
        ])

        const listings = listingsRes.ok ? await listingsRes.json() : { docs: [] }
        const leads = leadsRes.ok ? await leadsRes.json() : { docs: [] }

        const totalListings = listings.docs.length
        const activeListings = listings.docs.filter((l: any) => !l.closed).length
        const closedDeals = listings.docs.filter((l: any) => l.closed).length

        const totalEarnings = listings.docs.reduce((sum: number, l: any) => sum + (l.price || 0), 0)

        const conversionRate = totalListings
          ? ((closedDeals / totalListings) * 100).toFixed(1)
          : '0'

        setStats([
          { label: 'Total Listings', value: totalListings, change: '—' },
          { label: 'Active Listings', value: activeListings, change: '—' },
          { label: 'Closed Deals', value: closedDeals, change: '—' },
          {
            label: 'Total Earnings',
            value: `$${totalEarnings.toLocaleString()}`,
            change: 'Commission',
          },
          {
            label: 'Conversion Rate',
            value: `${conversionRate}%`,
            change: '—',
          },
        ])
      } catch (err) {
        console.error('❌ stats fetch failed', err)
      }
    }

    fetchStats()
  }, [])

  return (
    <Grid mb="xl">
      {stats.map((stat) => (
        <GridCol key={stat.label} span={{ base: 12, md: 6, lg: 2 }}>
          <Card withBorder radius="md" p="lg">
            <Text size="xs" c="dimmed" tt="uppercase">
              {stat.label}
            </Text>

            <Text fw={700} size="xl" mt="xs">
              {stat.value}
            </Text>

            <Group mt="sm">
              <Text size="xs" c="green" fw={600}>
                {stat.change}
              </Text>
            </Group>
          </Card>
        </GridCol>
      ))}
    </Grid>
  )
}
