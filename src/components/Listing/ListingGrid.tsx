'use client'

import { SimpleGrid } from '@mantine/core'
import PropertyCard from './PropertyCard'

export default function ListingsGrid({ listings }: any) {
  return (
    <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg">
      {listings.map((listing: any) => {
        const property = listing.property

        const image =
          property?.images?.find((img: any) => img.isPrimary)?.image?.url ||
          property?.images?.[0]?.image?.url

        return (
          <PropertyCard
            key={listing.id}
            title={property?.title}
            location={property?.location?.district}
            price={`Rs ${listing.price}`}
            beds={property?.bedrooms}
            baths={property?.bathrooms}
            area={property?.area}
            image={image}
            tag={listing.featured ? 'Featured' : undefined}
          />
        )
      })}
    </SimpleGrid>
  )
}
