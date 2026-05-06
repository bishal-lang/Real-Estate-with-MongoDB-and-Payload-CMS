'use client'

import { Paper } from '@mantine/core'
import LoginForm from './LoginForm'

export default function LoginCard() {
  return (
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
      <LoginForm />
    </Paper>
  )
}
