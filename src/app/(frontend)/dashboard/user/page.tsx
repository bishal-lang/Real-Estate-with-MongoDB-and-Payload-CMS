'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function UserHome() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/dashboard/user/saved')
  }, [router])

  return null
}
