import { Card, Title, Text, Button, Stack } from '@mantine/core'

export default function MediaUpload() {
  return (
    <Card withBorder shadow="sm" radius="md" mb="xl">
      <Title order={4} mb="md">
        Media Assets
      </Title>

      <Stack align="center" justify="center" py="xl">
        <Text fw={500}>Drag & drop files</Text>
        <Text size="sm" c="dimmed">
          JPEG, PNG, Videos (max 100MB)
        </Text>

        <Button>Select Files</Button>
      </Stack>
    </Card>
  )
}
