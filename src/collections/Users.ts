import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,

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

    { name: 'verified', type: 'checkbox', defaultValue: false },
  ],
}
