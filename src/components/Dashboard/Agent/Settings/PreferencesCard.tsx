import { Card, Text, Stack, Group, Badge, Select, Button } from '@mantine/core'

export default function PreferencesCard() {
  return (
    <Card withBorder p="lg">
      <Stack gap="lg">
        <div>
          <Text fw={600}>Preference Management</Text>
          <Text size="sm" c="dimmed">
            Define your operational focus areas.
          </Text>
        </div>

        {/* Territories */}
        <div>
          <Text size="xs" fw={600} mb={4}>
            ACTIVE TERRITORIES
          </Text>

          <Group>
            <Badge color="green">Upper East Side</Badge>
            <Badge color="green">Tribeca</Badge>
            <Badge color="green">Chelsea</Badge>

            <Button size="xs" variant="light">
              + Add
            </Button>
          </Group>
        </div>

        {/* Select */}
        <div>
          <Text size="xs" fw={600} mb={4}>
            PROPERTY SPECIALIZATION
          </Text>

          <Select
            data={[
              'Ultra-Luxury Penthouses',
              'Historic Brownstones',
              'Commercial Equity',
              'New Developments',
            ]}
            defaultValue="Ultra-Luxury Penthouses"
          />
        </div>
      </Stack>
    </Card>
  )
}
