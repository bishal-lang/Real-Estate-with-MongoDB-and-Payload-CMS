'use client'

import { useEffect, useState } from 'react'
import { Box, Container, Group, Button, Text, Anchor } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type User = {
  role: 'user' | 'agent' | 'admin'
}

export default function AppHeader() {
  const router = useRouter()

  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/users/me', {
          credentials: 'include',
          cache: 'no-store',
        })

        if (!res.ok) {
          setUser(null)
          return
        }

        const data = await res.json()

        setUser(data.user)
      } catch (err) {
        console.error(err)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  const handleLogout = async () => {
    try {
      await fetch('/api/users/logout', {
        method: 'POST',
        credentials: 'include',
      })

      setUser(null)

      router.push('/login')
      router.refresh()
    } catch (err) {
      console.error(err)
    }
  }

  const dashboardHref =
    user?.role === 'agent'
      ? '/dashboard/agent'
      : user?.role === 'admin'
        ? '/admin'
        : '/dashboard/user'

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
                  <Button component={Link} href={dashboardHref} variant="subtle">
                    Dashboard
                  </Button>

                  {user.role === 'user' && (
                    <Button component={Link} href="/agentRegister" color="green">
                      Become an Agent
                    </Button>
                  )}

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
