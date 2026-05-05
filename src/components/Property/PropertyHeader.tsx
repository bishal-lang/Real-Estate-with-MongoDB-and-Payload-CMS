import { Title, Text, Group } from '@mantine/core'
import { IconMapPin } from '@tabler/icons-react'

export default function PropertyHeader() {
  return (
    <>
      <Title order={1}>The Glass Pavilion</Title>

      <Group mt="xs" gap="xs">
        <IconMapPin size={18} />
        <Text c="dimmed">1200 Montecito Way, Santa Barbara</Text>
      </Group>
    </>
  )
}
