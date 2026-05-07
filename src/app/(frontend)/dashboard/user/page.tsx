'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AgentHome() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/dashboard/user/saved')
  }, [router])

  return null
}
