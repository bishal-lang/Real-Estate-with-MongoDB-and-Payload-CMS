'use client'

import {
  TextInput,
  PasswordInput,
  Button,
  Checkbox,
  Stack,
  Title,
  Text,
  Anchor,
  Group,
} from '@mantine/core'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterForm() {
  const router = useRouter()

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // ✅ CREATE USER (Payload native endpoint)
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email.trim().toLowerCase(),
          password: form.password,
          name: form.name,
          phone: form.phone,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.errors?.[0]?.message || 'Registration failed')
      }

      // ✅ AUTO LOGIN
      const loginRes = await fetch('/api/users/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email.trim().toLowerCase(),
          password: form.password,
        }),
      })

      const loginData = await loginRes.json()

      if (!loginRes.ok) {
        throw new Error(loginData?.errors?.[0]?.message || 'Login failed')
      }

      // ✅ redirect after success
      router.push('/dashboard/user')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Stack justify="center" style={{ height: '100%' }}>
      {/* Header */}
      <Stack gap={4} mb="xl">
        <Text size="xs" fw={700} c="green" tt="uppercase">
          Membership Tier: Private
        </Text>

        <Title order={2}>Create Account</Title>

        <Text c="dimmed">Enter your credentials to access the platform.</Text>
      </Stack>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextInput
            label="Full Name"
            placeholder="Johnathan Sterling"
            required
            value={form.name}
            onChange={(e) => handleChange('name', e.currentTarget.value)}
          />

          <TextInput
            label="Email Address"
            placeholder="sterling@equity.com"
            type="email"
            required
            value={form.email}
            onChange={(e) => handleChange('email', e.currentTarget.value)}
          />

          <TextInput
            label="Phone Number"
            placeholder="+1 (555) 000-0000"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.currentTarget.value)}
          />

          <PasswordInput
            label="Password"
            placeholder="••••••••"
            required
            value={form.password}
            onChange={(e) => handleChange('password', e.currentTarget.value)}
          />

          <Checkbox
            label={
              <>
                I agree to the <Anchor href="#">Terms</Anchor> and{' '}
                <Anchor href="#">Privacy Policy</Anchor>
              </>
            }
          />

          {error && <Text c="red">{error}</Text>}

          <Button fullWidth size="md" type="submit" loading={loading}>
            Register
          </Button>
        </Stack>
      </form>

      {/* Footer */}
      <Group justify="center" mt="lg">
        <Text size="sm" c="dimmed">
          Already have an account?
        </Text>
        <Anchor href="/login">Login</Anchor>
      </Group>
    </Stack>
  )
}
