// lib/payload.ts
import payload from 'payload'
import config from '@/payload.config'

let cached = (global as any).payload

export const getPayloadClient = async () => {
  if (!cached) {
    cached = await payload.init({
      config,
    })
  }
  return cached
}
