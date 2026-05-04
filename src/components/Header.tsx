'use client'

import { Box, Container, Group, Button, Text } from '@mantine/core'
import { Anchor } from '@mantine/core'
import Link from 'next/link'

export default function AppHeader() {
  return (
    <Box
      component="header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'white',
        borderBottom: '1px solid #e9ecef',
      }}
    >
      <Container size="xl" py="md">
        <Group justify="space-between" align="center">
          <Text fw={700} size="lg">
            Modern Estate
          </Text>

          <Group justify="center">
            <Anchor href="/" underline="never">
              Home
            </Anchor>
            <Anchor href="/listings" underline="never">
              Listings
            </Anchor>
            <Anchor href="/about" underline="never">
              About Us
            </Anchor>
            <Anchor href="/contact" underline="never">
              Contact Us
            </Anchor>
          </Group>

          <Group>
            <Button component={Link} href="/login" variant="subtle">
              Login
            </Button>

            <Button component={Link} href="/register" color="green">
              Sign Up
            </Button>
          </Group>
        </Group>
      </Container>
    </Box>
  )
}
