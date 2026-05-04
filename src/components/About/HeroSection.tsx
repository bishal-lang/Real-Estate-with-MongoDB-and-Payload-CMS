'use client'

import { Box, Container, Text, Title } from '@mantine/core'

export default function HeroSection() {
  return (
    <Box
      style={{
        position: 'relative',
        height: 800,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCZifRQqaV61D4QjS0Qfv-YAAgfJmnCLHbp9Bm1BkhSwMRkTbEPODt8l5lscRhSTODdSf36Epau99gipPiv8ROGf_2FpIkzHVWc_E2FJCAiiAoKoQASCeatQgs2GrBpunyMkuCIVb2xzs0cf_JNEGd89UdXRTUfZw_e_2CumHADqnESrGfhfrw9W4o4HZCYN5HAVV1vC1vdDXrkOmevoVXuugC3tcGqR-MDsslOKB9Ihn9_B2vQhM0VuNKeFCLw8wfo5-7q6I9qWg"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.85) grayscale(0.2)',
        }}
      />

      {/* Overlay */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(19,27,46,0.2), rgba(19,27,46,0.6))',
        }}
      />

      <Container size="md" style={{ position: 'relative', textAlign: 'center' }}>
        <Title c="white" order={1} mb="md">
          Defining the Standard of Architectural Excellence
        </Title>
        <Text c="white" opacity={0.9}>
          Since 2004, we have curated the world's most prestigious estates.
        </Text>
      </Container>
    </Box>
  )
}
