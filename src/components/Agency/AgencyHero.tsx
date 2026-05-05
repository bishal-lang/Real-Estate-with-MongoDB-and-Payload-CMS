'use client'

import { Box, Title, Text } from '@mantine/core'

export default function AgencyHero() {
  return (
    <Box
      h={600}
      style={{
        backgroundImage:
          "linear-gradient(rgba(11,28,48,0.5), rgba(11,28,48,0.5)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Box maw={800}>
        <Title c="white" size={48} mb="md">
          Estate & Equity Global
        </Title>
        <Text c="gray.2" size="lg">
          Redefining luxury real estate through precision and expertise.
        </Text>
      </Box>
    </Box>
  )
}
