import { Card, NumberInput, Grid, Checkbox, Title, Stack, GridCol } from '@mantine/core'

export default function FeaturesForm() {
  return (
    <Card withBorder shadow="sm" radius="md" mb="xl">
      <Title order={4} mb="md">
        Amenities & Specs
      </Title>

      <Grid mb="md">
        <GridCol span={4}>
          <NumberInput label="Bedrooms" defaultValue={3} />
        </GridCol>
        <GridCol span={4}>
          <NumberInput label="Bathrooms" defaultValue={2} />
        </GridCol>
        <GridCol span={4}>
          <NumberInput label="Sq Ft" defaultValue={2500} />
        </GridCol>
      </Grid>

      <Stack>
        <Checkbox label="Private Pool" />
        <Checkbox label="Fitness Center" defaultChecked />
        <Checkbox label="Smart Home Tech" defaultChecked />
        <Checkbox label="24/7 Concierge" />
        <Checkbox label="Rooftop Garden" />
        <Checkbox label="Wine Cellar" defaultChecked />
      </Stack>
    </Card>
  )
}
