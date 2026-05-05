import { Card, Grid, Text, Group, GridCol } from '@mantine/core'

const stats = [
  { label: 'Total Listings', value: '24', change: '+12%' },
  { label: 'Active Listings', value: '09', change: 'Stable' },
  { label: 'Closed Deals', value: '15', change: '+4' },
  { label: 'Total Earnings', value: '$412.5k', change: 'Commission' },
  { label: 'Conversion Rate', value: '6.8%', change: 'Top 5%' },
]

export default function StatsGrid() {
  return (
    <Grid mb="xl">
      {stats.map((stat) => (
        <GridCol key={stat.label} span={{ base: 12, md: 6, lg: 2 }}>
          <Card withBorder radius="md" p="lg">
            <Text size="xs" c="dimmed" tt="uppercase">
              {stat.label}
            </Text>

            <Text fw={700} size="xl" mt="xs">
              {stat.value}
            </Text>

            <Group mt="sm">
              <Text size="xs" c="green" fw={600}>
                {stat.change}
              </Text>
            </Group>
          </Card>
        </GridCol>
      ))}
    </Grid>
  )
}
