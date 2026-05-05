import { Card, Text, Group } from '@mantine/core'

export default function VolumeChart() {
  const data = [40, 65, 55, 90, 75, 60]

  return (
    <Card withBorder radius="md" mb="lg">
      <Group justify="space-between" mb="md">
        <Text fw={600} size="sm">
          Monthly Volume
        </Text>
        <Text size="xs" c="green">
          Q3 Forecast
        </Text>
      </Group>

      <Group align="flex-end" gap="xs" h={120}>
        {data.map((value, i) => (
          <div
            key={i}
            style={{
              height: `${value}%`,
              flex: 1,
              background: i === 3 ? '#2f9e44' : '#e9ecef',
              borderRadius: 4,
            }}
          />
        ))}
      </Group>
    </Card>
  )
}
