import { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'message',
      type: 'textarea',
    },
    {
      name: 'listing',
      type: 'relationship',
      relationTo: 'listings',
    },
  ],
}
