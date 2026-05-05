'use client'

import { Card, TextInput, Button, Stack, Title, Select } from '@mantine/core'

export default function ScheduleTourCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md">
      <Title order={4} mb="md">
        Schedule a Tour
      </Title>

      <Stack>
        <TextInput label="Full Name" />
        <TextInput label="Email" />

        <Stack>
          <TextInput type="date" label="Date" />
          <Select label="Time" data={['10:00 AM', '2:00 PM']} />
        </Stack>

        <Button fullWidth>Book Showing</Button>
      </Stack>
    </Card>
  )
}
