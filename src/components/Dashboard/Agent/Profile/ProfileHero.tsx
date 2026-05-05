'use client'

import { Avatar, Box, Button, Flex, Group, Stack, Text, Title, ThemeIcon } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

export function ProfileHero() {
  return (
    <Flex gap="xl" direction={{ base: 'column', md: 'row' }}>
      <Box pos="relative">
        <Avatar
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuyoUgwPk3CSuYhSrPc-QaRehsAugPBEQ-vrQ77KiRxHK0uQH_e3fLmLO4bl3rrOmFGnQZzd_C2MqctCLSGeJcaWgTJtO7A0hiijRQu9zVI3Ls1MTaofvrph6w0MinZYor3Z3nCqfyJ1XSmAzkahcqZnIZlcXpeifjrTH_d-zgM_UOnjQBCaKb4b_TJoJi0EScrPJZkbW9dVjQgDYwhc7lPNayfziPUF7ALiFjGEXC552dd-5vFzg07NqGfo1Pbsn0Dy8__tcjfsQ"
          size={180}
          radius="md"
        />

        <ThemeIcon color="green" radius="xl" size="lg" pos="absolute" bottom={-10} right={-10}>
          <IconCheck size={18} />
        </ThemeIcon>
      </Box>

      <Stack justify="center">
        <Title order={2}>Julian Thorne</Title>

        <Group>
          <Text c="dimmed">License #RE-99284-NY</Text>
          <Text c="dimmed">Senior Partner, Manhattan Division</Text>
        </Group>

        <Group mt="md">
          <Button>Edit Profile</Button>
          <Button variant="outline">Share Portfolio</Button>
        </Group>
      </Stack>
    </Flex>
  )
}
