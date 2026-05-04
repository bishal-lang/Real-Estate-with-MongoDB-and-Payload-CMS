import type { CollectionConfig } from 'payload'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',

  fields: [
    {
      name: 'property',
      type: 'relationship',
      relationTo: 'properties',
      required: true,
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'agent',
      type: 'relationship',
      relationTo: 'agents',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'preferredContact',
      type: 'select',
      options: ['call', 'whatsapp', 'email'],
    },
    {
      name: 'status',
      type: 'select',
      options: ['pending', 'replied', 'closed'],
      defaultValue: 'pending',
    },
    {
      name: 'createdAt',
      type: 'date',
    },
  ],
}
