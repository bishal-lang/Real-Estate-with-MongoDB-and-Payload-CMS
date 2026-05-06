'use client'

import { Overlay } from '@mantine/core'

export default function LoginOverlay() {
  return (
    <Overlay
      gradient="linear-gradient(135deg, rgba(0,0,0,0.6), rgba(255,255,255,0.2))"
      style={{ zIndex: 1 }}
    />
  )
}
