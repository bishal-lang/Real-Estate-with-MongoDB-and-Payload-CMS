'use client'

import { Box, Container, Grid, Text, Title } from '@mantine/core'

export default function StorySection() {
  return (
    <Box bg="dark" c="white" py={120}>
      <Container size="md">
        <Title ta="center" mb={40}>
          Our Story
        </Title>

        <Text mb="lg" fs="italic">
          "Founded in 2004, Estate & Equity began as a boutique advisory firm..."
        </Text>

        <Text mb="xl">
          Over the past two decades, we have evolved into a global authority for prestigious
          estates.
        </Text>

        <Grid>
          <Grid.Col span={4}>
            <Title>20+</Title>
            <Text size="sm">Years of Excellence</Text>
          </Grid.Col>

          <Grid.Col span={4}>
            <Title>$14B</Title>
            <Text size="sm">Managed Assets</Text>
          </Grid.Col>

          <Grid.Col span={4}>
            <Title>12</Title>
            <Text size="sm">Global Hubs</Text>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  )
}
