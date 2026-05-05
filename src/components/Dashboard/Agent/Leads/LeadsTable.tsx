'use client'

import { Card, Table, Group, Avatar, Text, Badge, Progress } from '@mantine/core'

export default function LeadsTable() {
  const data = [1, 2, 3]

  return (
    <Card withBorder>
      <Table highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Buyer</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Budget</Table.Th>
            <Table.Th>Score</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {data.map((i) => (
            <Table.Tr key={i}>
              <Table.Td>
                <Group>
                  <Avatar>{i}</Avatar>
                  <div>
                    <Text fw={600}>Buyer {i}</Text>
                    <Text size="sm" c="dimmed">
                      Kathmandu
                    </Text>
                  </div>
                </Group>
              </Table.Td>

              <Table.Td>
                <Badge color="green">Active</Badge>
              </Table.Td>

              <Table.Td>$500k</Table.Td>

              <Table.Td>
                <Progress value={70 + i * 5} />
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Card>
  )
}
