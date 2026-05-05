import { Card, TextInput, Select, NumberInput, SegmentedControl, Stack, Title } from '@mantine/core'

export default function BasicDetailsForm() {
  return (
    <Card withBorder shadow="sm" radius="md" mb="xl">
      <Title order={4} mb="md">
        Basic Details
      </Title>

      <Stack>
        <TextInput label="Property Title" placeholder="Glass House Penthouse" />

        <SegmentedControl
          data={[
            { label: 'For Sale', value: 'sale' },
            { label: 'For Rent', value: 'rent' },
          ]}
        />

        <Select label="Property Category" data={['Penthouse', 'Estate', 'Retreat']} />

        <NumberInput label="Price (USD)" placeholder="0.00" leftSection="$" />
      </Stack>
    </Card>
  )
}
