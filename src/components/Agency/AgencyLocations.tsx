'use client'

import { Grid, Box, Text, Title } from '@mantine/core'

export default function AgencyLocations() {
  return (
    <Box px="xl" py={100}>
      <Title ta="center" mb="xl">
        Where Design Meets Capital
      </Title>

      <Grid>
        <Grid.Col span={{ base: 12, lg: 4 }}>
          <Text fw={700}>New York HQ</Text>
          <Text c="dimmed" mb="md">
            725 5th Ave, Manhattan
          </Text>

          <Text fw={700}>London Office</Text>
          <Text c="dimmed" mb="md">
            Berkeley Square
          </Text>

          <Text fw={700}>Dubai Office</Text>
          <Text c="dimmed">DIFC, Dubai</Text>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 8 }}>
          <Box h={400} bg="gray.2" />
        </Grid.Col>
      </Grid>
    </Box>
  )
}
