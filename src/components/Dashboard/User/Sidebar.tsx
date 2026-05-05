'use client'

import { Stack, NavLink, Avatar, Text } from '@mantine/core'
import {
  IconHeart,
  IconMessage,
  IconUser,
  IconHelp,
  IconLogout,
  IconMail,
} from '@tabler/icons-react'

export default function Sidebar() {
  return (
    <Stack justify="space-between" h="100%" p="md">
      <div>
        <Stack mb="lg">
          <Avatar size="lg" radius="xl" />
          <div>
            <Text fw={600}>Portfolio</Text>
            <Text size="sm" c="dimmed">
              Premium Member
            </Text>
          </div>
        </Stack>

        <NavLink label="Saved Listings" leftSection={<IconHeart size={16} />} active />
        <NavLink label="My Inquiries" leftSection={<IconMessage size={16} />} />
        <NavLink label="Profile Settings" leftSection={<IconUser size={16} />} />
        <NavLink label="Messages" leftSection={<IconMail size={18} />} />
      </div>

      <Stack>
        <NavLink label="Support" leftSection={<IconHelp size={16} />} />
        <NavLink label="Sign Out" leftSection={<IconLogout size={16} />} />
      </Stack>
    </Stack>
  )
}
