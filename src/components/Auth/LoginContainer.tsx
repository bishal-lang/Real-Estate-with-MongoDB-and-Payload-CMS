'use client'

import { Container } from '@mantine/core'
import LoginCard from './LoginCard'

export default function LoginContainer() {
  return (
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
      <LoginCard />
    </Container>
  )
}
