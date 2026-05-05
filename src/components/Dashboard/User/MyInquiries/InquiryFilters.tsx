import { Group, Button, Card } from '@mantine/core'

export default function InquiryFilters() {
  return (
    <Card withBorder radius="md" p="sm">
      <Group justify="space-between">
        <Group>
          <Button>All</Button>
          <Button variant="light">Pending</Button>
          <Button variant="light">Responded</Button>
          <Button variant="light">Scheduled</Button>
        </Group>

        <Button variant="subtle">Filters</Button>
      </Group>
    </Card>
  )
}
