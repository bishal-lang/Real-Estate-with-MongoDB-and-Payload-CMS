'use client'

import { Card, Group, Avatar, Title, Badge, Text, Button } from '@mantine/core'

export default function ProfileHeader({ user }: { user: any }) {
  return (
    <Card radius="lg" p="xl" withBorder>
      <Group align="flex-end" justify="space-between">
        <Group align="flex-end">
          <Avatar size={140} radius="lg" src={user?.avatar?.url} />

          <div>
            <Group mb={6}>
              <Title order={2}>{user?.name || 'User'}</Title>

              <Badge color="green">{user?.isPremium ? 'PREMIUM MEMBER' : 'MEMBER'}</Badge>
            </Group>

            <Text c="dimmed">{user?.bio || 'No description provided'}</Text>
          </div>
        </Group>

        <Button color="green">Save Profile Changes</Button>
      </Group>
    </Card>
  )
}
