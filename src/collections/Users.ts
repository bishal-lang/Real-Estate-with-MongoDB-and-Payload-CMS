import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,

  versions: false,

  access: {
    read: () => true,
  },

  admin: {
    useAsTitle: 'name',
  },

  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },

    {
      name: 'role',
      type: 'select',
      options: ['user', 'agent', 'admin'],
      required: true,
    },

    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'savedListings',
      type: 'relationship',
      relationTo: 'listings',
      hasMany: true,
    },

    { name: 'isPremium', type: 'checkbox', defaultValue: false },

    { name: 'verified', type: 'checkbox', defaultValue: false },
  ],
}
