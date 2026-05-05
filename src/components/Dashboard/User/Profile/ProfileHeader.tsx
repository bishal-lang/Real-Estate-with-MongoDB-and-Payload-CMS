'use client'

import { Card, Group, Avatar, Title, Badge, Text, Button } from '@mantine/core'

export default function ProfileHeader() {
  return (
    <Card radius="lg" p="xl" withBorder>
      <Group align="flex-end" justify="space-between">
        <Group align="flex-end">
          <Avatar size={140} radius="lg" />

          <div>
            <Group mb={6}>
              <Title order={2}>Marcus Sterling</Title>
              <Badge color="green">PREMIUM MEMBER</Badge>
            </Group>

            <Text c="dimmed">Senior Investment Advisor | London & New York Portfolios</Text>
          </div>
        </Group>

        <Button color="green">Save Profile Changes</Button>
      </Group>
    </Card>
  )
}
