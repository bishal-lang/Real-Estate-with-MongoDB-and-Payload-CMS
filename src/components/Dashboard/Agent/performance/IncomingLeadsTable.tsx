'use client'

import { useEffect, useState } from 'react'
import {
  Card,
  Table,
  Avatar,
  Text,
  Group,
  Badge,
  ActionIcon,
  TableThead,
  TableTr,
  TableTh,
  TableTbody,
  TableTd,
} from '@mantine/core'
import { IconPhone, IconMail, IconCalendar } from '@tabler/icons-react'

export default function IncomingLeadsTable() {
  const [leads, setLeads] = useState<any[]>([])

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

        const mapped = result.docs.map((lead: any) => {
          const loc = lead.location

          const district = loc ? loc.district || loc.municipality || 'Unknown' : 'Unknown'

          return {
            id: lead.id,
            name: lead.buyerName || 'Unnamed',
            type: lead.type || 'Property Inquiry',
            district,
            status: lead.status || 'New',
          }
        })

        setLeads(mapped)
      } catch (err) {
        console.error('❌ leads fetch failed', err)
      }
    }

    fetchLeads()
  }, [])

  return (
    <Card withBorder radius="md">
      <Group justify="space-between" mb="md">
        <Text fw={600}>Incoming Leads</Text>
      </Group>

      <Table highlightOnHover>
        <TableThead>
          <TableTr>
            <TableTh>Client</TableTh>
            <TableTh>District</TableTh>
            <TableTh>Status</TableTh>
            <TableTh></TableTh>
          </TableTr>
        </TableThead>

        <TableTbody>
          {leads.map((lead) => (
            <TableTr key={lead.id}>
              <TableTd>
                <Group>
                  <Avatar radius="xl">{lead.name[0]}</Avatar>
                  <div>
                    <Text fw={500}>{lead.name}</Text>
                    <Text size="xs" c="dimmed">
                      {lead.type}
                    </Text>
                  </div>
                </Group>
              </TableTd>

              <TableTd>{lead.district}</TableTd>

              <TableTd>
                <Badge variant="light">{lead.status}</Badge>
              </TableTd>

              <TableTd>
                <Group gap={4} justify="flex-end">
                  <ActionIcon variant="subtle">
                    <IconPhone size={16} />
                  </ActionIcon>
                  <ActionIcon variant="subtle">
                    <IconMail size={16} />
                  </ActionIcon>
                  <ActionIcon variant="subtle">
                    <IconCalendar size={16} />
                  </ActionIcon>
                </Group>
              </TableTd>
            </TableTr>
          ))}
        </TableTbody>
      </Table>
    </Card>
  )
}
