import type { CollectionConfig } from 'payload'

export const Conversations: CollectionConfig = {
  slug: 'conversations',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'participants', type: 'relationship', relationTo: 'users', hasMany: true },
    { name: 'listing', type: 'relationship', relationTo: 'listings' },
  ],
}
