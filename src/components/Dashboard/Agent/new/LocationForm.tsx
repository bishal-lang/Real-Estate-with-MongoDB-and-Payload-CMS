import { Card, TextInput, Grid, Title, GridCol } from '@mantine/core'

export default function LocationForm() {
  return (
    <Card withBorder shadow="sm" radius="md" mb="xl">
      <Title order={4} mb="md">
        Location
      </Title>

      <Grid>
        <GridCol span={12}>
          <TextInput label="Street Address" />
        </GridCol>

        <GridCol span={6}>
          <TextInput label="District" />
        </GridCol>

        <GridCol span={6}>
          <TextInput label="Unit Number" />
        </GridCol>
      </Grid>
    </Card>
  )
}
