'use client'

import { SimpleGrid } from '@mantine/core'
import PropertyCard from './PropertyCard'

export default function ListingsGrid() {
  const data = [
    {
      title: 'The Glass Pavilion',
      location: 'Beverly Hills',
      price: '$12,450,000',
      beds: 5,
      baths: 6,
      area: 8200,
      image: 'https://source.unsplash.com/800x600/?villa',
      tag: 'New',
    },
    {
      title: 'Aether Heights',
      location: 'New York',
      price: '$8,900,000',
      beds: 3,
      baths: 4,
      area: 4500,
      image: 'https://source.unsplash.com/800x600/?penthouse',
    },
  ]

  return (
    <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg">
      {data.map((item, i) => (
        <PropertyCard key={i} {...item} />
      ))}
    </SimpleGrid>
  )
}
