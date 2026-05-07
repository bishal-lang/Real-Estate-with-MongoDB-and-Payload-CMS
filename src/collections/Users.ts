import type { CollectionConfig } from 'payload'

type UserType = {
  role: 'user' | 'agent' | 'admin'
}

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    verify: false,
  },

  versions: false,

  access: {
    read: () => true,
    create: () => true,
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
      defaultValue: 'user',
      options: [
        {
          label: 'user',
          value: 'user',
        },
        {
          label: 'agent',
          value: 'agent',
        },
        {
          label: 'admin',
          value: 'admin',
        },
      ],
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
