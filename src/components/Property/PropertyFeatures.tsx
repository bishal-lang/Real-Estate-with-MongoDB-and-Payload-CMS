import { Grid, GridCol, Group, Text, ThemeIcon } from '@mantine/core'
import { IconPool, IconCar, IconFlame, IconShield } from '@tabler/icons-react'

const features = [
  { icon: IconPool, label: 'Infinity Pool' },
  { icon: IconCar, label: '8-Car Garage' },
  { icon: IconFlame, label: 'Firepit' },
  { icon: IconShield, label: 'Security' },
]

export default function PropertyFeatures() {
  return (
    <>
      <Text fw={700} size="lg" mb="md">
        Property Features
      </Text>

      <Grid>
        {features.map((f, i) => (
          <GridCol span={4} key={i}>
            <Group>
              <ThemeIcon variant="light">
                <f.icon size={18} />
              </ThemeIcon>
              <Text>{f.label}</Text>
            </Group>
          </GridCol>
        ))}
      </Grid>
    </>
  )
}
