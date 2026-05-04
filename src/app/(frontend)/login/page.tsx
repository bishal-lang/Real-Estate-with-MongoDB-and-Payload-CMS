'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {
  Box,
  Container,
  Overlay,
  Paper,
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

export default function LoginPage() {
  return (
    <>
      <Header />
      <Box style={{ position: 'relative', minHeight: '100vh' }}>
        {/* Background Image */}
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage:
              'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDAp2RtUuZ_27iGsEk-CgyMZNVAcPUKjCU-MHY6Vfe4GswAiGVvrxVSF8_CbmzMAd5cRR0Dhzo8Cxau65eLpW4azCL6dez7Hs_TAK2jE3O7PGdUZ9gfeEgCanNU790J2tQTK0tYkHNubdmMycMtz0d2oGevA_SF0kmSl-_vwzxiPjZ2NW2oQjvP2fg6hthgv2wsLEfSF0mRLp3DavooSC5iJIuhV4gu9Z-FsEhbyndjsM6R5FrNx_sLdk5D_0flT0YOXyI4AOIIPdY)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(20%) brightness(0.9)',
          }}
        />

        {/* Overlay gradient */}
        <Overlay
          gradient="linear-gradient(135deg, rgba(0,0,0,0.6), rgba(255,255,255,0.2))"
          style={{ zIndex: 1 }}
        />

        {/* Centered Content */}
        <Container
          size="xs"
          style={{
            position: 'relative',
            zIndex: 2,
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Paper
            p="xl"
            radius="md"
            shadow="xl"
            style={{
              width: '100%',
              backdropFilter: 'blur(12px)',
              background: 'rgba(255,255,255,0.9)',
            }}
          >
            <Stack>
              {/* Header */}
              <Stack gap={4}>
                <Title order={2}>Client Portal</Title>
                <Text c="dimmed">Secure access to your portfolio and analytics.</Text>
              </Stack>

              {/* Form */}
              <TextInput label="Email Address" placeholder="name@firm.com" />

              <PasswordInput label="Password" placeholder="••••••••" />

              <Group justify="space-between">
                <Checkbox label="Remember me" />
                <Anchor size="sm">Forgot password?</Anchor>
              </Group>

              <Button fullWidth>Login</Button>

              {/* Footer */}
              <Text ta="center" size="sm">
                New here? <Anchor href="/register">Register</Anchor>
              </Text>
            </Stack>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
