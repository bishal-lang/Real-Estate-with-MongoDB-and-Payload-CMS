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
  Overlay,
  Box,
} from '@mantine/core'

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Box pos="relative" h={700}>
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="hero"
          h={700}
        />
        <Overlay color="#000" opacity={0.5} />

        <Container
          size="xl"
          pos="absolute"
          top="30%"
          left="50%"
          style={{ transform: 'translateX(-50%)' }}
        >
          <Title c="white" mb="lg">
            Find Your Dream Estate
          </Title>

          <Group bg="white" p="md" style={{ borderRadius: 12 }}>
            <TextInput placeholder="Location" />
            <TextInput placeholder="Price range" />
            <Select placeholder="Type" data={['House', 'Land', 'Apartment']} />
            <Button color="green">Search</Button>
          </Group>
        </Container>
      </Box>

      {/* FEATURED */}
      <Container size="xl" py={80}>
        <Title order={2} mb="xl">
          Featured Listings
        </Title>

        <Grid>
          {[1, 2, 3].map((item) => (
            <Grid.Col key={item} span={{ base: 12, md: 4 }}>
              <Card shadow="sm">
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                    h={220}
                    alt="property"
                  />
                </Card.Section>

                <Text fw={700} mt="md">
                  $2,500,000
                </Text>
                <Text size="sm" c="dimmed">
                  Kathmandu, Nepal
                </Text>

                <Group mt="md">
                  <Text size="sm">4 Beds</Text>
                  <Text size="sm">3 Baths</Text>
                </Group>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* CTA */}
      <Container size="xl" py={80}>
        <Card radius="xl" p={40} style={{ background: '#1c1c1c', color: 'white' }}>
          <Title mb="md">List Your Property</Title>
          <Text mb="lg">Reach thousands of buyers across Nepal.</Text>
          <Button color="green">Get Started</Button>
        </Card>
      </Container>
    </>
  )
}
