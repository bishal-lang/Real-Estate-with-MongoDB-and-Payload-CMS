'use client'

import {
  Container,
  Title,
  Text,
  Button,
  Grid,
  Card,
  Image,
  Group,
  TextInput,
  Select,
  Stack,
  Box,
  Paper,
} from '@mantine/core'

export default function HomePage() {
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
              Discover premium properties across Nepal tailored to your lifestyle and investment
              goals.
            </Text>

            {/* SEARCH BAR */}
            <Paper
              bg="white"
              p="md"
              radius="md"
              shadow="sm"
              style={{ width: '100%', maxWidth: 900 }}
            >
              <Group align="end" wrap="wrap">
                <TextInput placeholder="Location" style={{ flex: 1, minWidth: 150 }} />

                {/* <TextInput placeholder="Price range" style={{ flex: 1, minWidth: 150 }} /> */}

                <Select
                  placeholder="Price Range"
                  data={[
                    { value: '0-500000', label: 'Under $500K' },
                    { value: '500000-1000000', label: '$500K - $1M' },
                    { value: '1000000+', label: '$1M+' },
                  ]}
                />

                <Select
                  placeholder="Type"
                  data={['Renting', 'Selling']}
                  style={{ flex: 1, minWidth: 150 }}
                />

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
          {[1, 2, 3].map((item) => (
            <Grid.Col key={item} span={{ base: 12, md: 4 }}>
              <Card shadow="sm" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                    h={220}
                    alt="property"
                  />
                </Card.Section>

                <Stack mt="md" gap={4}>
                  <Text fw={700}>$2,500,000</Text>

                  <Text size="sm" c="dimmed">
                    Kathmandu, Nepal
                  </Text>

                  <Group gap="sm" mt="xs">
                    <Text size="sm">4 Beds</Text>
                    <Text size="sm">3 Baths</Text>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* CTA */}
      <Container size="xl" py={80}>
        <Card
          radius="xl"
          p={40}
          style={{
            background: '#1c1c1c',
            color: 'white',
          }}
        >
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
