'use client'

import { Grid, Paper, Stack, Text, Title } from '@mantine/core'

export default function Testimonials() {
  const data = [
    {
      text: 'Marcus handled our estate sale flawlessly.',
      author: 'Julianne V.',
    },
    {
      text: 'Strategic, calm, and incredibly effective.',
      author: 'Robert C.',
    },
    {
      text: 'Unmatched discretion and intelligence.',
      author: 'Evelyn K.',
    },
  ]

  return (
    <Stack>
      <Stack align="center">
        <Title order={2}>Trusted by Clients</Title>
        <Text c="dimmed">What people say</Text>
      </Stack>

      <Grid>
        {data.map((t, i) => (
          <Grid.Col span={{ base: 12, md: 4 }} key={i}>
            <Paper p="lg" shadow="sm">
              <Stack>
                <Text fs="italic">"{t.text}"</Text>
                <Text fw={600}>{t.author}</Text>
              </Stack>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  )
}
