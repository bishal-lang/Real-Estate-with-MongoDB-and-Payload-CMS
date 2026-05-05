'use client'

import { Stack, Title, Text, Grid, Image, Paper, Button, Group } from '@mantine/core'

export default function PropertyPortfolio() {
  return (
    <Stack>
      <Stack gap={4}>
        <Title order={2}>Property Portfolio</Title>
        <Text c="dimmed">Selected active and notable sold assets.</Text>
      </Stack>

      <Grid>
        {/* MAIN */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Paper shadow="sm">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHrrwuVtOZtPIQSB-0cwGpRVhKUXyqRyEQxchAOUVixyBe__RNXXpDlfYjC1h5z1mzMRMjMLO8cwHjBc91M-4kaxy7TgE-XDGTpMi3OCcZIlYiNLovbLFS8Bel8VzHjCLFZ7pRPetpHbnmVSxJtBEyAS9LEQmlw1QXzrBKy13mEewEiHqz2kgUQ0SMuxbDlX9iNLmrkTaueX3cpzmLJ-TOFc1azH1vWQm8JRgseX9rmJf4izBq9KoyJYpC9a7shlXP8depfE0axhA" />

            <Stack p="md">
              <Title order={3}>Obsidian Penthouse</Title>
              <Text c="dimmed">Bel Air, Los Angeles</Text>
              <Text fw={700}>$24,500,000</Text>
            </Stack>
          </Paper>
        </Grid.Col>

        {/* SIDE */}
        {[1, 2].map((i) => (
          <Grid.Col span={{ base: 12, md: 4 }} key={i}>
            <Paper shadow="sm">
              <Image src="https://via.placeholder.com/400" />
              <Stack p="md">
                <Title order={4}>Listing {i}</Title>
                <Text c="dimmed">Location</Text>
                <Text fw={600}>$X,XXX,XXX</Text>

                <Button variant="outline">View Details</Button>
              </Stack>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  )
}
