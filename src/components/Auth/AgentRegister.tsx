'use client'

import {
  TextInput,
  Button,
  Stack,
  Title,
  Text,
  Group,
  Anchor,
  NumberInput,
  Textarea,
} from '@mantine/core'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AgentRegisterForm() {
  const router = useRouter()

  const [user, setUser] = useState<any>(null)

  const [form, setForm] = useState({
    licenseNo: '',
    districts: '',
    commissionRate: 0,
    position: '',
    bio: '',
    officeAddress: '',
    website: '',
    specializations: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // ✅ Get logged-in user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/users/me')
        if (!res.ok) throw new Error('Not authenticated')

        const data = await res.json()
        setUser(data.user)
      } catch (e) {
        console.error(e)
        router.push('/login')
      }
    }

    fetchUser()
  }, [router])

  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/agents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: user.id,

          licenseNo: form.licenseNo,

          districts: form.districts
            .split(',')
            .map((d) => d.trim())
            .filter(Boolean),

          commissionRate: form.commissionRate,

          position: form.position,
          bio: form.bio,

          officeAddress: form.officeAddress,
          website: form.website,

          // ✅ map to array structure required by Payload
          specializations: form.specializations
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean)
            .map((s) => ({ title: s })),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.errors?.[0]?.message || 'Agent creation failed')
      }

      router.push('/dashboard/agent')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Stack justify="center" style={{ height: '100%' }}>
      <Stack gap={4} mb="xl">
        <Text size="xs" fw={700} c="green" tt="uppercase">
          Agent Registration
        </Text>

        <Title order={2}>Complete Agent Profile</Title>

        <Text c="dimmed">
          You're already registered. Complete your agent profile to start listing properties.
        </Text>
      </Stack>

      <form onSubmit={handleSubmit}>
        <Stack>
          {/* 🔒 user info (read-only context) */}
          <Text size="sm" c="dimmed">
            Logged in as: {user?.email}
          </Text>

          <TextInput
            label="License Number"
            required
            value={form.licenseNo}
            onChange={(e) => handleChange('licenseNo', e.currentTarget.value)}
          />

          <TextInput
            label="Districts (comma separated)"
            placeholder="Kathmandu, Lalitpur"
            value={form.districts}
            onChange={(e) => handleChange('districts', e.currentTarget.value)}
          />

          <NumberInput
            label="Commission Rate (%)"
            value={form.commissionRate}
            onChange={(val) => handleChange('commissionRate', val || 0)}
          />

          <TextInput
            label="Position"
            placeholder="Senior Agent"
            value={form.position}
            onChange={(e) => handleChange('position', e.currentTarget.value)}
          />

          <Textarea
            label="Bio"
            value={form.bio}
            onChange={(e) => handleChange('bio', e.currentTarget.value)}
          />

          <TextInput
            label="Office Address"
            value={form.officeAddress}
            onChange={(e) => handleChange('officeAddress', e.currentTarget.value)}
          />

          <TextInput
            label="Website"
            value={form.website}
            onChange={(e) => handleChange('website', e.currentTarget.value)}
          />

          <TextInput
            label="Specializations (comma separated)"
            placeholder="Luxury, Commercial, Rentals"
            value={form.specializations}
            onChange={(e) => handleChange('specializations', e.currentTarget.value)}
          />

          {error && <Text c="red">{error}</Text>}

          <Button type="submit" fullWidth loading={loading}>
            Complete Agent Registration
          </Button>
        </Stack>
      </form>

      <Group justify="center" mt="lg">
        <Anchor href="/dashboard">Back to Dashboard</Anchor>
      </Group>
    </Stack>
  )
}
