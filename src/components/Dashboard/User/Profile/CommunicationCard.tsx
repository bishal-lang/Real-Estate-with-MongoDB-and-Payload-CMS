'use client'

import { Card, Title, Stack, Group, Text, Switch, Divider, Select } from '@mantine/core'

export default function CommunicationCard() {
  return (
    <Card radius="lg" p="xl" withBorder>
      <Title order={4} mb="md">
        Communication
      </Title>

      <Stack>
        <Group justify="space-between">
          <div>
            <Text fw={600}>Email Notifications</Text>
            <Text size="xs" c="dimmed">
              Daily summary & market alerts
            </Text>
          </div>
          <Switch defaultChecked color="green" />
        </Group>

        <Group justify="space-between">
          <div>
            <Text fw={600}>SMS Alerts</Text>
            <Text size="xs" c="dimmed">
              High-priority bidding updates
            </Text>
          </div>
          <Switch />
        </Group>

        <Divider />

        <Select
          label="Portal Language"
          defaultValue="en-uk"
          data={[
            { value: 'en-uk', label: 'English (UK)' },
            { value: 'en-us', label: 'English (US)' },
            { value: 'fr', label: 'French (FR)' },
            { value: 'de', label: 'German (DE)' },
            { value: 'cn', label: 'Mandarin (CN)' },
          ]}
        />
      </Stack>
    </Card>
  )
}
