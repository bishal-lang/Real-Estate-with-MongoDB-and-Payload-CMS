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

export default function RegisterForm() {
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
      <form>
        <Stack>
          <TextInput label="Full Name" placeholder="Johnathan Sterling" required />

          <TextInput
            label="Email Address"
            placeholder="sterling@equity.com"
            type="email"
            required
          />

          <TextInput label="Phone Number" placeholder="+1 (555) 000-0000" />

          <PasswordInput label="Password" placeholder="••••••••" required />

          <Checkbox
            label={
              <>
                I agree to the <Anchor href="#">Terms</Anchor> and{' '}
                <Anchor href="#">Privacy Policy</Anchor>
              </>
            }
          />

          <Button fullWidth size="md">
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
