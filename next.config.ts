import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '192.168.1.94:3000', // Your local network IP
    'localhost:3000', // Standard localhost
    '*.ngrok-free.dev', // Wildcard for ngrok (Next.js 14.2+)
    // Or specify exact ngrok URL:
    // 'gaffe-collector-unglazed.ngrok-free.dev',
  ],

  images: {
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Force HMR to use your network IP
      config.devServer = {
        ...config.devServer,
        host: '0.0.0.0',
        allowedHosts: 'all',
        client: {
          webSocketURL: {
            hostname: '192.168.1.94',
            port: 3000,
            protocol: 'ws',
          },
        },
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
