import type { CollectionConfig } from 'payload'

export const Agencies: CollectionConfig = {
  slug: 'agencies',
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'registrationNumber', type: 'text' },
    { name: 'province', type: 'text' },
  ],
}
