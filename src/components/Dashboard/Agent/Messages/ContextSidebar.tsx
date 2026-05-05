import { Card, Text, Stack, Image, Badge } from '@mantine/core'

export default function ContextSidebar() {
  return (
    <>
      <Text fw={600}>Contextual Listing</Text>
      <br></br>
      <Stack>
        <Card withBorder>
          <Image src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" height={140} />
          <Stack mt="sm">
            <Text fw={600}>The Glass Pavilion</Text>
            <Text size="sm" c="dimmed">
              Aspen, Colorado • $12.5M
            </Text>
            <Badge color="green">Active Listing</Badge>
          </Stack>
        </Card>

        <Card withBorder>
          <Text fw={600} mb="sm">
            Lead Info
          </Text>
          <Stack gap="xs">
            <Text size="sm">Status: Highly Engaged</Text>
            <Text size="sm">Source: Direct Inquiry</Text>
          </Stack>
        </Card>
      </Stack>
    </>
  )
}
