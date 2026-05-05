'use client'

import { Card, Title, Group, Text, Button, Stack, Switch } from '@mantine/core'
import { IconShieldLock } from '@tabler/icons-react'

export default function SecurityCard() {
  return (
    <Card radius="lg" p="xl" withBorder>
      <Group justify="space-between" mb="md">
        <Title order={4}>Security & Access</Title>
        <IconShieldLock size={20} />
      </Group>

      <Stack>
        <Card withBorder radius="md" p="md">
          <Group justify="space-between">
            <div>
              <Text fw={600}>Password</Text>
              <Text size="xs" c="dimmed">
                Last updated 3 months ago
              </Text>
            </div>
            <Button variant="subtle">Update</Button>
          </Group>
        </Card>

        <Card withBorder radius="md" p="md">
          <Group justify="space-between">
            <div>
              <Text fw={600}>2FA Authentication</Text>
              <Text size="xs" c="dimmed">
                Active via Google Authenticator
              </Text>
            </div>
            <Switch defaultChecked color="green" />
          </Group>
        </Card>
      </Stack>
    </Card>
  )
}
