import { Title, Text, Group, Card, Image, SimpleGrid, Badge, CardSection } from '@mantine/core'
import { getSavedListings } from '@/lib/getSavedListings'

export default async function SavedListingsPage() {
  const user = await getSavedListings()

  const listings = user.savedListings || []

  if (!listings.length) {
    return <Text>No saved listings yet.</Text>
  }

  return (
    <>
      <Group justify="space-between" mb="md">
        <div>
          <Title order={2}>Saved Listings</Title>
          <Text c="dimmed">Your curated properties</Text>
        </div>
      </Group>

      <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }}>
        {listings.map((listing: any) => (
          <Card key={listing.id} shadow="sm" radius="lg" withBorder>
            <CardSection>
              <Image src={listing.image?.url || '/fallback.jpg'} height={200} />
            </CardSection>

            <Text fw={600} mt="sm">
              {listing.title}
            </Text>

            <Text size="sm" c="dimmed">
              {listing.location}
            </Text>

            <Group justify="space-between" mt="sm">
              <Text fw={700}>${listing.price?.toLocaleString()}</Text>

              {listing.isNew && <Badge color="green">New</Badge>}
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </>
  )
}
