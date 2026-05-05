'use client'

import { Grid, Text, Title, Box, SimpleGrid } from '@mantine/core'

export default function AgencyMission() {
  return (
    <Box px="xl" py={100}>
      <Grid>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Text c="green" fw={700} tt="uppercase" mb="sm">
            Our Mission
          </Text>

          <Title mb="md">Preserving Wealth, Creating Legacies.</Title>

          <Text c="dimmed">
            We combine architectural excellence with financial performance to deliver world-class
            real estate opportunities.
          </Text>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 6 }}>
          <SimpleGrid cols={2}>
            {[
              ['$4.2B+', 'Total Sales Volume'],
              ['25+', 'Years of Excellence'],
              ['12', 'Global Offices'],
              ['150+', 'Expert Partners'],
            ].map(([value, label]) => (
              <Box key={label} p="xl" bg="gray.0" ta="center">
                <Title>{value}</Title>
                <Text size="sm">{label}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
