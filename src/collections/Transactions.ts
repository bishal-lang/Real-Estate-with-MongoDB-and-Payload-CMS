import type { CollectionConfig } from 'payload'

export const Transactions: CollectionConfig = {
  slug: 'transactions',

  admin: {
    useAsTitle: 'message',
  },

  access: {
    read: ({ req }) => {
      if (!req.user) return false
      return true
    },
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => req.user?.role === 'admin',
  },

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
      defaultValue: () => new Date(),
      admin: {
        readOnly: true,
      },
    },
  ],
}
