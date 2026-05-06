import {
  Container,
  Title,
  Text,
  Button,
  Grid,
  Card,
  Image,
  Group,
  Stack,
  Box,
  Paper,
  TextInput,
  Select,
  CardSection,
  GridCol,
} from '@mantine/core'

import { getFeaturedListings } from '@/lib/getFeaturedListings'

export default async function HomePage() {
  const data = await getFeaturedListings()

  return (
    <>
      {/* HERO */}
      <Box
        h={700}
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
            url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container size="xl">
          <Stack gap="lg" maw={900}>
            <Title c="white" size={48}>
              Find Your Dream Estate
            </Title>

            <Text c="white" opacity={0.9} maw={600}>
              Discover premium properties across Nepal tailored to your lifestyle.
            </Text>

            <Paper bg="white" p="md" radius="md" shadow="sm" maw={900}>
              <Group align="end" wrap="wrap">
                <TextInput placeholder="Location" style={{ flex: 1 }} />

                <Select
                  placeholder="Price Range"
                  data={[
                    { value: '0-500000', label: 'Under $500K' },
                    { value: '500000-1000000', label: '$500K - $1M' },
                    { value: '1000000+', label: '$1M+' },
                  ]}
                />

                <Select placeholder="Type" data={['Renting', 'Selling']} style={{ flex: 1 }} />

                <Button color="green">Search</Button>
              </Group>
            </Paper>
          </Stack>
        </Container>
      </Box>

      {/* FEATURED LISTINGS */}
      <Container size="xl" py={80}>
        <Title order={2} mb="xl">
          Featured Listings
        </Title>

        <Grid>
          {data?.docs?.map((listing: any) => {
            const property = typeof listing.property === 'object' ? listing.property : null

            const location = property?.location

            const image =
              listing.images?.find((img: any) => img.isPrimary)?.image?.url ||
              listing.images?.[0]?.image?.url ||
              '/placeholder.jpg'

            return (
              <GridCol key={listing.id} span={{ base: 12, md: 4 }}>
                <Card shadow="sm" radius="md" withBorder p={0}>
                  {/* IMAGE */}
                  <CardSection>
                    <Image src={image} h={220} alt={property?.title || 'Property'} fit="cover" />
                  </CardSection>

                  {/* CONTENT */}
                  <Stack p="md" gap={4}>
                    <Text fw={600} size="lg" lineClamp={1}>
                      {property?.title || 'Untitled Property'}
                    </Text>
                    <Text fw={700}>Rs. {listing.price?.toLocaleString() || 'N/A'}</Text>

                    <Text size="sm" c="dimmed">
                      {location
                        ? `${location.district}, ${location.province}`
                        : 'Location not available'}
                    </Text>

                    <Group gap="sm" mt="xs">
                      <Text size="sm">{property?.bedrooms ?? 0} Beds</Text>
                      <Text size="sm">{property?.bathrooms ?? 0} Baths</Text>
                    </Group>
                  </Stack>
                </Card>
              </GridCol>
            )
          })}
        </Grid>
      </Container>

      {/* CTA */}
      <Container size="xl" py={80}>
        <Card radius="xl" p={40} style={{ background: '#1c1c1c', color: 'white' }}>
          <Stack>
            <Title>List Your Property</Title>
            <Text>Reach thousands of buyers across Nepal.</Text>
            <Button color="green" w="fit-content">
              Get Started
            </Button>
          </Stack>
        </Card>
      </Container>
    </>
  )
}
