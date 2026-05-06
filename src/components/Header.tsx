'use client'

import { useEffect, useState } from 'react'
import { Box, Container, Group, Button, Text, Anchor } from '@mantine/core'
import Link from 'next/link'

export default function AppHeader() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/users/me', {
          credentials: 'include',
        })

        if (res.ok) {
          const data = await res.json()
          setUser(data.user)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  const handleLogout = async () => {
    await fetch('/api/users/logout', {
      method: 'POST',
      credentials: 'include',
    })

    window.location.reload()
  }

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

          <Group>
            <Anchor component={Link} href="/">
              Home
            </Anchor>
            <Anchor component={Link} href="/listings">
              Listings
            </Anchor>
            <Anchor component={Link} href="/about">
              About Us
            </Anchor>
            <Anchor component={Link} href="/contact">
              Contact Us
            </Anchor>
          </Group>

          <Group>
            {!loading &&
              (user ? (
                <>
                  <Button component={Link} href="/dashboard" variant="subtle">
                    Dashboard
                  </Button>

                  <Button component={Link} href="/agentRegister" color="green">
                    Become an Agent
                  </Button>

                  <Button color="red" variant="light" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button component={Link} href="/login" variant="subtle">
                    Login
                  </Button>

                  <Button component={Link} href="/register" color="green">
                    Sign Up
                  </Button>
                </>
              ))}
          </Group>
        </Group>
      </Container>
    </Box>
  )
}
