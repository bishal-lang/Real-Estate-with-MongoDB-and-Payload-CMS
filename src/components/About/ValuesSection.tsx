'use client'

import { Card, Container, Grid, Text, Title } from '@mantine/core'

export default function ValuesSection() {
  const values = [
    {
      title: 'Architectural Integrity',
      desc: 'We celebrate timeless craftsmanship.',
    },
    {
      title: 'Investment Precision',
      desc: 'Data-driven insights ensure smart decisions.',
    },
    {
      title: 'Global Perspective',
      desc: 'Access to international opportunities.',
    },
  ]

  return (
    <Container size="lg" py={120}>
      <Title ta="center" mb={50}>
        Our Core Values
      </Title>

      <Grid>
        {values.map((v) => (
          <Grid.Col span={{ base: 12, md: 4 }} key={v.title}>
            <Card shadow="md" p="xl" radius="md">
              <Title order={3} mb="sm">
                {v.title}
              </Title>
              <Text c="dimmed">{v.desc}</Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}
