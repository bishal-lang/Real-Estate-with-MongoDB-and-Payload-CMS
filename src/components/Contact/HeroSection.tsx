'use client'

import { Box, Container, Title, Text, Overlay } from '@mantine/core'

export default function HeroSection() {
  return (
    <Box pos="relative" h={614}>
      <Box
        component="img"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXnepCKoHhg1EqOy06B581TD33bKJwIZq1jJlrNRW9uB9dX9xDUzb2w58o8A9bq7B9W76w2f5lVzqOXX2DQeENIizUquNAogFM1WvrKNdWeFeoQmogf5_zO4aYOne9s2ffqEnIseCWSZei7DQ2e0XrdtTi8HPRlkp-ovcfSP9-IEYd2LJU0AY83uyio_HUB-Rm4crNYXXG28n232TPsFsmtc_Yb4V9CV22DpZJzYK0Tcb2kJT0t7W1Blg2PxjRIksHil5dYGGSOIU"
        alt="Hero"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <Overlay color="#000" opacity={0.4} zIndex={1} />

      <Container
        size="md"
        style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: 180 }}
      >
        <Title order={1} c="white" mb="md">
          Get in Touch with Our Experts
        </Title>

        <Text c="gray.2" size="lg">
          Bespoke investment strategies and premium real estate opportunities tailored to your
          portfolio's growth.
        </Text>
      </Container>
    </Box>
  )
}
