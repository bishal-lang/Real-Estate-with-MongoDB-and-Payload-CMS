import type { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
  slug: 'locations',

  access: {
    read: () => true,
  },

  admin: {
    useAsTitle: 'municipality',
  },

  fields: [
    { name: 'province', type: 'text' },
    { name: 'district', type: 'text' },
    { name: 'municipality', type: 'text' },
    { name: 'ward', type: 'number' },
    { name: 'tole', type: 'text' },

    {
      name: 'coordinates',
      type: 'group',
      fields: [
        { name: 'lat', type: 'number' },
        { name: 'lng', type: 'number' },
      ],
    },
  ],
}
