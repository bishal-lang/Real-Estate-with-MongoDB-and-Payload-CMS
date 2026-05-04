'use client'

import { Title, Text, Stack } from '@mantine/core'
import SearchBar from './SearchBar'

export default function HeroSection() {
  return (
    <Stack mb={80}>
      <Stack maw={600}>
        <Title size={48} fw={700}>
          Discover Exceptional Architectural Estates
        </Title>

        <Text size="lg" c="dimmed">
          Curating the world's most prestigious properties for discerning investors and homeowners.
        </Text>
      </Stack>

      <SearchBar />
    </Stack>
  )
}
