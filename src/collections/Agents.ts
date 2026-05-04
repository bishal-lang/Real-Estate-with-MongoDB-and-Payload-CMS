import type { CollectionConfig } from 'payload'

export const Agents: CollectionConfig = {
  slug: 'agents',
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'agency',
      type: 'relationship',
      relationTo: 'agencies',
    },
    { name: 'licenseNo', type: 'text' },
    { name: 'specializations', type: 'text', hasMany: true },
    { name: 'districts', type: 'text', hasMany: true },
    { name: 'commissionRate', type: 'number' },
    { name: 'verified', type: 'checkbox' },
  ],
}
