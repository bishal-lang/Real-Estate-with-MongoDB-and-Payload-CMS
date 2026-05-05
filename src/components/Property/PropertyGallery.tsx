'use client'

import { Grid, Image, Box, Button, GridCol } from '@mantine/core'

export default function PropertyGallery() {
  return (
    <Grid gap="md" mb="xl">
      <GridCol span={8}>
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBecYvYkH32Smx-45QyoZYqqfXs__4ug4I5cuLPUryW5VV0cEyK6-R6gVKizQkl_24MlXtCUTedxIKq72cKLhgoBoAPvD0bt2nURXJumuXm1jOxuA1WVAC9074Abo8yf0bmqLczV4pKXUW4uXDGuP7RgTV84r015LoQ0nAkvJ2YbvURIlggPLQHwAKYLh4OcK8zuF9A0mB908C74LPzjGopcqkkoeXgrKbGY1m8Iki4_6LKrhcQGwsPy-FjapTgkypN1W8FEeGVna0"
          radius="md"
          h={500}
          fit="cover"
        />
      </GridCol>

      <GridCol span={4}>
        <Grid>
          <GridCol span={12}>
            <Image src="..." radius="md" h={240} fit="cover" />
          </GridCol>

          <GridCol span={12}>
            <Box pos="relative">
              <Image src="..." radius="md" h={240} fit="cover" />
              <Button size="xs" pos="absolute" bottom={10} right={10}>
                View All Photos
              </Button>
            </Box>
          </GridCol>
        </Grid>
      </GridCol>
    </Grid>
  )
}
