'use client'

import { Container, Grid, Text, TextInput, Button, Group } from '@mantine/core'

export default function Footer() {
  return (
    <footer style={{ background: '#f8f9fa', borderTop: '1px solid #e9ecef' }}>
      <Container size="xl" py={80}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Text fw={700} mb="md">
              Modern Estate
            </Text>
            <Text size="sm" c="dimmed">
              © 2024 Modern Estate. Architectural excellence in real estate.
            </Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Text fw={600} mb="md">
              Company
            </Text>
            <Text size="sm">Terms</Text>
            <Text size="sm">Privacy</Text>
            <Text size="sm">Careers</Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Text fw={600} mb="md">
              Resources
            </Text>
            <Text size="sm">Properties</Text>
            <Text size="sm">Sell</Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Text fw={600} mb="md">
              Newsletter
            </Text>
            <Group>
              <TextInput placeholder="Email" />
              <Button>Send</Button>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </footer>
  )
}
