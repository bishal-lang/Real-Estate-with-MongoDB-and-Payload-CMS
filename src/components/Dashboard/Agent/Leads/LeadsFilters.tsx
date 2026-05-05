'use client'

import { Card, Group, Select, Button } from '@mantine/core'

export default function LeadsFilters() {
  return (
    <Card withBorder>
      <Group justify="space-between" wrap="wrap">
        <Group>
          <Select label="Status" data={['All', 'Active', 'Closed']} />
          <Select label="District" data={['All', 'Kathmandu', 'Lalitpur']} />
          <Select label="Score" data={['High', 'Medium', 'Low']} />
        </Group>

        <Group>
          <Button variant="outline">Export</Button>
          <Button>Assign</Button>
        </Group>
      </Group>
    </Card>
  )
}
