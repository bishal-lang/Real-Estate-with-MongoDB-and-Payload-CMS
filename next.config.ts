import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
      }
    }
    return config
  },
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : undefined,
  devIndicators: {
    position: 'bottom-left',
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['192.168.1.94:3000', 'localhost:3000'],
    },
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
