'use client'

import { Box, Overlay, Paper, Title, Text } from '@mantine/core'

export default function MapSection() {
  return (
    <Box pos="relative" h={500}>
      <Box
        component="img"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSkqn3wDdCD00ed5F4azQGEfPnfSU853oocqU_-K5CQsdh_I--ZvQFjooKtHa5e2i-HiVMCfYZVwmeL2wNbUtGqHfGvv_wx9Rd7tKXYOtXjF3xMBdPmQGObsBU8jCFCxuPD0U07lPQjqX0pCrbwjl13ji8XPmiG-8rGJlaVl01xY18kmvlrFqAZDcLe321LWCRnHXOLoLE23daCqZwawLBPyqYAsK2_V-FjR8FzFA840dYtDzQ4WY0liIaHyHNPNQD31ZaNwnuV48"
        alt="Map"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      <Overlay color="#000" opacity={0.2} />

      <Box
        pos="absolute"
        inset={0}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Paper p="xl" shadow="lg" maw={400}>
          <Title order={4}>Our Global Reach</Title>
          <Text c="dimmed">
            Connected to major markets across 4 continents, ensuring access to global opportunities.
          </Text>
        </Paper>
      </Box>
    </Box>
  )
}
