'use client'

import { Stack, NavLink, Avatar, Text } from '@mantine/core'
import {
  IconHeart,
  IconHelp,
  IconLogout,
  IconMail,
  IconSettings,
  IconMan,
  IconPlus,
  IconList,
  IconAnalyze,
} from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  const links = [
    { label: 'Listings', icon: IconList, href: '/dashboard/agent/listings' },
    { label: 'Lead Management', icon: IconHeart, href: '/dashboard/agent/leads' },
    { label: 'Performance', icon: IconAnalyze, href: '/dashboard/agent/performance' },
    { label: 'Messages', icon: IconMail, href: '/dashboard/agent/messages' },
    { label: 'Settings', icon: IconSettings, href: '/dashboard/agent/settings' },
    { label: 'Profile', icon: IconMan, href: '/dashboard/agent/profile' },
    { label: 'New Listing', icon: IconPlus, href: '/dashboard/agent/new' },
  ]

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

        {links.map((link) => (
          <NavLink
            key={link.href}
            label={link.label}
            leftSection={<link.icon size={16} />}
            component={Link}
            href={link.href}
            active={pathname === link.href}
          />
        ))}
      </div>

      <Stack>
        <NavLink
          label="Support"
          leftSection={<IconHelp size={16} />}
          component={Link}
          href="/support"
        />

        <NavLink
          label="Sign Out"
          leftSection={<IconLogout size={16} />}
          onClick={() => {
            // TODO: replace with your auth logout
            console.log('logout')
          }}
        />
      </Stack>
    </Stack>
  )
}
