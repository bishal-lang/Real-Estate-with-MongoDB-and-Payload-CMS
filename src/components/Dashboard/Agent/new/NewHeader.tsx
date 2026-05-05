import { Text, Title, Group, Breadcrumbs, Anchor } from '@mantine/core'

export default function NewHeader() {
  return (
    <>
      <Breadcrumbs mb="xs">
        <Anchor href="#">Listings</Anchor>
        <Text c="green">New Listing</Text>
      </Breadcrumbs>

      <Title order={2}>Create New Listing</Title>
    </>
  )
}
