'use client'

import { Box, Button, Grid, Text, Title, TextInput, Select } from '@mantine/core'

export default function AgencyCTA() {
  return (
    <Box bg="dark" c="white" px="xl" py={100}>
      <Grid>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Title mb="md">Join the Inner Circle.</Title>

          <Text mb="lg" c="gray.4">
            We are always seeking exceptional talent and partners.
          </Text>

          <Button color="green">Inquire Now</Button>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Box bg="dark.6" p="xl">
            <TextInput label="Full Name" mb="md" />
            <TextInput label="Email" mb="md" />

            <Select
              label="Inquiry Type"
              data={['Career Opportunity', 'Investment Partnership', 'Press Inquiry']}
              mb="md"
            />

            <Button fullWidth>Submit</Button>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
