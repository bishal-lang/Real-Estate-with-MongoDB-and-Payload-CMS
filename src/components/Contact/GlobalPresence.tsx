'use client'

import { Container, Title, Text, Grid, Paper, Stack } from '@mantine/core'

function OfficeCard({ city, address, phone, email }: any) {
  return (
    <Paper p="lg" withBorder>
      <Stack gap="xs">
        <Title order={4}>{city}</Title>

        <Text c="dimmed" size="sm">
          {address}
        </Text>

        <Text size="sm">{phone}</Text>
        <Text size="sm">{email}</Text>
      </Stack>
    </Paper>
  )
}

export default function GlobalPresence() {
  return (
    <Container size="lg" py={120}>
      <Stack align="center" mb="xl">
        <Title order={2}>Global Presence</Title>
        <Text c="dimmed" ta="center" maw={500}>
          Strategic offices located in the world's most influential hubs.
        </Text>
      </Stack>

      <Grid>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <OfficeCard
            city="New York"
            address="450 Park Avenue, NY"
            phone="+1 212 555 1001"
            email="ny@estate-equity.com"
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <OfficeCard
            city="London"
            address="88 St. James's Street"
            phone="+44 20 7946 0001"
            email="london@estate-equity.com"
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <OfficeCard
            city="Singapore"
            address="Marina Bay Financial Centre"
            phone="+65 6555 9001"
            email="sg@estate-equity.com"
          />
        </Grid.Col>
      </Grid>
    </Container>
  )
}
