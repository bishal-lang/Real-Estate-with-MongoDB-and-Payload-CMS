'use client'

import { Group, Pagination } from '@mantine/core'
import { useRouter, useSearchParams } from 'next/navigation'

type Props = {
  totalPages: number
  page: number
}

export default function PaginationBar({ totalPages, page }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()

  if (totalPages <= 1) return null

  const handleChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', newPage.toString())

    router.push(`?${params.toString()}`)
  }

  return (
    <Group justify="center" mt={20}>
      <Pagination total={totalPages} value={page} onChange={handleChange} />
    </Group>
  )
}
