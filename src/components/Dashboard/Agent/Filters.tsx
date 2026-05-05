'use client'

import { Group, Select, Button, Text } from '@mantine/core'
import { useState } from 'react'

export default function Filters() {
  const [location, setLocation] = useState<string | null>(null)
  const [type, setType] = useState<string | null>(null)
  const [price, setPrice] = useState<string | null>(null)

  const handleApply = () => {
    console.log({ location, type, price })
    // later: hook this to API / state
  }

  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #e9ecef',
        padding: 20,
        borderRadius: 8,
        marginBottom: 40,
      }}
    >
      <Group align="end" justify="space-between" wrap="wrap">
        <Group>
          <Select
            label="Location"
            placeholder="Select location"
            data={['Kathmandu', 'Lalitpur', 'Bhaktapur', 'Pokhara']}
            value={location}
            onChange={setLocation}
            w={200}
          />

          <Select
            label="Listing Type"
            placeholder="Select type"
            data={['Residential', 'Commercial', 'Industrial']}
            value={type}
            onChange={setType}
            w={200}
          />

          <Select
            label="Price Range"
            placeholder="Select range"
            data={['Under $100K', '$100K - $500K', '$500K - $1M', '$1M+']}
            value={price}
            onChange={setPrice}
            w={200}
          />
        </Group>

        <Group>
          <Text size="sm" c="dimmed">
            Showing results
          </Text>

          <Button onClick={handleApply}>Apply Filters</Button>
        </Group>
      </Group>
    </div>
  )
}
