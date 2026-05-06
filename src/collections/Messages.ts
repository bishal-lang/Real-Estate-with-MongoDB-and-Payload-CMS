import { CollectionConfig } from 'payload'

export const Messages: CollectionConfig = {
  slug: 'messages',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'conversation', type: 'relationship', relationTo: 'conversations' },
    { name: 'sender', type: 'relationship', relationTo: 'users' },
    { name: 'text', type: 'text' },
    { name: 'createdAt', type: 'date' },
  ],
}
