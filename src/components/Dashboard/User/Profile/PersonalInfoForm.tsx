'use client'

import { Card, Title, Grid, TextInput, Textarea, GridCol } from '@mantine/core'

export default function PersonalInfoForm({ user }: { user: any }) {
  return (
    <Card radius="lg" p="xl" withBorder>
      <Title order={3} mb="lg">
        Personal Information
      </Title>

      <Grid>
        <GridCol span={{ base: 12, md: 6 }}>
          <TextInput label="Full Name" defaultValue={user?.name || ''} />
        </GridCol>

        <GridCol span={{ base: 12, md: 6 }}>
          <TextInput label="Email" defaultValue={user?.email || ''} />
        </GridCol>

        <GridCol span={12}>
          <TextInput label="Phone Number" defaultValue={user?.phone || ''} />
        </GridCol>

        <GridCol span={12}>
          <Textarea label="Office Address" minRows={4} defaultValue={user?.address || ''} />
        </GridCol>
      </Grid>
    </Card>
  )
}
