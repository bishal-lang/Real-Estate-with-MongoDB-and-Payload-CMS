import { Card, Stack, Text, Group, Switch, SegmentedControl } from '@mantine/core'

export default function AccessibilitySettings() {
  return (
    <Card padding="xl" radius="lg">
      <Stack gap="lg">
        <Text fw={600} size="lg">
          Accessibility
        </Text>

        <Stack>
          <Text fw={500}>Font Size</Text>
          <SegmentedControl data={['Small', 'Default', 'Large']} defaultValue="Default" />
        </Stack>

        <Group justify="space-between">
          <Text>High Contrast Mode</Text>
          <Switch />
        </Group>

        <Group justify="space-between">
          <Text>Reduce Motion</Text>
          <Switch defaultChecked />
        </Group>
      </Stack>
    </Card>
  )
}
