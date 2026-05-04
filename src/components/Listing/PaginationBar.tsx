'use client'

import { Group, Pagination } from '@mantine/core'

export default function PaginationBar() {
  return (
    <Group justify="center" mt={60}>
      <Pagination total={5} />
    </Group>
  )
}
