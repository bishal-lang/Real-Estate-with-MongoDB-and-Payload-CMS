import { Box, Overlay, Stack, Title, Text } from '@mantine/core'

export default function RegisterHero() {
  return (
    <Box
      style={{
        position: 'relative',
        height: '135%',
        backgroundImage:
          'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDjaJF0zK2_pA1dZQL0gHKF3iBCSD209Fk_W8KsUT6w2Qj2jYYXKcRROMSOoilbTgAuULtFr0pHTI-Yi2SVGVreRyEporGl8PFu7_zeSVcxt91WFiqwr-QGKJFAO1YbihXPuASll8jIwd7EN-YhtLGd_70L4SYKhcu6GA1L02KxLhp-hGmfRoRhJ60owDw0yNCQsZEtt7uaPYD983a4WDzW_Bib6qU3LFPc5S3Bubqd2nvhN6v3q_bYRvsgP9sKcupAGJGhn6Xy4Ic)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Overlay color="#000" opacity={0.5} />

      <Stack
        justify="flex-end"
        style={{ height: '100%', padding: 60, position: 'relative', zIndex: 2 }}
      >
        <Title c="white" size="3rem">
          Begin Your Portfolio Legacy.
        </Title>

        <Text c="gray.2" size="lg" maw={500}>
          Join an elite network of investors and property connoisseurs. Gain exclusive access to
          premium opportunities.
        </Text>
      </Stack>
    </Box>
  )
}
