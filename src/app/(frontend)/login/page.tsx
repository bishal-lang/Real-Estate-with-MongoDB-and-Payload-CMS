'use client'

import { Box } from '@mantine/core'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import LoginBackground from '@/components/Auth/LoginBackground'
import LoginOverlay from '@/components/Auth/LoginOverlay'
import LoginContainer from '@/components/Auth/LoginContainer'

export default function LoginPage() {
  return (
    <>
      <Header />

      <Box style={{ position: 'relative', minHeight: '100vh' }}>
        <LoginBackground />
        <LoginOverlay />
        <LoginContainer />
      </Box>

      <Footer />
    </>
  )
}
