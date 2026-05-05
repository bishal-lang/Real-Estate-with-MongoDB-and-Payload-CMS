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

const leads = [
  {
    name: 'Eleanor Rigby',
    type: 'Luxury Residential',
    district: 'Upper East Side',
    status: 'New',
  },
  {
    name: 'Marcus Kane',
    type: 'Commercial/Retail',
    district: 'Tribeca',
    status: 'Contacted',
  },
  {
    name: 'Sarah Woods',
    type: 'Modern Penthouse',
    district: 'Chelsea',
    status: 'Scheduled',
  },
]

export default function IncomingLeadsTable() {
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
            <TableTr key={lead.name}>
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
