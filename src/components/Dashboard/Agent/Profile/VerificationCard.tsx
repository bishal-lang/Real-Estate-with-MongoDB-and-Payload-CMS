import { Badge, Card, Group, Stack, Text, Title } from '@mantine/core'

export function VerificationCard() {
  const items = ['Identity Verified', 'License Active', 'Agency Affiliation']

  return (
    <Card p="xl" bg="dark" c="white">
      <Title order={3} mb="md">
        Verification Status
      </Title>

      <Stack>
        {items.map((item) => (
          <Group key={item} justify="space-between">
            <Text size="sm">{item}</Text>
            <Badge color="green">Active</Badge>
          </Group>
        ))}
      </Stack>

      <Text size="xs" mt="lg" opacity={0.6}>
        Last updated: Oct 24, 2023
      </Text>
    </Card>
  )
}
