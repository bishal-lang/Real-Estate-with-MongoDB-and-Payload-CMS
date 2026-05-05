import { Grid, Text, Stack, GridCol } from '@mantine/core'

const stats = [
  { label: 'Price', value: '$12,450,000' },
  { label: 'Bedrooms', value: '5' },
  { label: 'Bathrooms', value: '6.5' },
  { label: 'Sq Ft', value: '8,200' },
]

export default function PropertyStats() {
  return (
    <Grid my="xl">
      {stats.map((s) => (
        <GridCol span={3} key={s.label}>
          <Stack align="center" gap={4}>
            <Text size="xs" c="dimmed">
              {s.label}
            </Text>
            <Text fw={700}>{s.value}</Text>
          </Stack>
        </GridCol>
      ))}
    </Grid>
  )
}
