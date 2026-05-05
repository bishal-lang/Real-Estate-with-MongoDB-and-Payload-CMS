import { Card, Stack, Text, Switch, Button, Group } from '@mantine/core'

export default function AccountPrivacy() {
  return (
    <Card padding="xl" radius="lg" withBorder>
      <Stack gap="lg">
        <Group>
          <Text fw={600} size="lg">
            Account Privacy
          </Text>
        </Group>

        <Group justify="space-between" align="flex-start">
          <Stack gap={2}>
            <Text fw={500}>Public Profile Visibility</Text>
            <Text size="sm" c="dimmed">
              Allow other investors to view your activity.
            </Text>
          </Stack>
          <Switch defaultChecked />
        </Group>

        <Group justify="space-between" align="flex-start">
          <Stack gap={2}>
            <Text fw={500}>Anonymous Data Sharing</Text>
            <Text size="sm" c="dimmed">
              Contribute to market reports anonymously.
            </Text>
          </Stack>
          <Switch />
        </Group>

        <Button mt="md">Manage Two-Factor Authentication</Button>
      </Stack>
    </Card>
  )
}
