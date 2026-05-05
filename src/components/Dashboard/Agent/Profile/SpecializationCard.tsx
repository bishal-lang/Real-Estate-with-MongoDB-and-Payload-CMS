import { Card, Grid, GridCol, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import { IconBuilding } from '@tabler/icons-react'

const data = [
  {
    title: 'Luxury Residential',
    desc: 'Penthouse acquisitions and brownstone restorations.',
  },
  {
    title: 'Tribeca Specialist',
    desc: 'Deep local expertise in high-value districts.',
  },
  {
    title: 'Portfolio Strategy',
    desc: 'Asset planning & appreciation.',
  },
  {
    title: 'Institutional Liaison',
    desc: 'Connecting funds with real estate.',
  },
]

export function SpecializationsCard() {
  return (
    <Card p="xl" withBorder>
      <Title order={3} mb="lg">
        Core Specializations
      </Title>

      <Grid>
        {data.map((item) => (
          <GridCol key={item.title} span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Stack gap="xs">
                <ThemeIcon variant="light">
                  <IconBuilding size={18} />
                </ThemeIcon>

                <Text fw={600}>{item.title}</Text>

                <Text size="sm" c="dimmed">
                  {item.desc}
                </Text>
              </Stack>
            </Card>
          </GridCol>
        ))}
      </Grid>
    </Card>
  )
}
