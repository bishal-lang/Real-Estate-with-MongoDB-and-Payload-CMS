import type { CollectionConfig } from 'payload'

export const Listings: CollectionConfig = {
  slug: 'listings',
  fields: [
    {
      name: 'property',
      type: 'relationship',
      relationTo: 'properties',
    },

    {
      name: 'listingType',
      type: 'select',
      options: ['for_sale', 'for_rent'],
    },

    { name: 'price', type: 'number' },
    { name: 'negotiable', type: 'checkbox' },

    { name: 'featured', type: 'checkbox' },
    { name: 'views', type: 'number', defaultValue: 0 },
  ],
}
