'use client'

import {
  Stack,
  Title,
  Text,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Anchor,
  Group,
} from '@mantine/core'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.errors?.[0]?.message || 'Login failed')
      }

      // ✅ success
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        {/* Header */}
        <Stack gap={4}>
          <Title order={2}>Client Portal</Title>
          <Text c="dimmed">Secure access to your portfolio and analytics.</Text>
        </Stack>

        {/* Inputs */}
        <TextInput
          label="Email Address"
          placeholder="name@firm.com"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />

        <PasswordInput
          label="Password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />

        <Group justify="space-between">
          <Checkbox label="Remember me" />
          <Anchor size="sm">Forgot password?</Anchor>
        </Group>

        {/* Error */}
        {error && <Text c="red">{error}</Text>}

        {/* Submit */}
        <Button type="submit" fullWidth loading={loading}>
          Login
        </Button>

        {/* Footer */}
        <Text ta="center" size="sm">
          New here? <Anchor href="/register">Register</Anchor>
        </Text>
      </Stack>
    </form>
  )
}
