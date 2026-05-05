import { Card, Image, Group, Text, Badge, Button, Stack } from '@mantine/core'

type Props = {
  title: string
  location: string
  status: 'responded' | 'scheduled' | 'pending'
  date: string
  image: string
}

export default function InquiryCard({ title, location, status, date, image }: Props) {
  const statusMap = {
    responded: { color: 'green', label: 'Agent Responded' },
    scheduled: { color: 'yellow', label: 'Tour Scheduled' },
    pending: { color: 'gray', label: 'Pending Review' },
  }

  return (
    <Card withBorder radius="md" p="md">
      <Group align="flex-start">
        <Image src={image} w={160} h={110} radius="md" />

        <Stack style={{ flex: 1 }}>
          <Group justify="space-between">
            <Text fw={600}>{title}</Text>
            <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            📍 {location}
          </Text>

          <Group justify="space-between">
            <Text size="xs" c="dimmed">
              Inquiry Date: {date}
            </Text>

            <Button size="xs">View Conversation</Button>
          </Group>
        </Stack>
      </Group>
    </Card>
  )
}
