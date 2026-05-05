'use client'

import { Card, Title, Grid, TextInput, Textarea, GridCol } from '@mantine/core'

export default function PersonalInfoForm() {
  return (
    <Card radius="lg" p="xl" withBorder>
      <Title order={3} mb="lg">
        Personal Information
      </Title>

      <Grid>
        <GridCol span={{ base: 12, md: 6 }}>
          <TextInput label="Full Name" defaultValue="Marcus Sterling" />
        </GridCol>

        <GridCol span={{ base: 12, md: 6 }}>
          <TextInput label="Email" defaultValue="m.sterling@estate-equity.com" />
        </GridCol>

        <GridCol span={12}>
          <TextInput label="Phone Number" defaultValue="+44 20 7946 0123" />
        </GridCol>

        <GridCol span={12}>
          <Textarea
            label="Office Address"
            minRows={4}
            defaultValue="12 Hay Hill, Mayfair, London W1J 8NR, United Kingdom"
          />
        </GridCol>
      </Grid>
    </Card>
  )
}
