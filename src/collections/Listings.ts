import type { CollectionConfig } from 'payload'

export const Listings: CollectionConfig = {
  slug: 'listings',

  access: {
    read: () => true,
  },

  admin: {
    useAsTitle: 'property',
  },

  fields: [
    {
      name: 'property',
      type: 'relationship',
      relationTo: 'properties',
    },

    {
      name: 'agent',
      type: 'relationship',
      relationTo: 'agents', // your auth collection
      required: true,
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

    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'isPrimary',
          type: 'checkbox',
        },
      ],
    },
  ],
}
