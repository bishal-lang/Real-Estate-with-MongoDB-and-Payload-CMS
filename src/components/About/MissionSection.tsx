'use client'

import { Container, Grid, Text, Title } from '@mantine/core'

export default function MissionSection() {
  return (
    <Container size="lg" py={120}>
      <Grid align="center">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Text c="green" fw={700} size="xs" tt="uppercase" mb="md">
            Our Mission
          </Text>

          <Title mb="md">High-Stakes Reliability in Discerning Investment</Title>

          <Text c="dimmed" mb="md">
            At Estate & Equity, our mission is to navigate high-value real estate with unmatched
            precision.
          </Text>

          <Text c="dimmed">
            We provide reliability through rigorous market analysis and long-term strategy.
          </Text>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTP2_oXT5IceMPwgBU9rlJLXQr35vbUZG0Rpy2iFWkNjz8wLzLr3Dy8AhS86GHBftibBmnhCramPxWlKGkFeIrXADoasMFp8Wv2iXVOgaBYjEGoTlL-CkIWMgcMQiZa-Ai9sARosFY0ATvrMR7n2ZNyZCAPAUS0I7wi-6545Odf7Jd15xyxPMt-nxlUHv4OPAk7GAOTc33aUau047Y1Prl1AEDn0tjJlQEe2WYqEw1Tr-gQw3SMC4OM2VutRIWlZnNkJ8u5tH2tUU"
            style={{ width: '100%', borderRadius: 12 }}
          />
        </Grid.Col>
      </Grid>
    </Container>
  )
}
