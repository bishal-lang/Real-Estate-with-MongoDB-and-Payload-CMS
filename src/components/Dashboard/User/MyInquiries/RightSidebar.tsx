import { Card, Text, Button, Group, Stack, Avatar, Badge } from '@mantine/core'

export default function RightSidebar() {
  return (
    <Stack>
      {/* Concierge */}
      <Card withBorder radius="md" p="lg">
        <Text fw={700} c="blue" size="xs">
          PREMIUM CONCIERGE
        </Text>

        <Text fw={600} mt="xs">
          Your Dedicated Advisor
        </Text>

        <Group mt="md">
          <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNrygBXGoPDgAc6ul4aTAHQot_bLHJqlMaVSf_3wAK_J-Vp3RvglgWsorEN2JCpEbZFCBJ8daoQw3cfhYC8heECgmCboEqG97e9UAxM8t_1x00zlNfzuCn6Xlhnv7NGkLZg09Fk2GE8cYij89-YePGIjg252cZpXR95FOfh2xTI8UZhVf8X06dd9PnVm_ahEumb4VsGWZvg0kv3AIF96GwX5nC6_LAQqYUHYlaFgzQgn_XS1-4SC9KnRLS64gHaBaT13lxyvHSOzQ" />
          <div>
            <Text size="sm" fw={600}>
              Jameson Wu
            </Text>
            <Text size="xs" c="dimmed">
              Global Portfolio Specialist
            </Text>
          </div>
        </Group>

        <Button fullWidth mt="md">
          Contact Concierge
        </Button>
      </Card>

      {/* Market Pulse */}
      <Card withBorder radius="md" p="lg">
        <Text size="xs" c="dimmed">
          MARKET PULSE
        </Text>

        <Text fw={600} mt="xs">
          Mayfair Prices Up 2.4%
        </Text>

        <Text size="sm" c="dimmed">
          Demand for luxury penthouses has increased.
        </Text>
      </Card>
    </Stack>
  )
}
