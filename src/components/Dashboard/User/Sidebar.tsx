'use client'

import { Stack, Text, NavLink, Avatar, Group } from '@mantine/core'
import { IconMessage, IconUser, IconSettings, IconHome, IconInfoSquare } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <Stack h="100%" justify="space-between">
      {/* Top */}
      <div>
        <Text fw={700} size="lg" mb="xs">
          Estate & Equity
        </Text>

        <Stack gap="xs">
          <NavLink
            label="Saved Listings"
            leftSection={<IconHome size={18} />}
            component={Link}
            href="/dashboard/user/saved"
            active={pathname === '/dashboard/user/saved'}
          />

          <NavLink
            label="My Inquiries"
            leftSection={<IconInfoSquare size={18} />}
            component={Link}
            href="/dashboard/user/myinquiries"
            active={pathname === '/dashboard/user/myinquiries'}
          />

          <NavLink
            label="Messages"
            leftSection={<IconMessage size={18} />}
            component={Link}
            href="/dashboard/user/messages"
            active={pathname === '/dashboard/user/messages'}
          />

          <NavLink
            label="Profile"
            leftSection={<IconUser size={18} />}
            component={Link}
            href="/dashboard/user/profile"
            active={pathname === '/dashboard/user/profile'}
          />

          <NavLink
            label="Settings"
            leftSection={<IconSettings size={18} />}
            component={Link}
            href="/dashboard/user/settings"
            active={pathname === '/dashboard/user/settings'}
          />
        </Stack>
      </div>

      {/* Bottom */}
      <Group>
        <Avatar radius="xl" />
        <div>
          <Text size="sm" fw={600}>
            User Name
          </Text>
          <Text size="xs" c="dimmed">
            Member
          </Text>
        </div>
      </Group>
    </Stack>
  )
}
