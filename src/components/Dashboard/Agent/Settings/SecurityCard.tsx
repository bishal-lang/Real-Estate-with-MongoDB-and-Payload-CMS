import {
  Card,
  Grid,
  Text,
  PasswordInput,
  Button,
  Switch,
  Stack,
  Group,
  GridCol,
} from '@mantine/core'

export default function SecurityCard() {
  return (
    <Card withBorder p="lg">
      <Stack gap="lg">
        <div>
          <Text fw={600}>Account Security</Text>
          <Text size="sm" c="dimmed">
            Manage your authentication methods and login credentials.
          </Text>
        </div>

        <Grid>
          <GridCol span={{ base: 12, md: 6 }}>
            <Stack>
              <PasswordInput placeholder="Current Password" />
              <PasswordInput placeholder="New Password" />

              <Button variant="subtle" size="xs">
                Forgotten your password?
              </Button>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Stack>
                <Group justify="space-between">
                  <div>
                    <Text fw={500}>Two-Factor Authentication</Text>
                    <Text size="xs" c="dimmed">
                      Add an extra layer of security
                    </Text>
                  </div>
                  <Switch defaultChecked />
                </Group>

                <Text size="xs" c="green">
                  ✔ Verified via Authenticator App
                </Text>
              </Stack>
            </Card>
          </GridCol>
        </Grid>
      </Stack>
    </Card>
  )
}
