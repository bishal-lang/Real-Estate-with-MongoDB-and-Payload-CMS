'use client'

import { Card, Text } from '@mantine/core'

export default function LeadDetailsCard() {
  return (
    <Card withBorder>
      <Text fw={600}>Lead Details</Text>
      <Text size="sm" c="dimmed">
        Select a lead to view details
      </Text>
    </Card>
  )
}
