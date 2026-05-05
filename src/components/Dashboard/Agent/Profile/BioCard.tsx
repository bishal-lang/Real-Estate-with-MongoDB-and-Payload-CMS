import { Card, Text, Title } from '@mantine/core'

export function BioCard() {
  return (
    <Card p="xl" withBorder>
      <Title order={3} mb="md">
        Professional Narrative
      </Title>

      <Text c="dimmed">
        With over 15 years of experience in the New York luxury real estate market, Julian Thorne
        has established himself as a preeminent advisor.
      </Text>

      <Text c="dimmed" mt="sm">
        Specializing in Tribeca and Soho, Julian has facilitated over $1.2B in sales.
      </Text>
    </Card>
  )
}
