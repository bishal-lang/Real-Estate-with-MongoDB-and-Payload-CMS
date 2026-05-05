import { Paper, Text, Group } from '@mantine/core'

export default function MessageBubble({
  text,
  time,
  incoming = false,
}: {
  text: string
  time: string
  incoming?: boolean
}) {
  return (
    <Group justify={incoming ? 'flex-start' : 'flex-end'}>
      <Paper
        p="sm"
        radius="md"
        bg={incoming ? 'gray.0' : 'blue.6'}
        c={incoming ? 'dark' : 'white'}
        maw={400}
      >
        <Text size="sm">{text}</Text>
        <Text size="xs" mt={4} c={incoming ? 'dimmed' : 'gray.2'}>
          {time}
        </Text>
      </Paper>
    </Group>
  )
}
