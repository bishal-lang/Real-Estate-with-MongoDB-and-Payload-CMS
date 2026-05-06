import type { CollectionConfig } from 'payload'

export const Properties: CollectionConfig = {
  slug: 'properties',

  access: {
    read: () => true,
  },

  admin: {
    useAsTitle: 'title',
  },

  fields: [
    { name: 'owner', type: 'relationship', relationTo: 'users' },
    { name: 'agent', type: 'relationship', relationTo: 'agents' },
    { name: 'location', type: 'relationship', relationTo: 'locations' },

    { name: 'title', type: 'text' },
    { name: 'description', type: 'textarea' },

    {
      name: 'type',
      type: 'select',
      options: ['house', 'land', 'apartment', 'commercial', 'villa'],
    },

    { name: 'area', type: 'number' },

    {
      name: 'areaUnit',
      type: 'select',
      options: ['ropani', 'aana', 'bigha', 'kattha', 'sqft'],
    },

    { name: 'bedrooms', type: 'number' },
    { name: 'bathrooms', type: 'number' },
    { name: 'parking', type: 'number' },

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
