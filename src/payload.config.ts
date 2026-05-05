import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Agencies } from './collections/Agencies'
import { Agents } from './collections/Agents'
import { Inquiries } from './collections/Inquiries'
import { Listings } from './collections/Listings'
import { Properties } from './collections/Properties'
import { Reviews } from './collections/Reviews'
import { Transactions } from './collections/Transactions'
import { Locations } from './collections/Locations'
import { Leads } from './collections/Leads'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',

  cors: ['http://localhost:3000', 'http://192.168.1.94:3000', 'http://0.0.0.0:3000'],

  csrf: ['http://localhost:3000', 'http://192.168.1.94:3000', 'http://0.0.0.0:3000'],

  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Agencies,
    Agents,
    Inquiries,
    Listings,
    Locations,
    Properties,
    Reviews,
    Transactions,
    Leads,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET!,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [],
})
