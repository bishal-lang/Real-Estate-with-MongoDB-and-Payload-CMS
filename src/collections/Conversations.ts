import type { CollectionConfig } from 'payload'

export const Conversations: CollectionConfig = {
  slug: 'conversations',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'participants', type: 'relationship', relationTo: 'users', hasMany: true },
    { name: 'listing', type: 'relationship', relationTo: 'listings' },

    {
      name: 'agent',
      type: 'relationship',
      relationTo: 'agents',
      required: true,
    },

    {
      name: 'client',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },

    {
      name: 'lead',
      type: 'relationship',
      relationTo: 'leads',
    },

    {
      name: 'messages',
      type: 'array',
      fields: [
        {
          name: 'sender',
          type: 'select',
          options: ['agent', 'client'],
          required: true,
        },
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'createdAt',
          type: 'date',
          defaultValue: () => new Date(),
        },
      ],
    },
  ],

  timestamps: true,
}
