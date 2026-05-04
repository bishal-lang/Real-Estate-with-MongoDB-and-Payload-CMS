'use client'

import {
  Container,
  Grid,
  Paper,
  TextInput,
  Textarea,
  Select,
  Button,
  Title,
  Text,
  Stack,
} from '@mantine/core'

export default function ContactFormSection() {
  return (
    <Container size="lg" py={120}>
      <Grid>
        {/* FORM */}
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Paper p="xl" withBorder>
            <Title order={2} mb="lg">
              Send an Inquiry
            </Title>

            <Stack>
              <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <TextInput label="Full Name" placeholder="John Doe" />
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                  <TextInput label="Email Address" placeholder="john@example.com" />
                </Grid.Col>
              </Grid>

              <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <TextInput label="Phone Number" placeholder="+1 (555) 000-0000" />
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Select label="Interest" data={['Investing', 'Buying', 'Selling']} />
                </Grid.Col>
              </Grid>

              <Textarea
                label="Your Message"
                placeholder="Tell us about your requirements..."
                minRows={5}
              />

              <Button fullWidth mt="md">
                Submit Inquiry
              </Button>
            </Stack>
          </Paper>
        </Grid.Col>

        {/* INFO */}
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Stack justify="center" h="100%" pl={{ lg: 'xl' }}>
            <div>
              <Title order={3}>Direct Contact</Title>
              <Text c="dimmed">
                Connect with our dedicated relationship managers for immediate assistance.
              </Text>
            </div>

            <Stack>
              <div>
                <Text size="sm" c="dimmed">
                  Primary Line
                </Text>
                <Title order={4}>+1 (212) 555-8800</Title>
              </div>

              <div>
                <Text size="sm" c="dimmed">
                  General Inquiries
                </Text>
                <Title order={4}>concierge@estate-equity.com</Title>
              </div>
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
