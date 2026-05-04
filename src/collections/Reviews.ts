import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  fields: [
    {
      name: 'agent',
      type: 'relationship',
      relationTo: 'agents',
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
    },
    { name: 'comment', type: 'textarea' },
  ],
}
