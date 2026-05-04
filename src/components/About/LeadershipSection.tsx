'use client'

import { Card, Container, Grid, Image, Text, Title } from '@mantine/core'

const leaders = [
  { name: 'Marcus Thorne', role: 'CEO' },
  { name: 'Elena Vance', role: 'Portfolio Strategy' },
  { name: 'David Chen', role: 'Investment Director' },
  { name: 'Sofia Rossi', role: 'Design Chief' },
]

export default function LeadershipSection() {
  return (
    <Container size="lg" py={120}>
      <Title mb="lg">Leadership Excellence</Title>

      <Grid>
        {leaders.map((l) => (
          <Grid.Col span={{ base: 12, md: 3 }} key={l.name}>
            <Card>
              <Image src="https://via.placeholder.com/300x400" height={300} alt={l.name} />
              <Title order={4} mt="md">
                {l.name}
              </Title>
              <Text size="sm" c="dimmed">
                {l.role}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}
