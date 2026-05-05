'use client'

import { Stack, NavLink, Avatar, Text } from '@mantine/core'
import {
  IconHeart,
  IconMessage,
  IconUser,
  IconHelp,
  IconLogout,
  IconMail,
  IconSettings,
  IconMan,
  IconPlus,
  IconList,
  IconAnalyze,
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

        <NavLink label="Lead Management" leftSection={<IconHeart size={16} />} active />
        <NavLink label="Listings" leftSection={<IconList size={16} />} />
        <NavLink label="Performance" leftSection={<IconAnalyze size={16} />} />
        <NavLink label="Messages" leftSection={<IconMail size={18} />} />
        <NavLink label="Settings" leftSection={<IconSettings size={18} />} />
        <NavLink label="Profile" leftSection={<IconMan size={18} />} />
        <NavLink label="New Listing" leftSection={<IconPlus size={18} />} />
      </div>

      <Stack>
        <NavLink label="Support" leftSection={<IconHelp size={16} />} />
        <NavLink label="Sign Out" leftSection={<IconLogout size={16} />} />
      </Stack>
    </Stack>
  )
}
