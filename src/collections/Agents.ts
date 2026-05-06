import type { CollectionConfig } from 'payload'

export const Agents: CollectionConfig = {
  slug: 'agents',

  access: {
    read: () => true,
  },

  admin: {
    useAsTitle: 'displayName',
  },

  fields: [
    {
      name: 'displayName',
      type: 'text',
      admin: {
        readOnly: false,
      },
      hooks: {
        beforeChange: [
          async ({ data, req, value }) => {
            if (!data?.user) return value || 'Unknown Agent'

            const user = await req.payload.findByID({
              collection: 'users',
              id: data.user,
            })

            let name = user?.name || user?.email || 'Unknown Agent'

            if (data.agency) {
              const agency = await req.payload.findByID({
                collection: 'agencies',
                id: data.agency,
              })

              if (agency?.name) {
                name += ` (${agency.name})`
              }
            }

            return name
          },
        ],
      },
    },

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
    { name: 'districts', type: 'text', hasMany: true },
    { name: 'commissionRate', type: 'number' },
    { name: 'verified', type: 'checkbox' },
    { name: 'position', type: 'text' },
    {
      name: 'licenseActive',
      type: 'checkbox',
      defaultValue: false,
    },

    {
      name: 'bio',
      type: 'textarea',
    },

    // 🔹 SPECIALIZATIONS (matches your card UI)
    {
      name: 'specializations',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'desc',
          type: 'text',
        },
      ],
    },

    // 🔹 CONTACT INFO
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'officeAddress',
      type: 'text',
    },
    {
      name: 'website',
      type: 'text',
    },
  ],
  timestamps: true,
}
