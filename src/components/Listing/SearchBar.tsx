'use client'

import { Paper, Grid, TextInput, Select, Button, Group } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

export default function SearchBar() {
  return (
    <Paper shadow="md" p="md" radius="lg">
      <Grid align="end">
        <Grid.Col span={{ base: 12, md: 3 }}>
          <TextInput label="Location" placeholder="Where to?" />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }}>
          <Select
            label="Listing Type"
            data={[
              { label: 'For Sale', value: 'for_sale' },
              { label: 'For Rent', value: 'for_rent' },
            ]}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }}>
          <TextInput label="Price Range" placeholder="$2M - $10M+" />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }}>
          <Button fullWidth leftSection={<IconSearch size={18} />}>
            Search
          </Button>
        </Grid.Col>
      </Grid>
    </Paper>
  )
}
