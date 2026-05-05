'use client'

import { Grid, Image, Stack, Text, Title, Badge, Group, Button, Paper } from '@mantine/core'
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react'

export default function AgentHero() {
  return (
    <Grid>
      {/* LEFT */}
      <Grid.Col span={{ base: 12, lg: 5 }}>
        <Stack>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOOCJWYLZFkuNLioxZi9b3X9i3Q1sh42Nw36n4YNrsUTVGuo7cWWdc8UBjT_KnU52ki4Rpfeem-2kqf_OvaG86_aQp8U806do9PnLw-nJFb8qbR8wuFfeZ0QyH0KyfZgh7mYN8sfOS68P5DMaIM-u2eaz2Q-ORmZy6YXXAFoRk1lZozwRBKQGXbku7xwEuzTd8VSiiii4NalHrc_8vj3xqdT2EDbVQkJpHUnYS5_jT0Tmfu_fiTHUGgQV_vhvmwiYZoHyCVSzoksI"
            radius="md"
          />

          <Paper p="lg" shadow="sm">
            <Stack>
              <Title order={4}>Direct Contact</Title>

              <Group>
                <IconMail size={18} />
                <Text size="sm">m.sterling@luxeestate.com</Text>
              </Group>

              <Group>
                <IconPhone size={18} />
                <Text size="sm">+1 (555) 892-4421</Text>
              </Group>

              <Group>
                <IconMapPin size={18} />
                <Text size="sm">Beverly Hills Office</Text>
              </Group>

              <Button fullWidth mt="sm">
                Schedule Consultation
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Grid.Col>

      {/* RIGHT */}
      <Grid.Col span={{ base: 12, lg: 7 }}>
        <Stack>
          <Badge color="green">Senior Partner</Badge>

          <Title order={1}>Marcus Sterling</Title>

          <Text fs="italic" c="dimmed">
            "Architecting wealth through strategic property acquisition for two decades."
          </Text>

          <Text>
            With over 20 years of experience in luxury real estate, Marcus has built a reputation
            for precision, integrity, and deep market insight.
          </Text>

          <Grid mt="lg">
            {[
              ['$1.2B+', 'Lifetime Sales'],
              ['240+', 'Properties Sold'],
              ['18', 'Awards'],
              ['98%', 'Retention'],
            ].map(([value, label]) => (
              <Grid.Col span={3} key={label}>
                <Stack gap={0}>
                  <Title order={3}>{value}</Title>
                  <Text size="xs" c="dimmed">
                    {label}
                  </Text>
                </Stack>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Grid.Col>
    </Grid>
  )
}
