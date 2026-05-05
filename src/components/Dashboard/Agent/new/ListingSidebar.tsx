import { Card, Text, Button, Stack, Image, Badge } from '@mantine/core'

export default function ListingSidebar() {
  return (
    <Stack>
      <Card withBorder shadow="sm" radius="md">
        <Text fw={700} mb="md">
          Submit Listing
        </Text>

        <Image src="https://via.placeholder.com/400x300" radius="md" />

        <Badge mt="sm" color="green">
          New Listing
        </Badge>

        <Text fw={600} mt="sm">
          Pending Title...
        </Text>

        <Stack mt="md">
          <Button fullWidth>Create New Listing</Button>
          <Button variant="outline" fullWidth>
            Save Draft
          </Button>
        </Stack>
      </Card>

      <Card withBorder>
        <Text fw={600}>Advisor Tip</Text>
        <Text size="sm" c="dimmed">
          Virtual tours increase engagement by 40%.
        </Text>
      </Card>
    </Stack>
  )
}
