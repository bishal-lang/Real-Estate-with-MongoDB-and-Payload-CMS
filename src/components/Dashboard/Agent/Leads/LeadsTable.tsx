'use client'

import { useEffect, useState } from 'react'
import {
  Card,
  Table,
  Group,
  Avatar,
  Text,
  Badge,
  Progress,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from '@mantine/core'

type Lead = {
  id: string
  buyerName: string
  location: string
  status: 'active' | 'pending' | 'closed'
  budget: number
  score: number
}

export default function LeadsTable() {
  const [data, setData] = useState<Lead[]>([])

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const agentRes = await fetch('/api/agents/me')
        if (!agentRes.ok) return

        const agent = await agentRes.json()

        const url = new URL('/api/leads', window.location.origin)
        url.searchParams.set('depth', '1')
        url.searchParams.set('where[agent][equals]', agent.id)

        const res = await fetch(url.toString())
        if (!res.ok) return

        const result = await res.json()

        const mapped: Lead[] = result.docs.map((item: any) => {
          const loc = item.location

          const location = loc
            ? [
                loc.tole,
                loc.ward ? `Ward ${loc.ward}` : null,
                loc.municipality,
                loc.district,
                loc.province,
              ]
                .filter(Boolean)
                .join(', ')
            : 'Unknown location'

          return {
            id: item.id,
            buyerName: item.buyerName || 'Unnamed Buyer',
            location,
            status: item.status || 'pending',
            budget: item.budget || 0,
            score: item.score || 50,
          }
        })

        setData(mapped)
      } catch (err) {
        console.error('❌ Failed to fetch leads', err)
      }
    }

    fetchLeads()
  }, [])

  return (
    <Card withBorder>
      <Table highlightOnHover>
        <TableThead>
          <TableTr>
            <TableTh>Buyer</TableTh>
            <TableTh>Status</TableTh>
            <TableTh>Budget</TableTh>
            <TableTh>Score</TableTh>
          </TableTr>
        </TableThead>

        <TableTbody>
          {data.map((item) => (
            <TableTr key={item.id}>
              <TableTd>
                <Group>
                  <Avatar>{item.buyerName?.[0]}</Avatar>

                  <div>
                    <Text fw={600}>{item.buyerName}</Text>

                    <Text size="sm" c="dimmed">
                      {item.location}
                    </Text>
                  </div>
                </Group>
              </TableTd>

              <TableTd>
                <Badge
                  color={
                    item.status === 'active'
                      ? 'green'
                      : item.status === 'pending'
                        ? 'yellow'
                        : 'gray'
                  }
                >
                  {item.status}
                </Badge>
              </TableTd>

              <TableTd>{item.budget ? `$${item.budget.toLocaleString()}` : '—'}</TableTd>

              <TableTd>
                <Progress value={item.score} />
              </TableTd>
            </TableTr>
          ))}
        </TableTbody>
      </Table>
    </Card>
  )
}
