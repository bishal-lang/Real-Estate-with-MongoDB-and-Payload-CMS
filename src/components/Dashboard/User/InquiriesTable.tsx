'use client'

import { Table, Title, Button, Badge } from '@mantine/core'

export default function InquiriesTable() {
  return (
    <div>
      <Title order={3} mb="md">
        My Inquiries
      </Title>

      <Table highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Property</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Glass Pavilion</Table.Td>
            <Table.Td>Oct 12</Table.Td>
            <Table.Td>
              <Badge color="green">Responded</Badge>
            </Table.Td>
            <Table.Td>
              <Button size="xs">View</Button>
            </Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Td>Azure Sanctuary</Table.Td>
            <Table.Td>Oct 14</Table.Td>
            <Table.Td>
              <Badge>Pending</Badge>
            </Table.Td>
            <Table.Td>
              <Button size="xs">View</Button>
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </div>
  )
}
