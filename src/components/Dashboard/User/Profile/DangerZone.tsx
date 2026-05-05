'use client'

import { Card, Group, Title, Text, Button } from '@mantine/core'

export default function DangerZone() {
  return (
    <Card mt="xl" p="lg" radius="lg" withBorder>
      <Group justify="space-between">
        <div>
          <Title order={4} c="red">
            Deactivate Account
          </Title>
          <Text c="dimmed">
            Once you deactivate your account, all portfolio data will be archived for 30 days.
          </Text>
        </div>

        <Button variant="outline" color="red">
          Deactivate Access
        </Button>
      </Group>
    </Card>
  )
}
