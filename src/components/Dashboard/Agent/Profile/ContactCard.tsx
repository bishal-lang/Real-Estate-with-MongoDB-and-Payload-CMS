import { Box, Card, Group, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import { IconBuilding, IconMail, IconPhone, IconWorld } from '@tabler/icons-react'

export function ContactCard() {
  return (
    <Card p="xl" withBorder>
      <Title order={3} mb="md">
        Inquiries
      </Title>

      <Stack>
        <Group>
          <ThemeIcon variant="light">
            <IconMail size={16} />
          </ThemeIcon>
          <Box>
            <Text size="xs" c="dimmed">
              Work Email
            </Text>
            <Text>j.thorne@estateequity.com</Text>
          </Box>
        </Group>

        <Group>
          <ThemeIcon variant="light">
            <IconPhone size={16} />
          </ThemeIcon>
          <Box>
            <Text size="xs" c="dimmed">
              Mobile
            </Text>
            <Text>+1 (212) 555-0198</Text>
          </Box>
        </Group>

        <Group>
          <ThemeIcon variant="light">
            <IconBuilding size={16} />
          </ThemeIcon>
          <Box>
            <Text size="xs" c="dimmed">
              Office
            </Text>
            <Text>75 Greenwich St, Tribeca</Text>
          </Box>
        </Group>

        <Group>
          <ThemeIcon variant="light">
            <IconWorld size={16} />
          </ThemeIcon>
          <Box>
            <Text size="xs" c="dimmed">
              Website
            </Text>
            <Text>www.julianthorne.nyc</Text>
          </Box>
        </Group>
      </Stack>
    </Card>
  )
}
